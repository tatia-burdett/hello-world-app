import React from 'react'
import {Route, Switch} from 'react-router-dom'
import './App.css'
import PostsContext from './PostsContext'
import config from './config'

import NavBar from './NavBar/NavBar'
import LandingPage from './LandingPage/LandingPage'
import UserPosts from './UserPosts/UserPosts'
import PostForm from './PostForm/PostForm'
import SinglePost from './SinglePost/SinglePost'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      comment: [],
      error: null,
      loading: false,
      commentFiltered: []
    }
  }

  handleLoading = () => {
    this.setState({
      loading: true
    })
  }

  filterComments = category => {
    let filtered = this.state.comment
    filtered = filtered.filter(comment => 
       comment.category === category
    )
    this.setState({
      commentFiltered: filtered,
    })
  }

  addComment = comment => {
    this.setState({
      loading: false,
      comment: [...this.state.comment, comment]
    })
  }

  componentDidMount() {
    this.fetchAllData()
  }

  fetchAllData = () => {
    Promise.all([
      this.fetchComment()
    ])
      .then(([comment]) => {
        this.setState({
          comment
        })
      })
      .catch(error => {
        this.setState({error})
      })
  }

  fetchComment = () => {
    return fetch(`${config.API_ENDPOINT}/comment`)
      .then(res => res.json())
  }

  renderRoutes () {
    return (
      <div>
        <Switch>
          <Route 
            exact
            path='/posts'
            component={UserPosts}
          />
          <Route 
            exact
            path='/'
            component={LandingPage}
          />
          <Route 
            path='/posts/:id'
            component={SinglePost}
          />
          <Route 
            path='/add-post'
            component={PostForm}
          />
        </Switch>
      </div>
    )
  }

  render() {
    const value = {
      comment: this.state.comment,
      fetchComment: this.fetchComment,
      addComment: this.addComment,
      filterComments: this.filterComments,
      commentFiltered: this.state.commentFiltered,
      handleLoading: this.handleLoading
    }

    return (
      <PostsContext.Provider value={value}>
        <div>
          <nav>
            <NavBar />
          </nav>
          <main>
            {!this.state.loading ? '' : 'Loading posts...'}
            {this.renderRoutes()}
          </main>
        </div>
      </PostsContext.Provider>
    )
  }
}

export default App;