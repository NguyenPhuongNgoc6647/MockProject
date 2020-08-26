import React from 'react'
import {SearchOutlined} from '@ant-design/icons'
import axios from "axios"
import autoGetToken from './autoGetToken'


async function callApi() {
   return await axios.get('https://api.petfinder.com/v2/${typeAnimals}', {
     headers: {
       'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJWMGhZVUkxY28ybWFkZ2piaDNob2tCcjE3V2pjdHR0ZnNMc2VGUlpiTVo2dUc1S3E5biIsImp0aSI6IjU2Nzc5ODEyODM1Mjc2YzMxYjBlY2I5YWQ3Nzg3N2MyOGM0MTllOGRjNmEwMjlmNzU2MzQwZWU4YjI1YjI4OTU2ZDliOTBjNTAyZTdkMWUyIiwiaWF0IjoxNTk4Mjg0ODkzLCJuYmYiOjE1OTgyODQ4OTMsImV4cCI6MTU5ODI4ODQ5Mywic3ViIjoiIiwic2NvcGVzIjpbXX0.n9mrP9tyQaEgoK2nFuP_xLaEgYs2NK73_u0p15X9Dt4W0ojS2pTP3VCk8v1vFOxLWUwNi_A4Q1hy-fjvYQTgEuj2StO6wxK72t_1SRqdrkGXYzOLnFewXyLjgDeXF6F_nkRh0Iul4TkE6MTnQCEn4q0KsH-GBHqoe5yqWbGhRw28hpsCBUtnZokMDF6sN0Luji_z1tGXzbblA8P9WVANTlNb0vnKMqOHxkWH7A7zE7rpOcH-DY6GmFCZgDEYU6k2IILG0UYDi7MzrqeMmnDCYOtdI9hBaw313K10zZUEzBo5FBar5JYbnmz0biekaHxwbBfSN8HS_35JFJMvIi9w-g'
     }
   })
 }
 
class Search extends React.Component {
   constructor(props){
      super(props)
      this.setState({
         value:'',
         dataResult:{},
         dataAnimals:[],
         pets:[],
         pet: {},
      })
   }

   componentDidMount = async () => {
      try {
         var apiSearch = await callApi()
         var dataResult = apiSearch.data
      } catch (error) {
         console.error(error)
      }
      if(dataResult != null){
         this.setState({
            dataResult: dataResult,
            dataAnimals: dataResult.animals,
            // pets: filteredPets(),
         })
      }


      // await autoGetToken()

      // this.filteredPets = () =>{
      //    if(this.state.dataAnimals != null){
      //       this.state.dataAnimals.filter(pet =>{
      //          return pet.type.toLowerCase().includes(this.state.inputValue.toLowerCase())
      //       //   return  this.state.dataAnimals.map(pet =>{pet.type.toLowerCase().include(this.state.valueInput.toLowerCase())})
      //       })
      //    }
      // }
      // console.log('filter: ', this.state.pets)
      // console.log('dataResult search: ',this.state.dataResult)
      // console.log('dataAnimals search: ', this.state.dataAnimals)
   }

   render(){
      console.log('props có gì: ', this.props)
      console.log('valueInput: ', this.props.valueInput)
      return(
         <div className='search-box'>
            <input
               placeholder='Enter pet type...'
               value = {this.props.valueInput}
               onChange={this.props.handle}
               className='input-search'
               type='text'/>
            <SearchOutlined/>
         </div>   
      )
   }
}
export default Search