import React from 'react'
import './FilterForm.css'
import PostsContext from '../../PostsContext'

class FilterForm extends React.Component {
  static contextType = PostsContext

  handleFilter = event => {
    const selectedCategory = event.target
    const category = selectedCategory.value
    this.context.filterComments(category)
  }

  render() {
    return (
      <div className='filter-form'>
        <form className='form-field'>
          <p>Filter Posts:</p>
          <label htmlFor='category'>Filter Posts:</label>
          <select className='select-field' id='category' onChange={e => this.handleFilter(e)}>
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