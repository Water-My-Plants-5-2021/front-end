import { Route, Switch} from "react-router-dom";


import Cards from "./Components/Cards"
import Home from './Components/Home'
import Login from "./Components/Login"
import Navigation from './Components/Navigation'
import ProtectedRoute from "./utils/ProtectedRoute"
import SignIn from "./Components/SignIn"

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
        <ProtectedRoute exact path="/user" component={Cards} />
      </Switch>
      
      
    </div>
  );
}

export default App;
