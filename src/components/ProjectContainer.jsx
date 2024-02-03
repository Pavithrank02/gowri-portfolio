import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import img from '../assets/gowr.jpg'
import MainContainer from './MainContainer'
import DescriptionModal from './DescriptionModal'
import ProjectCard from './ProjectCard'
import { motion } from 'framer-motion'

const ProjectContainer = () => {
  const containerVariants = {
    hidden: { x: '-30%' },
    visible: { x: 0, transition: { type: 'spring', stiffness: 60 } },
  };
  return (
    <Grid>
      <MainContainer />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        style={{
          position: 'absolute',
          top: '100px',
          marginLeft: '35vw',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          width: '60vw',
          color: 'white',
          scrollBehavior: 'smooth',
        }}
      >
        <Grid style={{ display: "flex", flexDirection: "column" }}>
          <Grid style={{ padding: '1rem', backgroundColor: 'lightgray', borderRadius: '10px' }}>
            <Typography variant='h4'>
              My Project
            </Typography>
          </Grid>
          <Grid style={{ display: "flex", flexDirection: "row", overflow: 'hidden', width: 'screen',}}>
            <Grid style={{ display: 'flex', flexDirection: 'column', justifyContent: "space-evenly", alignItems: 'center', backgroundColor: "white", width: '20vw', height: '50vh', marginTop: '10vh', borderRadius: '10px', marginRight: '30px' }}>
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
            <ProjectCard img={img} />
          </Grid>
        </Grid>
      </motion.div >
    </Grid>
  )
}

export default ProjectContainer