// ProjectPage.js
import React from 'react';
import { Grid, Typography, makeStyles } from '@mui/material';
import { motion } from 'framer-motion';
import ProjectItem from './ProjectItem';
import { projectsData } from '../constants';
import MainContainer from './MainContainer';

const useStyles = makeStyles((theme) => ({
  projectsContainer: {
    position: 'absolute',
    top: 0,
    marginLeft: '30vw',
    padding: theme.spacing(4),
    [theme.breakpoints.down('md')]: {
      marginLeft: '20vw',
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: '10vw',
    },
  },
  sectionTitle: {
    marginBottom: theme.spacing(3),
  },
}));

const ProjectPage = () => {
  const classes = useStyles();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <>
      <MainContainer />
      <Grid className={classes.projectsContainer}>
        <motion.div initial="hidden" animate="visible" variants={containerVariants}>
          <Typography variant="h3" align="center" className={classes.sectionTitle} gutterBottom>
            Projects
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            {projectsData.map((project) => (
              <Grid key={project.id} item xs={12} md={6} lg={4}>
                <ProjectItem project={project} />
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Grid>
    </>
  );
};

export default ProjectPage;
