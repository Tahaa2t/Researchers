import React, { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./css/navbarstyle.scss";
import { FaBars, FaTimes } from 'react-icons/fa'
import { Button } from "bootstrap";

const Navbar = () => {
  
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive-nav");
  }



  return (
    <section className="navbar-boundry">
      <nav className="nav-setting" ref={navRef}>
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
        <button onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button onClick={showNavbar}>
        <FaBars />
      </button>
      
      
      
      
      
    </section>
  )
}

export default Navbar