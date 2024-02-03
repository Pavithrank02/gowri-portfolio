import React from 'react'
import { Grid, Typography } from '@mui/material'
import { Testimonies } from '../constants'

const Testimonial = () => {
  return (
    <Grid style={{ display: 'flex', flexDirection: "row" }}>
      {Testimonies.map((key) => {
        console.log( key)
        return (
          <Grid style={{ padding: '2rem', margin: '10px' }}>
            <Typography >
              {key.testimony}
            </Typography>
          </Grid>
        )
      })}


    </Grid>
  )
}

export default Testimonial