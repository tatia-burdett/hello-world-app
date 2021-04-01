import React from 'react'
import './Posts.css'
import PostsContext from '../../PostsContext'

class Posts extends React.Component {
  static contextType = PostsContext

  render() {
    const filteredComment = this.context.filteredComment
    const comment = this.context.comment
    const posted = filteredComment.length >= 1 ? filteredComment : comment

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
              <p>{post.location}</p>
              <p className='post-location'>{post.user_location}</p>
              <p className='date-posted'>{post.date_posted}</p>
              <p className='post-category'>{post.category}</p>
              <p className='post-content'>{post.content}</p>
            </div>
          )}
        </section>
      </div>
    )
  }
}

export default Posts