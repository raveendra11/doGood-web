import React from 'react';
import { Box, Typography, Divider } from '@mui/material';

const About = () => {
  return (
    <Box
      sx={{
        p: 5,
        maxWidth: "900px",
        margin: "0 auto",
        textAlign: "left",
        lineHeight: 1.7,
      }}
    >
      {/* Title */}
      <Typography variant="h3" gutterBottom align="center">
        About Us
      </Typography>

      {/* Mission */}
      <Typography variant="h5" gutterBottom>
        Our Mission
      </Typography>
      <Typography variant="body1" paragraph>
        Our mission is to bridge the gap between donors and beneficiaries by
        creating a transparent, reliable, and easy-to-use platform. We believe
        in empowering communities by connecting generous individuals with
        children, elders, and families in need. Every donation, whether it’s
        clothes, books, food, or time, makes a real difference.
      </Typography>

      <Divider sx={{ my: 3 }} />

      {/* Vision */}
      <Typography variant="h5" gutterBottom>
        Our Vision
      </Typography>
      <Typography variant="body1" paragraph>
        We envision a world where no resource goes to waste and every person has
        access to the basic necessities of life. By fostering a culture of
        kindness and social responsibility, we aim to build stronger, more
        compassionate communities.
      </Typography>

      <Divider sx={{ my: 3 }} />

      {/* What We Do */}
      <Typography variant="h5" gutterBottom>
        What We Do
      </Typography>
      <Typography variant="body1" paragraph>
        Through our platform, donors can contribute items like:
      </Typography>
      <ul>
        <li><Typography>👕 Clothes for children and elders</Typography></li>
        <li><Typography>📚 Books and educational materials</Typography></li>
        <li><Typography>🍲 Extra food that would otherwise go to waste</Typography></li>
      </ul>
      <Typography variant="body1" paragraph>
        These contributions are distributed directly to orphanages, elder care
        homes, and underprivileged communities. Our dedicated volunteers ensure
        that every donation reaches the right hands with care and dignity.
      </Typography>

      <Divider sx={{ my: 3 }} />

      {/* Values */}
      <Typography variant="h5" gutterBottom>
        Our Values
      </Typography>
      <Typography variant="body1" paragraph>
        We are guided by four core values:
      </Typography>
      <ul>
        <li><Typography>🤝 Compassion – Caring for people in need</Typography></li>
        <li><Typography>🌍 Sustainability – Reducing waste and sharing resources</Typography></li>
        <li><Typography>💡 Transparency – Ensuring trust between donors and beneficiaries</Typography></li>
        <li><Typography>🙌 Community – Building connections and support networks</Typography></li>
      </ul>

      <Divider sx={{ my: 3 }} />

      {/* Closing */}
      <Typography variant="h5" gutterBottom>
        Join Us
      </Typography>
      <Typography variant="body1" paragraph>
        Be part of our journey to create a kinder world. Whether you choose to
        donate, volunteer, or spread the word, your contribution matters. Together,
        we can make sure that no one is left behind.
      </Typography>
    </Box>
  );
};

export default About;
