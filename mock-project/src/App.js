import React, { useState } from 'react'
import './App.css'
import FormLogin from './exam/FormLogin'
import { PageHeader, Menu, Grid, Col, Row } from 'antd'
import { HeartOutlined } from '@ant-design/icons'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Home from './exam/Home'
import SearchBar from 'antd/lib/input/Search'
import axios from "axios"
import PetAvailable from './exam/PetAvailable'
// import Drop from './exam/dropDown'
// import UserProvider from './UserContext'
// import Test from './exam/test'
import Footer from './exam/Footer'

async function testApi() {
  return await axios.get('https://api.petfinder.com/v2/animals?type=dog&page=2', {
    headers: {
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJWMGhZVUkxY28ybWFkZ2piaDNob2tCcjE3V2pjdHR0ZnNMc2VGUlpiTVo2dUc1S3E5biIsImp0aSI6Ijg5YWNkNDE0ZjhjODU3NTU3Mzk0Y2ZmYjFiZWNlZmIzMTUwNjY5MjQyYTIzZDZhMmZmMDgwN2NhMzQxNmZmMzNiZWY1MGI1NzQ0YzlhZWMxIiwiaWF0IjoxNTk3OTM2MTQwLCJuYmYiOjE1OTc5MzYxNDAsImV4cCI6MTU5NzkzOTc0MCwic3ViIjoiIiwic2NvcGVzIjpbXX0.dMvUlsdRmgIvrRbL2tZ37-lITw0NduMUESVU3QA3cXqzQbXjl4JmuQAedSIVLeh8oU86N4rNQukyrCnXflytzacwVGPdYV8Hr9Ms_FvFBsvd31zDweInj37tpsq2wpO4vU1A-8ukp_ZIx5cu_cT5z-iAkyDnwzPp6btn-E4lrXkl_HvqyrRlBq29AJANBAApQbu14wg0PcPA7wrvtBjIXBh4b3tV_-MMK5Ixlwfvfo1fdV3WPUkfOg57jN0Ey4F4N7tYMXMz3ezTholE_BaitFNCOXKZ9WRHp__V0uLrMFpesllpxNrMNMJO519pObt5VHfjqNeFvCjcVBDiIaAqXw'
    }
  })
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {},
      animals: [],
      pagination: [],
    }
  }
  componentDidMount = async () => {
    try {
      var api = await testApi()
      console.log('data api get function testApi: ', api.data)
      var dataApi = api.data
    } catch (error) {
      console.error(error);
    }
    this.setState({

      data: dataApi,
      animals: dataApi.animals,
      pagination: dataApi.pagination,
    })
    // console.log('data: ', this.state.animals)
  }

  render() {
    console.log('data Animals: ', this.state.animals)
    return (
      <div className='col'>
        <Router>
          <div className='header-box'>
            <PageHeader>
              <Menu mode='horizontal' className='menu--color' style={{ borderBottom: 'none' }}>
                <Menu.Item>BREEDS</Menu.Item>
                <Menu.Item>RESOURCES</Menu.Item>
              </Menu>
            </PageHeader>
            <div className='log'>
              <SearchBar></SearchBar>
              <HeartOutlined style={{ marginRight: '30px', fontSize: '20px' }} />
              <button className='btn-logout'>
                <Link to='/app'>Logout</Link>
              </button>
              <FormLogin />
            </div>
          </div>
          <div className='content'>
            <Home />
              <PetAvailable value={{data: this.state.animals}}></PetAvailable>
              {/* <Test value={{data: this.state.animals}}></Test> */}
          </div>
          <div className='footer'>
            <Footer/>
          </div>  
          <Switch>
            <Route path='/exam/welcomelogin'>
              {/* <WelcomeLogin /> */}
              <FormLogin />
            </Route>
            {/* <Route path='/exam/Home'>
              <Home />
            </Route> */}
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
