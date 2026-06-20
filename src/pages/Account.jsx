import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Avatar,
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
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useAuth } from '../context/AuthContext';

const formatLabel = (key) =>
  key
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/[_-]+/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());

const Account = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const visibleEntries = currentUser && typeof currentUser === 'object'
    ? Object.entries(currentUser).filter(
        ([key, value]) =>
          value !== null &&
          value !== undefined &&
          !/(password|secret|token|salt|hash)/i.test(key),
      )
    : [];

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
          'radial-gradient(circle at 12% 18%, rgba(165, 214, 167, 0.45) 0%, transparent 45%)',
          'radial-gradient(circle at 88% 80%, rgba(200, 230, 201, 0.55) 0%, transparent 50%)',
          'linear-gradient(180deg, #f1f8e9 0%, #e8f5e9 100%)',
        ].join(', '),
        backgroundAttachment: 'fixed',
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={0}
          sx={{
            borderRadius: 4,
            overflow: 'hidden',
            border: '1px solid #dce6dc',
            bgcolor: 'background.paper',
            boxShadow: '0 20px 50px rgba(27, 94, 32, 0.12)',
          }}
        >
          <Box
            sx={{
              background: 'linear-gradient(135deg, #1b5e20 0%, #2e7d32 50%, #43A047 100%)',
              color: '#fff',
              pt: { xs: 5, md: 6 },
              pb: { xs: 8, md: 10 },
              textAlign: 'center',
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: -40,
                right: -40,
                width: 160,
                height: 160,
                borderRadius: '50%',
                bgcolor: 'rgba(255,255,255,0.08)',
              },
            }}
          >
            <Typography
              variant="overline"
              sx={{ fontWeight: 700, letterSpacing: 2.5, opacity: 0.9 }}
            >
              My Account
            </Typography>
            <Typography
              variant="h4"
              sx={{ fontWeight: 800, mt: 0.5, fontSize: { xs: '1.5rem', md: '2rem' } }}
            >
              Profile Overview
            </Typography>
          </Box>

          <Box sx={{ px: { xs: 2.5, md: 4 }, pb: { xs: 3, md: 4 }, mt: { xs: -6, md: -7 } }}>
            <Avatar
              sx={{
                width: { xs: 80, md: 100 },
                height: { xs: 80, md: 100 },
                mx: 'auto',
                mb: 2,
                border: '4px solid #fff',
                boxShadow: 3,
                bgcolor: '#1b5e20',
                color: '#fff',
                fontSize: { xs: '1.75rem', md: '2.25rem' },
                fontWeight: 800,
              }}
            >
              {currentUser?.email ? currentUser.email[0].toUpperCase() : <PersonIcon sx={{ fontSize: 'inherit' }} />}
            </Avatar>

            <Box textAlign="center" sx={{ mb: 3 }}>
              <Typography
                variant="h6"
                sx={{ fontWeight: 800, color: '#1b5e20', fontSize: { xs: '1.1rem', md: '1.25rem' } }}
              >
                {currentUser?.name || currentUser?.username || 'Welcome!'}
              </Typography>
              {currentUser?.email && (
                <Stack
                  direction="row"
                  spacing={0.5}
                  alignItems="center"
                  justifyContent="center"
                  sx={{ color: 'text.secondary', mt: 0.5 }}
                >
                  <EmailIcon sx={{ fontSize: 16 }} />
                  <Typography variant="body2">{currentUser.email}</Typography>
                </Stack>
              )}
            </Box>

            <Divider sx={{ my: 2 }} />

            {visibleEntries.length === 0 ? (
              <Box textAlign="center" sx={{ py: 4 }}>
                <Typography variant="body2" color="text.secondary">
                  No additional account information to display.
                </Typography>
              </Box>
            ) : (
              <Grid container spacing={2}>
                {visibleEntries.map(([key, value]) => (
                  <Grid key={key} size={{ xs: 12, sm: 6 }}>
                    <Box
                      sx={{
                        p: 1.5,
                        borderRadius: 2,
                        bgcolor: '#f1f8e9',
                        border: '1px solid #dce6dc',
                      }}
                    >
                      <Typography
                        variant="caption"
                        sx={{
                          display: 'block',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: 1,
                          color: '#2e7d32',
                          mb: 0.5,
                          fontSize: '0.65rem',
                        }}
                      >
                        {formatLabel(key)}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: 500, color: 'text.primary', wordBreak: 'break-word' }}
                      >
                        {typeof value === 'object' ? JSON.stringify(value) : String(value)}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            )}

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={1.5}
              sx={{ mt: 3 }}
              justifyContent="center"
            >
              <Button
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                onClick={() => navigate('/dashboard')}
                sx={{
                  bgcolor: '#1b5e20',
                  color: '#fff',
                  fontWeight: 700,
                  px: 3,
                  py: 1.25,
                  borderRadius: 50,
                  textTransform: 'none',
                  '&:hover': { bgcolor: '#2e7d32' },
                }}
              >
                Go to Dashboard
              </Button>
              <Button
                variant="outlined"
                onClick={() => navigate('/profile')}
                sx={{
                  color: '#1b5e20',
                  borderColor: '#1b5e20',
                  fontWeight: 700,
                  px: 3,
                  py: 1.25,
                  borderRadius: 50,
                  textTransform: 'none',
                  '&:hover': { bgcolor: '#1b5e20', color: '#fff' },
                }}
              >
                Edit Profile
              </Button>
            </Stack>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Account;
