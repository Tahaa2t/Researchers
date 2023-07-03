import React, { useState } from "react";
import axios from 'axios';
import "./css/loginstyle.css" 
import logo from "./logos/logoipsum.svg"
// import Button from "react-bootstrap"

const LoginForm = () => {

  // Trying backend
  // const [data, setData] = useState([{}])

  // useEffect(() => {
  //   fetch("http://127.0.0.1:5000/members").then(
  //     res => res.json()
  //   ).then(
  //     data => {
  //       setData(data)
  //       console.log(data)
  //     }
  //   )
  // }, [])

  const [popupStyle, showPopup] = useState("hide");
  // const popup = () => {
    // }
    
    const [nuid, setNuid] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
      e.preventDefault();

      try{
        const response = await axios.post('http://127.0.0.1:5000/login', {
          nuid: nuid,
          password: password
        });
        console.log(response.data.success)
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"), 3000)
      }
      catch (error) {
        console.error("OOPSIE: ", error);

      }
    };


  return(
    <div className="page">
      <div className="cover">
        <img src={logo} alt="Logo Ipsum"></img>
        <span className="line">
        <h1>Welcome</h1>
        </span>
        {/* inputs */}

        <div className="user-input">
          
          <input 
          type="text" 
          value={nuid} 
          onChange={(e) => setNuid(e.target.value)}
          placeholder="NU-ID"></input>

          <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"></input>

        </div>
        
        <button className="login-btn" onClick={handleSubmit}>LOGIN</button>

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