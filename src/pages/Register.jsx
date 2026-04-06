import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { TextField, Button, Box, Typography, MenuItem, Paper } from '@mui/material';
import { registerUser } from '../services/api';

const UserRegistration = () => {
  const [registrationError, setRegistrationError] = useState('');
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      role: 'DONOR'
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().min(6, 'Must be at least 6 characters').required('Required'),
      role: Yup.string().required('Required')
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      setRegistrationError('');
      try {
        await registerUser(values);
        alert('User registered successfully!');
        resetForm();
      } catch (error) {
        const serverMessage = error.response?.data?.message;
        const isDuplicateEmailError =
          error.response?.status === 409 ||
          serverMessage?.toLowerCase().includes('already exists') ||
          serverMessage?.toLowerCase().includes('already registered');

        setRegistrationError(
          isDuplicateEmailError
            ? 'an user already exists with this email.'
            : (serverMessage || error.message || 'Registration failed.')
        );
      }
      setSubmitting(false);
    }
  });

  return (
    <Box
  sx={{
    minHeight: '100vh',
    width: '100%',
    m: 0,              // remove margin
    p: 0,              // remove padding
    backgroundImage: "url('/register.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}
>
      {/* Paper form on top of background */}
      <Paper
        elevation={6}
        sx={{
          maxWidth: 400,
          width: '100%',
          p: 4,
          borderRadius: 3,
          bgcolor: 'rgba(255,255,255,0.85)', // translucent white for readability
        }}
      >
        <Typography variant="h5" gutterBottom align="center">
          Register Yourself
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            id="name"
            name="name"
            label="Name"
            margin="normal"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />

          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            margin="normal"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />

          <TextField
            fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            margin="normal"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />

          <TextField
            fullWidth
            id="role"
            name="role"
            label="Role"
            select
            margin="normal"
            value={formik.values.role}
            onChange={formik.handleChange}
            error={formik.touched.role && Boolean(formik.errors.role)}
            helperText={formik.touched.role && formik.errors.role}
          >
            <MenuItem value="DONOR">Donor</MenuItem>
            <MenuItem value="VOLUNTEER">Volunteer</MenuItem>
            <MenuItem value="BENEFICIARY">Beneficiary</MenuItem>
          </TextField>

          <Button
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
            sx={{ mt: 2 }}
            disabled={formik.isSubmitting}
          >
            Register
          </Button>
          {registrationError && (
            <Typography color="error" variant="body2" sx={{ mt: 1, textAlign: 'center' }}>
              {registrationError}
            </Typography>
          )}
          <Typography variant="body2" sx={{ mt: 2, textAlign: 'center' }}>
                      Already have an account? <Link to="/login">Login here</Link>
                    </Typography>
        </form>
      </Paper>
    </Box>
  );
};

export default UserRegistration;
