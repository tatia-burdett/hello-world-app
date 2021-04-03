import React from 'react'
import './UserPosts.css'

import FilterForm from './FilterForm/FilterForm'
import Posts from './Posts/Posts'

class UserPosts extends React.Component {
  render() {
    
    return (
      <div>
        <header className='user-post-header'>
          <h1>Hello World</h1>
          <h2>Here is what others have to say...</h2>
        </header>
        <section>
          <FilterForm {...this.props}/>
        </section>
        <section>
          <Posts {...this.props}/>
        </section>
      </div>
    )
  }
}

export default UserPosts