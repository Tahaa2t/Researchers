import React from 'react'
import Navbar from './Navbar'
import './css/homepagestyle.scss'
import profilepic from './pics/placeholder image.jpg'
import {MDCRipple} from '@material/ripple';

const selector = '.mdc-button, .mdc-icon-button, .mdc-card__primary-action';
const ripples = [].map.call(document.querySelectorAll(selector), function(el) {
  return new MDCRipple(el);
});

const HomePage = () => {
  return (
    // <div className='main-container'>
      <div class="mdc-card">
      <div class="mdc-card__primary-action">
        <div class="mdc-card__media mdc-card__media--square">
          <div class="mdc-card__media-content">Title</div>
        </div>
        {/* <!-- ... additional primary action content ... --> */}
        <div class="mdc-card__ripple"></div>
      </div>
      <div class="mdc-card__actions">
        <div class="mdc-card__action-buttons">
          <button class="mdc-button mdc-card__action mdc-card__action--button">
            <div class="mdc-button__ripple"></div>
            <span class="mdc-button__label">Action 1</span>
          </button>
          <button class="mdc-button mdc-card__action mdc-card__action--button">
            <div class="mdc-button__ripple"></div>
            <span class="mdc-button__label">Action 2</span>
          </button>
        </div>
        <div class="mdc-card__action-icons">
          <button class="material-icons mdc-icon-button mdc-card__action mdc-card__action--icon" title="Share">share</button>
          <button class="material-icons mdc-icon-button mdc-card__action mdc-card__action--icon" title="More options">more_vert</button>
        </div>
      </div>
    </div>
    
    </div>
















  )
}

export default HomePage
{/* <input></input>
<div className='user-info'>
  <div className='personal-info'>
    <img src={profilepic}></img>
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
</div> */}