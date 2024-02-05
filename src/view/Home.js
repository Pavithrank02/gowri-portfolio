import React from 'react'
import styled from 'styled-components'
import SideNav from '../components/SideNav'
import { Grid } from '@mui/material'
import MainContainer from '../components/MainContainer'
import HomeDetails from '../components/HomeDetails'

const Home = () => {
  return (
      <Grid>
        <HomeDetails />
    </Grid>
  )
}

export default Home