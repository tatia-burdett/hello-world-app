import React from 'react'
import './Posts.css'
import PostsContext from '../../PostsContext'

class Posts extends React.Component {
  static contextType = PostsContext

  render() {
    const posted = this.context.posted
    const sortedPosts = posted.slice().sort((a, b) => new Date(b.date_posted) - new Date(a.date_posted)) // Sort posts by most recent date
    // May decide to add some filters... need to store data in state first?
    return (
      <div>
        <section className='post-card-grid'>
          {sortedPosts.map(post =>
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