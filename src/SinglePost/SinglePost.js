import React from 'react'
import PostsContext from '../PostsContext'
import './SinglePost.css'

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
    console.log(this.props)
    const comment = this.context.comment
    const { id } = this.props.match.params
    const idInt = parseInt(id)

    const singleComment = comment.find(post => post.id === idInt) || {content: ''}

    return (
      <div className='single-post-container'>
        <h3>{singleComment.nickname}</h3>
        <p>{singleComment.user_location}</p>
        <p>{singleComment.date_posted}</p>
        <p>{singleComment.category}</p>
        <p>{singleComment.content}</p>
        <button onClick={() => this.props.history.goBack()}>
          Go Back
        </button>
      </div>
    )
  }
}

export default SinglePost