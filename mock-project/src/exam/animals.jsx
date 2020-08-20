import React from 'react'

export default class Animals extends React.Component {
   constructor(props){
      super(props)
   }
   render(){
      return(
         <tr>
            <td>{this.props.type}</td>
            <td>{this.props.breed}</td>
            <td>{this.props.gender}</td>
            <td>{this.props.age}</td>
         </tr>
      )
   }
}