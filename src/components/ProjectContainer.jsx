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
          color: 'white',
          scrollBehavior: 'smooth',

        }}
      >
        <Grid style={{ display: "flex", flexDirection: "column", marginLeft: '5vw'}}>
          <Grid style={{ padding: '1rem', backgroundColor: 'lightgray', borderRadius: '10px', width: '20vh' }}>
            <Typography variant='h5'>
              My Project
            </Typography>
          </Grid>
          <Grid
            style={{
              display: "flex",
              flexDirection: "row",
              overflow: 'hidden',
              backgroundColor: 'white',
              overflowX: 'hidden',
              width: '65vw'

            }}>
            <Grid
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{
                ...(isHovered && { transform: 'scale(1.1)' }), // Apply transform on hover
                transition: 'transform 0.15s ease-in-out',
              }}>
              <ProjectCard img={img} />
              {isHovered && (
                <Typography variant='h6' style={{ margin: '10px', textAlign: 'center', color: 'white' }}>
                  project
                </Typography>
              )}
            </Grid>
            <Grid
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{
                ...(isHovered && { transform: 'scale(1.1)' }), // Apply transform on hover
                transition: 'transform 0.15s ease-in-out',
              }}>
              <ProjectCard img={img} />
              {isHovered && (
                <Typography variant='h6' style={{ margin: '10px', textAlign: 'center', color: 'white' }}>
                  project
                </Typography>
              )}
            </Grid>
            <Grid
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{
                ...(isHovered && { transform: 'scale(1.1)' }), // Apply transform on hover
                transition: 'transform 0.15s ease-in-out',
              }}>
              <ProjectCard img={img} />
              {isHovered && (
                <Typography variant='h6' style={{ margin: '10px', textAlign: 'center', color: 'white' }}>
                  project
                </Typography>
              )}
            </Grid>
            <Grid
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{
                ...(isHovered && { transform: 'scale(1.1)' }), // Apply transform on hover
                transition: 'transform 0.15s ease-in-out',
              }}>
              <ProjectCard img={img} />
              {isHovered && (
                <Typography variant='h6' style={{ margin: '10px', textAlign: 'center', color: 'white' }}>
                  project
                </Typography>
              )}
            </Grid>
          </Grid>

        </Grid>
      </motion.div >
    </Grid>
  )
}

export default ProjectContainer