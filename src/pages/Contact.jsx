import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  TextField, 
  Button, 
  Container, 
  Paper,
  InputAdornment
} from '@mui/material';
import { useForm } from '@formspree/react';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Contact = () => {
  const [state, handleSubmit] = useForm("xykaqbnp");

  if (state.succeeded) {
    return (
      <Box
        sx={{
          minHeight: '100vh',
          // eslint-disable-next-line no-dupe-keys
          minHeight: '100dvh',
          width: '100%',
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(/about-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 2,
          color: '#fff',
        }}
      >
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 5 },
            borderRadius: 8,
            bgcolor: '#ffffff',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            border: '4px solid #fff',
            textAlign: 'center',
            maxWidth: 500
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 900, color: '#1b5e20', mb: 2 }}>
            Thank You!
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Your message has been sent successfully. We will get back to you soon.
          </Typography>
        </Paper>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        // eslint-disable-next-line no-dupe-keys
        minHeight: '100dvh',
        width: '100%',
        m: 0,
        p: 0,
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(/about-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        pt: { xs: 10, md: 14 },
        pb: { xs: 6, md: 10 },
        px: 2,
        color: '#fff',
      }}
    >
      <Paper
        elevation={0}
        sx={{
          position: 'relative',
          zIndex: 1,
          maxWidth: 500,
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
            Contact Us
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500 }}>
            Have questions? We'd love to hear from you.
          </Typography>
        </Box>

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Your Name"
            name="name"
            required
            margin="normal"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon sx={{ color: '#2e7d32' }} />
                </InputAdornment>
              ),
            }}
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3 } }}
          />
          <TextField
            fullWidth
            label="Your Email"
            name="email"
            type="email"
            required
            margin="normal"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon sx={{ color: '#2e7d32' }} />
                </InputAdornment>
              ),
            }}
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3 } }}
          />
          <TextField
            fullWidth
            label="Subject"
            name="subject"
            required
            margin="normal"
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3 } }}
          />
          <TextField
            fullWidth
            label="Message"
            name="message"
            multiline
            rows={5}
            required
            margin="normal"
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3 } }}
          />
          <Button 
            type="submit" 
            variant="contained" 
            size="large" 
            fullWidth 
            disabled={state.submitting}
            sx={{ mt: 3, py: 1.5, fontWeight: 'bold', borderRadius: 3 }}
          >
            {state.submitting ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Contact;