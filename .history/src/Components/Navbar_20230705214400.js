import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./css/navbarstyle.scss";

const Navbar = () => {
  return (
    <div className="navbar-boundry">
      <nav className="nav-setting">
        <button className="btn home-btn" href="/#">
          Home
        </button>
        <button className="btn home-btn" href="/#">
          Home
        </button>
        <button className="btn home-btn" href="/#">
          Home
        </button>
        <button className="btn home-btn" href="/#">
          Home
        </button>
        <button className="btn home-btn" href="/#">
          Home
        </button>
        

      </nav>
      
      
      
      
      
    </div>
  )
}

export default Navbar