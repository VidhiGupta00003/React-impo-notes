import React from 'react'

const Whishes = (props) => {
   console.log(props)
   return(
      <div>
   <h1>hello {props.name} playing a {props.hobby}</h1>
   {props.children}
   </div>
   )
   
   }
  


export default Whishes