// src/components/ContactForm.js
import React, { useState } from 'react';
import { TextField, Button, Typography, Grid } from '@mui/material';
import { styled } from '@mui/system';
import { motion } from 'framer-motion';
import MainContainer from '../components/MainContainer';

const StyledForm = styled(motion.form)({
  maxWidth: '700px',
  margin: '0 auto',
  padding: '20px',
  borderRadius: '8px',
  backgroundColor: 'white', 
  boxShadow: '0 4px 8px rgba(255, 255, 255, 0.1)',
  transition: 'box-shadow 0.3s ease-in-out',
  '&:hover': {
    boxShadow: '0 6px 12px rgba(255, 255, 255, 0.2)',
  },
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <>
      <MainContainer />
      <Grid style={{position: 'absolute', top: '20vh', left: '40vw', }}>
        <StyledForm
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}

        >
          <Typography variant="h5" gutterBottom >
            Contact Me
          </Typography>
          <Grid container spacing={2} color={'white'}>
            <Grid item xs={12} color={'white'}>
              <TextField
                required
                color='secondary'
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                multiline
                rows={4}
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </Grid>
          </Grid>
        </StyledForm>
      </Grid>
    </>
  );
};

export default Contact;
