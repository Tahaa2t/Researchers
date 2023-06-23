import React from "react"
import "./css/loginstyle.css" 

const LoginForm = () => {
  return(
    <div className="page">
      <div className="cover">
      <img src="https://www.figma.com/file/9jHMyb6XGvh2rda74Sq5ND/UEE-Student-Portal?type=design&node-id=35-12800&mode=design&t=aGtYKhGj7XPSJdVT-4" alt="Italian Trulli"></img>
        <h1>Welcome</h1>
        <input type="text" placeholder="Username"></input>
        <input type="password" placeholder="Password"></input>
        <div className="login-btn">LOGIN</div>
        <div className="check-btn">
          <input type="checkbox"></input>
          <p>Remember me?</p>
        </div>
      </div>
    </div>
  )
}

export default LoginForm