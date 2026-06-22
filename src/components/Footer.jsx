import React from 'react';
import { Box, Container, Link, Stack, Typography, Grid, Divider, IconButton } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import YoutubeIcon from '@mui/icons-material/YouTube';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Footer = () => (
  <Box
    component="footer"
    sx={{
      backgroundColor: '#1b5e20',
      color: '#fff',
      py: { xs: 4, md: 5 },
      px: 2,
      // Respect iOS safe-area at the bottom
      paddingBottom: { xs: 'calc(1rem + env(safe-area-inset-bottom))', md: 'calc(1.25rem + env(safe-area-inset-bottom))' },
    }}
  >
    <Container maxWidth="lg">
      <Grid container spacing={{ xs: 3, md: 4 }}>
        <Grid size={{ xs: 12, sm: 12, md: 4 }}>
          <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1.5 }}>
            <Box
              component="img"
              src="doGood.png"
              alt="doGood logo"
              sx={{ width: 40, height: 40, borderRadius: '50%' }}
            />
            <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#fff' }}>
              doGood
            </Typography>
          </Stack>
          <Typography
            variant="body2"
            sx={{ color: 'rgba(255,255,255,0.75)', display: 'block', lineHeight: 1.6, mb: 2, maxWidth: 320 }}
          >
            Connecting generous hearts with those in need. Together, we create a
            kinder world.
          </Typography>
          <Stack direction="row" spacing={1}>
            <IconButton
              component="a"
              href="https://www.youtube.com/@alwaysdogood"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              size="small"
              aria-label="Visit our YouTube channel"
              sx={{
                color: 'rgba(255,255,255,0.85)',
                p: 0.75,
                border: '1px solid rgba(255,255,255,0.2)',
                '&:hover': { bgcolor: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.4)' },
              }}
            >
              <YoutubeIcon sx={{ fontSize: '1.25rem' }} />
            </IconButton>
          </Stack>
        </Grid>

        <Grid size={{ xs: 6, sm: 4, md: 4 }}>
          <Typography variant="body2" sx={{ fontWeight: 700, mb: 1.5, letterSpacing: 0.5 }}>
            Quick Links
          </Typography>
          <Stack spacing={0.75}>
            <Link
              component={RouterLink}
              to="/about"
              underline="hover"
              color="inherit"
              sx={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.875rem', '&:hover': { color: '#fff' } }}
            >
              About Us
            </Link>
            <Link
              component={RouterLink}
              to="/causes"
              underline="hover"
              color="inherit"
              sx={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.875rem', '&:hover': { color: '#fff' } }}
            >
              Our Causes
            </Link>
            <Link
              component={RouterLink}
              to="/gallery"
              underline="hover"
              color="inherit"
              sx={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.875rem', '&:hover': { color: '#fff' } }}
            >
              Gallery
            </Link>
            <Link
              component={RouterLink}
              to="/contact"
              underline="hover"
              color="inherit"
              sx={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.875rem', '&:hover': { color: '#fff' } }}
            >
              Contact
            </Link>
          </Stack>
        </Grid>

        <Grid size={{ xs: 6, sm: 8, md: 4 }}>
          <Typography variant="body2" sx={{ fontWeight: 700, mb: 1.5, letterSpacing: 0.5 }}>
            Get In Touch
          </Typography>
          <Stack spacing={0.75}>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.75)' }}>
              wedogood11@gmail.com
            </Typography>
            <Link
              component={RouterLink}
              to="/donate"
              underline="hover"
              sx={{
                color: '#A5D6A7',
                fontSize: '0.875rem',
                fontWeight: 600,
                '&:hover': { color: '#fff' },
              }}
            >
              Become a Donor →
            </Link>
          </Stack>
        </Grid>
      </Grid>

      <Divider sx={{ my: { xs: 2.5, md: 3 }, borderColor: 'rgba(255,255,255,0.1)' }} />

      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={1.5}
        justifyContent="space-between"
        alignItems={{ xs: 'center', sm: 'center' }}
        sx={{ textAlign: { xs: 'center', sm: 'left' } }}
      >
        <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.75rem' }}>
          © {new Date().getFullYear()} doGood. All rights reserved.
        </Typography>
        <Stack direction="row" spacing={0.5} alignItems="center" sx={{ color: 'rgba(255,255,255,0.55)' }}>
          <Typography variant="caption" sx={{ fontSize: '0.75rem' }}>
            Made with
          </Typography>
          <FavoriteIcon sx={{ fontSize: 12, color: '#E91E63' }} />
          <Typography variant="caption" sx={{ fontSize: '0.75rem' }}>
            for humanity
          </Typography>
        </Stack>
      </Stack>
    </Container>
  </Box>
);

export default Footer;
