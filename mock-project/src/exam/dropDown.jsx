import React from 'react'
import { Menu, Dropdown } from 'antd'
import {DownOutlined} from '@ant-design/icons'
class Drop extends React.Component {
   constructor(props) {
      super(props)
   }
   menu = () => {
      return (
         <Menu>
            <Menu.Item key='0'>
               <a href='#'>MENU ITEM 1</a>
            </Menu.Item>
            <Menu.Item key='1'>
               <a href='#'>MENU ITEM 2</a>
            </Menu.Item>
            <Menu.Item key='2'>
               <a href='#'>MENU ITEM 3</a>
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
export default Drop