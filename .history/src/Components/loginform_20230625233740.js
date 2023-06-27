import React, { useState } from "react"
import "./css/loginstyle.css" 
import logo from "./logos/logoipsum.svg"
import Button from "react-bootstrap"

const LoginForm = () => {

  const [popupStyle, showPopup] = useState("hide");

  const popup = () => {
    showPopup("login-popup")
    setTimeout(() => showPopup("hide"), 3000)
  }

  return(
    <div className="page">
      <div className="cover">
        <img src={logo} alt="Logo Ipsum"></img>
        <span className="line">
        <h1>Welcome</h1>
        </span>
        <input type="text" placeholder="NU-ID"></input>
        <input type="password" placeholder="Password"></input>  
        <Button>Hello</Button>
        <div className="login-btn" onClick={popup}>LOGIN</div>
        
        <div className="check-btn">
          <input type="checkbox"></input>
          <p>Remember me?</p>
        </div>

        <div className={popupStyle}>
          <h3>LOGIN FAILED</h3>
          <p>username or password incorrect</p>
        </div>
      
      
      </div>
    </div>
  )
}

export default LoginForm