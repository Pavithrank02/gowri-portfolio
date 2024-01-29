// ProjectItem.js
import React from 'react';
import { Card, Typography, Chip, makeStyles } from '@mui/material';
import { motion } from 'framer-motion';

const useStyles = makeStyles((theme) => ({
  card: {
    width:'30vw', 
    backgroundColor: '#fff',
    borderRadius: theme.spacing(2),
    padding: theme.spacing(5),
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'box-shadow 0.3s ease',
    '&:hover': {
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    },
  },
  title: {
    marginBottom: theme.spacing(2),
    color: '#333',
  },
  description: {
    marginBottom: theme.spacing(3),
    color: '#555',
  },
  techStack: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: theme.spacing(1),
    marginTop: theme.spacing(2),
  },
  techChip: {
    backgroundColor: '#eee',
    color: '#333',
  },
}));

const ProjectItem = ({ project }) => {
  const classes = useStyles();

  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      whileHover={{ scale: 1.02 }}
      style={{ marginBottom: '20px' }}
    >
      <Card className={classes.card}>
        <Typography variant="h5" className={classes.title} gutterBottom>
          {project.title}
        </Typography>
        <Typography variant="body1" className={classes.description} paragraph>
          {project.description}
        </Typography>
        <div className={classes.techStack}>
          {project.techStack.map((tech, index) => (
            <Chip key={index} label={tech} className={classes.techChip} />
          ))}
        </div>
      </Card>
    </motion.div>
  );
};

export default ProjectItem;
