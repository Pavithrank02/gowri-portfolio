// ProjectItem.js
import React from 'react';
import { Card, Typography, Chip, makeStyles } from '@mui/material';
import { motion } from 'framer-motion';

const useStyles = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(2),
    borderRadius: theme.spacing(2),
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'box-shadow 0.3s ease',
    '&:hover': {
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    },
  },
  techChip: {
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
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
        <div>
          <Typography variant="h5" gutterBottom>
            {project.title}
          </Typography>
          <Typography variant="body1" color="textSecondary" paragraph>
            {project.description}
          </Typography>
          <Typography variant="body2">
            Tech Stack:{' '}
            {project.techStack.map((tech, index) => (
              <Chip key={index} label={tech} className={classes.techChip} />
            ))}
          </Typography>
        </div>
      </Card>
    </motion.div>
  );
};

export default ProjectItem;
