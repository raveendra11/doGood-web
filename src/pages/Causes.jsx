import React from 'react';
import { Box, Typography, Divider, Grid, Card, CardContent, Container, Stack, Chip } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import SchoolIcon from '@mui/icons-material/School';
import ElderlyIcon from '@mui/icons-material/Elderly';
import WarningIcon from '@mui/icons-material/Warning';

const Causes = () => {
  const causes = [
    {
      title: "Clothing Drives",
      description:
        "We collect gently used clothes and distribute them to children, elders, and families in need. No piece of clothing should go to waste when it can bring warmth and dignity to someone else.",
      icon: <ShoppingBagIcon sx={{ color: '#2e7d32' }} />,
      category: 'Basic Needs'
    },
    {
      title: "Food Sharing",
      description:
        "Through partnerships with donors, restaurants, and individuals, we redirect surplus food to orphanages, old-age homes, and community kitchens. Together, we reduce waste and fight hunger.",
      icon: <RestaurantIcon sx={{ color: '#2e7d32' }} />,
      category: 'Hunger Relief'
    },
    {
      title: "Education Support",
      description:
        "Access to education is a basic right. We provide books, stationery, and learning materials to underprivileged children to ensure they have the tools to learn and grow.",
      icon: <SchoolIcon sx={{ color: '#2e7d32' }} />,
      category: 'Education'
    },
    {
      title: "Elder Care Assistance",
      description:
        "Elders deserve care, respect, and companionship. We organize donation drives for essential items and create programs that bring comfort and joy to senior citizens in need.",
      icon: <ElderlyIcon sx={{ color: '#2e7d32' }} />,
      category: 'Elderly Care'
    },
    {
      title: "Emergency Relief",
      description:
        "In times of natural disasters or crises, we mobilize quickly to provide immediate assistance such as food, clothing, and shelter to affected communities.",
      icon: <WarningIcon sx={{ color: '#2e7d32' }} />,
      category: 'Crisis Response'
    }
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        backgroundImage: "url('/causes-bg.svg')",
        backgroundColor: "#0f3b60",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        py: { xs: 10, md: 12 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            p: { xs: 4, md: 6 },
            textAlign: "left",
            lineHeight: 1.7,
            bgcolor: "rgba(255, 255, 255, 0.9)",
            borderRadius: 6,
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <Stack spacing={3} alignItems="center" mb={6}>
            <Typography 
              variant="h3" 
              align="center" 
              sx={{ 
                fontWeight: 900, 
                color: '#1b5e20', 
                letterSpacing: '-0.02em',
                fontSize: { xs: '2.2rem', md: '3.5rem' }
              }}
            >
              Our Causes
            </Typography>

            <Typography 
              variant="body1" 
              align="center" 
              sx={{ 
                color: 'text.secondary', 
                maxWidth: '700px', 
                fontSize: '1.1rem',
                fontWeight: 400
              }}
            >
              Here are the initiatives we are currently working on. Each cause reflects
              our commitment to creating a positive impact in the community.
            </Typography>
            <Divider sx={{ width: '60px', height: '4px', bgcolor: '#2e7d32', borderRadius: 2 }} />
          </Stack>

          <Grid container spacing={4}>
            {causes.map((cause, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    borderRadius: "24px",
                    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: 'all 0.3s ease',
                    border: '1px solid rgba(0,0,0,0.05)',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 24px rgba(0,0,0,0.1)',
                      borderColor: '#a5d6a7'
                    }
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Box 
                        sx={{ 
                          p: 1, 
                          borderRadius: '12px', 
                          backgroundColor: '#e8f5e9', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center' 
                        }}
                      >
                        {cause.icon}
                      </Box>
                      <Chip 
                        label={cause.category} 
                        size="small" 
                        sx={{ 
                          backgroundColor: '#f1f8e9', 
                          color: '#2e7d32', 
                          fontWeight: 600, 
                          borderRadius: '8px' 
                        }} 
                      />
                    </Box>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, color: '#1b5e20' }}>
                      {cause.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                      {cause.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Causes;
