import { Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ContactsIcon from '@mui/icons-material/Contacts';
import AccountTreeIcon from '@mui/icons-material/AccountTree';


const SideNav = () => {
  return (
    <Grid style={{ position: 'fixed', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'black', color: 'white' }}>
      <Grid style={{ margin: '10px' }}>
        <Typography variant='h3' style={{ color: 'white', align: "center" }}>Gowri Shankar </Typography>
      </Grid>
      <Grid style={{ padding: '1rem', }} display>
        <Link to='/'>
          <Typography variant='body'style={{ color: 'white', align: "center" }}>
            <HomeIcon style={{marginBottom: '-4px', marginRight: '5px'}}/>
            Home
          </Typography>
        </Link>
      </Grid>
      <Grid style={{padding: '1rem' }}>
        <Link to='/about'><Typography variant='body' style={{ color: 'white' }}><PersonIcon style={{marginBottom: '-4px', marginRight: '5px'}}/> About </Typography></Link>
      </Grid>
      <Grid style={{ padding: '1rem'}}>
        <Link to='/contact'><Typography variant='body' style={{ color: 'white' }}><ContactsIcon style={{marginBottom: '-4px', marginRight: '5px'}}/> Contact </Typography></Link>
      </Grid>
      <Grid style={{ padding: '1rem' }}>
        <Link to='/project'><Typography variant='body' style={{ color: 'white' }}><AccountTreeIcon style={{marginBottom: '-4px', marginRight: '5px'}}/> Project </Typography></Link>
      </Grid>
      <Grid style={{ padding: '1rem' }}>
        <Typography variant='h5' style={{ color: 'white' }}>CopyRighted to Gowri@2024 </Typography>
      </Grid>
    </Grid>
  )
}

export default SideNav