import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Typography } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ContactsIcon from '@mui/icons-material/Contacts';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import { SideNavCss } from '../constants'

const SideNav = () => {
  return (
    <Grid
      style={
        SideNavCss.outerGridCss
      }>
      <Grid
        sx={SideNavCss.innerGrid}
      >
        <Typography
          variant='h3'
          sx={SideNavCss.h3Variant}
        >
          Gowri Shankar
        </Typography>
      </Grid>
      <Grid
        style={SideNavCss.linkGrid}>
        <Link to='/'>
          <Grid
            sx={SideNavCss.textTransition}>
            <Typography
              variant='body'
            >
              <HomeIcon style={SideNavCss.IconStyle} />
              Home
            </Typography>
          </Grid>
        </Link>
        <Link to='/about'>
          <Grid
            sx={SideNavCss.textTransition}
          >
            <Typography
              variant='body'
            >
              <PersonIcon style={SideNavCss.IconStyle} />
              About
            </Typography>
          </Grid>
        </Link>
        <Link to='/contact'>
          <Grid sx={SideNavCss.textTransition} >
            <Typography
              variant='body'
            >
              <ContactsIcon style={SideNavCss.IconStyle} />
              Contact
            </Typography>
          </Grid>
        </Link>
        <Link to='/project'>
          <Grid sx={SideNavCss.textTransition} >
            <Typography variant='body' >
              <AccountTreeIcon style={SideNavCss.IconStyle} />
              Project
            </Typography>
          </Grid>
        </Link>
        <Link to='/service'>
          <Grid sx={SideNavCss.textTransition} >
            <Typography variant='body' >
              <SettingsSuggestIcon style={SideNavCss.IconStyle} />
              Service
            </Typography>
          </Grid>
        </Link>
      </Grid>
      <Grid style={SideNavCss.CopyGrid}>
        <Typography
          variant='body'
        >
          CopyRighted to Gowri@2024
        </Typography>
      </Grid>
    </Grid>
  )
}

export default SideNav