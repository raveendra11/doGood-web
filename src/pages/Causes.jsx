import React from 'react';
import { Box, Typography, Divider, Grid, Card, CardContent } from '@mui/material';

const Causes = () => {
  const causes = [
    {
      title: "Clothing Drives",
      description:
        "We collect gently used clothes and distribute them to children, elders, and families in need. No piece of clothing should go to waste when it can bring warmth and dignity to someone else."
    },
    {
      title: "Food Sharing",
      description:
        "Through partnerships with donors, restaurants, and individuals, we redirect surplus food to orphanages, old-age homes, and community kitchens. Together, we reduce waste and fight hunger."
    },
    {
      title: "Education Support",
      description:
        "Access to education is a basic right. We provide books, stationery, and learning materials to underprivileged children to ensure they have the tools to learn and grow."
    },
    {
      title: "Elder Care Assistance",
      description:
        "Elders deserve care, respect, and companionship. We organize donation drives for essential items and create programs that bring comfort and joy to senior citizens in need."
    },
    {
      title: "Emergency Relief",
      description:
        "In times of natural disasters or crises, we mobilize quickly to provide immediate assistance such as food, clothing, and shelter to affected communities."
    }
  ];

  return (
    <Box
      sx={{
        p: 5,
        maxWidth: "1100px",
        margin: "0 auto",
        textAlign: "left",
        lineHeight: 1.7,
      }}
    >
      {/* Title */}
      <Typography variant="h3" gutterBottom align="center">
        Our Causes
      </Typography>

      <Typography variant="body1" paragraph align="center">
        Here are the initiatives we are currently working on. Each cause reflects
        our commitment to creating a positive impact in the community.
      </Typography>

      <Divider sx={{ my: 4 }} />

      {/* Causes in grid format */}
      <Grid container spacing={4}>
        {causes.map((cause, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                borderRadius: "16px",
                boxShadow: 3,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
              }}
            >
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {cause.title}
                </Typography>
                <Typography variant="body2">{cause.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Causes;
