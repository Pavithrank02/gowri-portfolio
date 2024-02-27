import React from 'react';
import { Grid, Typography, IconButton } from '@mui/material';
import { GitHub, LinkedIn, Twitter, Instagram } from '@mui/icons-material';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import { perSonalDetails, HomeDetailsCss } from '../../constants';
import animationData from '../../assets/gowri.json'
import '../../index.css'
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
          {/* <Typography variant="h2" className="typewriter">
            {perSonalDetails.name.split('').map((letter, index) => (
              <span key={index}>{letter}</span>
            ))}
          </Typography> */}
        </Grid>
        <Grid style={{}}>
          <Typography variant="h6" style={{ color: '#B0B0B0', }}>
            {perSonalDetails.description}
          </Typography>
          {/* <Typography variant="h2" style={{ color: '#B0B0B0', }} className="typewriter">
            {perSonalDetails.description.split('').map((letter, index) => (
              <span key={index}>{letter}</span>
            ))}
          </Typography> */}
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
