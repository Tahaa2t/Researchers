import React from "react"
import "./css/loginstyle.css" 

const LoginForm = () => {
  return(
    <div className="page">
      <div className="cover">
      <img src="C:\FAST\CODE\HTML_CSS_JS\React\Researcher\src\Components\logos\logoipsum.svg" alt="Logo Ipsum"></img>
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