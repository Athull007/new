import { Button, ButtonBase, Typography } from '@mui/material'
import React, { useState } from 'react'

const State = () => {
    var[page,setpage]=useState("")
    const Homename =()=>{
        setpage("Home page")
    }
    const galleryname =()=>{
        setpage("Gallery")
    }
    const contactname=()=>{
        setpage("contact page")
    }
  return (
    <div>
      <Button variant='contained' color="secondary" onClick={Homename}>Home page</Button>
      <Button variant='contained' color="primary" onClick={galleryname}>Gallery</Button>
      <Button variant='contained' color="success" onClick={contactname}>Contact page</Button>
      <Typography>Welcome to {page}</Typography>
    </div>
  )
}

export default State
