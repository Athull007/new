import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statebasics = () => {
  var [name,setname]=useState(0)
  const Changename=()=>{
    setname(name++)
  }
  const dnum=()=>{
    setname(name--)
  }
  return (
    <div>
      <Typography>{name}</Typography>
      <br>
      </br>
      <Button variant='contained' onClick={Changename}>+</Button>
      <Button variant='contained' onClick={dnum}>-</Button>
    </div>
  )
}

export default Statebasics
