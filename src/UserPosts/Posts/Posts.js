import React from 'react'
import './Posts.css'
import PostsContext from '../../PostsContext'

class Posts extends React.Component {
  static contextType = PostsContext

  render() {
    const posted = this.context.posted

    return (
      <div className='post-card-grid'>
        {posted.map(post =>
          <div className='post-card' key={post.id}>
            <h3>{post.nickname}</h3>
            <p></p>
          </div>
        )}
      </div>
    )
  }
}

export default Posts