import React, { useState } from 'react'
import Edit from './Edit'
import Example from './Example'
import ImageBox from './ImageBox'
import Single from './Single'
import "./Edit.css";
import Exp from './Exp'

const App = () => {

  const [change,setchange]=useState(true)

  return (
    <div style={{width:"80%",margin:"50px auto"}}>

        <ImageBox change={change} /> 
        <Single /> 
        <Edit />
        <Exp />
        
        
    </div>
  )
}

export default App