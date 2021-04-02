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
    console.log(singleComment)

    return (
      <div>
        <h1>{singleComment.nickname}</h1>
      </div>
    )
  }
}

export default SinglePost