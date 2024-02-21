import { Grid, Typography } from '@mui/material';
import React from 'react';
import img from '../assets/gowr.jpg';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';
import { ProjectContainerCss } from '../constants'
import { useTheme } from '../ThemeContext';

const ProjectContainer = () => {
  const { theme } = useTheme();

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={ProjectContainerCss.containerVariants}
    >
      <Grid container xs={12} style={ProjectContainerCss.outerGrid}>
        <Grid item
          sx={{ background: theme === 'light' ? '#FFF' : '#292828', color: theme === 'light' ? 'black' : '#B0B0B0' }}
          style={{
            padding: '0.8rem',
            width: '10vw',
            marginBottom: '10px',
          }}>
          <Typography variant='h5'>
            My Project
          </Typography>
        </Grid>
        <Grid item style={ProjectContainerCss.innerGrid2}>
          <Grid item xs={5}>
            <ProjectCard img={img} />
          </Grid>
          <Grid item xs={5}>
            <ProjectCard img={img} />
          </Grid>
          <Grid item xs={5}>
            <ProjectCard img={img} />
          </Grid>
          <Grid item xs={5}>
            <ProjectCard img={img} />
          </Grid>
          <Grid item xs={5}>
            <ProjectCard img={img} />
          </Grid>
          <Grid item xs={5}>
            <ProjectCard img={img} />
          </Grid>
          {/* Add more pairs of ProjectCards as needed */}
        </Grid>
      </Grid>
    </motion.div>
  );
}

export default ProjectContainer;
