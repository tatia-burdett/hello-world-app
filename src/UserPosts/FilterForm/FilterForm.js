import React from 'react'
import './FilterForm.css'

class FilterForm extends React.Component {
  render() {
    return (
      <div className='filter-form'>
        <form className='form-field'>
          <legend>Filter Posts: </legend>
          <label htmlFor='search'>Search</label>
          <input type='text' id='search' name='filter' placeholder='Seach posts by'/>
        </form>
      </div>
    )
  }
}

export default FilterForm