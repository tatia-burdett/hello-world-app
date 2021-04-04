import React from 'react'
import './PostForm.css'

import Form from './Form/Form'

class PostForm extends React.Component {
  render() {
    return (
      <div className='post-form'>
        <header className='post-form-header'>
          <h2>Share something!</h2>
        </header>
        <section className='post-form-form'>
          <Form />
        </section>
      </div>
    )
  }
}

export default PostForm