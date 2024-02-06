import { Button, Card, Divider, Grid, Hidden, Typography } from '@mui/material'
import React from 'react'
import img1 from '../assets/gowr.jpg'
import { About, experiences } from '../constants'
import { motion } from 'framer-motion'
import { Box, flexbox } from '@mui/system'
import MainContainer from './MainContainer'
import Testimonial from './Testimonial'
import Experience from './Experience'
import PersonalDetails from './PersonalDetails'
// import resumePdf from '../assets/your-resume.pdf';
const AboutMe = () => {
  const containerVariants = {
    hidden: { x: '-30%' },
    visible: { x: 0, transition: { type: 'spring', stiffness: 60 } },
  };

  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        style={{
          position: 'absolute',
          top: '15vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          color: 'white',
          scrollBehavior: 'smooth',

        }}
      >
        <Grid>
          <Grid style={{ marginBottom: '30px', }}>
            <Typography style={{ fontWeight: 800 }} variant='h4'>About Me </Typography>
          </Grid>
          <Grid style={{ marginBottom: '35px' }}>
            <img
              style={{ width: '60vw', height: '70vh' }}
              src={img1} />
          </Grid>
        </Grid>
        <Grid style={{backgroundColor:'black', marginBottom: '30px', marginLeft: '-0.5rem',width:"70vw", }}>
          <Grid>
            <Typography variant='h4'>{About.name} </Typography>
          </Grid>
          <Grid>
            <Typography variant='h6'>{About.Role} </Typography>
          </Grid>
        </Grid>
        <Grid style={{ marginBottom: '30px' }}>
          <Card variant="outlined" sx={{ width: '60vw', backgroundColor: '#131314', color: 'white' }}>
            <Box sx={{ p: 2, borderColor: 'white' }}>
              <Typography gutterBottom variant="h5" component="div" align='justify'>
                {About.description}
              </Typography>
            </Box>
          </Card>
          <Card variant="outlined" sx={{ width: '60vw', }} style={{ marginBottom: '30px', backgroundColor: '#131314', color: 'white' }}>
            <Box sx={{ p: 2 }}>
              <PersonalDetails />
            </Box>
          </Card>
          <Grid style={{ marginBottom: '30px' }}>
            <motion.a animate={{ x: 0, scale: 1 }} initial={{ scale: 0 }} transition={{ type: "tween", duration: 2, delay: 1 }}>
              <Button style={{ padding: '10px', backgroundColor: "white" }}>
                {/* <a href={resumePdf} download="YourResume.pdf" style={{ textDecoration: 'none', color: 'black' }}> */}
                Download My Resume (PDF)
                {/* </a> */}
              </Button>
            </motion.a>
          </Grid>
        </Grid>
        <Card variant="outlined" sx={{ width: '60vw', marginBottom: '1.5rem' }}>
          <Box sx={{ p: 2 }}>
            <Grid>
              <Typography gutterBottom variant="body" component="div" align='justify' fontWeight={800}>
                Experience
              </Typography>
            </Grid>
            <Grid>
              <Experience />
            </Grid>
          </Box>
        </Card>
        <Grid style={{ backgroundColor: 'black', }}>
          <Grid>
            <Typography variant='h5'>
              Testimonies
            </Typography>
          </Grid>
          <Grid>
            <Testimonial />
          </Grid>
        </Grid>
      </motion.div>
    </>
  )
}

export default AboutMe