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
    <header>
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
        {/* <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button> */}
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
      
      
      
      
      
    </section>
    </header>
  )
}

export default Navbar