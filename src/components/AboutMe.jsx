import { Card, Grid, Typography } from '@mui/material'
import React from 'react'
import img1 from '../assets/gowr.jpg'
import { About } from '../constants'
import { motion } from 'framer-motion'
import { Box, flexbox } from '@mui/system'
const AboutMe = () => {
  return (
    <Grid container style={{ display: 'flex', flexDirection: 'column', justifyContent: "space-around", width: '60vw' }}>
      <Grid>
        <Typography variant='h4'>AboutMe </Typography>
      </Grid>
      <Grid >
        <img
          style={{ width: '50vw', height: '70vh' }}
          src={img1} />
      </Grid>
      <Grid>
        <Typography variant='h5'>{About.name} </Typography>
      </Grid>
      <Grid>
        <Typography variant='h5'>{About.role} </Typography>
      </Grid>
      <Grid>
        <motion.a animate={{ x: 0, scale: 1 }} initial={{ scale: 0 }} transition={{ type: "tween", duration: 2, delay: 1 }} download className="btn btn-primary mt-5 custom-btn fw-bold">Download My Resume</motion.a>
      </Grid>
      <Grid>
        <Card variant="outlined" sx={{ width: '60vw' }}>
          <Box sx={{ p: 2 }}>
            <Typography gutterBottom variant="h5" component="div" align='justify'>
              {About.description}
            </Typography>
          </Box>
        </Card>
        <Card variant="outlined" sx={{ width: '60vw' }}>
          <Box sx={{ p: 2 }}>
            <Grid xs={12} style={{ display: 'flex', flexDirection: 'row',  }}>
              <Grid xs={6} style={{ display: 'flex', flexDirection: 'row', }}>
                <Grid>
                  <Typography gutterBottom variant="body" component="div" align='justify' fontWeight={800}>
                    Birthday :
                  </Typography>
                </Grid>
                <Grid>
                  <Typography gutterBottom variant="body" component="div" align='justify' style={{ marginLeft: '10px' }}>
                    {About.Birthday}
                  </Typography>
                </Grid>
              </Grid>
          
              <Grid xs={6}>
              <Grid style={{ display: 'flex', flexDirection: 'row', }}>
                <Grid>
                  <Typography gutterBottom variant="body" component="div" align='justify' fontWeight={800}>
                    Birthday :
                  </Typography>
                </Grid>
                <Grid>
                  <Typography gutterBottom variant="body" component="div" align='justify' style={{ marginLeft: '10px' }}>
                    {About.Birthday}
                  </Typography>
                </Grid>
                
              </Grid>
              </Grid>
            </Grid>
          </Box>
        </Card>
      </Grid>
    </Grid>
  )
}

export default AboutMe