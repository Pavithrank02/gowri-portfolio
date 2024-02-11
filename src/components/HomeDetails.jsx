import React from 'react';
import { motion } from 'framer-motion';
import { Grid, Typography, IconButton } from '@mui/material';
import { GitHub, LinkedIn, Twitter, Instagram } from '@mui/icons-material';
import { perSonalDetails, HomeDetailsCss } from '../constants';
import img1 from '../assets/gowr.jpg';

const HomeDetails = () => {


  return (
    <motion.Grid
      initial="hidden"
      animate="visible"
      container
      xs={12}
      style={HomeDetailsCss.outerGrid}
      variants={HomeDetailsCss.containerVariants}
    >
      <Grid item xs={3} style={HomeDetailsCss.innerGrid}>
        <img
          style={HomeDetailsCss.imageSize}
          src={img1}
          alt="Profile"
        />
      </Grid>
      <Grid item xs={6} style={HomeDetailsCss.innerGrid2}>
        <Grid style={{}}>
          <Typography variant="h2" style={HomeDetailsCss.h2Variants}>
            {perSonalDetails.name}
          </Typography>
        </Grid>
        <Grid style={{}}>
          <Typography variant="h6" style={{ color: '#B0B0B0', }}>
            {perSonalDetails.description}
          </Typography>
        </Grid>
        <Grid style={{ fontSize: '2rem' }}>
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
    </motion.Grid>
  );
};

export default HomeDetails;
