import React from 'react'
import './Sections.css'

class Sections extends React.Component {
  render() {
    return (
      <div>
        <section className='landing-sections'>
          <h3 className='landing-sections-header'>Anonymously share your thoughts, frustrations, and successes!</h3>
          <div className='landing-sections-content'>
            <p>Share something to the world and filter through posts that belong to others.</p>
            <p><em>Placeholder for studies on sharing for mental health</em></p>
            <p><em>Placeholder for quote on connection</em></p>
          </div>
        </section>
        <section className='landing-sections'>
          <h3 className='landing-sections-header'>Shrink the world, grow closer</h3>
          <div className='landing-sections-content'>
            <p>The internet is a place that can bring us closer together, but it can also divide us even more. The aim of Hello World is to allow us to see that everyone is human.</p>
            <blockquote>
              “We are like islands in the sea, separate on the surface but connected in the deep.”
              ― William James   
            </blockquote>
          </div>
        </section>
        <section className='landing-sections'>
          <h3 className='landing-sections-header'>Is it really anonymous?</h3>
          <div className='landing-sections-content'>
            <p>Hello World does not require you to give any personal information about yourself. A location can be provided if you choose. Data collected is used only for the purpose of allowing your post to be shared with others.</p>
          </div>
        </section>
      </div>
    )
  }
}

export default Sections