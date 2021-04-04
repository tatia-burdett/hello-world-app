import React from 'react'
import './Form.css'
import config from '../../config'
import PostsContext from '../../PostsContext'
import { withRouter } from 'react-router-dom'

class Form extends React.Component {
  static contextType = PostsContext

  handleSubmit = event => {
    event.preventDefault()
    const { nickname, user_location, content, category } = event.target
    const comment = {
      nickname: nickname.value,
      user_location: user_location.value,
      content: content.value,
      category: category.value
    }

    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(comment)
    }

    this.context.handleLoading()

    fetch(`${config.API_ENDPOINT}/comment`, requestOptions)
      .then(res => {
        if (!res.ok) {
          throw new Error('Oh no! Something went wrong! Try again later.')
        }
        return res.json()
      })
      .then((data) => {
        nickname.value = ''
        user_location.value = ''
        content.value = ''
        category.value = ''
        this.context.addComment(data)
        this.props.history.push('/posts')
      })
      .catch(error => {
        this.setState({error})
      })
  }

  render() {
    return (
      <div className='post-form-field'>
        <form onSubmit={e => this.handleSubmit(e)}>
          <fieldset className='post-fieldset'>
            <legend>Create a Post:</legend>

            <label htmlFor='nickname'>Name or Nickname:</label>
            <input 
              type='text' 
              id='nickname' 
              name='nickname' 
              placeholder='Dr. Who' 
              required
            />

            <label htmlFor='user_location'>Location:</label>
            <input 
              type='text' 
              id='user_location' 
              name='user_location' 
              placeholder='Gallifrey'
            />

            <label htmlFor='category'>Category:</label>

            <select
              id='category'
              name='category'
              required
            >
              <option value='none'>Select One:</option>
              <option value='expression'>Expression</option>
              <option value='release'>Release</option>
              <option value='rejoice'>Rejoice</option>
              <option value='embrace'>Embrace</option>
            </select>

            <label htmlFor='content'>Say something:</label>
            <textarea 
              type='text'
              id='content' 
              name='content' 
              required
            />

            <button 
              type='submit' 
              className='submit-btn'>
                Submit
            </button>
          </fieldset>
        </form>
      </div>
    )
  }
}

export default withRouter(Form)