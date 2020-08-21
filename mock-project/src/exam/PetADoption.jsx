import React from 'react'
import { Menu, Dropdown } from 'antd'
import {Link} from 'react-router-dom'
import {DownOutlined} from '@ant-design/icons'
class PetAdoption extends React.Component {
   constructor(props) {
      super(props)
   }
   menu = () => {
      return (
         <Menu>
            <Menu.Item key='0'>
               <Link to='#'>Dog Adoption</Link>
            </Menu.Item>
            <Menu.Item key='1'>
               <Link to='#'>Cat Adoption</Link>
            </Menu.Item>
            <Menu.Item key='2'>
               <Link to='#'>Adoption</Link>
            </Menu.Item>
         </Menu>
      )
   }
   render() {
      return (
         <Dropdown overlay={this.menu} trigger={['click']}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
               PETADOPTION <DownOutlined />
            </a>
         </Dropdown>
      )
   }
}
export default PetAdoption