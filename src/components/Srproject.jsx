import { TextField, Typography } from '@mui/material';
import SelectInput from '@mui/material/Select/SelectInput';
import React, { useState } from 'react'

const Srproject = () => {
    var[inputname,Setinput]=useState({
        fname:"",
        lname:''
    })
    const inputHandler=(e)=>{
        const{name,value}=e.target
        Setinput({...inputname,[name]:value})
    }
  return (
    <div>
      
      <Typography variant='h4'>firstname {inputname.fname}</Typography>
     <TextField label="first name" variant='filled' name='fname' value={inputname.fname} onChange={inputHandler}></TextField> 
     <Typography variant='h4'>second name {inputname.lname}</Typography>
     <TextField label='enter name' name='lname' variant='standard' value={inputname.lname}onChange={inputHandler}></TextField>
 
    </div>

  )
}

export default Srproject