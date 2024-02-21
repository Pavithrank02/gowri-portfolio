import React, { useState } from 'react';
import { Avatar, Grid, Typography } from '@mui/material';
import { ServicesCss, ServicesProvided } from '../constants';
import { Button } from 'react-scroll';
import { useTheme } from '../ThemeContext';

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { theme } = useTheme();

  const handleAvatarHover = (index) => {
    setHoveredIndex(index);
  };

  const handleAvatarLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <Grid
      container
      xs={12}
      style={ServicesCss.outerGrid}
    >
      <Grid item
        style={ServicesCss.textGrid}
      >
        <Grid>
          <Typography
            style={{
              padding: '0.8rem',
              width: '4vw',
              marginBottom: '10px',
              background: theme === 'light' ? '#FFF' : '#292828',
              color: theme === 'light' ? 'black' : '#B0B0B0'
            }}
          >
            Services
          </Typography>
        </Grid>
        <Grid>
          <Typography variant='h4' style={{ fontWeight: 800, color: theme === 'light' ? 'black' : 'white' }}>What I Do</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={1} style={ServicesCss.servicesGrid}>
        {ServicesProvided.map((serv, i) => (
          <Grid
            key={i}
            item
            xs={12} // Each grid item takes up full width on extra small screens (stacks vertically)
            sm={4} // Each grid item takes up half width on small screens (two items per row)
            md={4} // Each grid item takes up one-third width on medium screens (three items per row)
            lg={4} // Each grid item takes up one-third width on large screens (three items per row)
            style={{
              background: theme === 'light' ? '#FFF' : '#292828',
              color: theme === 'light' ? 'black' : '#B0B0B0',
              ...ServicesCss.serviceGrid,
            }}
            onMouseEnter={() => handleAvatarHover(i)}
            onMouseLeave={handleAvatarLeave}
          >
            <Grid container alignItems="center" justifyContent="center">
              <Avatar
                style={{
                  backgroundColor: hoveredIndex === i ? '#575757' : '#434343',
                  width: 60,
                  height: 60,
                  fontSize: '18px',
                  fontWeight: 800,
                }}
              >
                {serv.id}
              </Avatar>
            </Grid>
            <Grid>
              <Typography variant="h6" sx={{ fontWeight: 800, marginBottom: '10px', color: theme === 'light' ? 'black' : 'white', }}>
                {serv.serviceName}
              </Typography>
              <Typography variant="body1" sx={{ color: '#B0B0B0' }}>
                {serv.description}
              </Typography>
              <Grid sx={{ color: '#B0B0B0', marginBottom: '1rem' }}>
                <Button
                  style={{
                    fontSize: '15px',
                    color: theme === 'light' ? 'black' : 'white',
                    left: hoveredIndex === i ? '0' : '-10%',
                    transition: 'left .3s ease',
                    opacity: hoveredIndex === i ? 1 : 0,
                    backgroundColor: 'transparent',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    marginTop: '1rem',
                  }}
                >
                  Read More...
                </Button>
                <span style={{ opacity: hoveredIndex === i ? 0 : 1, fontSize: '30px', }}>...</span>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>


    </Grid>
  );
};

export default Services;
