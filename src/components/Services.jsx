import React from 'react'
import { Avatar, Grid, Typography } from '@mui/material'
import { ServicesCss, ServicesProvided } from '../constants'
import { Button } from 'react-scroll'
import TransparentButton from './TransparentButton '

const Services = () => {
  return (
    <Grid container style={ServicesCss.outerGrid}>
      <Grid>
        <Grid>
          <Typography>Services</Typography>
        </Grid>
        <Grid>
        <Typography>What I Do</Typography>
        </Grid>
      </Grid>
      <Grid>
        <Grid style={ServicesCss.serviceGrid}>
          <Grid>
          <Avatar>{ServicesProvided[0].id}</Avatar>
          </Grid>
          <Grid>
            <Typography>{ServicesProvided[0].serviceName}</Typography>
          </Grid>
          <Grid>
          <Typography>{ServicesProvided[0].description}</Typography>
          </Grid>
          <Grid>
          
          </Grid>
        </Grid>
      </Grid>

    </Grid>
  )
}

export default Services