import React from 'react'
import {SearchOutlined} from '@ant-design/icons'

class Search extends React.Component {
   constructor(props){
      super(props)
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