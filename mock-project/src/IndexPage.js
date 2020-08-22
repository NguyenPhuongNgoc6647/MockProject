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
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJWMGhZVUkxY28ybWFkZ2piaDNob2tCcjE3V2pjdHR0ZnNMc2VGUlpiTVo2dUc1S3E5biIsImp0aSI6ImY0ZmNmYjNjOTE0NGUyZjA3MjgyMGE2MjkzYTRkYjA2Yjg1MGYxYWYyYmU5OTc4NzhlYWQwN2QwYTJjNzE2YmEyNDAyMDY4ZWVlZDRmMTI5IiwiaWF0IjoxNTk4MDU4Nzg5LCJuYmYiOjE1OTgwNTg3ODksImV4cCI6MTU5ODA2MjM4OSwic3ViIjoiIiwic2NvcGVzIjpbXX0.X2R-7QhfPg8I4JmshbZ7kacoRxGoqofNflkhGoQDi9ozv70pIw6lBczi0abr4tZqHpyYQTMJyUbPHRdErqxG9FvEn5nbzpTI3CzNxvmSQAMQT6JbmqjE_qo-oJzIQKM0OAqfv9zeO_rXzfSrGo9LdgLgKpkElKFG_kTE0EGU7PXAg8ZeL4CPbIBSy53HiqlTJmk9In6QeB5lzWGPwzQhOqU6qf5cjN_tVIEo0Wbx65vG7FjqZIK-En64OHquN5vKJLvm924fcPT5jYnwOog6inULK0F9Kwglqrigo2fZJDlY4m3Qgxsiy6NJCotfvQtpBW5M85dn0yLWr1lLui5zNQ'
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
      searchField:'',    }
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
              <Search valueInput ={this.state.searchField}  handle = {(e) => this.handleSearchChange(e)}></Search>
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
