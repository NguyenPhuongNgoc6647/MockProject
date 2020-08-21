import React from 'react'
import { Row, Col, Button } from 'antd'
import { Link } from 'react-router-dom'
import AboutPetFinder from './AboutPetFinder'
import PetAdoption from './PetADoption'
import {
   FacebookFilled,
   GoogleCircleFilled,
   TwitterOutlined,
   InstagramOutlined,
   YoutubeFilled
} from '@ant-design/icons'

class Footer extends React.Component {
   constructor(props) {
      super(props)
   }
   render() {
      return (
         <div class='container-footer'>
            <div className='footer'>
               <Row className='logo-footer'>
                  <h2 style={{ color: 'white' }}>PETFINDER</h2>
               </Row>
               <Row className='content-footer'>
                  <Col span={7}>
                     <ul className='footer-col'>
                        <li>
                           <AboutPetFinder />
                        </li>
                        <li>
                           <PetAdoption />
                        </li>
                     </ul>
                  </Col>
                  <Col span={7}>
                     <ul className='footer-col'>
                        <li>
                           <Link to='./href'>PRIVACY POLICY(UPDATED)</Link>
                        </li>
                        <li>
                           <Link to='./href'>ABOUT OUR ADS</Link>
                        </li>
                        <li>
                           <Link to='./href'>SHELTER & RESUE LOGIN</Link>
                        </li>
                        <li>
                           <Link to='./href'>SHELTER & RESUE REGISTRATION</Link>
                        </li>
                     </ul>
                  </Col>
                  <Col span={7}>
                     <p>To get the latest on pet adoption and pet care, sign up for the Petfinder newsletter.</p>
                     <Button>SIGN UP</Button>
                  </Col>
               </Row>
            </div>
            <Row className='contacts-footer'>
                  <Col span={13} style={{paddingLeft:'20px', color:'white'}}>
                     <p>©2020 Petfinder.com All trademarks are owned by Société des Produits Nestlé S.A., or used with permission.</p>
                  </Col>
                  <Col span={11} className='media-contacts'>
                     <Link to='facebook.com'>
                        <FacebookFilled></FacebookFilled>
                     </Link>
                     <Link to='google.com'>
                        <GoogleCircleFilled></GoogleCircleFilled>
                     </Link>
                     <Link to='instagram.com'>
                        <YoutubeFilled></YoutubeFilled>
                     </Link>
                     <Link to='instagram.com'>
                        <TwitterOutlined></TwitterOutlined>
                     </Link>
                     <Link to='twitter.com'>
                        <InstagramOutlined></InstagramOutlined>
                     </Link>
                  </Col>
               </Row>
         </div>
      )
   }
}
export default Footer