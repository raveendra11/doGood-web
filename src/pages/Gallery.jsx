import React from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Stack,
  Typography,
} from '@mui/material';

const Gallery = () => {
  return (
    <Box sx={{ py: { xs: 10, md: 12 }, px: 2, backgroundColor: '#f8faf8', minHeight: '100vh' }}>
      <Container maxWidth="md">
        <Stack spacing={3}>
          <Typography variant="h3" sx={{ fontWeight: 700, color: '#1b5e20' }}>
            Donation Gallery
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            This page captures one of our recent donation efforts. More donation stories and images
            will be added here over time.
          </Typography>

          <Card
            elevation={0}
            sx={{
              borderRadius: 3,
              border: '2px solid #dce6dc',
              overflow: 'hidden',
              backgroundColor: '#fff',
            }}
          >
            <CardMedia
              component="img"
              image="/about-bg.jpg"
              alt="Children receiving clothes donation"
              sx={{ height: { xs: 240, sm: 360, md: 420 }, objectFit: 'cover' }}
            />
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h5" sx={{ fontWeight: 700, color: '#2e7d32', mb: 1 }}>
                Clothes Donation Drive
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                This donation focused on providing clothes to children in need. It represents one of
                our completed drives, and this gallery section is designed to showcase many more
                impact stories in the future.
              </Typography>
            </CardContent>
          </Card>
        </Stack>
      </Container>
    </Box>
  );
};

export default Gallery;
