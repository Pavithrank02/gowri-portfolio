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
    <Grid style={{ marginTop: '15vh'}}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        style={{
          color: 'white',
          scrollBehavior: 'smooth',
        }}
      >
        <Grid style={{marginLeft: '5vw'}}>
          <Grid style={{ marginBottom: '30px', backgroundColor: 'lightgray', padding: '10px', width: '16vh', borderRadius: '10px' }}>
            <Typography style={{ fontWeight: 800, color: 'black' }} variant='h6'>About Me </Typography>
          </Grid>
          <Grid style={{ marginBottom: '30px' }}>
            <img
              style={{ width: '60vw', height: '70vh', objectFit: 'cover' }}
              src={img1} />
          </Grid>
        </Grid>
        <Grid style={{ backgroundColor: 'black', width: "100%", display: 'flex', flexDirection: 'column', }}>
          <Grid style={{ marginLeft: '5vw', marginTop: '10px', fontStyle: 'italic', }}>
            <Typography style={{fontWeight: 800}} variant='h4'>{About.name} </Typography>
          </Grid>
          <Grid style={{ marginLeft: '5vw', fontStyle: 'italic',color: '#B0B0B0',  }}>
            <Typography variant='h6'>{About.Role} </Typography>
          </Grid>
          <Grid variant="outlined" sx={{ width: '65vw', backgroundColor: 'black', color: '#B0B0B0', boxShadow: 'gray',}}>
            <Box sx={{ p: 2, borderColor: 'white' , marginLeft: '4.2vw'}}>
              <Typography gutterBottom variant="body" component="div" align='justify'>
                {lines.map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </Typography>
            </Box>
          </Grid>
          <Card variant="outlined" style={{ backgroundColor: 'black', color: 'white' }}>
            <Box sx={{ p: 2, marginLeft: '4.2vw' }}>
              <PersonalDetails />
            </Box>
          </Card>
          <Grid style={{}}>
            <motion.a animate={{ x: 0, scale: 1 }} initial={{ scale: 0 }} transition={{ type: "tween", duration: 2, delay: 1 }}>
              <Button style={{ padding: '30px', color: 'white', marginLeft: '3.5vw' }}>
                {/* <a href={resumePdf} download="YourResume.pdf" style={{ textDecoration: 'none', color: 'black' }}> */}
                Download My Resume (PDF)
                {/* </a> */}
              </Button>
            </motion.a>
          </Grid>
        </Grid>
        <Grid sx={{ width: '60vw', backgroundColor: '#131314', width: '100%' }}>
          <Box sx={{ p: 2 }}>
            <Grid style={{marginLeft: '4.2vw'}}>
              <Typography gutterBottom variant="h5" component="div" align='justify' fontWeight={800}>
                Experience
              </Typography>
            </Grid>
            <Grid style={{color: 'black'}}>
              <Experience />
            </Grid>
          </Box>
        </Grid>
        <Grid style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          backgroundColor: 'black',
          textAlign: 'center',
          height: '40vh',
          width: '100%'
        }}>
          <Grid>
            <Typography variant='h5'>
              Testimonies
            </Typography>
          </Grid>
          <Grid style={{width: '90%', marginLeft: '4vw'}}>
            <Testimonial />
          </Grid>
        </Grid>
      </motion.div>
    </Grid>
  )
}

export default AboutMe