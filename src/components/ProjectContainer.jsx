import { Button, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import img from '../assets/gowr.jpg'
import MainContainer from './MainContainer'
import ProjectCard from './ProjectCard'
import { motion } from 'framer-motion'

const ProjectContainer = () => {

  const containerVariants = {
    hidden: { x: '-30%' },
    visible: { x: 0, transition: { type: 'spring', stiffness: 60 } },
  };
  return (
    <Grid>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        style={{
          position: 'absolute',
          top: '100px',
          color: 'black',
        }}
      >
        <Grid style={{ display: "flex", flexDirection: "column", marginLeft: '5vw' }}>
          <Grid style={{ padding: '0.7rem', backgroundColor: 'lightgray', borderRadius: '10px', width: '20vh', marginBottom: '19px', marginLeft: '15px' }}>
            <Typography variant='h5'>
              My Project
            </Typography>
          </Grid>
          <Grid
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: 'flex-start',
              alignContent: 'center',
              overflow: 'hidden',
              overflowX: 'hidden',
              gridTemplateColumns: "2fr 2fr 2fr"

            }}>
            <Grid>
              <ProjectCard img={img} />
            </Grid>
            <Grid>
              <ProjectCard img={img} />
            </Grid>
            <Grid>
              <ProjectCard img={img} />
            </Grid>
          </Grid>
        </Grid>
      </motion.div >
    </Grid>
  )
}

export default ProjectContainer