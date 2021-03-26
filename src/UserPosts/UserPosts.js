import React from 'react'
import './UserPosts.css'

import Posts from './Posts/Posts'

class UserPosts extends React.Component {
  render() {
    return (
      <div>
        <header className='user-post-header'>
          <h1>Hello World</h1>
          <h2>Here is what you have to say...</h2>
        </header>
        <section>
          
        </section>
        <section>
          <Posts />
        </section>
      </div>
    )
  }
}

export default UserPosts