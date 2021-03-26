import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import FilterSortForm from './FilterSortForm'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <FilterSortForm />
    </BrowserRouter>,
    div)
  ReactDOM.unmountComponentAtNode(div)
})