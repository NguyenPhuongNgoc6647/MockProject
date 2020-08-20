import React from 'react'
// import { Link } from 'react-router-dom'
// import { PageHeader, Descriptions, Menu } from 'antd'
import {Button} from 'antd'
import 'antd/dist/antd.css'
import imgbanner from '../img/searchAndMatchHero.jpg'

export default class Home extends React.Component {
   constructor(props) {
      super(props)
   }
   render() {
      return (
         <div className='container'>
            <div className='homepage-banner'>
               <div className='__banner--img'>
                  <div className='box-imgbanner'>
                     <img className='imgbanner' src={imgbanner} />
                     <div className='title-banner'>
                        <h3 style={{color:'white'}}>Find the Right Dog for You</h3>
                        <p>Take our interactive new quiz to find the perfect dog to adopt!</p>
                     </div>
                     {/* <button>START DOG QUIZ</button> */}
                     <Button shape='round' type='ghost'>START DOG QUIZ</Button>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}
