import React from 'react';
import { perSonalDetails } from '../constants';
import { Grid, Typography, IconButton } from '@mui/material';
import { GitHub, LinkedIn, Twitter, Instagram } from '@mui/icons-material';
import img1 from '../assets/gowr.jpg';
import { motion } from 'framer-motion';

const HomeDetails = () => {
  const containerVariants = {
    hidden: { x: '-30%' },
    visible: { x: 0, transition: { type: 'spring', stiffness: 60 } },
  };

  const imageContainerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    <Grid
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '30vh'
      }}>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        style={{
          height: '10vh',
          color: 'white',
        }}
      >
        <Grid xs={12} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <motion.div
            variants={imageContainerVariants}
            initial="hidden"
            animate="visible"
          >
            <Grid item xs={4}>
              <img
                style={{ width: '300px', borderRadius: '50%', }}
                src={img1}
                alt="Profile"
              />
            </Grid>
          </motion.div>
          <Grid container item xs={8} spacing={2} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
            <Grid item>
              <Typography variant="h3" style={{ color: 'white', margin: '3px', fontWeight: 800, fontStyle: 'italic' }}>
                {perSonalDetails.name}
              </Typography>
              <Typography variant="h5" style={{ color: 'white', marginTop: '30px', fontStyle: 'italic'  }}>
                {perSonalDetails.description}
              </Typography>
            </Grid>
            <Grid item container spacing={1}>
              {/* Social Media Icons with adjusted size */}
              <IconButton color="inherit" style={{ fontSize: '3rem' }}>
                <GitHub />
              </IconButton>
              <IconButton color="inherit" style={{ fontSize: '2rem' }}>
                <LinkedIn />
              </IconButton>
              <IconButton color="inherit" style={{ fontSize: '2rem' }}>
                <Twitter />
              </IconButton>
              <IconButton color="inherit" style={{ fontSize: '2rem' }}>
                <Instagram />
              </IconButton>
              {/* Add more icons as needed */}
            </Grid>
          </Grid>
        </Grid>
      </motion.div>
    </Grid>
  );
};

export default HomeDetails;
