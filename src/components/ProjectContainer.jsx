import { Grid, Typography } from '@mui/material';
import React from 'react';
import img from '../assets/gowr.jpg';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';
import {ProjectContainerCss} from '../constants'

const ProjectContainer = () => {


  return (
    <Grid style={ProjectContainerCss.outerGrid}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={ProjectContainerCss.containerVariants}
        style={{
          top: '100px',
          color: 'black',
        }}
      >
        <Grid style={ProjectContainerCss.innerGrid1}>
          <Typography variant='h5'>
            My Project
          </Typography>
        </Grid>
        <Grid container style={ProjectContainerCss.innerGrid2}>
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
