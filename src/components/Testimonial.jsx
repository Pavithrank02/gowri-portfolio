import React from 'react'
import { Grid, Typography } from '@mui/material'
import { Testimonies } from '../constants'

const Testimonial = () => {
  return (
    <Grid style={{ display: 'flex', flexDirection: "row" }}>
      {Testimonies.map((key) => {
        return (
          <Grid style={{ padding: '1rem', margin: '10px', textAlign: 'justify', backgroundColor: 'gray' }}>
            <Grid>
              <Typography >
                {key.name}
              </Typography>
            </Grid>
            <Grid>
              <Typography >
                {key.testimony}
              </Typography>
            </Grid>
          </Grid>
        )
      })}
    </Grid>
  )
}

export default Testimonial