import React from 'react'
import './UserPosts.css'

import Posts from './Posts/Posts'

class UserPosts extends React.Component {
  render() {
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