import React from 'react';
import {Route, Link} from 'react-router-dom'
import DATA from './data'

import NavBar from './NavBar/NavBar'
import LandingPage from './LandingPage/LandingPage'

class App extends React.Component {

  render() {
    console.log(DATA[0].nickname)
    return (
      <div>
        <nav>
          <NavBar />
        </nav>
        <main>

        </main>
      </div>
    )
  }
}

export default App;