import React from 'react'
import './FilterForm.css'
import PostsContext from '../../PostsContext'

class FilterForm extends React.Component {
  static contextType = PostsContext

  handleFilter = event => {
    const category = event.target.value
    this.context.filterComments(category)
  }

  render() {
    return (
      <div className='filter-form'>
        <form className='form-field'>
          <legend>Filter Posts: </legend>
          <label htmlFor='category'>Categories:</label>
          <select id='category' onChange={e => this.handleFilter(e)}>
            <option value='none'>All</option>
            <option value='expression'>Expressions</option>
            <option value='release'>Releases</option>
            <option value='rejoice'>Rejoices</option>
            <option value='embrace'>Embraces</option>
          </select>
          {/* <button type='submit'>
            Filter
          </button> */}
        </form>
      </div>
    )
  }
}

export default FilterForm