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
import UserContext from './exam/userContext'

async function getDefaultAnimalsPage(token) {
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
    }
  }

  componentDidMount = async () => {
    try {
      const result = await autoGetToken()
      let token = ''
      if (result) {
        token = result.data.access_token
      }
      if (token) {
        const animalsPage = await getDefaultAnimalsPage(token)
        if (animalsPage.data !== null) {
          this.setState({
            data: animalsPage.data,
            animals: animalsPage.data.animals,
            pagination: animalsPage.data.pagination,
          })
        }
      }
    } catch (error) {
      console.error(error)
    }
  }

  logout = () => {
    localStorage.clear()
  }

  setAnimals = (animals) => {
    this.setState({ animals })
  }

  render() {
    console.log('this context animal: ', this.state.animals)
    return (
      <div className='col'>
        <Router>
          <UserContext.Provider value={{
            animals: this.state.animals,
            setAnimals: this.setAnimals,
          }}>
            <div className='header-box'>
              <PageHeader>
                <Menu mode='horizontal' className='menu--color' style={{ borderBottom: 'none' }}>
                  <Menu.Item>BREEDS</Menu.Item>
                  <Menu.Item>RESOURCES</Menu.Item>
                </Menu>
              </PageHeader>
              <div className='log'>
                <Search result={this.props.data} />
                <div className='log-btn'>
                  <Link to='./exam/wishlist'>
                    <HeartOutlined style={{ marginRight: '30px', fontSize: '20px' }} />
                  </Link>
                  <button className='btn-logout'>
                    <Link to='/index' onClick={this.logout()}>Logout</Link>
                  </button>
                  <FormLogin />
                </div>
              </div>
            </div>
            <div className='content'>
              <Home />
              <PetAvailable
                value={{
                  data: this.state.animals,
                }}
              />
              <PlaningAdopt />
            </div>
            <div className='footer-box'>
              <Footer />
            </div>
          </UserContext.Provider>
          <Switch>
            <Route path='/exam/welcomelogin'>
              <FormLogin />
            </Route>
            {/* <Route path='/exam/Home'>
              <Home />
            </Route> */}
          </Switch>
        </Router>
      </div >
    )
  }
}

export default Index
