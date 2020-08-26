import React, { useState } from 'react'
import './App.css'
import FormLogin from './exam/FormLogin'
import { PageHeader, Menu } from 'antd'
import { HeartOutlined } from '@ant-design/icons'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Home from './exam/Home'
import axios from "axios"
import PetAvailable from './exam/PetAvailable'
import Footer from './exam/Footer'
import PlaningAdopt from './exam/PlaningAdopt'
import Search from './exam/Search'
import autoGetToken from './exam/autoGetToken'

async function testApi(token) {
  return await axios.get('https://api.petfinder.com/v2/animals', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
}

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {},
      animals: [],
      pagination: [],
      searchField: '',
      valueSearch: '',
    }
  }

  logout = () => {
    localStorage.clear()
  }

  handleSearchChange = (e) => {
    this.setState({
      searchField: e.target.value,
    })
  }

  componentDidMount = async () => {
    try {
      const result = await autoGetToken()
      let token = ''
      if (result) {
        token = result.data.access_token
        // localStorage.setItem('access_token', JSON.stringify({
        //   token,
        //   expires_at: result.data.expires_at,
        // }))
      }
      if (token) {
        const api = await testApi(token)
        const dataApi = api.data
        console.log('debug-dataApi', dataApi)
        if (dataApi !== null) {
          this.setState({
            data: dataApi,
            animals: dataApi.animals,
            pagination: dataApi.pagination,
          })
        }
      }
    } catch (error) {
      console.error(error)
    }
  }
  
  render() {
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
              <Search
                valueInput={this.state.searchField}
                handle={(e) => this.handleSearchChange(e)} />
              <Link to='./exam/wishlist'>
                <HeartOutlined style={{ marginRight: '30px', fontSize: '20px' }} />
              </Link>
              <button className='btn-logout'>
                <Link to='/index' onClick={this.logout()}>Logout</Link>
              </button>
              <FormLogin />
            </div>
          </div>
          <div className='content'>
            <Home />
            <PetAvailable
              value={{
                data: this.state.animals,
                resultSearch: this.state.searchField,
              }}
            ></PetAvailable>
            <PlaningAdopt></PlaningAdopt>
          </div>
          <div className='footer-box'>
            <Footer />
          </div>
          <Switch>
            <Route path='/exam/welcomelogin'>
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

export default Index
