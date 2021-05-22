import { Route ,Switch} from "react-router-dom";


import Login from "./Components/Login"
import SignIn from "./Components/SignIn"
import Navigation from './Components/Navigation'
import Home from './Components/Home'

function App() {
  return (
    <div className="App">
      <header>
        <Navigation/>        
      </header>

      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/Login'>
          <Login/>
        </Route>
        <Route path='/SignIn'>
          <SignIn/>
        </Route>
      </Switch>
      
      
    </div>
  );
}

export default App;
