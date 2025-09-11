import React from 'react';
import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';

const Section = ({ title, children }) => (
  <Box
    sx={{
      p: { xs: 1, md: 2 },
      bgcolor: 'transparent',
    }}
  >
    <Typography
      variant="h5"
      sx={{ fontWeight: 700, mb: 1.5, color: '#fff' }} // white heading
    >
      {title}
    </Typography>
    <Box sx={{ color: '#fff' }}>{children}</Box> {/* white body */}
  </Box>
);

const About = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        backgroundImage: "url('/about-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        pt: { xs: 10, md: 12 },
        pb: { xs: 12, md: 14 },
        position: 'relative',
      }}
    >
      <Container maxWidth="xl">
        {/* Main Title */}
        <Typography
          variant="h3"
          align="center"
          sx={{ fontWeight: 800, mb: { xs: 3, md: 5 }, color: '#fff' }}
        >
          About Us
        </Typography>

        {/* Grid Sections */}
        <Box
          sx={{
            display: 'grid',
            gap: { xs: 3, md: 4 },
            gridTemplateColumns: {
              xs: '1fr',
              sm: '1fr 1fr',
              md: '1fr 1fr 1fr',
              lg: '1fr 1fr 1fr 1fr',
            },
          }}
        >
          {/* Mission */}
          <Section title="Our Mission">
            <Typography variant="body1" paragraph>
              Our mission is to bridge the gap between donors and beneficiaries by
              creating a transparent, reliable, and easy-to-use platform. We believe
              in empowering communities by connecting generous individuals with
              children, elders, and families in need. Every donation—whether it’s
              clothes, books, food, or time—makes a real difference.
            </Typography>
          </Section>

          {/* Vision */}
          <Section title="Our Vision">
            <Typography variant="body1" paragraph>
              We envision a world where no resource goes to waste and every person
              has access to the basic necessities of life. By fostering a culture of
              kindness and social responsibility, we aim to build stronger, more
              compassionate communities.
            </Typography>
          </Section>

          {/* What We Do */}
          <Section title="What We Do">
            <Typography variant="body1" paragraph>
              Through our platform, donors can contribute items like:
            </Typography>
            <List dense>
              <ListItem><ListItemText primary="Clothes for children and elders" /></ListItem>
              <ListItem><ListItemText primary="Books and educational materials" /></ListItem>
              <ListItem><ListItemText primary="Extra food that would otherwise go to waste" /></ListItem>
            </List>
            <Typography variant="body1" paragraph>
              These contributions are distributed directly to orphanages, elder care
              homes, and underprivileged communities. Our dedicated volunteers ensure
              that every donation reaches the right hands with care and dignity.
            </Typography>
          </Section>

          {/* Values */}
          <Section title="Our Values">
            <Typography variant="body1" paragraph>
              We are guided by four core values:
            </Typography>
            <List dense>
              <ListItem><ListItemText primary="Compassion – Caring for people in need" /></ListItem>
              <ListItem><ListItemText primary="Sustainability – Reducing waste and sharing resources" /></ListItem>
              <ListItem><ListItemText primary="Transparency – Ensuring trust between donors and beneficiaries" /></ListItem>
              <ListItem><ListItemText primary="Community – Building connections and support networks" /></ListItem>
            </List>
          </Section>
        </Box>
      </Container>

      {/* Join Us at bottom center */}
      <Box
        sx={{
          position: 'absolute',
          bottom: { xs: 30, md: 50 },
          left: '50%',
          transform: 'translateX(-50%)',
          textAlign: 'center',
          maxWidth: 600,
          px: 2,
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontWeight: 700, mb: 1.5, color: '#fff' }} // white heading
        >
          Join Us
        </Typography>
        <Typography variant="body1" sx={{ color: '#fff' }}>
          Be part of our journey to create a kinder world. Whether you choose to
          donate, volunteer, or spread the word, your contribution matters.
          Together, we can make sure that no one is left behind.
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
