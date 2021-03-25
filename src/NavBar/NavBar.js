import React from 'react'
import {Link} from 'react-router-dom'

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to=''>Hello World</Link>
          </li>
          <li>
            <Link to=''>User Posts</Link>
          </li>
          <li>
            <Link to=''>Create Post</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default NavBar