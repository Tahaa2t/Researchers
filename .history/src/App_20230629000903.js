import React, { useState, useEffect } from "react";
import "./App.css"
import LoginForm from "./Components/loginform"

function App() {

  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch("http://127.0.0.1:5000/members").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])

  return (
    <div className="App">
      <LoginForm />
    </div>
  );
}

export default App;
