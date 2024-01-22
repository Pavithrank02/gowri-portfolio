import { Grid } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'


const SideNav = () => {
  return (
    <Grid style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center',  backgroundColor: 'black', color: 'white'}}>
     <Link to='/'>Home</Link>
     <Link to='/about'>About</Link>
     <Link to='/contact'>Contact</Link>,
     <Link to='/project'>Project</Link>
    </Grid>
  )
}

export default SideNav