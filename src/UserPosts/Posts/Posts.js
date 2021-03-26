import React from 'react'
import './Posts.css'

class Posts extends React.Component {
  render() {
    return (
      <div className='post-card-grid'>
        <div className='post-card'>
          Test Card
        </div>
        <div className='post-card'>
          Test Card 
        </div>
        <div className='post-card'>
          Test Card
        </div>
        <div className='post-card'>
          Test Card
        </div>
      </div>
    )
  }
}

export default Posts