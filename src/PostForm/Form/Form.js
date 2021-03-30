import React from 'react'
import './Form.css'

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

  handleSubmit = () => {

  }

  render() {
    return (
      <div className='post-form-field'>
        <form>
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

            <button className='submit-btn'>Submit</button>
          </fieldset>
        </form>
      </div>
    )
  }
}

export default Form