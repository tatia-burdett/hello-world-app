import React from 'react'
import { Link } from 'react-router-dom'
import './EnterButton.css'

class EnterButton extends React.Component {
  render() {
    return (
      <div className='enter-button'>
        <Link to='/posts'>
          <p>View Posts</p>
        </Link>
        <Link to='/add-post'>
          <p>Create Post</p>
        </Link>
      </div>
    )
  }
}

export default EnterButton