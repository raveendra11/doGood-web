import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { TextField, Button, Box, Typography, MenuItem, Paper, InputAdornment } from '@mui/material';
import { Person, Email, Lock, AssignmentInd } from '@mui/icons-material';
import { registerUser } from '../services/api';

const UserRegistration = () => {
  const [registrationError, setRegistrationError] = useState('');
  const navigate = useNavigate();
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
      let registrationSucceeded = false;
      try {
        await registerUser(values);
        alert('User registered successfully!');
        resetForm();
        registrationSucceeded = true;
      } catch (error) {
        const serverMessage = error.response?.data?.message;
        const isDuplicateEmailError =
          error.response?.status === 409 ||
          serverMessage?.toLowerCase().includes('already exists') ||
          serverMessage?.toLowerCase().includes('already registered');

        setRegistrationError(
          isDuplicateEmailError
            ? 'An user already exists with this email.'
            : (serverMessage || error.message || 'Registration failed.')
        );
      } finally {
        setSubmitting(false);
      }

      if (registrationSucceeded) {
        navigate('/login');
      }
    }
  });

  return (
    <Box
      sx={{
        minHeight: '100vh',
        minHeight: '100dvh',
        width: '100%',
        m: 0,
        p: 0,
        backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/register.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2
      }}
    >
      <Paper
        elevation={0}
        sx={{
          position: 'relative',
          zIndex: 1,
          maxWidth: 450,
          width: '100%',
          p: { xs: 3, md: 5 },
          borderRadius: 8,
          bgcolor: '#ffffff',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
          border: '4px solid #fff',
        }}
      >
        <Box textAlign="center" mb={4}>
          <Typography variant="h4" sx={{ fontWeight: 900, color: '#1b5e20', mb: 1, letterSpacing: '-0.02em' }}>
            Create Account
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500 }}>
            Join our community and start making a difference today
          </Typography>
        </Box>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            id="name"
            name="name"
            label="Full Name"
            margin="normal"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Person sx={{ color: '#2e7d32' }} />
                </InputAdornment>
              ),
            }}
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3 } }}
          />

          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email Address"
            margin="normal"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Email sx={{ color: '#2e7d32' }} />
                </InputAdornment>
              ),
            }}
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3 } }}
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
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock sx={{ color: '#2e7d32' }} />
                </InputAdornment>
              ),
            }}
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3 } }}
          />

          <TextField
            fullWidth
            id="role"
            name="role"
            label="I want to join as a..."
            select
            margin="normal"
            value={formik.values.role}
            onChange={formik.handleChange}
            error={formik.touched.role && Boolean(formik.errors.role)}
            helperText={formik.touched.role && formik.errors.role}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AssignmentInd sx={{ color: '#2e7d32' }} />
                </InputAdornment>
              ),
            }}
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3 } }}
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
            sx={{ 
              mt: 4, 
              py: 1.5, 
              borderRadius: 3, 
              fontSize: '1.1rem', 
              fontWeight: 700,
              bgcolor: '#2e7d32',
              textTransform: 'none',
              '&:hover': { bgcolor: '#1b5e20' },
              boxShadow: '0 8px 16px rgba(46, 125, 50, 0.3)'
            }}
            disabled={formik.isSubmitting}
          >
            Create Account
          </Button>
          {registrationError && (
            <Typography color="error" variant="body2" sx={{ mt: 2, textAlign: 'center', fontWeight: 600, bgcolor: '#ffebee', p: 1, borderRadius: 2 }}>
              {registrationError}
            </Typography>
          )}
          <Typography variant="body2" sx={{ mt: 3, textAlign: 'center', color: 'text.secondary' }}>
            Already have an account?{' '}
            <Link to="/login" style={{ color: '#2e7d32', textDecoration: 'none', fontWeight: 700 }}>
              Login here
            </Link>
          </Typography>
        </form>
      </Paper>
    </Box>
  );
};

export default UserRegistration;
