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
        variants={HomeDetailsCss.containerVariants}
      >
        <Grid xs={12} style={HomeDetailsCss.innerGrid}>
          <Grid item xs={5}>
            <img
              style={HomeDetailsCss.imageSize}
              src={img1}
              alt="Profile"
            />
          </Grid>
          <Grid container item xs={7} style={HomeDetailsCss.innerGrid2}>
            <Grid style={{ width: '40vw' }}>
              <Typography variant="h2" style={HomeDetailsCss.h2Variants}>
                {perSonalDetails.name}
              </Typography>
            </Grid>
            <Grid style={{ width: '40vw' }}>
              <Typography variant="h6" style={{ color: '#B0B0B0', marginLeft: '5px' }}>
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
        </Grid>
      </motion.div>
    </Grid>
  );
};

export default HomeDetails;
