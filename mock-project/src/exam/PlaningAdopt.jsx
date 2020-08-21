import React from 'react'
import {Layout, Row, Col, Button} from 'antd'
import './PlaningAdopt.css'

class PlaningAdopt extends React.Component {
   constructor(props){
      super(props)
   }
   render(){
      return(
         <Layout className='container-planing'>
            <Row className='title-planing'>
               <h2>Planning to Adopt a Pet?</h2>
            </Row>
            <Row className='content-footer panel-planing'>
               <Col span={7}>
                  <h4>Checklist for New Adopters</h4>
                  <p>Help make the transition, as smooth as possible.</p>
                  <Button shape='round' className='textBold btn-learn'>LEARN MORE</Button>
               </Col>
               <Col span={7}>
                  <h4>COVID-19 Resources</h4>
                  <p>
                     Get the latest on adoption processes, learn how local shelters and
                     rescue groups are adapting and find out what you can do to help dogs
                     and cats in need right now.
                  </p>
                  <Button shape='round' className='textBold btn-learn'>LEARN MORE</Button>
               </Col>
               <Col span={7}>
                  <h4>Pet Adoption FAQs</h4>
                  <p>Get answers to questions you haven't thought of.</p>
                  <Button shape='round' className='textBold btn-learn'>LEARN MORE</Button>
               </Col>
            </Row>
         </Layout>
      )
   }
}
export default PlaningAdopt