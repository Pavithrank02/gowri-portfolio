import React from 'react'
import { Button, Card, Grid, Typography } from '@mui/material'
import img1 from '../assets/gowr.jpg'
import { About, AboutCss } from '../constants'
import { motion } from 'framer-motion'
import { Box } from '@mui/system'
import Testimonial from './Testimonial'
import Experience from './Experience'
import PersonalDetails from './PersonalDetails'
import 'react-slideshow-image/dist/styles.css'
import { useTheme } from '../ThemeContext'

const AboutMe = () => {
  const { theme } = useTheme();
  const lines = About.description.split('\n');
  const containerVariants = {
    hidden: { x: '-30%' },
    visible: { x: 0, transition: { type: 'spring', stiffness: 60 } },
  };

  return (
    <motion.Grid
      container
      xs={12}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      style={AboutCss.outerGrid}
    >
      <Grid item xs={4}>
        <Grid style={{ marginBottom: '30px', backgroundColor: 'lightgray', padding: '10px', width: '16vh', borderRadius: '10px' }}>
          <Typography style={{ fontWeight: 800, color: 'black' }} variant='h6'>About Me </Typography>
        </Grid>
        <Grid style={{ marginBottom: '30px' }}>
          <img
            style={{ width: '60vw', height: '70vh', objectFit: 'cover' }}
            src={img1} />
        </Grid>
      </Grid>
      <Grid item xs={3} style={{ background: theme === 'light' ? '#EFEFEF ' : '#131314', color: theme === 'light' ? 'black' : '#FAFAFA', width: "100%", height: '70vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'flex-start' }}>
        <Grid style={{ marginTop: '10px', fontStyle: 'italic', borderBottom: '1px solid gray', width: '65vw' }}>
          <Typography style={{ fontWeight: 800 }} variant='h4'>{About.name} </Typography>
          <Typography style={{ fontStyle: 'italic', color: '#B0B0B0', }} variant='h6'>{About.Role} </Typography>
        </Grid>
        <Grid sx={{ marginLeft: '5vw', width: '65vw', color: '#B0B0B0', borderBottom: '1px solid gray', }}>
          <Typography gutterBottom variant="body" align='justify'>
            {lines.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </Typography>
        </Grid>
        <Grid style={{ marginLeft: '5vw', width: '65vw', borderBottom: '1px solid gray', }}>
          <PersonalDetails />
        </Grid>
        <Grid style={{ marginLeft: '5vw', }}>
          <motion.a animate={{ x: 0, scale: 1 }} initial={{ scale: 0 }} transition={{ type: "tween", duration: 2, delay: 1 }}>
            <Button style={{ padding: 0, color: theme === 'light' ? 'black' : '#FAFAFA', }}>
              {/* <a href={resumePdf} download="YourResume.pdf" style={{ textDecoration: 'none', color: 'black' }}> */}
              Download My Resume (PDF)
              {/* </a> */}
            </Button>
          </motion.a>
        </Grid>
      </Grid>
      <Grid item xs={4} sx={{
        width: '60vw', background: theme === 'light' ? '#F7F7F7 ' : '#131314',
        color: theme === 'light' ? 'black' : '#FAFAFA', width: '100%'
      }}>
        <Box sx={{ p: 2 }}>
          <Grid style={{ marginLeft: '4.2vw' }}>
            <Typography gutterBottom variant="h5" component="div" align='justify' fontWeight={800}>
              Experience
            </Typography>
          </Grid>
          <Grid style={{ color: 'black' }}>
            <Experience />
          </Grid>
        </Box>
      </Grid>
      <Grid item xs={1} style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        background: theme === 'light' ? '#EFEFEF ' : '#131314',
        color: theme === 'light' ? 'black' : '#FAFAFA',
        textAlign: 'center',
        height: '40vh',
        width: '100%'
      }}>
        <Grid>
          <Typography variant='h5'>
            Testimonies
          </Typography>
        </Grid>
        <Grid style={{ width: '90%', marginLeft: '4vw' }}>
          <Testimonial />
        </Grid>
      </Grid>
    </motion.Grid>

  )
}

export default AboutMe