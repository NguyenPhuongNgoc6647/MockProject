import React from 'react'
import { Menu, Dropdown } from 'antd'
import {DownOutlined} from '@ant-design/icons'
class AboutPetFinder extends React.Component {
   constructor(props) {
      super(props)
   }
   menu = () => {
      return (
         <Menu>
            <Menu.Item key='0'>
               <a href='#'>About Petfinder</a>
            </Menu.Item>
            <Menu.Item key='1'>
               <a href='#'>FAQs</a>
            </Menu.Item>
            <Menu.Item key='2'>
               <a href='#'>Partnerships</a>
            </Menu.Item>
         </Menu>
      )
   }
   render() {
      return (
         <Dropdown overlay={this.menu} trigger={['click']}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
               ABOUT PETFINDER <DownOutlined />
            </a>
         </Dropdown>
      )
   }
}
export default AboutPetFinder