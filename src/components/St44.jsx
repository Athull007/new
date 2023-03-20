import { Button, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const St44 = () => {
    const[submitted,setsubmitted]=useState(false);

    var[inputname,Setinput]=useState({
        fname:"",
        lname:''
    })
    var[validation,setvalidation]=useState({
        fname:"",
        lname:''
    })

    const inputHandler=(e)=>{
        const{name,value}=e.target
        Setinput({...inputname,[name]:value})
    }
    const checkvalidation=()=>{
        let errors = validation;
        if(!inputname.fname.trim()){
            errors.fname="FIRST NAME IS REQUIRED";
        }else{
            errors.fname="";
        }
        setvalidation(errors);
    }
useEffect(()=>{
    checkvalidation();
});
const handlesubmit=(e)=>{
    e.preventDefault();
    setsubmitted(true);
};
  return (
    <div>
        
<form onSubmit={handlesubmit}>
    <Typography>welcome</Typography>
      <TextField label="Enter name" variant='outlined' name='fname' value={inputname.fname} onChange={inputHandler}></TextField><br></br>
      {(validation.fname && submitted) && <p> {validation.fname}</p>}
      <Button variant='contained' type='submit'>SAVE</Button>
      </form>
    </div>
  )
}

export default St44
