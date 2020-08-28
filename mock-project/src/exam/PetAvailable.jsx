import React from 'react'
import { Grid, Row, Col } from 'antd'
import './PetAvailable.css'
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom"
import { HeartOutlined } from '@ant-design/icons'
import UserContext from './userContext'

export default class PetAvailable extends React.Component {
   static contextType = UserContext
   constructor(props) {
      super(props)
      
   }
   render() {
      console.log('debug-context', this.context.animals)
      console.log('this context animal: ', this.context.animals)
      const { data } = this.props.value
      console.log('Pet data: ', data)
      return (
         <div>
            <Router>
               <div className='container-animals'>
                  <Row className='title-PetAvailable'>
                     <h2 className='textAlign primary-Color font-title'>Pets Available for Adoption Nearby</h2>
                  </Row>
                  <Row className='box-animals'>
                     {data.map(item => (
                        <Col span={5} className='panel-animals' key={item.id}>
                        <Link to='./....'>
                           <div className='box-animals-item'>
                              <HeartOutlined className='icon-wishlist'></HeartOutlined>
                              <div className='img-animals-item'>

                                { <img src = "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/48837638/1/?bust=1597978150&width=300"></img>}
                                 {/* <img src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/48837638/1/?bust=1597978150&width=300" alt=""/> */}
                              </div>
                              <div className='des-animal-item'>
                                 <h3>Name: {item.name}</h3>
                                 <p className='stylep'>Age: {item.age}<br/> Size: {item.size}<br/>Gender: {item.gender}<br/> Type: {item.type}</p>
                              </div>
                           </div>
                        </Link>
                     </Col>
                     ))}
                  </Row>
               </div>
            </Router>
         </div>
      )
   }
}