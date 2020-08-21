import React, { useState } from 'react'
import './App.css'
import FormLogin from './exam/FormLogin'
import {PageHeader, Menu} from 'antd'
import { HeartOutlined } from '@ant-design/icons'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom"
import Home from './exam/Home'
import axios from "axios"
import PetAvailable from './exam/PetAvailable'
import Footer from './exam/Footer'
import PlaningAdopt from './exam/PlaningAdopt'
import Search from './exam/Search'

// const {Header, Content, Sider} = Layout

async function testApi() {
  return await axios.get('https://api.petfinder.com/v2/animals?type=dog&page=2', {
    headers: {
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJWMGhZVUkxY28ybWFkZ2piaDNob2tCcjE3V2pjdHR0ZnNMc2VGUlpiTVo2dUc1S3E5biIsImp0aSI6ImUxMGE2OGIyOWQ1N2FjMjFhYzlkMmE1NmNkMDM2ZTU1YTZhMzAxZjhjMTk1NjQ0NjYwZDNlNjdkYWVmNmQ3YjlmMzlkMWM4NDFmYjYxNjg1IiwiaWF0IjoxNTk4MDMwODc3LCJuYmYiOjE1OTgwMzA4NzcsImV4cCI6MTU5ODAzNDQ3Nywic3ViIjoiIiwic2NvcGVzIjpbXX0.XT5tcSY_f_StRZRTxdNv2ogijgRi5dttnDBnleeRVW-DmXV4zIR96OTCcilqIVqWn1f71YCNa7FADTxN5Sy_KdF_3Crsu1W0GPBoa9d8UhjNjKtf7D9FylQEVuEPU6Xvc2qT-5mmd8YNsd1vM7HMDNDH77w-1N1Bq5NrV1LM-pMX_4NW3vTGIiTXuNBb_vKdyIrvRHFYU-eHT2CpG4F2xPjG8cx6SNI8jQT_TGkYvD3YWiiwwG1rW7EGHnkR6JLSNDfqooc4oyFU0K-RiDIIhfUeSQix6k1ynvG6QwmZ2u4rca36yWkcxRNoOI7TRKN_xK6hF4iO2H3Y5ElWQPekIg'
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
      searchField:'',
    }
  }

  logout = () =>{
    localStorage.clear()
  }

  handleSearchChange = (e) => {
    // console.log('e.target.value test: ', e.target.value)
    this.setState({
      searchField: e.target.value,
    })
  }

  componentDidMount = async () => {
    try {
      var api = await testApi()
      // console.log('data api get function testApi: ', api.data)
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
              {/* <SearchBar></SearchBar> */}
              <Search valueInput ={this.state.searchField} handle = {(e) => this.handleSearchChange(e)}></Search>
              <HeartOutlined style={{ marginRight: '30px', fontSize: '20px' }} />
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
