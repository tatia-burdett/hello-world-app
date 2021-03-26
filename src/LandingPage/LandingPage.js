import React from 'react'
import './LandingPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

import EnterButton from './EnterButton/EnterButton'
import Sections from './Sections/Sections'
import Footer from './Footer/Footer'

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <header className='landing-header'>
          <div className='landing-header-content'>
            <h1>Hello World</h1>
            <h2>An anonymous group journal. Share openly.</h2>
            <EnterButton />
            <a href='#sections'>
              <FontAwesomeIcon icon={faChevronDown} className='down-icon'/>
            </a>
          </div>
        </header>
        <div id='sections'>
          <Sections />
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    )
  }
}

export default LandingPage