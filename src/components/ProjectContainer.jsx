import { Button, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import img from '../assets/gowr.jpg'
import MainContainer from './MainContainer'
import ProjectCard from './ProjectCard'
import { motion } from 'framer-motion'

const ProjectContainer = () => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
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
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          width: '60vw',
          color: 'white',
          scrollBehavior: 'smooth',

        }}
      >
        <Grid style={{ display: "flex", flexDirection: "column", }}>
          <Grid style={{ padding: '1rem', backgroundColor: 'lightgray', borderRadius: '10px', }}>
            <Typography variant='h4'>
              My Project
            </Typography>
          </Grid>
          <Grid
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              display: "flex",
              flexDirection: "row",
              overflow: 'hidden',
              backgroundColor: 'white',
              ...(isHovered && { transform: 'scale(1.1)' }), // Apply transform on hover
              transition: 'transform 0.15s ease-in-out',
            }}>
            {/* {isHovered && (
              <Typography variant='h6' style={{ margin: '10px', textAlign: 'center', color: 'white' }}>
                project
              </Typography>
            )} */}
            <ProjectCard img={img} />
          </Grid>

        </Grid>
      </motion.div >
    </Grid>
  )
}

export default ProjectContainer