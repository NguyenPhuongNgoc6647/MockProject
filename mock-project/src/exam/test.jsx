import React from 'react'

export default class Test extends React.Component {
   constructor(props) {
      super(props)
   }
   render() {
      console.log('data test: ', this.props.value.data)
      const { data } = this.props.value
      return (
         <div>
            {/* {data.map( item => <li key={item.id}>{item.id}</li>
            )} */}
            {data.map(item => (
               <div key={item.id}>
                  <ul>
                     <li>{item.id}</li>
                     <li>{item.age}</li>
                     <li>
                        <img src={item.url}></img>
                     </li>
                     <li>{item.name}</li>
                  </ul>
               </div>
            ))}
         </div>
      )
   }
}  