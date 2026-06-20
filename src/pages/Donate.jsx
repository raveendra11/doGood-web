import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import SchoolIcon from '@mui/icons-material/School';
import ElderlyIcon from '@mui/icons-material/Elderly';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const DONATE_OPTIONS = [
  {
    icon: <VolunteerActivismIcon />,
    title: 'Clothes',
    description: 'Gently used clothing for children, elders, and families.',
    color: '#1b5e20',
  },
  {
    icon: <RestaurantIcon />,
    title: 'Food',
    description: 'Surplus food from restaurants, events, and homes.',
    color: '#E65100',
  },
  {
    icon: <SchoolIcon />,
    title: 'Books & Stationery',
    description: 'Educational materials for underprivileged students.',
    color: '#1565C0',
  },
  {
    icon: <ElderlyIcon />,
    title: 'Care Packages',
    description: 'Essential items and companionship for senior citizens.',
    color: '#6A1B9A',
  },
];

const Donate = () => {
  const navigate = useNavigate();

  return (
    <Box
      component="section"
      sx={{
        minHeight: '100vh',
        minHeight: '100dvh',
        minHeight: '100dvh',
        py: { xs: 12, md: 14 },
        px: { xs: 1, sm: 2 },
        backgroundColor: '#e8f5e9',
        backgroundImage: [
          'radial-gradient(circle at 15% 20%, rgba(165, 214, 167, 0.45) 0%, transparent 45%)',
          'radial-gradient(circle at 85% 80%, rgba(200, 230, 201, 0.55) 0%, transparent 50%)',
          'linear-gradient(180deg, #f1f8e9 0%, #e8f5e9 100%)',
        ].join(', '),
        backgroundAttachment: 'fixed',
      }}
    >
      <Container maxWidth="md">
        <Stack spacing={{ xs: 4, md: 5 }}>
          <Box textAlign="center">
            <Chip
              label="Donate"
              sx={{
                mb: 2,
                px: 1,
                fontWeight: 700,
                letterSpacing: 1.5,
                textTransform: 'uppercase',
                fontSize: '0.75rem',
                color: '#1b5e20',
                bgcolor: '#ffffff',
                border: '1px solid #c8e6c9',
              }}
            />
            <Typography
              variant="h2"
              sx={{
                fontWeight: 900,
                color: '#1b5e20',
                mb: 2,
                letterSpacing: '-0.02em',
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                lineHeight: 1.1,
              }}
            >
              Make a Donation
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                maxWidth: 560,
                mx: 'auto',
                fontSize: { xs: '0.95rem', md: '1.05rem' },
                lineHeight: 1.7,
              }}
            >
              Choose what you'd like to contribute. Every item is verified,
              tracked, and delivered with care to those who need it most.
            </Typography>
            <Box sx={{ width: 60, height: 4, bgcolor: '#2e7d32', mx: 'auto', borderRadius: 2, mt: 2.5 }} />
          </Box>

          <Grid container spacing={{ xs: 2, md: 3 }}>
            {DONATE_OPTIONS.map((opt) => (
              <Grid key={opt.title} size={{ xs: 12, sm: 6 }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 2.5, md: 3 },
                    height: '100%',
                    borderRadius: 3,
                    border: '1px solid #dce6dc',
                    bgcolor: 'background.paper',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 2,
                    transition: 'all 0.25s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: `0 12px 28px ${opt.color}28`,
                      borderColor: opt.color,
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      flexShrink: 0,
                      borderRadius: 2,
                      bgcolor: `${opt.color}1a`,
                      color: opt.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      '& svg': { fontSize: 26 },
                    }}
                  >
                    {opt.icon}
                  </Box>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, color: '#1b5e20', mb: 0.5, fontSize: '1.1rem' }}>
                      {opt.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.55 }}>
                      {opt.description}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>

          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, md: 4 },
              borderRadius: 3,
              textAlign: 'center',
              background: 'linear-gradient(135deg, #1b5e20 0%, #2e7d32 50%, #43A047 100%)',
              color: '#fff',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 18px 40px rgba(27,94,32,0.3)',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: -60,
                right: -60,
                width: 200,
                height: 200,
                borderRadius: '50%',
                bgcolor: 'rgba(255,255,255,0.08)',
              },
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 800, mb: 1, position: 'relative' }}>
              Ready to give?
            </Typography>
            <Typography
              variant="body2"
              sx={{ opacity: 0.95, mb: 3, maxWidth: 480, mx: 'auto', position: 'relative' }}
            >
              Sign in or register to submit your donation details. We'll arrange pickup and confirm delivery.
            </Typography>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={1.5}
              justifyContent="center"
              sx={{ position: 'relative' }}
            >
              <Button
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                onClick={() => navigate('/register')}
                sx={{
                  bgcolor: '#fff',
                  color: '#1b5e20',
                  fontWeight: 700,
                  px: 3.5,
                  py: 1.25,
                  borderRadius: 50,
                  textTransform: 'none',
                  '&:hover': { bgcolor: '#f1f8e9', transform: 'translateY(-2px)' },
                  transition: 'all 0.2s ease',
                }}
              >
                Get Started
              </Button>
              <Button
                variant="outlined"
                onClick={() => navigate('/contact')}
                sx={{
                  color: '#fff',
                  borderColor: 'rgba(255,255,255,0.7)',
                  fontWeight: 700,
                  px: 3.5,
                  py: 1.25,
                  borderRadius: 50,
                  textTransform: 'none',
                  '&:hover': { borderColor: '#fff', bgcolor: 'rgba(255,255,255,0.12)' },
                }}
              >
                Contact Us
              </Button>
            </Stack>
          </Paper>
        </Stack>
      </Container>
    </Box>
  );
};

export default Donate;
