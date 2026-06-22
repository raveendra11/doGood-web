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
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import FavoriteIcon from '@mui/icons-material/Favorite';
import GroupsIcon from '@mui/icons-material/Groups';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { IMPACT_STATS } from '../data/impactStats';

const VALUES = [
  {
    icon: <FavoriteIcon />,
    title: 'Compassion First',
    description:
      'Every interaction is rooted in empathy. We listen to communities and respond with genuine care.',
    color: '#E91E63',
  },
  {
    icon: <EmojiObjectsIcon />,
    title: 'Transparency',
    description:
      'Every donation is tracked from donor to beneficiary, so you always know the impact you make.',
    color: '#FF9800',
  },
  {
    icon: <Diversity3Icon />,
    title: 'Inclusivity',
    description:
      'We serve people of every age, background, and belief — no one is left behind.',
    color: '#1E88E5',
  },
  {
    icon: <RocketLaunchIcon />,
    title: 'Lasting Impact',
    description:
      'We focus on sustainable change, not quick fixes — empowering communities to thrive long-term.',
    color: '#4CAF50',
  },
];

const MILESTONES = [
  {
    year: '2022',
    title: 'A Small Beginning',
    description: 'Founded by a group of friends who wanted to redirect surplus to those in need.',
  },
  {
    year: '2023',
    title: 'First Donations',
    description: 'Crossed our first major milestone distributing cloths for orphan children.',
  },
  {
    year: '2024',
    title: 'Volunteer Network',
    description: '10+ friends who became volunteers and partnered with 1 orphanages and old-age home.',
  },
  {
    year: '2025',
    title: 'Digital Platform',
    description: 'Launched the doGood web app to connect donors and beneficiaries seamlessly.',
  },
];

const SectionPaper = ({ children, sx = {} }) => (
  <Paper
    elevation={0}
    sx={{
      p: { xs: 3, md: 4 },
      bgcolor: 'rgba(255, 255, 255, 0.15)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      borderRadius: 4,
      border: '1px solid rgba(255, 255, 255, 0.3)',
      height: '100%',
      transition: 'all 0.3s ease',
      '&:hover': {
        bgcolor: 'rgba(255, 255, 255, 0.25)',
        transform: 'translateY(-5px)',
        borderColor: 'rgba(255, 255, 255, 0.5)',
      },
      ...sx,
    }}
  >
    {children}
  </Paper>
);

const About = () => {
  const navigate = useNavigate();

  return (
    <Box
      component="section"
      sx={{
        minHeight: '100vh',
        minHeight: '100dvh',
        width: '100%',
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(/about-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        pt: { xs: 10, md: 14 },
        pb: { xs: 12, md: 16 },
        position: 'relative',
        color: '#fff',
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={{ xs: 8, md: 12 }}>
          {/* Hero */}
          <Box textAlign="center">
            <Chip
              label="Our Story"
              sx={{
                mb: 2,
                px: 1,
                fontWeight: 700,
                letterSpacing: 1.5,
                color: '#fff',
                bgcolor: 'rgba(255, 255, 255, 0.18)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.25)' },
              }}
            />
            <Typography
              variant="h2"
              sx={{
                fontWeight: 900,
                mb: 2,
                color: '#fff',
                fontSize: { xs: '2.5rem', sm: '3.25rem', md: '4rem' },
                textShadow: '0 4px 10px rgba(0,0,0,0.3)',
                lineHeight: 1.1,
              }}
            >
              About doGood
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'rgba(255,255,255,0.9)',
                fontWeight: 400,
                maxWidth: 720,
                mx: 'auto',
                lineHeight: 1.6,
                fontSize: { xs: '1rem', md: '1.15rem' },
              }}
            >
              A community-driven movement connecting generous hearts with people who need them most.
            </Typography>
            <Box
              sx={{
                width: 80,
                height: 4,
                bgcolor: '#4CAF50',
                mx: 'auto',
                borderRadius: 2,
                mt: 3,
              }}
            />
          </Box>

          {/* Stats Strip */}
          <Grid container spacing={2}>
            {IMPACT_STATS.map((stat) => {
              const Icon = stat.icon;
              return (
                <Grid key={stat.key} size={{ xs: 6, md: 3 }}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: { xs: 2, md: 3 },
                      textAlign: 'center',
                      borderRadius: 3,
                      bgcolor: 'rgba(255,255,255,0.12)',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.25)',
                      height: '100%',
                      transition: 'transform 0.25s ease, bgcolor 0.25s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        bgcolor: 'rgba(255,255,255,0.2)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        mx: 'auto',
                        mb: 1.5,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: `${stat.color}33`,
                        color: stat.color,
                        '& svg': { fontSize: 28 },
                      }}
                    >
                      <Icon />
                    </Box>
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 800,
                        color: '#fff',
                        lineHeight: 1,
                        fontSize: { xs: '1.75rem', md: '2.25rem' },
                      }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: 'rgba(255,255,255,0.85)',
                        fontWeight: 600,
                        letterSpacing: 0.5,
                        textTransform: 'uppercase',
                        fontSize: '0.7rem',
                        display: 'block',
                        mt: 0.5,
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </Paper>
                </Grid>
              );
            })}
          </Grid>

          {/* Mission & Vision */}
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 6 }}>
              <SectionPaper>
                <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 2 }}>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: 2,
                      bgcolor: 'rgba(76,175,80,0.25)',
                      color: '#4CAF50',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <RocketLaunchIcon />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 800, color: '#fff' }}>
                    Our Mission
                  </Typography>
                </Stack>
                <Typography sx={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'rgba(255,255,255,0.92)' }}>
                  Our mission is to bridge the gap between donors and beneficiaries by
                  creating a transparent, reliable, and easy-to-use platform. We believe
                  in empowering communities by connecting generous individuals with
                  children, elders, and families in need. Every donation — whether it's
                  clothes, books, food, or time — makes a real difference.
                </Typography>
              </SectionPaper>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <SectionPaper>
                <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 2 }}>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: 2,
                      bgcolor: 'rgba(33,150,243,0.25)',
                      color: '#64B5F6',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <VisibilityIcon />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 800, color: '#fff' }}>
                    Our Vision
                  </Typography>
                </Stack>
                <Typography sx={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'rgba(255,255,255,0.92)' }}>
                  We envision a world where no resource goes to waste and every person
                  has access to the basic necessities of life. By fostering a culture of
                  kindness and social responsibility, we aim to build stronger, more
                  compassionate communities.
                </Typography>
              </SectionPaper>
            </Grid>
          </Grid>

          {/* What We Do */}
          <SectionPaper>
            <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 3 }}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: 2,
                  bgcolor: 'rgba(255,152,0,0.25)',
                  color: '#FFB74D',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <VolunteerActivismIcon />
              </Box>
              <Typography variant="h5" sx={{ fontWeight: 800, color: '#fff' }}>
                What We Do
              </Typography>
            </Stack>

            <Typography sx={{ mb: 2.5, color: 'rgba(255,255,255,0.92)', lineHeight: 1.7 }}>
              Through our platform, donors can contribute items that directly impact lives:
            </Typography>

            <Grid container spacing={2} sx={{ mb: 3 }}>
              {[
                'Clothes for children and elders',
                'Books and educational materials',
                'Extra food that would otherwise go to waste',
                'Time and skills through volunteering',
              ].map((item) => (
                <Grid size={{ xs: 12, sm: 6 }} key={item}>
                  <Stack direction="row" spacing={1.5} alignItems="center">
                    <CheckCircleOutlineIcon sx={{ color: '#4CAF50', fontSize: 22 }} />
                    <Typography sx={{ color: '#fff', fontWeight: 500 }}>{item}</Typography>
                  </Stack>
                </Grid>
              ))}
            </Grid>

            <Divider sx={{ borderColor: 'rgba(255,255,255,0.2)', my: 2 }} />
            <Typography sx={{ color: 'rgba(255,255,255,0.92)', lineHeight: 1.7 }}>
              Our dedicated volunteers ensure that every donation reaches the right hands
              with care and dignity.
            </Typography>
          </SectionPaper>

          {/* Core Values */}
          <Box>
            <Box textAlign="center" sx={{ mb: 4 }}>
              <Typography variant="overline" sx={{ color: 'rgba(255,255,255,0.75)', fontWeight: 700, letterSpacing: 2 }}>
                What We Stand For
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 800, color: '#fff', mt: 0.5 }}>
                Our Core Values
              </Typography>
            </Box>
            <Grid container spacing={3}>
              {VALUES.map((value) => (
                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={value.title}>
                  <SectionPaper>
                    <Box
                      sx={{
                        width: 56,
                        height: 56,
                        borderRadius: 3,
                        mb: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: `${value.color}33`,
                        color: value.color,
                        '& svg': { fontSize: 30 },
                      }}
                    >
                      {value.icon}
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, color: '#fff', mb: 1 }}>
                      {value.title}
                    </Typography>
                    <Typography sx={{ color: 'rgba(255,255,255,0.88)', lineHeight: 1.6 }}>
                      {value.description}
                    </Typography>
                  </SectionPaper>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Timeline */}
          <Box>
            <Box textAlign="center" sx={{ mb: 4 }}>
              <Typography variant="overline" sx={{ color: 'rgba(255,255,255,0.75)', fontWeight: 700, letterSpacing: 2 }}>
                Milestones
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 800, color: '#fff', mt: 0.5 }}>
                Our Journey So Far
              </Typography>
            </Box>
            <Box sx={{ position: 'relative', pl: { xs: 4, md: 6 } }}>
              {/* Vertical line */}
              <Box
                aria-hidden
                sx={{
                  position: 'absolute',
                  left: { xs: 14, md: 22 },
                  top: 12,
                  bottom: 12,
                  width: 2,
                  bgcolor: 'rgba(255,255,255,0.25)',
                  borderRadius: 1,
                }}
              />
              <Stack spacing={3}>
                {MILESTONES.map((m, idx) => (
                  <Box
                    key={m.year}
                    sx={{
                      position: 'relative',
                      animation: `slideIn 0.5s ease ${idx * 0.08}s both`,
                      '@keyframes slideIn': {
                        from: { opacity: 0, transform: 'translateX(-12px)' },
                        to: { opacity: 1, transform: 'translateX(0)' },
                      },
                    }}
                  >
                    {/* Dot */}
                    <Box
                      sx={{
                        position: 'absolute',
                        left: { xs: -26, md: -34 },
                        top: 14,
                        width: 16,
                        height: 16,
                        borderRadius: '50%',
                        bgcolor: '#4CAF50',
                        border: '3px solid rgba(255,255,255,0.85)',
                        boxShadow: '0 0 0 4px rgba(76,175,80,0.25)',
                      }}
                    />
                    <SectionPaper>
                      <Chip
                        label={m.year}
                        size="small"
                        sx={{
                          mb: 1.5,
                          fontWeight: 700,
                          bgcolor: '#4CAF50',
                          color: '#fff',
                        }}
                      />
                      <Typography variant="h6" sx={{ fontWeight: 700, color: '#fff', mb: 0.5 }}>
                        {m.title}
                      </Typography>
                      <Typography sx={{ color: 'rgba(255,255,255,0.88)', lineHeight: 1.6 }}>
                        {m.description}
                      </Typography>
                    </SectionPaper>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Box>

          {/* CTA */}
          <Paper
            elevation={0}
            sx={{
              p: { xs: 4, md: 6 },
              borderRadius: 4,
              textAlign: 'center',
              bgcolor: 'rgba(76, 175, 80, 0.25)',
              border: '1px solid rgba(76, 175, 80, 0.5)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: 800, color: '#fff', mb: 2 }}>
              Be Part of Our Journey
            </Typography>
            <Typography
              sx={{
                color: 'rgba(255,255,255,0.92)',
                maxWidth: 640,
                mx: 'auto',
                mb: 4,
                lineHeight: 1.7,
                fontSize: '1.05rem',
              }}
            >
              Whether you choose to donate, volunteer, or simply spread the word, your
              contribution matters. Together, we can make sure no one is left behind.
            </Typography>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
                onClick={() => navigate('/donate')}
                sx={{
                  bgcolor: '#4CAF50',
                  color: '#fff',
                  fontWeight: 700,
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  textTransform: 'none',
                  fontSize: '1rem',
                  boxShadow: '0 6px 20px rgba(76,175,80,0.4)',
                  '&:hover': {
                    bgcolor: '#43A047',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 24px rgba(76,175,80,0.55)',
                  },
                  transition: 'all 0.2s ease',
                }}
              >
                Donate Now
              </Button>
              {/* <Button
                variant="outlined"
                size="large"
                onClick={() => navigate('/register')}
                disabled
                sx={{
                  color: '#fff',
                  borderColor: 'rgba(255,255,255,0.6)',
                  fontWeight: 700,
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  textTransform: 'none',
                  fontSize: '1rem',
                  '&:hover': {
                    borderColor: '#fff',
                    bgcolor: 'rgba(255,255,255,0.12)',
                  },
                }}
              >
                Join as Volunteer
              </Button> */}
            </Stack>
          </Paper>
        </Stack>
      </Container>
    </Box>
  );
};

export default About;
