import { TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Neww = () => {

     var[fname,setname]=useState("")
     const ChangeName=(event)=>{
        const{name,value}=event.target;
        setname(value)
    }
    var[lname,setlname]=useState("")
    const Change=(event)=>{
    const{name,value}=event.target
    setlname(value)
    }
        useEffect(()=>{
        setname("[enter name]")
    },[])       
  return (
    <div>
      <Typography variant='h4'>firstname {fname}</Typography>
     <TextField label="enter name" variant='filled' onChange={(e)=>ChangeName(e)}></TextField> 
     <Typography variant='h4'>second name {lname}</Typography>
     <TextField label='enter name' variant='standard' onChange={(e)=>Change(e)}></TextField>
 
    </div>
  )
}

export default Neww
