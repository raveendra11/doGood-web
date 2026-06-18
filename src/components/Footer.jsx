import React from 'react';
import { Box, Container, Link, Stack, Typography, Grid, Divider, IconButton } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import YoutubeIcon from '@mui/icons-material/YouTube';

const Footer = () => (
  <Box component="footer" sx={{ backgroundColor: '#1b5e20', color: '#fff', py: 3, px: 2 }}>
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Typography variant="subtitle1" sx={{ fontWeight: 800, mb: 1, color: '#fff' }}>
            doGood
          </Typography>
          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)', mb: 2, display: 'block', lineHeight: 1.4 }}>
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
              sx={{ color: 'rgba(255,255,255,0.8)', p: 0.5 }}
            >
              <YoutubeIcon sx={{ fontSize: '1.2rem' }} />
            </IconButton>
          </Stack>
        </Grid>

        <Grid item xs={6} sm={3} md={3}>
          <Typography variant="body2" sx={{ fontWeight: 700, mb: 1 }}>Quick Links</Typography>
          <Stack spacing={0.5}>
            <Link component={RouterLink} to="/about" underline="hover" color="inherit" sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.8rem', '&:hover': { color: '#fff' } }}>About Us</Link>
            <Link component={RouterLink} to="/causes" underline="hover" color="inherit" sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.8rem', '&:hover': { color: '#fff' } }}>Our Causes</Link>
            <Link component={RouterLink} to="/gallery" underline="hover" color="inherit" sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.8rem', '&:hover': { color: '#fff' } }}>Gallery</Link>
            <Link component={RouterLink} to="/contact" underline="hover" color="inherit" sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.8rem', '&:hover': { color: '#fff' } }}>Contact</Link>
          </Stack>
        </Grid>

        <Grid item xs={6} sm={3} md={5}>
          <Typography variant="body2" sx={{ fontWeight: 700, mb: 1 }}>Contact Us</Typography>
          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)', display: 'block' }}>
            Email: wedogood11@gmail.com
          </Typography>
        </Grid>
      </Grid>

      <Divider sx={{ my: 3, borderColor: 'rgba(255,255,255,0.1)' }} />

      <Stack 
        direction={{ xs: 'column', sm: 'row' }} 
        spacing={2} 
        justifyContent="space-between" 
        alignItems="center"
      >
        <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem' }}>
          © {new Date().getFullYear()} doGood. All rights reserved.
        </Typography>
        <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem' }}>
          Made with ❤️ for humanity
        </Typography>
      </Stack>
    </Container>
  </Box>
);

export default Footer;
