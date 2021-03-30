import React from 'react'
import './Form.css'
import config from '../../config'
import PostsContext from '../../PostsContext'

class Form extends React.Component {
  // button on submit, updates state
  constructor(props) {
    super(props)
    this.state = {
      nickname: {
        value: ''
      },
      user_location: {
        value: ''
      },
      content: {
        value: ''
      }
    }
  }

  static contextType = PostsContext

  updateName = (nickname) => {
    this.setState({
      nickname: {
        value: nickname
      }
    })
  }

  updateLocation = (user_location) => {
    this.setState({
      value: user_location
    })
  }

  updateContent = (content) => {
    this.setState({
      value: content
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const nickname = this.state.nickname.value
    const user_location = this.state.user_location.value
    const content = this.state.content.value
    console.log(`${nickname}, ${user_location}, ${content}`)

    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        nickname: `${nickname}`,
        user_location: `${user_location}`,
        content: `${content}`
      })
    }

    fetch(`${config.API_ENDPOINT}/comment/`, requestOptions)
      .then(res => {
        if (!res.ok) {
          throw new Error('Oh no! Something went wrong! Try again later.')
        }
        return res.json()
      })
      .then(() => {
        this.context.fetchComment()
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
              name='user' 
              placeholder='Dr. Who' 
              onChange={e => this.updateName(e.target.value)}
              required
            />

            <label htmlFor='location'>Location:</label>
            <input 
              type='text' 
              id='location' 
              name='user' 
              placeholder='Gallifrey'
              onChange={e => this.updateLocation(e.target.value)}
            />

            <label htmlFor='content'>Say something:</label>
            <textarea 
              type='text'
              id='content' 
              name='user' 
              onChange={e => this.updateContent(e.target.value)}
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