import React from 'react';
import './App.css';
import WelcomeLogin from './exam/welcomeLogin';
// import {Route, Router, Switch } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './exam/Home'

class App extends React.Component {
  render() {
    console.log('github')
    return (
      <div>
        <Router>
          <button> <Link to='./welcomelogin'>Login</Link></button>
          <Switch>
            <Route path='/welcomelogin'>
              <WelcomeLogin/>
            </Route>
            <Route path='/exam/Home'>
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}
export default App;
