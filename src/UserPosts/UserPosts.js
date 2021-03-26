import React from 'react'
import './UserPosts.css'
import PostsContext from '../PostsContext'

import Posts from './Posts/Posts'

class UserPosts extends React.Component {
  static contextType = PostsContext

  render() {
    console.log(this.context.posted[0].nickname)
    return (
      <div>
        <header>
          <h1>Here's what the world has to say...</h1>
        </header>
        <section>
          <Posts />
        </section>
      </div>
    )
  }
}

export default UserPosts