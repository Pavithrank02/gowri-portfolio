import { Button, Card, Grid, Hidden, Typography } from '@mui/material'
import React from 'react'
import img1 from '../assets/gowr.jpg'
import { About } from '../constants'
import { motion } from 'framer-motion'
import { Box, flexbox } from '@mui/system'
import MainContainer from './MainContainer'
import SideNav from './SideNav'
const AboutMe = () => {
  const containerVariants = {
    hidden: { x: '-30%' },
    visible: { x: 0, transition: { type: 'spring', stiffness: 60 } },
  };

  return (
    <>
      <MainContainer />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        style={{
          position: 'absolute',
          top: '100px',
          marginLeft: '27vw',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          width: '70vw',
          color: 'white',
          scrollBehavior: 'smooth',
        }}
      >
      
          <Grid style={{ marginBottom: '30px', }}>
            <Typography variant='h4'>About Me </Typography>
          </Grid>
          <Grid style={{ marginBottom: '30px' }}>
            <img
              style={{ width: '50vw', height: '70vh' }}
              src={img1} />
          </Grid>
          <Grid>
            <Typography variant='h4'>{About.name} </Typography>
          </Grid>
          <Grid>
            <Typography variant='h6'>{About.role} </Typography>
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
                <Grid xs={12} style={{ display: 'flex', flexDirection: 'row', }}>
                  <Grid xs={6} style={{ display: 'flex', flexDirection: 'column', }}>
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
                    <Grid style={{ display: 'flex', flexDirection: 'row', }}>
                      <Grid>
                        <Typography gutterBottom variant="body" component="div" align='justify' fontWeight={800}>
                          Age :
                        </Typography>
                      </Grid>
                      <Grid>
                        <Typography gutterBottom variant="body" component="div" align='justify' style={{ marginLeft: '10px' }}>
                          {About.Age}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid style={{ display: 'flex', flexDirection: 'row', }}>
                      <Grid>
                        <Typography gutterBottom variant="body" component="div" align='justify' fontWeight={800}>
                          Address :
                        </Typography>
                      </Grid>
                      <Grid>
                        <Typography gutterBottom variant="body" component="div" align='justify' style={{ marginLeft: '10px' }}>
                          {About.Address}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid style={{ display: 'flex', flexDirection: 'row', }}>
                      <Grid>
                        <Typography gutterBottom variant="body" component="div" align='justify' fontWeight={800}>
                          Email :
                        </Typography>
                      </Grid>
                      <Grid>
                        <Typography gutterBottom variant="body" component="div" align='justify' style={{ marginLeft: '10px' }}>
                          {About.Email}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid style={{ display: 'flex', flexDirection: 'row', }}>
                      <Grid>
                        <Typography gutterBottom variant="body" component="div" align='justify' fontWeight={800}>
                          Phone :
                        </Typography>
                      </Grid>
                      <Grid>
                        <Typography gutterBottom variant="body" component="div" align='justify' style={{ marginLeft: '10px' }}>
                          {About.Phone}
                        </Typography>
                      </Grid>
                    </Grid>

                  </Grid>
                  <Grid xs={6} style={{ display: 'flex', flexDirection: 'column', }}>
                    <Grid style={{ display: 'flex', flexDirection: 'row', }}>
                      <Grid>
                        <Typography gutterBottom variant="body" component="div" align='justify' fontWeight={800}>
                          Nationality :
                        </Typography>
                      </Grid>
                      <Grid>
                        <Typography gutterBottom variant="body" component="div" align='justify' style={{ marginLeft: '10px' }}>
                          {About.Nationality}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid style={{ display: 'flex', flexDirection: 'row', }}>
                      <Grid>
                        <Typography gutterBottom variant="body" component="div" align='justify' fontWeight={800}>
                          Study :
                        </Typography>
                      </Grid>
                      <Grid>
                        <Typography gutterBottom variant="body" component="div" align='justify' style={{ marginLeft: '10px' }}>
                          {About.Study}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid style={{ display: 'flex', flexDirection: 'row', }}>
                      <Grid>
                        <Typography gutterBottom variant="body" component="div" align='justify' fontWeight={800}>
                          Degree :
                        </Typography>
                      </Grid>
                      <Grid>
                        <Typography gutterBottom variant="body" component="div" align='justify' style={{ marginLeft: '10px' }}>
                          {About.Degree}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid style={{ display: 'flex', flexDirection: 'row', }}>
                      <Grid>
                        <Typography gutterBottom variant="body" component="div" align='justify' fontWeight={800}>
                          Interest :
                        </Typography>
                      </Grid>
                      <Grid>
                        <Typography gutterBottom variant="body" component="div" align='justify' style={{ marginLeft: '10px' }}>
                          {About.Interest}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid style={{ display: 'flex', flexDirection: 'row', }}>
                      <Grid>
                        <Typography gutterBottom variant="body" component="div" align='justify' fontWeight={800}>
                          Freelance :
                        </Typography>
                      </Grid>
                      <Grid>
                        <Typography gutterBottom variant="body" component="div" align='justify' style={{ marginLeft: '10px' }}>
                          {About.Freelance}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            </Card>
            <Grid style={{ marginBottom: '30px' }}>
              <motion.a animate={{ x: 0, scale: 1 }} initial={{ scale: 0 }} transition={{ type: "tween", duration: 2, delay: 1 }}><Button style={{ padding: '10px', backgroundColor: "white" }}> Download My Resume </Button></motion.a>
            </Grid>
          </Grid>
          <Card variant="outlined" sx={{ width: '60vw' }}>
            <Box sx={{ p: 2 }}>
              <Grid>
                <Typography gutterBottom variant="body" component="div" align='justify' fontWeight={800}>
                  Experience
                </Typography>
              </Grid>
            </Box>
          </Card>
      </motion.div>
    </>
  )
}

export default AboutMe