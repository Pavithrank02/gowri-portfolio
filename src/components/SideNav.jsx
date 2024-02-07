import { Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ContactsIcon from '@mui/icons-material/Contacts';
import AccountTreeIcon from '@mui/icons-material/AccountTree';


const SideNav = () => {
  return (
    <Grid
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        justifyContent: 'center',
        backgroundColor: 'black',
        color: 'white',
      }}>
      <Grid
        container
        sx={{
          padding: '20px',
          textAlign: 'center',
          '@media (max-width:600px)': {
            padding: '10px',
          },
        }}
      >
        <Typography
          variant='h3'
          sx={{
            color: 'white',
            maxWidth: '100%',
            width: '100%',
            '@media (max-width:600px)': {
              fontSize: '24px',
            },
          }}
        >
          Gowri Shankar
        </Typography>
      </Grid>
      <Grid
        style={{
          cursor: 'pointer',
          transition: 'transform 1.3s', // Add a smooth transition for the transform effect
          ":hover": {
            transform: 'scale(1.4)'
          }
        }}>
        <Link to='/'>
          <Grid style={{
            padding: '1rem',

          }}>
            <Typography
              variant='body'
              style={{
                color: 'white',
                textAlign: "left",

              }}
            >

              <HomeIcon style={{ marginBottom: '-4px', marginRight: '5px' }} />
              Home
            </Typography>
          </Grid>
        </Link>
        <Link to='/about'>
          <Grid style={{ padding: '1rem' }}>
            <Typography variant='body' style={{ color: 'white' }}>
              <PersonIcon style={{ marginBottom: '-4px', marginRight: '5px' }} />
              About
            </Typography>
          </Grid>
        </Link>
        <Link to='/contact'>
          <Grid style={{ padding: '1rem' }}>
            <Typography variant='body' style={{ color: 'white' }}>
              <ContactsIcon style={{ marginBottom: '-4px', marginRight: '5px' }} />
              Contact
            </Typography>
          </Grid>
        </Link>
        <Link to='/project'>
          <Grid style={{ padding: '1rem' }}>
            <Typography variant='body' style={{ color: 'white' }}>
              <AccountTreeIcon style={{ marginBottom: '-4px', marginRight: '5px' }} />
              Project
            </Typography>
          </Grid>
        </Link>
      </Grid>
      <Grid style={{ padding: '1rem' }}>
        <Typography
          variant='body'
          style={{ color: 'white' }}>
          CopyRighted to Gowri@2024
        </Typography>
      </Grid>
    </Grid>
  )
}

export default SideNav