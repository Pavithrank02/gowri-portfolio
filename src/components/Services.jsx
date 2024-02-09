import React, { useState } from 'react';
import { Avatar, Grid, Typography } from '@mui/material';
import { ServicesCss, ServicesProvided } from '../constants';
import { Button } from 'react-scroll';

const Services = () => {
  const [hovered, setHovered] = useState(false);

  const handleAvatarHover = () => {
    setHovered(true);
  };

  const handleAvatarLeave = () => {
    setHovered(false);
  };

  return (
    <Grid container style={ServicesCss.outerGrid}>
      <Grid style={ServicesCss.textGrid}>
        <Grid>
          <Typography style={{ padding: '0.8rem', backgroundColor: '#292828', width: '4vw', marginBottom: '10px', color: '#B0B0B0' }}>Services</Typography>
        </Grid>
        <Grid>
          <Typography variant='h4' style={{ fontWeight: 800 }}>What I Do</Typography>
        </Grid>
      </Grid>
      <Grid container style={ServicesCss.servicesGrid}>
        {ServicesProvided.map((serv, i) => {
          return (
            <Grid
              item
              xs={3} // 4 grid items for each row
              style={{
                ...ServicesCss.serviceGrid,
              }}
              onMouseEnter={handleAvatarHover}
              onMouseLeave={handleAvatarLeave}
            >
              <Grid>
                <Avatar style={{ backgroundColor: hovered ? '#575757' : '#434343', fontWeight: 800 }} sx={{ width: 60, height: 60, fontSize: '18px' }}>
                  {serv.id}</Avatar>
              </Grid>
              <Grid style={ServicesCss.textContainer}>
                <Grid>
                  <Typography variant='h6' sx={{ fontWeight: 700 }}>
                    {serv.serviceName}
                  </Typography>
                </Grid>
                <Grid>
                  <Typography variant='body1' sx={{ color: '#B0B0B0' }}>
                    {serv.description}
                  </Typography>
                </Grid>
                <Grid sx={{ color: '#B0B0B0', position: 'relative', marginTop: '1rem', }}>
                  <Button
                    style={{
                      position: 'absolute',
                      color: 'white',
                      left: hovered ? '0' : '-10%',
                      transition: 'left .3s ease',
                      opacity: hovered ? 1 : 0,
                      backgroundColor: 'transparent',
                      border: 'none',
                      padding: 0,
                      cursor: 'pointer'
                    }}
                  >
                    Read More...
                  </Button>
                  <span style={{ opacity: hovered ? 0 : 1 }}>...</span>
                </Grid>
              </Grid>
            </Grid>
          )
        })}
      </Grid>
    </Grid>
  );
};

export default Services;
