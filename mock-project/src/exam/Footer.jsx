import React from 'react'
import {Row, Col} from 'antd'
import Drop from './dropDown'


class Footer extends React.Component {
   constructor(props){
      super(props)
   }
   render() {
      return (
         <div>
            <Row>
               PETFINDER
            </Row>
            <Row>
               <Col span={7} style={{backgroundColor:'pink'}}>
                  <Drop></Drop>
               </Col>
            </Row>
         </div>
      )
   }
}
export default Footer