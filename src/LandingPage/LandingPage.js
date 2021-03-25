import React from 'react'
import './LandingPage.css'

import EnterButton from './EnterButton/EnterButton'

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <header>
          <h1>Hello World</h1>
          <h2>An anonymous group journal. Share openly.</h2>
          <EnterButton />
        </header>
        <section>

        </section>
      </div>
    )
  }
}

export default LandingPage