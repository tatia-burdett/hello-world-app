import React from 'react'
import PostsContext from '../PostsContext'
import './SinglePost.css'
import Moment from 'react-moment'

class SinglePost extends React.Component {
  static defaultProps = {
    history: {
      goBack: () => {}
    },
    match: {
      params: {}
    }
  }

  static contextType = PostsContext

  render() {
    const comment = this.context.comment
    const { id } = this.props.match.params
    const idInt = parseInt(id)

    const singleComment = comment.find(post => post.id === idInt) || {content: ''}

    return (
      <div className='single-post-page'>
        <section className='single-post-container'>
          <h2 className='sinle-nickname'>{singleComment.nickname}</h2>
          <p className='single-location'>{singleComment.user_location}</p>
          <Moment format='MMM D, YYYY' className='moment-time'>{singleComment.date_posted}</Moment>
          <p className='single-category'>{singleComment.category}</p>
          <p className='single-content'>{singleComment.content}</p>
          <button onClick={() => this.props.history.goBack()}>
            Go Back
          </button>
        </section>
      </div>
    )
  }
}

export default SinglePost