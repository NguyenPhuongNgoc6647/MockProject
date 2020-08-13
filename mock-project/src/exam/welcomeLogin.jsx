
import React, { Component } from 'react'
import GoogleLogin from 'react-google-login';

import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
// import Home from './Home';
export class WelcomeLogin extends Component {
  
  responseGoogle = (response) => {
    var res = response.profileObj;
    // console.log('dataUser: ',res);
    localStorage.setItem('userInfo', JSON.stringify(res))
    const userInfo = localStorage.getItem('userInfo')
    console.log('userInfo: ', userInfo)
    debugger;
  }

  render() {
    console.log('helo')
    return (
      // <Router>
        <div className='Box'>
          <div className='container-box'>
            <div className='panel'>
              <h2 className='panel-title'>Welcome Login Form</h2>
              <div className='btn-login'>
                <GoogleLogin
                  clientId="863488352231-f0qksbn5f313uhm9f7n1c1p459p7bm35.apps.googleusercontent.com"
                  buttonText="Login with Google"
                  onSuccess={this.responseGoogle}
                  onFailure={this.responseGoogle} >
                  <Link to='/exam/home'>Login with Google</Link>
                </GoogleLogin>
              </div>
            </div>
          </div>
        </div>
    )
  }
}
export default WelcomeLogin