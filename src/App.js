import React from 'react';
import DATA from './data'

class App extends React.Component {
  

  render() {
    console.log(DATA[0].nickname)
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    )
  }
}

export default App;