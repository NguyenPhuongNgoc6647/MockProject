import React from 'react';
// import ReactDOM from 'react-dom';
// import GoogleLogin from 'react-google-login';
// // or
// import { GoogleLogin } from 'react-google-login';

export default class LoginGG extends React.Component {
  render() {
     return (
        <div className='box'>
           <div className='panel'>
               <h3>Welcome, form login</h3>
               <GoogleLogin>Make peopel fall in love with your ideas</GoogleLogin>
           </div>
        </div>
     )
  }
}