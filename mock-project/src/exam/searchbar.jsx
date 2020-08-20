import React, { Component } from 'react'

export default class Search extends Component {
   constructor(props){
      super(props)
      this.state = {
         inputValue:'',
      }
   }
   handleInputValue = (event) =>{
      this.state({
         inputValue: event.target.value
      })
   }
}