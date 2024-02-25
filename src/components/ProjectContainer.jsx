import { Grid, Typography } from '@mui/material';
import React from 'react';
import img from '../assets/gowr.jpg';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';
import { ProjectContainerCss } from '../constants'
import { useTheme } from '../ThemeContext';
import { ThreeDCardDemo } from './P';

const ProjectContainer = () => {
  const { theme } = useTheme();

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      backgroundColor='blue'
      variants={ProjectContainerCss.containerVariants}
    >
      <Grid container xs={12} style={ProjectContainerCss.outerGrid}>
        <Grid item
          sx={{ background: theme === 'light' ? '#FFF' : '#292828', color: theme === 'light' ? 'black' : '#B0B0B0' }}
          style={ProjectContainerCss.innerGrid1}>
          <Typography variant='h5'>
            My Project
          </Typography>
        </Grid>
        <Grid item style={ProjectContainerCss.innerGrid2}>
          <Grid xs={5}>
            <ProjectCard img={img} />
          </Grid>
          <Grid xs={5}>
            <ProjectCard img={img} />
          </Grid>
          <Grid xs={5}>
            <ProjectCard img={img} />
          </Grid>
          <Grid xs={5}>
            <ProjectCard img={img} />
          </Grid>
          <Grid xs={5}>
            <ProjectCard img={img} />
          </Grid>
          <Grid xs={5}>
            <ProjectCard img={img} />
          </Grid>

        </Grid>
      </Grid>
    </motion.div>
  );
}

export default ProjectContainer;
