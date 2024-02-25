import React from 'react'
import { Button, Grid, Typography } from '@mui/material'
import img1 from '../assets/gowr.jpg'
import { About, AboutCss } from '../constants'
import { motion } from 'framer-motion'
import Testimonial from './Testimonial'
import Experience from './Experience'
import PersonalDetails from './PersonalDetails'
import 'react-slideshow-image/dist/styles.css'
import { useTheme } from '../ThemeContext'
import { TracingBeam } from "./ui/tracing-beam.tsx";

import { cn } from "../utils/cn.ts";
const AboutMe = () => {
  const { theme } = useTheme();
  const lines = About.description.split('\n');
  const containerVariants = {
    hidden: { x: '-10%' },
    visible: { x: 0, transition: { type: 'spring', stiffness: 60 } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <TracingBeam className="">

        <Grid
          container
          style={AboutCss.outerGrid}
          xs={12}
        >
          <Grid item
            style={AboutCss.item1Grid}
          >
            <Grid>
              <Typography
                sx={{
                  background: theme === 'light' ? '#FFF' : '#292828',
                  color: theme === 'light' ? 'black' : '#B0B0B0'
                }}
                style={{
                  padding: '0.8rem',
                  width: '6vw',
                }}
                variant='h6'>
                About Me
              </Typography>
            </Grid>
            <Grid >
              <img
                style={AboutCss.imgCss}
                src={img1} />
            </Grid>
          </Grid>
          <Grid item
            sx={{
              background: theme === 'light' ? '#EFEFEF ' : 'black',
              color: theme === 'light' ? 'black' : '#FAFAFA',
            }}
            style={AboutCss.item2Grid}
          >
            <Grid
              style={{
                fontStyle: 'italic',
                borderBottom: '1px solid gray',
                width: '65vw',
              }}
            >
              <Typography
                style={{
                  fontWeight: 800
                }}
                variant='h4'>
                {About.name}
              </Typography>
              <Typography
                style={{
                  fontStyle: 'italic',
                  color: '#B0B0B0',
                }}
                variant='h6'
              >
                {About.Role}
              </Typography>
            </Grid>
            <Grid
              sx={{ width: '65vw', color: '#B0B0B0', borderBottom: '1px solid gray', }}
            >
              <Typography gutterBottom variant="body" align='justify'>
                {lines.map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </Typography>
            </Grid>
            <Grid style={AboutCss.perSonalDetailGrid}>
              <PersonalDetails />
            </Grid>
            <Grid style={{}}>
              <motion.a
                animate={{ x: 0, scale: 1 }}
                initial={{ scale: 0 }}
                transition={{ type: "tween", duration: 2, delay: 1 }}>
                <Button
                  style={{ padding: 10, color: theme === 'light' ? 'black' : '#FAFAFA', backgroundColor: 'gray' }}>
                  {/* <a href={resumePdf} download="YourResume.pdf" style={{ textDecoration: 'none', color: 'black' }}> */}
                  Download My Resume (PDF)
                  {/* </a> */}
                </Button>
              </motion.a>
            </Grid>
          </Grid>
          <Grid
            item
            sx={{
              background: theme === 'light' ? '#F7F7F7 ' : '#131314',
              color: theme === 'light' ? 'black' : '#FAFAFA',

            }}
            style={AboutCss.item3Grid}
          >

            <Grid >
              <Typography variant="h5" fontWeight={800}>
                Experience
              </Typography>
            </Grid>
            <Grid style={{ color: 'black' }}>
              <Experience />
            </Grid>

          </Grid>
          <Grid item
            sx={{
              background: theme === 'light' ? '#EFEFEF ' : 'black',
              color: theme === 'light' ? 'black' : '#FAFAFA',
            }}
            style={AboutCss.item4Grid}
          >
            <Grid>
              <Typography variant='h5'>
                Testimonies
              </Typography>
            </Grid>
            <Grid style={AboutCss.testimonyGrid}>
              <Testimonial />
            </Grid>
          </Grid>
        </Grid>
      </TracingBeam>
    </motion.div>

  )
}

export default AboutMe