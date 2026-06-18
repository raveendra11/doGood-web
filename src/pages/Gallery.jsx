import React from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Stack,
  Typography,
} from '@mui/material';

const GALLERY_ITEMS = [
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/ec-1NSL1GAk',
    title: 'Food Distribution',
    description: 'Distributing meals to daily workers and orphans.',
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/aquzw8uZi_w',
    title: 'Community Support',
    description: 'Donated blankets on the new years eve.',
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/O2NcKd_GIZc',
    title: 'Clothes Donation Drive',
    description: 'A short video showcasing our impact in the community.',
  },
 {
    type: 'image',
    url: '/children_cloths_donation.jpg',
    title: 'Clothes Donation Drive',
    description: 'Providing clothes to children in need.',
  }
];

const Gallery = () => {
  return (
    <Box sx={{ py: { xs: 10, md: 12 }, px: 2, backgroundColor: '#e8f5e9', minHeight: '100vh' }}>
      <Container maxWidth="lg">
        <Stack spacing={3}>
          <Box textAlign="center" mb={4}>
            <Typography variant="h3" sx={{ fontWeight: 700, color: '#1b5e20', mb: 2 }}>
              Donation Gallery
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: '700px', mx: 'auto' }}>
              Explore our recent donation efforts and impact stories. We believe in transparency 
              and sharing the joy of giving.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {GALLERY_ITEMS.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  elevation={2}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 3,
                    border: '1px solid #dce6dc',
                    overflow: 'hidden',
                    transition: 'transform 0.2s',
                    '&:hover': { transform: 'scale(1.02)' },
                  }}
                >
                  {item.type === 'image' ? (
                    <CardMedia
                      component="img"
                      image={item.url}
                      alt={item.title}
                      sx={{ height: 220, objectFit: 'cover' }}
                    />
                  ) : (
                    <Box sx={{ height: 220, overflow: 'hidden' }}>
                      <iframe
                        width="100%"
                        height="100%"
                        src={item.url}
                        title={item.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{ border: 0 }}
                      />
                    </Box>
                  )}
                  <CardContent sx={{ p: 2, flexGrow: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, color: '#2e7d32', mb: 1 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
};

export default Gallery;
