import React from 'react'
import { Grid, Typography } from '@mui/material'
import { About, AboutCss } from '../../constants'
const PersonalDetails = () => {
  return (
    <Grid sx={{ ...AboutCss.PersonGrid }}>
      <Grid style={{ display: 'flex', flexDirection: 'column', }}>
        {Object.entries(About).slice(3, 8).map(([key, value]) => {
          return (
            <Grid sx={{ ...AboutCss.Persons }}>
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
      <Grid style={{ display: 'flex', flexDirection: 'column', }}>
        <Grid style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
          {Object.entries(About).slice(8).map(([key, value]) => {
            return (
              <Grid sx={{ ...AboutCss.Persons }}>
                <Grid>
                  <Typography variant="body" component="div" align='left' fontWeight={800}>
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