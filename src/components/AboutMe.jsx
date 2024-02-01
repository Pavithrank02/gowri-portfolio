import { Button, Card, Divider, Grid, Hidden, Typography } from '@mui/material'
import React from 'react'
import img1 from '../assets/gowr.jpg'
import { About, experiences } from '../constants'
import { motion } from 'framer-motion'
import { Box, flexbox } from '@mui/system'
import MainContainer from './MainContainer'
// import resumePdf from '../assets/your-resume.pdf';
const AboutMe = () => {
  const containerVariants = {
    hidden: { x: '-30%' },
    visible: { x: 0, transition: { type: 'spring', stiffness: 60 } },
  };

  const ExperienceNode = ({ title, description, children }) => (
    <Card variant="outlined" sx={{ width: '60vw', backgroundColor: '#131314', color: 'white', margin: '10px' }}>
      <Grid container sx={{ p: 2 }}>
        <Grid item xs={12}>
          <Typography gutterBottom variant="h5" component="div" align="justify">
            {title}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body" component="div" align="justify">
            {description}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {children}
        </Grid>
      </Grid>
    </Card>
  );
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
          marginLeft: '35vw',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          width: '60vw',
          color: 'white',
          scrollBehavior: 'smooth',
        }}
      >

        <Grid style={{ marginBottom: '30px', }}>
          <Typography style={{ fontWeight: 800 }} variant='h4'>About Me </Typography>
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
              <Grid xs={12} columnGap={30} style={{ display: 'flex', flexDirection: 'row', width: '50vw' }}>
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
            <motion.a animate={{ x: 0, scale: 1 }} initial={{ scale: 0 }} transition={{ type: "tween", duration: 2, delay: 1 }}>
              <Button style={{ padding: '10px', backgroundColor: "white" }}>
                {/* <a href={resumePdf} download="YourResume.pdf" style={{ textDecoration: 'none', color: 'black' }}> */}
                Download My Resume (PDF)
                {/* </a> */}
              </Button>
            </motion.a>
          </Grid>
        </Grid>
        <Card variant="outlined" sx={{ width: '60vw' }}>
          <Box sx={{ p: 2 }}>
            <Grid>
              <Typography gutterBottom variant="body" component="div" align='justify' fontWeight={800}>
                Experience
              </Typography>
              {/* {experiences.map((experience, index) => (
                <motion.div key={index} animate={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -50 }} transition={{ type: 'tween', duration: 0.5, delay: index * 0.2 }}>
                  <Card style={{ width: '40vw', marginBottom: '20px', backgroundColor: '#131314', color: 'white', padding: '16px', borderRadius: '8px', position: 'relative', overflow: 'hidden' }}>
                    <Typography variant="h6" style={{color: 'white'}}>{experience.title}</Typography>
                    <Typography variant="subtitle1" color="white">{experience.company} - {experience.date}</Typography>
                    <Typography variant="body1" style={{ marginTop: '10px' }}>{experience.description}</Typography>
                    {index !== experiences.length - 1 && <Divider style={{ position: 'absolute', bottom: 0, width: '80%', margin: 'auto' }} />}
                  </Card>
                </motion.div>
              ))} */}
              <ExperienceNode
                title="Company 1"
                description="Job description for Company 1. You can provide details about your role, responsibilities, etc."
              >
                <ExperienceNode
                  title="Position 1.1"
                  description="Details about Position 1.1. You can include specific projects, achievements, etc."
                />
                <ExperienceNode
                  title="Position 1.2"
                  description="Details about Position 1.2. More information about your tasks and accomplishments."
                />
              </ExperienceNode>
              <ExperienceNode
                title="Company 2"
                description="Job description for Company 2. Provide information about your role and contributions."
              >
                <ExperienceNode
                  title="Position 2.1"
                  description="Details about Position 2.1. Include relevant details about your tasks and achievements."
                />
              </ExperienceNode>
            </Grid>
          </Box>
        </Card>
      </motion.div>
    </>
  )
}

export default AboutMe