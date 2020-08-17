import React from 'react';
import './App.css';
import WelcomeLogin from './exam/welcomeLogin';
import { PageHeader, Descriptions, Menu, Grid } from 'antd'
import {HeartOutlined} from '@ant-design/icons'
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
    return (
      <div className='col'>
        <Router>
          <h3>Welcome to the homepage!</h3>
          <div className='header-box col'>
            <PageHeader className='col-12'>
              <Menu mode='horizontal' className='menu--color col-12'>
                <Menu.Item>BREEDS</Menu.Item>
                <Menu.Item>RESOURCES</Menu.Item>
              </Menu>
            </PageHeader>
            <div className='log'>
                <HeartOutlined style = {{marginRight:'30px', fontSize:'20px'}}/>
              <button className='btn-logout'>
                <Link to='/app'>Logout</Link>
              </button>
              <button className='btn-logout'> 
                <Link to='/exam/welcomelogin'>Login</Link>
              </button>
            </div>
          </div>
          <Switch>
            <Route path='/exam/welcomelogin'>
              <WelcomeLogin />
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
