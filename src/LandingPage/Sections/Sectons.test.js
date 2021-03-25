import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Sections from './Sections'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <Sections />
    </BrowserRouter>,
    div)
  ReactDOM.unmountComponentAtNode(div)
})