import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Chip,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import GroupsIcon from '@mui/icons-material/Groups';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const HELP_TYPES = [
  {
    icon: <VolunteerActivismIcon />,
    title: 'Food Assistance',
    description: 'Short-term food support for individuals and families in need.',
    color: '#E65100',
  },
  {
    icon: <GroupsIcon />,
    title: 'Family Support',
    description: 'Clothing, school supplies, and household essentials.',
    color: '#1b5e20',
  },
  {
    icon: <SupportAgentIcon />,
    title: 'Elder Care',
    description: 'Companionship, medical supplies, and care for seniors.',
    color: '#6A1B9A',
  },
];

const RequestHelp = () => {
  const navigate = useNavigate();

  return (
    <Box
      component="section"
      sx={{
        minHeight: '100vh',
        // eslint-disable-next-line no-dupe-keys
        minHeight: '100dvh',
        py: { xs: 12, md: 14 },
        px: { xs: 1, sm: 2 },
        backgroundColor: '#e8f5e9',
        backgroundImage: [
          'radial-gradient(circle at 12% 18%, rgba(165, 214, 167, 0.45) 0%, transparent 45%)',
          'radial-gradient(circle at 88% 80%, rgba(200, 230, 201, 0.55) 0%, transparent 50%)',
          'linear-gradient(180deg, #f1f8e9 0%, #e8f5e9 100%)',
        ].join(', '),
        backgroundAttachment: 'fixed',
      }}
    >
      <Container maxWidth="md">
        <Stack spacing={{ xs: 4, md: 5 }}>
          <Box textAlign="center">
            <Chip
              label="Request Help"
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
              We're Here to Help
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
              If you or someone you know needs support, reach out. We review
              every request with care and connect you with the right help.
            </Typography>
            <Box sx={{ width: 60, height: 4, bgcolor: '#2e7d32', mx: 'auto', borderRadius: 2, mt: 2.5 }} />
          </Box>

          <Grid container spacing={{ xs: 2, md: 3 }}>
            {HELP_TYPES.map((h) => (
              <Grid key={h.title} size={{ xs: 12, sm: 4 }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 2.5, md: 3 },
                    height: '100%',
                    borderRadius: 3,
                    border: '1px solid #dce6dc',
                    bgcolor: 'background.paper',
                    textAlign: 'center',
                    transition: 'all 0.25s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: `0 12px 28px ${h.color}28`,
                      borderColor: h.color,
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      mx: 'auto',
                      mb: 1.5,
                      borderRadius: 2.5,
                      bgcolor: `${h.color}1a`,
                      color: h.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      '& svg': { fontSize: 30 },
                    }}
                  >
                    {h.icon}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#1b5e20', mb: 0.75, fontSize: '1.1rem' }}>
                    {h.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.55 }}>
                    {h.description}
                  </Typography>
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
              Submit a request
            </Typography>
            <Typography
              variant="body2"
              sx={{ opacity: 0.95, mb: 3, maxWidth: 480, mx: 'auto', position: 'relative' }}
            >
              Sign in to your account and tell us what you need. Our team will reach out within 24–48 hours.
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
                onClick={() => navigate('/login')}
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
                Sign In to Request
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

export default RequestHelp;
