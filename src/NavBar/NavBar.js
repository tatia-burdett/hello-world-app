import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'

class NavBar extends React.Component {
  render() {
    return (
      <div className='nav-bar'>
        <ul className='nav-links'>
          <li>
            <Link to='/'>Hello World</Link>
          </li>
          <li>
            <Link to='/posts'>User Posts</Link>
          </li>
          <li>
            <Link to='/add-post'>Create Post</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default NavBar