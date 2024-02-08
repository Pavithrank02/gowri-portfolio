import React from 'react';
import { motion } from 'framer-motion';
import { Grid, Typography, IconButton } from '@mui/material';
import { GitHub, LinkedIn, Twitter, Instagram } from '@mui/icons-material';
import { perSonalDetails, HomeDetailsCss } from '../constants';
import img1 from '../assets/gowr.jpg';

const HomeDetails = () => {
  

  return (
    <Grid
      style={HomeDetailsCss.outerGrid}>
      <motion.div
        initial="hidden"
        animate="visible"
        // variants={containerVariants}
      >
        <Grid xs={12} sx={{width: '55vw'}} style={HomeDetailsCss.innerGrid}>
          <Grid item xs={4}>
            <img
              style={HomeDetailsCss.imageSize}
              src={img1}
              alt="Profile"
            />
          </Grid>
          <Grid container item xs={8} spacing={2}  style={HomeDetailsCss.innerGrid}>
            <Grid item >
              <Typography variant="h2" style={HomeDetailsCss.h2Variants}>
                {perSonalDetails.name}
              </Typography>
            </Grid>
            <Grid item style={{ width: '30vw' }}>
              <Typography variant="h5" style={{ color: 'white', fontStyle: 'italic' }}>
                {perSonalDetails.description}
              </Typography>
            </Grid>
            <Grid item spacing={1} style={{ fontSize: '2rem' }}>
              <IconButton color="inherit" >
                <GitHub />
              </IconButton>
              <IconButton color="inherit" >
                <LinkedIn />
              </IconButton>
              <IconButton color="inherit" >
                <Twitter />
              </IconButton>
              <IconButton color="inherit" >
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
