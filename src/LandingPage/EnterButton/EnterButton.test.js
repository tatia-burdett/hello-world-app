import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import EnterButton from './EnterButton'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <EnterButton />
    </BrowserRouter>, 
    div);
  ReactDOM.unmountComponentAtNode(div)
});