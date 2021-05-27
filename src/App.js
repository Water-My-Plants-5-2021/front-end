import { Route, Switch} from "react-router-dom";


import Cards from "./Components/Cards"
import CreatePlant from "./Components/CreatePlant"
import Home from './Components/Home'
import Login from "./Components/Login"
import Navigation from './Components/Navigation'
import ProtectedRoute from "./utils/ProtectedRoute"
import SignIn from "./Components/SignIn"
import UpdatePlant from "./Components/UpdatePlant"
import EditLogin from "./Components/EditLogin"

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
        <ProtectedRoute path="/user/add-plant" component={CreatePlant} />
        <ProtectedRoute path="/user/edit-plant" component={UpdatePlant} />
        <ProtectedRoute path="/user/edit-user" component={EditLogin} />
      </Switch>
      
      
    </div>
  );
}

export default App;
