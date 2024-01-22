import React from 'react'
import styled from 'styled-components'
import SideNav from '../components/SideNav'
import { Grid } from '@mui/material'
import MainContainer from '../components/MainContainer'

const Home = () => {
  return (
    <Grid container >
      <Grid xs={3}>
        <SideNav />
      </Grid>
      <Grid xs={9}>
        <MainContainer />
      </Grid>
    </Grid>
  )
}

export default Home