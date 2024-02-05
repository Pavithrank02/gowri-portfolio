import React from 'react'
import { Grid, Typography } from '@mui/material'
import { About, Testimonies } from '../constants'
const PersonalDetails = () => {
  return (
    <Grid xs={12} columnGap={30} style={{ display: 'flex', flexDirection: 'row', width: '50vw' }}>
      <Grid xs={6} style={{ display: 'flex', flexDirection: 'column', }}>
        {Object.entries(About).slice(3, 8).map(([key, value]) => {
          return (
            <Grid style={{ display: 'flex', flexDirection: 'row', }}>
              <Grid>
                <Typography gutterBottom variant="body" component="div" align='justify' fontWeight={800}>
                  {key}:
                </Typography>
              </Grid>
              <Grid>
                <Typography gutterBottom variant="body" component="div" align='justify' style={{ marginLeft: '10px' }}>
                  {value}
                </Typography>
              </Grid>
            </Grid>
          )
        })}
      </Grid>
      <Grid xs={6} style={{ display: 'flex', flexDirection: 'column', }}>
        <Grid style={{ display: 'flex', flexDirection: 'column', }}>
          {Object.entries(About).slice(8).map(([key, value]) => {
            return (
              <Grid style={{ display: 'flex', flexDirection: 'row', }}>
                <Grid>
                  <Typography gutterBottom variant="body" component="div" align='justify' fontWeight={800}>
                    {key}:
                  </Typography>
                </Grid>
                <Grid>
                  <Typography gutterBottom variant="body" component="div" align='justify' style={{ marginLeft: '10px' }}>
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