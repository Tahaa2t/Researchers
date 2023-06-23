import React from "react"
import "./css/loginstyle.css" 
import logo from "./logos/logoipsum.svg"

const LoginForm = () => {
  return(
    <div className="page">
      <div className="cover">
      <img src={logo} alt="Logo Ipsum"></img>
        <h1>Welcome</h1>
        <hr />
        <input type="text" placeholder="Username"></input>
        <input type="password" placeholder="Password"></input>
        <div>  
          <div className="login-btn">LOGIN</div>
          <div className="check-btn">
            <input type="checkbox"></input>
            <p>Remember me?</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default LoginForm