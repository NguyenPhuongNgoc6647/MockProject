import React from 'react'
import { Grid, Row, Col } from 'antd'
import './PetAvailable.css'
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom"
// import UserProvider from '../UserContext'

export default class PetAvailable extends React.Component {
   // static contextType = UserProvider
   constructor(props) {
      super(props)
   }
   render() {
      console.log('data pet: ', this.props.value.data)
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
                              <div className='img-animals-item'>
                                 {/* {item.primary_photo_cropped.map(url =><img key={url.full} src={url.full} alt="pet image"/>
                                 )} */}
                                 {item.age}
                              </div>
                              <div className='des-animal-item'>
                                 <h3>{item.name}</h3>
                                 <p>{item.gender}</p>
                                 <p>{item.size}</p>
                              </div>
                           </div>
                        </Link>
                     </Col>
                     ))}

                     {/* {data.map(item => (
                        <div key={item.id}>
                           <ul>
                              <li>{item.id}</li>
                              <li>{item.age}</li>
                              <li>
                                 <img src={item.url}></img>
                              </li>
                              <li>{item.name}</li>
                           </ul>
                        </div>
                     ))} */}

                     {/* <Col span={5} className='panel-animals'>
                        <Link to='./....'>
                           <div className='box-animals-item'>
                              <div className='img-animals-item'>

                              </div>
                              <div className='des-animal-item'>
                                 <h3>Animals cat</h3>
                              </div>
                           </div>
                        </Link>
                     </Col>
                     <Col span={5} className='panel-animals'>
                        <Link to='./....'>
                           <div className='box-animals-item'>
                              <div className='img-animals-item'>

                              </div>
                              <div className='des-animal-item'>
                                 <h3>Animals cat</h3>
                              </div>
                           </div>
                        </Link>
                     </Col>
                     <Col span={5} className='panel-animals'>
                        <Link to='./....'>
                           <div className='box-animals-item'>
                              <div className='img-animals-item'>

                              </div>
                              <div className='des-animal-item'>
                                 <h3>Animals cat</h3>
                              </div>
                           </div>
                        </Link>
                     </Col> */}
                  </Row>
               </div>
            </Router>
         </div>
      )
   }
}