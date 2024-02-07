import React from 'react'
import { Button, Card, Grid, Typography } from '@mui/material'
import img1 from '../assets/gowr.jpg'
import { About } from '../constants'
import { motion } from 'framer-motion'
import { Box } from '@mui/system'
import Testimonial from './Testimonial'
import Experience from './Experience'
import PersonalDetails from './PersonalDetails'
import 'react-slideshow-image/dist/styles.css'

const AboutMe = () => {
  const lines = About.description.split('\n');
  const containerVariants = {
    hidden: { x: '-30%' },
    visible: { x: 0, transition: { type: 'spring', stiffness: 60 } },
  };

  return (
    <Grid style={{ marginLeft: '4vw' }}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        style={{
          position: 'absolute',
          top: '15vh',
          color: 'white',
          scrollBehavior: 'smooth',
        }}
      >
        <Grid>
          <Grid style={{ marginBottom: '30px', backgroundColor: 'lightgray', padding: '10px', width: '23vh', borderRadius: '10px' }}>
            <Typography style={{ fontWeight: 800, color: 'black' }} variant='h6'>About Me </Typography>
          </Grid>
          <Grid style={{ marginBottom: '30px' }}>
            <img
              style={{ width: '60vw', height: '70vh', objectFit: 'cover' }}
              src={img1} />
          </Grid>
        </Grid>
        <Grid style={{ backgroundColor: 'black', marginLeft: '-5.2vw', width: "74.3vw", }}>
          <Grid style={{ marginLeft: '5vw', }}>
            <Typography variant='h4'>{About.name} </Typography>
          </Grid>
          <Grid style={{ marginLeft: '5vw' }}>
            <Typography variant='h6'>{About.Role} </Typography>
          </Grid>
        </Grid>
        <Grid style={{ backgroundColor: 'black', marginLeft: '-6.2vw' }}>
          <Card variant="outlined" sx={{ width: '65vw', backgroundColor: 'black', color: 'white', }}>
            <Box sx={{ p: 2, borderColor: 'white', marginLeft: '5vw' }}>
              <Typography gutterBottom variant="body" component="div" align='justify'>
                {lines.map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </Typography>
            </Box>
          </Card>
          <Card variant="outlined" sx={{ width: '75vw', }} style={{ backgroundColor: '#131314', color: 'white' }}>
            <Box sx={{ p: 2, marginLeft: '5vw' }}>
              <PersonalDetails />
            </Box>
          </Card>
          <Grid style={{}}>
            <motion.a animate={{ x: 0, scale: 1 }} initial={{ scale: 0 }} transition={{ type: "tween", duration: 2, delay: 1 }}>
              <Button style={{ padding: '30px', color: 'white', marginLeft: '4vw' }}>
                {/* <a href={resumePdf} download="YourResume.pdf" style={{ textDecoration: 'none', color: 'black' }}> */}
                Download My Resume (PDF)
                {/* </a> */}
              </Button>
            </motion.a>
          </Grid>
        </Grid>
        <Grid sx={{ width: '60vw', backgroundColor: '#131314', color: 'black', marginLeft: '-5.1vw', width: '74.1vw' }}>
          <Box sx={{ p: 2 }}>
            <Grid style={{ marginLeft: '4vw' }}>
              <Typography gutterBottom variant="h5" component="div" align='justify' fontWeight={800}>
                Experience
              </Typography>
            </Grid>
            <Grid>
              <Experience />
            </Grid>
          </Box>
        </Grid>
        <Grid style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', backgroundColor: 'black', textAlign: 'center', marginLeft: '-5.2vw', height: '40vh', width: '74.2vw' }}>
          <Grid>
            <Typography variant='h5'>
              Testimonies
            </Typography>
          </Grid>
          <Grid style={{ width: '70vw', marginLeft: '2vw' }}>
            <Testimonial />
          </Grid>
        </Grid>
      </motion.div>
    </Grid>
  )
}

export default AboutMe