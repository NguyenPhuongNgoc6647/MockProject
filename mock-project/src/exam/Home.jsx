import React from 'react'
import {Link} from 'react-router-dom'
export default class Home extends React.Component {
   constructor(props) {
      super(props)
   }

   render() {
      console.log('xin chào')
      return (
         <div>
            <h3>Welcome to the homepage!</h3>
            <button>
               <Link to='/app'>Logout</Link>
            </button>
         </div>
      )
   }
}
