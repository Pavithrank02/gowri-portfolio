import React from 'react'
import { Grid, Typography } from '@mui/material'
import { About, Testimonies } from '../constants'
const PersonalDetails = () => {
  return (
    <Grid xs={12} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
      <Grid xs={5} style={{ display: 'flex', flexDirection: 'column', }}>
        {Object.entries(About).slice(3, 8).map(([key, value]) => {
          return (
            <Grid style={{ display: 'flex', flexDirection: 'row',  justifyContent: 'space-between', padding: '5px'}}>
              <Grid>
                <Typography gutterBottom variant="body" align='left' fontWeight={800}>
                  {key}:
                </Typography>
              </Grid>
              <Grid >
                <Typography gutterBottom variant="body" align='left' style={{ color: '#B0B0B0' }}>
                  {value}
                </Typography>
              </Grid>
            </Grid>
          )
        })}
      </Grid>
      <Grid xs={5} style={{ display: 'flex', flexDirection: 'column',}}>
        <Grid  style={{ display: 'flex', flexDirection: 'column', }}>
          {Object.entries(About).slice(8).map(([key, value]) => {
            return (
              <Grid style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '5px'}}>
                <Grid>
                  <Typography  variant="body" component="div" align='left' fontWeight={800}>
                    {key}:
                  </Typography>
                </Grid>
                <Grid>
                  <Typography variant="body" component="div" align='left' style={{ color: '#B0B0B0' }}>
                    {value}
                  </Typography>
                </Grid>
              </Grid>
            )
          })}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default PersonalDetails