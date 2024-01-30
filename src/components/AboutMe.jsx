

// AboutMe.js
import React from 'react';
import { Button, Card, Grid, Typography, makeStyles, useTheme, useMediaQuery } from '@mui/material';
import img1 from '../assets/gowr.jpg';
import { About } from '../constants';
import { motion } from 'framer-motion';
import { Box } from '@mui/system';
import MainContainer from './MainContainer';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'absolute',
    top: '100px',
    marginLeft: '35vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '60vw',
    color: 'white',
    scrollBehavior: 'smooth',
    [theme.breakpoints.down('md')]: {
      marginLeft: '30vw',
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: '20vw',
      width: '70vw',
    },
    [theme.breakpoints.down('xs')]: {
      marginLeft: '10vw',
      width: '80vw',
    },
  },
  sectionTitle: {
    fontWeight: 800,
    marginBottom: theme.spacing(2),
  },
  image: {
    width: '50vw',
    height: '70vh',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  card: {
    width: '60vw',
    marginBottom: '30px',
    backgroundColor: '#131314',
    color: 'white',
    [theme.breakpoints.down('sm')]: {
      width: '70vw',
    },
    [theme.breakpoints.down('xs')]: {
      width: '80vw',
    },
  },
  cardContent: {
    padding: theme.spacing(2),
  },
  gridContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '50vw',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
}));

const AboutMe = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

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
        className={classes.container}
      >
        <Grid container>
          <Typography variant='h4' className={classes.sectionTitle}>About Me</Typography>
        </Grid>
        <Grid container className={classes.gridContainer}>
          <Grid item className={classes.imageContainer}>
            <img className={classes.image} src={img1} alt="Profile" />
          </Grid>
          <Grid item container className={classes.cardContainer}>
            <Card variant="outlined" className={classes.card}>
              <Box className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="div" align='justify'>
                  {About.description}
                </Typography>
              </Box>
            </Card>
            <Card variant="outlined" className={classes.card}>
              <Box className={classes.cardContent}>
                <Grid container className={classes.gridContainer}>
                  <Grid item xs={6} container flexDirection="column">
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
                  <Grid item xs={6} container flexDirection="column">
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
                </Grid>
              </Box>
            </Card>
            <Grid style={{ marginBottom: '30px' }}>
              <motion.a animate={{ x: 0, scale: 1 }} initial={{ scale: 0 }} transition={{ type: "tween", duration: 2, delay: 1 }}>
                <Button style={{ padding: '10px', backgroundColor: "white" }}> Download My Resume </Button>
              </motion.a>
            </Grid>
          </Grid>
        </Grid>
        <Card variant="outlined" className={classes.card}>
          <Box className={classes.cardContent}>
            <Typography gutterBottom variant="body" component="div" align='justify' fontWeight={800}>
              Experience
            </Typography>
          </Box>
        </Card>
      </motion.div>
    </>
  );
};

export default AboutMe;
