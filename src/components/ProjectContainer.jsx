import { Grid, Typography } from '@mui/material';
import React from 'react';
import img from '../assets/gowr.jpg';
import ProjectCard from './ProjectCard';

import { motion } from 'framer-motion';

const ProjectContainer = () => {

  const containerVariants = {
    hidden: { x: '-30%' },
    visible: { x: 0, transition: { type: 'spring', stiffness: 60 } },
  };

  return (
    <Grid style={{ display: "flex", flexDirection: "column", marginTop: '15vh', marginLeft: '5vw' }}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        style={{
          top: '100px',
          color: 'black',
        }}
      >
        <Grid style={{ padding: '0.7rem', backgroundColor: 'lightgray', borderRadius: '10px', width: '20vh', marginBottom: '19px', marginLeft: '5px' }}>
          <Typography variant='h5'>
            My Project
          </Typography>
        </Grid>
        <Grid container style={{ display: "flex", flexDirection: "row", flexWrap: 'wrap', marginLeft: '-35px' }}>
          <Grid item xs={6}>
            
            <ProjectCard img={img} />
          </Grid>
          <Grid item xs={6}>
            <ProjectCard img={img} />
          </Grid>
          <Grid item xs={6}>
            <ProjectCard img={img} />
          </Grid>
          <Grid item xs={6}>
            <ProjectCard img={img} />
          </Grid>
          <Grid item xs={6}>
            <ProjectCard img={img} />
          </Grid>
          <Grid item xs={6}>
            <ProjectCard img={img} />
          </Grid>
          {/* Add more pairs of ProjectCards as needed */}
        </Grid>
      </motion.div>
    </Grid>
  );
}

export default ProjectContainer;
