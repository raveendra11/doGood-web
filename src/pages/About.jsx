import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Grid,
  Paper,
  Stack,
  Button,
} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Section = ({ title, children }) => (
  <Paper
    elevation={0}
    sx={{
      p: 3,
      bgcolor: 'rgba(255, 255, 255, 0.15)',
      backdropFilter: 'blur(10px)',
      borderRadius: 4,
      border: '1px solid rgba(255, 255, 255, 0.3)',
      height: '100%',
      transition: 'all 0.3s ease',
      '&:hover': {
        bgcolor: 'rgba(255, 255, 255, 0.25)',
        transform: 'translateY(-5px)',
        borderColor: 'rgba(255, 255, 255, 0.5)',
      },
    }}
  >
    <Typography
      variant="h5"
      sx={{ fontWeight: 800, mb: 2, color: '#fff', letterSpacing: '-0.01em' }}
    >
      {title}
    </Typography>
    <Box sx={{ color: '#fff' }}>{children}</Box>
  </Paper>
);

const About = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/about-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        pt: { xs: 10, md: 12 },
        pb: { xs: 12, md: 14 },
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={6}>
          {/* Main Title */}
          <Box textAlign="center">
            <Typography
              variant="h2"
              sx={{ 
                fontWeight: 900, 
                mb: 2, 
                color: '#fff', 
                fontSize: { xs: '2.5rem', md: '4rem' },
                textShadow: '0 4px 10px rgba(0,0,0,0.3)'
              }}
            >
              About Us
            </Typography>
            <Box 
              sx={{ 
                width: '80px', 
                height: '4px', 
                bgcolor: '#fff', 
                mx: 'auto', 
                borderRadius: 2 
              }} 
            />
          </Box>

          {/* Grid Sections */}
          <Grid 
            container 
            spacing={3}
            sx={{ 
              gridTemplateColumns: {
                xs: '1fr',
                sm: '1fr 1fr',
                md: '1fr 1fr',
              }
            }}
          >
            <Grid item xs={12} sm={6}>
              <Section title="Our Mission">
                <Typography variant="body1" sx={{ lineHeight: 1.7, fontSize: '1.1rem' }}>
                  Our mission is to bridge the gap between donors and beneficiaries by
                  creating a transparent, reliable, and easy-to-use platform. We believe
                  in empowering communities by connecting generous individuals with
                  children, elders, and families in need. Every donation—whether it’s
                  clothes, books, food, or time—makes a real difference.
                </Typography>
              </Section>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Section title="Our Vision">
                <Typography variant="body1" sx={{ lineHeight: 1.7, fontSize: '1.1rem' }}>
                  We envision a world where no resource goes to waste and every person
                  has access to the basic necessities of life. By fostering a culture of
                  kindness and social responsibility, we aim to build stronger, more
                  compassionate communities.
                </Typography>
              </Section>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Section title="What We Do">
                <Typography variant="body1" paragraph sx={{ mb: 2 }}>
                  Through our platform, donors can contribute items that directly impact lives:
                </Typography>
                <List dense>
                  <ListItem sx={{ alignItems: 'flex-start', py: 0.5 }}>
                    <CheckCircleOutlineIcon sx={{ mr: 1.5, color: '#fff', fontSize: 20 }} />
                    <ListItemText primary="Clothes for children and elders" sx={{ '& .MuiListItemText-primary': { color: '#fff' } }} />
                  </ListItem>
                  <ListItem sx={{ alignItems: 'flex-start', py: 0.5 }}>
                    <CheckCircleOutlineIcon sx={{ mr: 1.5, color: '#fff', fontSize: 20 }} />
                    <ListItemText primary="Books and educational materials" sx={{ '& .MuiListItemText-primary': { color: '#fff' } }} />
                  </ListItem>
                  <ListItem sx={{ alignItems: 'flex-start', py: 0.5 }}>
                    <CheckCircleOutlineIcon sx={{ mr: 1.5, color: '#fff', fontSize: 20 }} />
                    <ListItemText primary="Extra food that would otherwise go to waste" sx={{ '& .MuiListItemText-primary': { color: '#fff' } }} />
                  </ListItem>
                </List>
                <Typography variant="body1" sx={{ mt: 2, lineHeight: 1.7 }}>
                  Our dedicated volunteers ensure that every donation reaches the right hands with care and dignity.
                </Typography>
              </Section>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Section title="Join Us">
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Typography variant="body1" sx={{ lineHeight: 1.7, fontSize: '1.1rem', flexGrow: 1 }}>
                    Be part of our journey to create a kinder world. Whether you choose to
                    donate, volunteer, or spread the word, your contribution matters.
                    Together, we can make sure that no one is left behind.
                  </Typography>
                  <Box 
                    onClick={() => navigate('/register')}
                    sx={{ 
                      cursor: 'pointer', 
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      bgcolor: 'rgba(76, 175, 80, 0.2)',
                      color: '#4CAF50',
                      transition: 'all 0.3s ease',
                      '&:hover': { 
                        bgcolor: '#4CAF50', 
                        color: '#fff',
                        transform: 'translateX(5px)' 
                      }
                    }}
                  >
                    <ArrowForwardIosIcon sx={{ fontSize: '1.2rem' }} />
                  </Box>
                </Box>
              </Section>
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
};

export default About;

