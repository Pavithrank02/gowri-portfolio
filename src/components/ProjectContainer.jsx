import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import img from '../assets/gowr.jpg'
import MainContainer from './MainContainer'
import DescriptionModal from './DescriptionModal'

const ProjectContainer = () => {
  return (
    <Grid>
      <MainContainer />
      <Grid style={{ display: "flex", flexDirection: "row" }}>
        <Grid style={{ display: 'flex', flexDirection: 'column', justifyContent: "space-evenly", alignItems: 'center', backgroundColor: "lightgray", width: '20vw', marginLeft: '30vw', height: '50vh', marginTop: '10vh', borderRadius: '10px' }}>
          <Grid>
            <Typography variant='h4'>
              Project 1
            </Typography>
          </Grid>
          <Grid >
            <img src={img} alt='img' style={{ height: '30vh', width: '16vw', borderRadius: '10px' }} />
          </Grid>
          <Grid style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '20vw' }}>
            <Grid>
              <DescriptionModal />
            </Grid>
            <Grid>
              <Button style={{ padding: '10px', backgroundColor: 'black' }}>Github</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ProjectContainer