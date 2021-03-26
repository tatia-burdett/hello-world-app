import React from 'react'
import './Posts.css'
import PostsContext from '../../PostsContext'

class Posts extends React.Component {
  static contextType = PostsContext

  render() {
    const posted = this.context.posted

    return (
      <div>
        <section className='post-card-grid'>
          {posted.map(post =>
            <div className='post-card' key={post.id}>
              <h3>{post.nickname}</h3>
              <p>{post.location}</p>
              <p className='date-posted'>{post.date_posted}</p>
              <p className='post-content'>{post.content}</p>
            </div>
          )}
        </section>
      </div>
    )
  }
}

export default Posts