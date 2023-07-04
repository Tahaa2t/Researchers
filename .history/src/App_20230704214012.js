import { Router, Routes, Route } from "react-router-dom";
import "./App.css"
import LoginForm from "./Components/loginform"
import HomePage from "./Components/HomePage";

// color pallet
// #3aa6b9
// #D0E8E1
// #348472


function App() {

  

  return (
    <div className="App">
      
      <Router>
      <LoginForm />
        <Routes>
          <Route path="/" Component={LoginForm} />
          <Route path="/home" Component={HomePage} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
