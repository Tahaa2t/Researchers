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
      <LoginForm />
      <Router>
      <Route path="/home" component={HomePage} />
      {/* Other routes */}
    </Router>
    </div>
  );
}

export default App;
