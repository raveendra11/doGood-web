import React from 'react';
import { Box, Container, Link, Stack, Typography } from '@mui/material';

const Footer = () => (
  <Box component="footer" sx={{ backgroundColor: '#0f3b60', color: '#fff', py: 4, px: 2 }}>
    <Container maxWidth="lg">
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="space-between" alignItems="center">
        <Typography variant="body2">© {new Date().getFullYear()} doGood. All rights reserved.</Typography>
        <Stack direction="row" spacing={2}>
          <Link href="/about" underline="hover" color="inherit">About</Link>
          <Link href="/contact" underline="hover" color="inherit">Contact</Link>
          <Link href="/faq" underline="hover" color="inherit">FAQ</Link>
        </Stack>
      </Stack>
    </Container>
  </Box>
);

export default Footer;
