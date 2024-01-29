import { Card, Grid, Typography } from '@mui/material'
import React from 'react'
import img1 from '../assets/gowr.jpg'
import { About } from '../constants'
import { motion } from 'framer-motion'
const AboutMe = () => {
  return (
    <Grid container style={{ display: 'flex', flexDirection: 'column', justifyContent: "space-around", width: '60vw' }}>
      <Grid>
        <Typography variant='h4'>AboutMe </Typography>
      </Grid>
      <Grid >
        <img
          style={{ width: '50vw', height: '70vh' }}
          src={img1} />
      </Grid>
      <Grid>
        <Typography variant='h5'>{About.name} </Typography>
      </Grid>
      <Grid>
        <Typography variant='h5'>{About.role} </Typography>
      </Grid>
      <Grid>
        <motion.a animate={{ x: 0, scale: 1 }} initial={{ scale: 0 }} transition={{ type: "tween", duration: 2, delay: 1 }} download className="btn btn-primary mt-5 custom-btn fw-bold">Download My Resume</motion.a>
      </Grid>
      <Grid>
        <Card variant="outlined" sx={{ width: '40vw'}}>
          <Typography gutterBottom variant="h5" component="div">
            {About.description}
          </Typography>
        </Card>
      </Grid>
    </Grid>
  )
}

export default AboutMe