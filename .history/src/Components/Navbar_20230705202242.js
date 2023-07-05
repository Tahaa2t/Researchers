import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./css/navbarstyle.css";

const Navbar = () => {
  return (
    <div className="navbar-boundry">
      <nav>
        <a className="btn home-btn" href="/#">
          Home
        </a>

      </nav>
      
      
      
      <div className="btn home-btn">
        <button>
          Yo
        </button>
      </div>
      <div className="btn home-btn">
        <button>
          Yo
        </button>
      </div>
      <div className="btn home-btn">
        <button>
          Yo
        </button>
      </div>
      <div className="btn home-btn">
        <button>
          Yo
        </button>
      </div>
      <div className="btn home-btn">
        <button>
          Yo
        </button>
      </div>
      
    </div>
  )
}

export default Navbar