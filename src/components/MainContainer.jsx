import { Typography } from '@mui/material'
import React from 'react'
import { perSonalDetails } from '../constants'

const MainContainer = () => {
  console.log(perSonalDetails)
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#131314' }}>
      <Grid container >
        <Typography variant='h3' style={{ color: 'white' }}>{perSonalDetails.name}  </Typography>
        <Typography variant='body' style={{ color: 'white' }}>{perSonalDetails.description}  </Typography>
      </Grid>
    </div>
  )
}

export default MainContainer