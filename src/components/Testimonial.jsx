import React from 'react';
import { Typography, Box, Grid } from '@mui/material';
import { Testimonies } from '../constants';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Display two testimonies at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (

    <Slider {...settings}>
      {Testimonies.map((testimonial, index) => (
        <Box
          key={index}

        >
          <Grid style={{marginLeft: '20px', width: '30vw', height: '15vh', textAlign: 'justify' }}>
            <Typography variant="h6" gutterBottom>
              {testimonial.name}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {testimonial.testimony}
            </Typography>
          </Grid>
        </Box>
      ))}
    </Slider>
  );
};

export default Testimonial;
