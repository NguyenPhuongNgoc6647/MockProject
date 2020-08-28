import React from 'react'
import { SearchOutlined } from '@ant-design/icons'
import axios from "axios"
import autoGetToken from './autoGetToken'
import UserContext from './userContext'


async function callApi(token) {
   return await axios.get(`https://api.petfinder.com/v2/animals`, {
      headers: {
         'Authorization': `Bearer ${token}`
      }
   })
}

class Search extends React.Component {
   static contextType = UserContext
   constructor(props) {
      super(props)
      this.state = {
         valueInput: '',
         pets: [],
      }
   }

   handleChangeSearch = (e) => {
      e.preventDefault()
      this.setState({
         valueInput: e.target.value
      })
   }

   handleClickSearch = async () => {
      const test = await autoGetToken()
      let token = ''
      if (test) {
         token = test.data.access_token
      }
      try {
         const search = this.state.valueInput
         console.log('search: ', search)
         const api = await axios.get(`https://api.petfinder.com/v2/animals?type=${search}`, {
            headers: {
               'Authorization': `Bearer ${token}`
            }
         })
         this.setState({
            pets: api.data.animals,
            valueInput: '',
         })
         this.context.setAnimals(this.state.pets)
         console.log('context animals: ', this.context.animals)
      } catch (error) {
         this.setState({
            valueInput: '',
         })
         alert('Không tìm thấy kết quả nào phù hợp!')
         console.error(error)
      }
   }

   componentDidMount = async () => {
      try {
         var apiSearch = await autoGetToken()
         let token = ''
         if (apiSearch) {
            token = apiSearch.data.access_token
            // console.log('token: ', token)
         }
         if (token) {
            const dataSearch = await callApi(token)
            if (dataSearch.data !== null) {
               this.setState({
                  pets: dataSearch.data.animals
               })
               
            }
         }
      } catch (error) {
         console.error(error)
      }
   }

   render() {
      return (
         <div className='search-box'>
            <input
               value={this.state.valueInput}
               placeholder='Enter pet type...'
               onChange={(e) => this.handleChangeSearch(e)}
               // result ={this.state.pets}
               className='input-search'
               type='text'
            />
            <SearchOutlined onClick={(e) => this.handleClickSearch(e)} />
         </div>
      )
   }
}

export default Search