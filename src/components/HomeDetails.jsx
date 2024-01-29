import React from 'react'
import { perSonalDetails } from '../constants'
import { Grid, Typography } from '@mui/material'
import img1 from '../assets/gowr.jpg'

const HomeDetails = () => {
  return (
    <Grid container style={{ display: 'flex', flexDirection: 'column' }}>
      <Grid >
        <img
          style={{ width: '400px', borderRadius: "50%" }}
          src={img1} />
      </Grid>
      <Grid container xs={12} >
        {Object.values(perSonalDetails).map((value, index) => (
          <Grid xs={8}>
            <Typography key={index} variant="h4" style={{ color: 'white', margin: '3px' }} >
              {value}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>
  )
}

export default HomeDetails