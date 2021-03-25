import React from 'react'
import './LandingPage.css'

import EnterButton from './EnterButton/EnterButton'

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <header className='landing-header'>
          <div className='landing-header-content'>
            <h1>Hello World</h1>
            <h2>An anonymous group journal. Share openly.</h2>
            <EnterButton />
          </div>
        </header>
        <section>

        </section>
      </div>
    )
  }
}

export default LandingPage