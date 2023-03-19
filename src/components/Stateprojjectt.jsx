import { Button, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Stateprojjectt = () => {
    var[name,setname]=useState("")
    const Changename=(event)=>{
        const{name,value}=event.target;
        setname(value)
    }
    useEffect(()=>{
        setname("[Enter name]")
    },[])
  return (
    <div>
      <Typography variant='h3'>MY NAME IS {name}</Typography><br></br>
      <TextField  label='enter name' variant='outlined' onChange={(e)=>Changename(e)}></TextField><br></br>
    
    </div>
  )
}

export default Stateprojjectt
