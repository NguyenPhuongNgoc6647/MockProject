import React from 'react'
import { Grid, Row, Col } from 'antd'
import './PetAvailable.css'
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom"
import { HeartOutlined } from '@ant-design/icons'

export default class PetAvailable extends React.Component {
   constructor(props) {
      super(props)
      
   }
   render() {
      const { data } = this.props.value

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
                                 {/* {item.primary_photo_cropped.map(url =><img key={url.full} src={url.full} alt="pet image"/>
                                 )} */}
                                 {/* {item.age} */}
                                 <img src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/48837638/1/?bust=1597978150&width=300" alt=""/>
                              </div>
                              <div className='des-animal-item'>
                                 <h3>Name: {item.name}</h3>
                                 <p>Gender: {item.gender}, Type: {item.type}</p>
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