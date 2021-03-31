import React from 'react';
import {Route} from 'react-router-dom'
import DATA from './data'
import './App.css'
import PostsContext from './PostsContext'
import config from './config'

import NavBar from './NavBar/NavBar'
import LandingPage from './LandingPage/LandingPage'
import UserPosts from './UserPosts/UserPosts'
import PostForm from './PostForm/PostForm'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      comment: [],
      error: null
    }
  }

  addComment = comment => {
    this.setState({
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
        <Route 
          exact
          path='/'
          component={LandingPage}
        />
        <Route 
          path='/posts'
          component={UserPosts}
        />
        <Route 
          path='/add-post'
          component={PostForm}
        />
      </div>
    )
  }

  render() {
    const value = {
      posted: this.state.comment,
      fetchComment: this.fetchComment,
      addComment: this.addComment
    }
    return (
      <PostsContext.Provider value={value}>
        <div>
          <nav>
            <NavBar />
          </nav>
          <main>
            {this.renderRoutes()}
          </main>
        </div>
      </PostsContext.Provider>
    )
  }
}

export default App;