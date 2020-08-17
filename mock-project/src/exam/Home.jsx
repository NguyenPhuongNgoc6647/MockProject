import React from 'react'
import { Link } from 'react-router-dom'
import { PageHeader, Descriptions, Menu } from 'antd'
import 'antd/dist/antd.css'
export default class Home extends React.Component {
   constructor(props) {
      super(props)
   }
   render() {
      return (
         <div className='container'>
            {/* <h3>Welcome to the homepage!</h3>
            <div className='header-box'>
               <PageHeader>
                  <Menu mode='horizontal' className='menu--color'>
                     <Menu.Item>BREEDS</Menu.Item>
                     <Menu.Item>RESOURCES</Menu.Item>
                  </Menu>
               </PageHeader>
               <button className='btn-logout'>
                  <Link to='/app'>Logout</Link>
               </button>
            </div> */}

         </div>
      )
   }
}
