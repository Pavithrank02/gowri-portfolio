import React from 'react'
import { perSonalDetails } from '../constants'
import { Grid, Typography } from '@mui/material'
import img1 from '../assets/gowr.jpg'

const HomeDetails = () => {
  return (
    <Grid container style={{ display: 'flex', flexDirection: 'column', justifyContent: "space-around",  width: '60vw',   }}>
      <Grid xs={4}>
        <img
          style={{ width: '300px', borderRadius: "50%", marginRight: '20px' }}
          src={img1} />
      </Grid>
      <Grid container xs={8} style={{display: 'flex', flexDirection: 'column', justifyContent: "space-around",}}>
        <Grid >
          <Typography  variant="h3" style={{ color: 'white', margin: '3px' }} >
            {perSonalDetails.name}
          </Typography>
          <Typography  variant="h5" style={{ color: 'white', marginTop: '30px' }} >
            {perSonalDetails.description}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default HomeDetails