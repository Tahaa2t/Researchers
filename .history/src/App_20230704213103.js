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
        <Routes>
          <Route path="/login" element={LoginForm} />
          <Route path="/home" element={HomePage} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
