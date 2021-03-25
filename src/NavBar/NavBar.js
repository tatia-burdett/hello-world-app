import React from 'react'

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <ul class='nav-links'>
          <li>
            <a href='index.html'>Hello World</a>
          </li>
          <li>
            <a href='main.html'>User Posts</a>
          </li>
          <li>
            <a href='form.html'>Create Post</a>
          </li>
        </ul>
      </div>
    )
  }
}

export default NavBar