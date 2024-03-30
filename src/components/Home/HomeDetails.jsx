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
      variants={HomeDetailsCss.containerVariants}
    >
      <Grid xs={12} item sx={{ ...HomeDetailsCss.outerGrid }}>
        <Grid sx={{ ...HomeDetailsCss.lottieGrid }}>
          <Lottie
            animationData={animationData}
            loop
            autoplay
            style={{ ...HomeDetailsCss.lottie }}
          />
        </Grid>

        <Grid item
          sx={{ ...HomeDetailsCss.innerGrid2 }}
        >
          <Grid >
            <Typography
              variant="h2"
              sx={{ ...HomeDetailsCss.h2Variants }}
            >
              {perSonalDetails.name}
            </Typography>
            {/* <Typography variant="h2" className="typewriter">
            {perSonalDetails.name.split('').map((letter, index) => (
              <span key={index}>{letter}</span>
            ))}
          </Typography> */}
          </Grid>
          <Grid sx={{ ...HomeDetailsCss.h3Variants }}>
            <Typography variant="h6" style={{ color: '#B0B0B0', }}>
              {perSonalDetails.description}
            </Typography>
            {/* <Typography variant="h2" style={{ color: '#B0B0B0', }} className="typewriter">
            {perSonalDetails.description.split('').map((letter, index) => (
              <span key={index}>{letter}</span>
            ))}
          </Typography> */}
          </Grid>
          <Grid sx={{ ...HomeDetailsCss.iconStyle }}>
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
    </motion.Grid>
  );
};

export default HomeDetails;
