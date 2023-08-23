import React from 'react'
import Navbar from './Navbar'
import './css/homepagestyle.scss'
// import profilepic from './pics/placeholder image.jpg'
const HomePage = () => {
  return (
    <div className='main-container'>
      <input></input>
      <div className='user-info'>
        <div className='personal-info'>
          <img ref={"C:\FAST\CODE\HTML_CSS_JS\React\Researcher\src\Components\pics\placeholder image.jpg"}></img>
          <div className='written'>
            <h2>Taha Tanveer</h2>
            <p>BSCS</p>
            <button>show more </button>
          </div>
        </div>
        <div className='Educational-info'>

        </div>
        <div className='assignments'></div>
        <div className='courses'></div>
      </div>
    </div>

  )
}

export default HomePage