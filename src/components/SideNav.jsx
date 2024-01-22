import { Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ContactsIcon from '@mui/icons-material/Contacts';
import AccountTreeIcon from '@mui/icons-material/AccountTree';


const SideNav = () => {
  return (
    <Grid style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly',  backgroundColor: 'black', color: 'white'}}>
     <Typography style={{color: 'white'}}>Gowri Shankar </Typography> 
     <Link to='/'><Typography style={{color: 'white'}}><HomeIcon /> Home </Typography> </Link>
     <Link to='/about'><Typography style={{color: 'white'}}><PersonIcon /> About </Typography></Link>
     <Link to='/contact'><Typography style={{color: 'white'}}><ContactsIcon /> Contact </Typography></Link>
     <Link to='/project'><Typography style={{color: 'white'}}><AccountTreeIcon /> Project </Typography></Link>
    </Grid>
  )
}

export default SideNav