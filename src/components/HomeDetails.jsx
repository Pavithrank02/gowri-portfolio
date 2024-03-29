import React from 'react';
import { motion } from 'framer-motion';
import { Grid, Typography, IconButton } from '@mui/material';
import { GitHub, LinkedIn, Twitter, Instagram } from '@mui/icons-material';
import { perSonalDetails, HomeDetailsCss } from '../constants';
import img1 from '../assets/gowr.jpg';
import Lottie from 'lottie-react';
import animationData from '../assets/gowri.json'

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
      <Lottie
        animationData={animationData}
        loop
        autoplay
        style={{ width: 400, height: 400 }}
      />
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
