import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./css/navbarstyle.scss";
import { FaBars, FaTimes } from 'react-icons/fa'
import { Button } from "bootstrap";

const Navbar = () => {
  return (
    <div className="navbar-boundry">
      <nav className="nav-setting">
        <button className="btn home-btn" href="/#">
          Home
        </button>
        <button className="btn home-btn" href="/#">
          Transcripts
        </button>
        <button className="btn home-btn" href="/#">
          Assignments
        </button>
        <button className="btn home-btn" href="/#">
          Timetable
        </button>
        <button className="btn home-btn" href="/#">
          Courses
        </button>
        <button className="btn home-btn" href="/#">
          Profile
        </button>
        <FaTimes />
      </nav>
      <Button>
        <FaBars />
      </Button>
      
      
      
      
      
    </div>
  )
}

export default Navbar