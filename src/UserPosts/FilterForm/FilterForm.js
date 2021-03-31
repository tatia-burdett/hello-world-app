import React from 'react'
import './FilterForm.css'
import PostsContext from '../../PostsContext'

class FilterForm extends React.Component {
  static contextType = PostsContext

  handleFilterCategory = (event) => {

  }

  render() {
    return (
      <div className='filter-form'>
        <form className='form-field'>
          <legend>Filter Posts: </legend>
          <label htmlFor='search'>Search</label>
          <select>
            <option value='none'>All</option>
            <option value='expression'>Expressions</option>
            <option value='release'>Releases</option>
            <option value='rejoice'>Rejoices</option>
            <option value='embrace'>Embraces</option>
          </select>
        </form>
      </div>
    )
  }
}

export default FilterForm