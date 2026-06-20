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
        minHeight: '100dvh',
          width: '100%',
          backgroundColor: '#1b5e20',
          backgroundImage: [
            'radial-gradient(circle at 15% 20%, rgba(129, 199, 132, 0.40) 0%, transparent 45%)',
            'radial-gradient(circle at 85% 75%, rgba(165, 214, 167, 0.35) 0%, transparent 45%)',
            'linear-gradient(135deg, #0d3a13 0%, #1b5e20 50%, #2e7d32 100%)',
          ].join(', '),
          backgroundAttachment: 'fixed',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 2
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
        minHeight: '100dvh',
        width: '100%',
        m: 0,
        p: 0,
        backgroundColor: '#1b5e20',
        backgroundImage: [
          'radial-gradient(circle at 12% 18%, rgba(129, 199, 132, 0.40) 0%, transparent 40%)',
          'radial-gradient(circle at 88% 25%, rgba(165, 214, 167, 0.35) 0%, transparent 42%)',
          'radial-gradient(circle at 50% 60%, rgba(200, 230, 201, 0.28) 0%, transparent 55%)',
          'radial-gradient(circle at 20% 92%, rgba(102, 187, 106, 0.32) 0%, transparent 45%)',
          'linear-gradient(160deg, #0d3a13 0%, #1b5e20 35%, #2e7d32 70%, #1b5e20 100%)',
        ].join(', '),
        backgroundAttachment: 'fixed',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180' viewBox='0 0 180 180'><g fill='none' stroke='rgba(255,255,255,0.04)' stroke-width='1'><path d='M90 10 Q120 60 90 110 Q60 160 90 170'/><path d='M30 30 Q70 70 30 110'/><path d='M150 30 Q110 70 150 110'/></g></svg>\")",
          backgroundSize: '180px 180px',
          opacity: 0.5,
          pointerEvents: 'none',
        },
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