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
  // TO DO:
  // Hook up API_ENDPOINT, set up state and fetch calls... write filter form and functions... add notecard comment colors... 
  constructor(props) {
    super(props)
    this.state = {
      comment: []
    }
  }

  componentDidMount() {
    this.fetchAllData()
  }

  fetchAllData = () => {
    Promise.all([
      this.fetchComment()
    ])
      .then(([comment]) => {
        console.log(comment)
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
      posted: DATA
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