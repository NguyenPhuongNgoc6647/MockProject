import React, { Component } from 'react'
import FacebookLoginBtn from "react-facebook-login"

export default class LoginFacebook extends Component {
   constructor(props){
      super(props)
      this.state = {
         auth: false,
         name: '',   
         picture: '',
      }
   }

   componentClicked = () => {
      console.log('Facebook btn clicked!')
   }

   responseFacebook = (response) =>{
      console.log(response)
   }

   render(){
      let facebookData
      this.state.auth ?
         facebookData = (
            <div>
               Hi!
            </div>
         ) :
         facebookData = (
            <FacebookLoginBtn
               appId="739520270175506"
               autoLoad={true}
               fields="name,picture"
               callback={this.responseFacebook} 
            />
         )
      return (
         <>
            {facebookData}
         </>
      )
   }
}