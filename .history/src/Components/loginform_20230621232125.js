import React from "react"
import "./css/loginstyle.css" 

const LoginForm = () => {
  return(
    <div className="page">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sofia"></link>
      <div className="cover">
        <h1>Login</h1>
        <input type="text" placeholder="Username"></input>
        <input type="password" placeholder="Password"></input>
      </div>
    </div>
  )
}

export default LoginForm