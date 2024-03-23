// SideNav.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ContactsIcon from '@mui/icons-material/Contacts';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import Toggle from './ToggleButton';
import { SideNavCss } from '../../constants';
// import Gowrilogo1 from '../../assets/Gowrilogo1.png'

const SideNav = () => {
  return (
    <Grid container style={SideNavCss.outerGridCss}>
      <Grid item>
        <Toggle />
      </Grid>
      <Grid item sx={SideNavCss.innerGrid}>
        {/* <img
          src={Gowrilogo1}
          alt='logo-white'
          style={{ height: '100px' }}
        /> */}
        <Typography
          variant='h3'
          sx={{ ...SideNavCss.h3Variant, textDecoration: 'none' }} // Remove text decoration for h3
        >
          Gowri Shankar
        </Typography>
      </Grid>
      <Grid item style={SideNavCss.linkGrid}>
        <Link to='/' style={{ textDecoration: 'none' }}> {/* Remove text decoration for link */}
          <Grid sx={SideNavCss.textTransition}>
            <Typography
              variant='body'
              sx={{ textDecoration: 'none' }} // Remove text decoration for body text
            >
              <HomeIcon style={SideNavCss.IconStyle} />
              Home
            </Typography>
          </Grid>
        </Link>
        <Link to='/about' style={{ textDecoration: 'none' }}>
          <Grid sx={SideNavCss.textTransition}>
            <Typography
              variant='body'
              sx={{ textDecoration: 'none' }}
            >
              <PersonIcon style={SideNavCss.IconStyle} />
              About
            </Typography>
          </Grid>
        </Link>

        <Link to='/project' style={{ textDecoration: 'none' }}>
          <Grid sx={SideNavCss.textTransition}>
            <Typography variant='body' sx={{ textDecoration: 'none' }}>
              <AccountTreeIcon style={SideNavCss.IconStyle} />
              Project
            </Typography>
          </Grid>
        </Link>
        <Link to='/service' style={{ textDecoration: 'none' }}>
          <Grid sx={SideNavCss.textTransition}>
            <Typography variant='body' sx={{ textDecoration: 'none' }}>
              <SettingsSuggestIcon style={SideNavCss.IconStyle} />
              Service
            </Typography>
          </Grid>
        </Link>
        <Link to='/contact' style={{ textDecoration: 'none' }}>
          <Grid sx={SideNavCss.textTransition}>
            <Typography
              variant='body'
              sx={{ textDecoration: 'none' }}
            >
              <ContactsIcon style={SideNavCss.IconStyle} />
              Contact
            </Typography>
          </Grid>
        </Link>
      </Grid>
      <Grid item style={SideNavCss.CopyGrid}>
        <Typography
          variant='body'
          sx={{ ...SideNavCss.bodyVariant }} // Remove text decoration for body text
        >
          CopyRighted to Gowri@2024
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SideNav;
