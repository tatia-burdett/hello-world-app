import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import FilterForm from './FilterForm'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <FilterForm />
    </BrowserRouter>,
    div)
  ReactDOM.unmountComponentAtNode(div)
})