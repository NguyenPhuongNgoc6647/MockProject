
import React, { Component } from 'react'
import GoogleLogin from 'react-google-login';
import axios from 'axios'
export class WelcomeLogin extends Component {
  constructor(props) {
    super(props)
  }
  responseGoogle = (response) => {
    var res = response.profileObj;
    console.log('dataUser: ',res);
    debugger;
    this.signup(response);
  }
  render() {
    return (
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
              </GoogleLogin>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default WelcomeLogin