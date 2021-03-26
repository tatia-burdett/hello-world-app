import React from 'react'
import './Form.css'

class Form extends React.Component {
  render() {
    return (
      <div className='form-field'>
        <form>
          <fieldset>
            <legend>Create a Post!</legend>

            <label for='nickname'>Name or Nickname:</label>
            <input type='text' id='nickname' name='user' placeholder='Dr. Who' required/>

            <label for='location'>Location:</label>
            <input type='text' id='location' name='user' placeholder='Gallifrey'/>

            <label for='content'>Say something:</label>
            <textarea id='content' name='user' required/>

            <button className='submit-btn'>Submit</button>
          </fieldset>
        </form>
      </div>
    )
  }
}

export default Form