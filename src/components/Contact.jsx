import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, TextField, Typography, Container, makeStyles } from '@material-ui/core';
import emailjs from 'emailjs-com';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '400px',
    margin: 'auto',
  },
  submitButton: {
    marginTop: theme.spacing(2),
  },
}));

const Contact = () => {
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data) => {
    try {
      // Send the form data to EmailJS
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        data,
        'YOUR_USER_ID'
      );

      // You can handle success here, like showing a success message
      console.log('Email sent successfully');
    } catch (error) {
      // Handle errors, show an error message, etc.
      console.error('Error sending email', error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Contact Me
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Name"
          name="name"
          inputRef={register({ required: 'Name is required' })}
          error={!!errors.name}
          helperText={errors.name && errors.name.message}
          margin="normal"
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          inputRef={register({
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'Invalid email address',
            },
          })}
          error={!!errors.email}
          helperText={errors.email && errors.email.message}
          margin="normal"
        />
        <TextField
          label="Message"
          name="message"
          multiline
          rows={4}
          inputRef={register({ required: 'Message is required' })}
          error={!!errors.message}
          helperText={errors.message && errors.message.message}
          margin="normal"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.submitButton}
        >
          Send
        </Button>
      </form>
    </Container>
  );
};

export default Contact;
