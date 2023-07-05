import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./css/navbarstyle.css";

const Navbar = () => {
  return (
    <div className="navbar-boundry">
      <nav className="nav-setting">
        <a className="btn home-btn" href="/#">
          Home
        </a>
        <a className="btn home-btn" href="/#">
          Home
        </a>
        <button className="btn home-btn" href="/#">
          Home
        </button>
        <a className="btn home-btn" href="/#">
          Home
        </a>
        <a className="btn home-btn" href="/#">
          Home
        </a>

      </nav>
      
      
      
      
      
    </div>
  )
}

export default Navbar