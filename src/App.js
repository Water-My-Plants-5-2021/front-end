import { Route } from "react-router-dom";

import './App.css';
import Login from "./Components/Login"
import SignIn from "./Components/SignIn"

function App() {
  return (
    <div className="App">
      <Login />
      <SignIn />
    </div>
  );
}

export default App;
