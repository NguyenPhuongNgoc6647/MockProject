// import React from 'react'
// import './welcomeLogin.css'
// import { Redirect } from 'react-router-dom';
// import axios from 'axios'
// import {Button} from 'antd'

// export default class WelcomeLogin extends React.Component {
//    render() {
//       return (
// <div className='Box'>
//    <div className='container-box'>
//       <div className='panel'>
//          <h2 className='panel-title'>Welcome Login Form</h2>
//          <div className='btn-login'>
//             {/* <Button>Login with Google</Button>
//             <Button>Login with Facebook</Button> */}
//             <button className='btnLogin'>Login with Google</button>
//             <button className='btnLogin'>Login with Facebook</button>
//          </div>
//       </div>
//    </div>
// </div>
//       )
//    }
// }

import React, { Component } from 'react'
// import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
// import { Redirect } from 'react-router-dom';
import axios from 'axios'
// import {Button} from 'antd'
export class WelcomeLogin extends Component {
  constructor(props) {
    super(props)
  }
  signup(res) {
    const googleresponse = {
      name: res.profileObj.name,
      email: res.profileObj.email,
      token: res.googleId,
      Image: res.profileObj.imageUrl,
      ProviderId: 'Google'
    };
    debugger;

    axios.post('http://localhost:3000', googleresponse)
      .then((result) => {
        let responseJson = result;
        sessionStorage.setItem("userData", JSON.stringify(result));
        console.log('result: ',result)
        console.log('responseJson: ', responseJson)
        //   this.props.history.push('/Dashboard')
      });
  };
  render() {
    const responseGoogle = (response) => {
      var res = response.profileObj;
      console.log(res);
      debugger;
      this.signup(response);
    }
    console.log('response test: ',typeof(this.response))
    console.log('res',this.res);
    console.log('result: ', this.result)
    return (
      <div className='Box'>
        <div className='container-box'>
          <div className='panel'>
            <h2 className='panel-title'>Welcome Login Form</h2>
            <div className='btn-login'>
              <GoogleLogin
                clientId="863488352231-f0qksbn5f313uhm9f7n1c1p459p7bm35.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle} >
              </GoogleLogin>
              {/* <button className='btnLogin'>Login with Google</button>
               <button className='btnLogin'>Login with Facebook</button> */}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default WelcomeLogin