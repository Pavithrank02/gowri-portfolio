import React from 'react';
import { perSonalDetails } from '../constants';
import { Grid, Typography, IconButton } from '@mui/material';
import { GitHub, LinkedIn, Twitter, Instagram } from '@mui/icons-material';
import img1 from '../assets/gowr.jpg';
import { motion } from 'framer-motion';
import MainContainer from './MainContainer';

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
    <>
      <MainContainer />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        style={{
          position: 'absolute',
          top: '20vh',
          left: '30vw',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          width: '60vw',
          color: 'white',
        }}
      >
        <motion.div
          variants={imageContainerVariants}
          initial="hidden"
          animate="visible"
          style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
        >
          <Grid item xs={4}>
            <img
              style={{ width: '300px', borderRadius: '50%', marginRight: '20px' }}
              src={img1}
              alt="Profile"
            />
          </Grid>
          <Grid container item xs={8} spacing={2} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
            <Grid item>
              <Typography variant="h3" style={{ color: 'white', margin: '3px', fontWeight: 800 }}>
                {perSonalDetails.name}
              </Typography>
              <Typography variant="h5" style={{ color: 'white', marginTop: '30px' }}>
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
        </motion.div>
      </motion.div>
    </>
  );
};

export default HomeDetails;
