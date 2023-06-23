import React from "react"
import "./css/loginstyle.css" 

const LoginForm = () => {
  return(
    <div className="page">
      <div className="cover">
        <h1>Login</h1>
        <input type="text" placeholder="Username"></input>
        <input type="password" placeholder="Password"></input>
        <div className="login-btn">Login</div>
        <p>or login using</p>
        <div className="check-btn">
          <input type="checkbox"></input>
        </div>
      </div>
    </div>
  )
}

export default LoginForm