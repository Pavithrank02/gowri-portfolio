import React from 'react'
import styled from 'styled-components'
import SideNav from '../components/SideNav'
import { Grid } from '@mui/material'
import MainContainer from '../components/MainContainer'
import HomeDetails from '../components/HomeDetails'

const Home = () => {
  return (
    <Grid container style={{backgroundColor: 'black'}}>
      <Grid xs={4}>
        <SideNav />
      </Grid>
      <Grid xs={8}>
        <HomeDetails />
      </Grid>
    </Grid>
  )
}

export default Home