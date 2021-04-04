import React from 'react'
import './Sections.css'

class Sections extends React.Component {
  render() {
    return (
      <div>
        <section className='landing-sections'>
          <h3 className='landing-sections-header'>Anonymously share your thoughts, frustrations, and successes!</h3>
          <div className='landing-sections-content'>
            <p>Share something to the world and filter through posts.</p> <p>Categorize your post as an Expression, Release, Rejoice or Embrace. Express something about yourself, like an idea or thought, or maybe just say hi! Release some negative thought that's hanging over your head. Rejoice in a recent win or success! Or maybe send a warm embrace to someone who needs it.</p>
            <hr/>
            <p>This project was inspired by a book that I used to pass around with my friends in high school. We didn't share very many classes, but we wanted to stay connected. We kept a large, empty journal, that we would pass around between us. When it was your turn to use the journal, you could write anything you wanted, and also catch up on what everyone else was going through. This journal brought us closer together, and I hope this online journal can do something similarily.</p>
          </div>
        </section>
        <section className='landing-sections'>
          <h3 className='landing-sections-header parallex-section-header'>Shrink the world, grow closer</h3>
          <div className='landing-sections-content'>
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