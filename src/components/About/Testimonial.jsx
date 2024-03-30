import React from 'react';
import { Typography, Box, Grid, useTheme, useMediaQuery } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Slider from 'react-slick';
import { Testimonies, AboutCss } from '../../constants';
import img1 from '../../assets/gowr.jpg'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonial = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm')); // Adjust breakpoint as needed
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isXs ? 1 : 2, // Display one testimony on small screens, two otherwise
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,

  };

  return (

    <Slider {...settings}>
      {Testimonies.map((testimonial, index) => (
        <Box
          sx={{ ...AboutCss.testimonyGrid2 }}
        >
          <Grid key={index} container sx={{ ...AboutCss.testimonyGrid3 }}>
            <Grid item sx={{ ...AboutCss.testimonyGrid4 }}>
              <Avatar alt="Remy Sharp" src={img1} />
              <Typography variant="h6" gutterBottom style={{ marginLeft: '10px', marginTop: '5px' }}>
                {testimonial.name}
              </Typography>
            </Grid>
            <Grid item >
              <Typography variant="body1" style={{ color: '#B0B0B0', fontStyle: 'italic' }} gutterBottom>
                {testimonial.testimony}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      ))}
    </Slider>
  );
};

export default Testimonial;
