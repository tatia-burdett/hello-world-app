import React from 'react'
import { Link } from 'react-router-dom'
import './Posts.css'
import PostsContext from '../../PostsContext'

class Posts extends React.Component {
  static contextType = PostsContext

  render() {
    console.log('posts render ran')
    const posted = this.context.comment

    if (posted) {
      posted.sort((a, b) => {
        return new Date(b.date_posted) - new Date(a.date_posted)
      })
    }

    return (
      <div>
        <section className='post-card-grid'>
          {posted.map(post =>
            <div className='post-card' key={post.id}>
              <h3>{post.nickname}</h3>
              <p className='post-location'>{post.user_location}</p>
              <p className='date-posted'>{post.date_posted}</p>
              <p className='post-category'>{post.category}</p>
              <p className='post-content'>{post.content}</p>
              <Link to={`/posts/${post.id}`}><button>View Post</button></Link>
            </div>
          )}
        </section>
      </div>
    )
  }
}

export default Posts