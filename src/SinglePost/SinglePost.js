import React from 'react'
import PostsContext from '../PostsContext'

class SinglePost extends React.Component {
  static defaultProps = {
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
      <div>
        <h3>{singleComment.nickname}</h3>
        <p>{singleComment.user_location}</p>
        <p>{singleComment.date_posted}</p>
        <p>{singleComment.category}</p>
        <p>{singleComment.content}</p>
      </div>
    )
  }
}

export default SinglePost