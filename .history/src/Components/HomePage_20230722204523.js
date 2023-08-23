import React from 'react'
import Navbar from './Navbar'
import './css/homepagestyle.scss'
const HomePage = () => {
  return (
    <div className='main-container'>
      <input></input>
      <div className='user-info'>
        <div className='personal-info'>
          <img></img>
          <div className='written'>
            <h2>Taha Tanveer</h2>
            <p>BSCS</p>
            <button>show more ></button>
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