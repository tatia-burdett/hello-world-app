import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'

class NavBar extends React.Component {
  render() {
    return (
      <div className='nav-bar'>
        <h1><Link to='/' className='nav-header'>Hello World</Link></h1>
        <ul className='nav-links'>
          <li>
            <Link to='/posts'>View</Link>
          </li>
          <li>
            <Link to='/add-post'>Create</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default NavBar