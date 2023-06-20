import React from "react";
import "./loginform.css";

const LoginForm = () => {
  return(
    <div className="cover">
      <h1>Login</h1>
      <input type="text" placeholder="Username"></input>
      <input type="password" placeholder="Password"></input>
    </div>
  )
}

export default LoginForm