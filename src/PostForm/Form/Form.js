import React from 'react'
import './Form.css'
import config from '../../config'
import PostsContext from '../../PostsContext'

class Form extends React.Component {
  // button on submit, updates state
  static contextType = PostsContext

  handleSubmit = (event) => {
    event.preventDefault()
    const { nickname, user_location, content } = event.target
    const comment = {
      nickname: nickname.value,
      user_location: user_location.value,
      content: content.value
    }

    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(comment)
    }

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
        this.context.addComment(data)
        this.props.history.goBack()
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
            <legend>Create a Post!</legend>

            <label htmlFor='nickname'>Name or Nickname:</label>
            <input 
              type='text' 
              id='nickname' 
              name='nickname' 
              placeholder='Dr. Who' 
              // onChange={e => this.updateName(e.target.value)}
              required
            />

            <label htmlFor='user_location'>Location:</label>
            <input 
              type='text' 
              id='user_location' 
              name='user_location' 
              placeholder='Gallifrey'
              // onChange={e => this.updateLocation(e.target.value)}
            />

            <label htmlFor='content'>Say something:</label>
            <textarea 
              type='text'
              id='content' 
              name='content' 
              // onChange={e => this.updateContent(e.target.value)}
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

export default Form