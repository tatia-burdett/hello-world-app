import React from 'react'
import { Link } from 'react-router-dom'
import './Posts.css'
import PostsContext from '../../PostsContext'
import Moment from 'react-moment'

class Posts extends React.Component {
  static contextType = PostsContext

  render() {
    const commentFiltered = this.context.commentFiltered || [{}]
    const comment = this.context.comment
    const posted = commentFiltered.length > 0 ? commentFiltered : comment

    if (posted) {
      posted.sort((a, b) => {
        return new Date(b.date_posted) - new Date(a.date_posted)
      })
    }

    return (
      <div>
        <section className='post-card-grid'>
          {posted.map(post =>
            <div className='post-card' key={post.id || ''}>
              <h3>{post.nickname}</h3>
              <p className='post-location'>{post.user_location}</p>
              <Moment format='MMM D, YYYY' className='date-posted moment-time'>{post.date_posted}</Moment>
              <p className='post-category'>{post.category}</p>
              <p className='post-content'>{post.content}</p>
              <Link to={`/posts/${post.id}`} className='view-post-link'>View Post</Link>
            </div>
          )}
        </section>
      </div>
    )
  }
}

export default Posts