import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Chip,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import SchoolIcon from '@mui/icons-material/School';
import ElderlyIcon from '@mui/icons-material/Elderly';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import UnfoldLessIcon from '@mui/icons-material/UnfoldLess';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Divider from '@mui/material/Divider';

const DONATE_OPTIONS = [
  {
    icon: <VolunteerActivismIcon />,
    title: 'Clothes',
    description: 'Gently used clothing for children, elders, and families.',
    color: '#1b5e20',
  },
  {
    icon: <RestaurantIcon />,
    title: 'Food',
    description: 'Surplus food from restaurants, events, and homes.',
    color: '#E65100',
  },
  {
    icon: <SchoolIcon />,
    title: 'Books & Stationery',
    description: 'Educational materials for underprivileged students.',
    color: '#1565C0',
  },
  {
    icon: <ElderlyIcon />,
    title: 'Care Packages',
    description: 'Essential items and companionship for senior citizens.',
    color: '#6A1B9A',
  },
];

const FAQ_ITEMS = [
  {
    question: 'What kind of donations do you accept?',
    answer:
      'We accept clothes, books, extra food, and other essential items. Monetary donations are not required — our focus is on sharing resources directly with those in need.',
  },
  {
    question: 'Can I donate items in bulk?',
    answer:
      'Yes! If you have bulk donations such as clothes, books, or food items, please contact us so we can arrange proper logistics for collection and distribution.',
  },
  {
    question: 'What items are not accepted for donation?',
    answer:
      'We cannot accept perishable food items that are expired, broken or hazardous items, used mattresses, or items that require major repair. Please ensure donations are in good, usable condition.',
  },
  {
    question: 'Do you provide tax receipts for donations?',
    answer:
      'Currently, we do not issue tax receipts as our focus is non-monetary contributions. However, we provide acknowledgments and regular updates on how your donations are making an impact.',
  },
  {
    question: 'How do I schedule a pickup for my donations?',
    answer:
      'For bulk donations, we offer pickup services within our service area. Please fill out the donation request form or contact us directly to schedule a convenient time.',
  },
  {
    question: 'Where do the donations go?',
    answer:
      'All donations are distributed to orphanages, elder care homes, and underprivileged communities. We ensure that everything reaches the right hands responsibly.',
  },
];

const Donate = () => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);
  const isAllExpanded = expanded === 'all';

  const handleAccordionChange = (panel) => (_event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleExpandAll = () => setExpanded('all');
  const handleCollapseAll = () => setExpanded(false);

  return (
    <Box
      component="section"
      sx={{
        minHeight: '100vh',
        // eslint-disable-next-line no-dupe-keys
        minHeight: '100dvh',
        width: '100%',
        py: { xs: 12, md: 14 },
        px: { xs: 1, sm: 2 },
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(/login.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        color: '#fff',
      }}
    >
      <Container maxWidth="md">
        <Stack spacing={{ xs: 4, md: 5 }}>
          <Box textAlign="center">
            <Chip
              label="Donate"
              sx={{
                mb: 2,
                px: 1,
                fontWeight: 700,
                letterSpacing: 1.5,
                textTransform: 'uppercase',
                fontSize: '0.75rem',
                color: '#1b5e20',
                bgcolor: '#ffffff',
                border: '1px solid #c8e6c9',
              }}
            />
            <Typography
              variant="h2"
              sx={{
                fontWeight: 900,
                color: '#1b5e20',
                mb: 2,
                letterSpacing: '-0.02em',
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                lineHeight: 1.1,
              }}
            >
              Make a Donation
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#ffffff',
                maxWidth: 560,
                mx: 'auto',
                fontSize: { xs: '0.95rem', md: '1.05rem' },
                lineHeight: 1.7,
              }}
            >
              Choose what you'd like to contribute. Every item is verified,
              tracked, and delivered with care to those who need it most.
            </Typography>
            <Box sx={{ width: 60, height: 4, bgcolor: '#2e7d32', mx: 'auto', borderRadius: 2, mt: 2.5 }} />
          </Box>

          <Grid container spacing={{ xs: 2, md: 3 }}>
            {DONATE_OPTIONS.map((opt) => (
              <Grid key={opt.title} size={{ xs: 12, sm: 6 }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 2.5, md: 3 },
                    height: '100%',
                    borderRadius: 3,
                    border: '1px solid #dce6dc',
                    bgcolor: 'background.paper',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 2,
                    transition: 'all 0.25s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: `0 12px 28px ${opt.color}28`,
                      borderColor: opt.color,
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      flexShrink: 0,
                      borderRadius: 2,
                      bgcolor: `${opt.color}1a`,
                      color: opt.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      '& svg': { fontSize: 26 },
                    }}
                  >
                    {opt.icon}
                  </Box>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, color: '#1b5e20', mb: 0.5, fontSize: '1.1rem' }}>
                      {opt.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.55 }}>
                      {opt.description}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>

          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, md: 4 },
              borderRadius: 3,
              textAlign: 'center',
              background: 'linear-gradient(135deg, #1b5e20 0%, #2e7d32 50%, #43A047 100%)',
              color: '#fff',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 18px 40px rgba(27,94,32,0.3)',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: -60,
                right: -60,
                width: 200,
                height: 200,
                borderRadius: '50%',
                bgcolor: 'rgba(255,255,255,0.08)',
              },
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 800, mb: 1, position: 'relative' }}>
              Ready to give?
            </Typography>
            <Typography
              variant="body2"
              sx={{ opacity: 0.95, mb: 3, maxWidth: 480, mx: 'auto', position: 'relative' }}
            >
              Contact to submit your donation details.
            </Typography>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={1.5}
              justifyContent="center"
              sx={{ position: 'relative' }}
            >
              <Button
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                onClick={() => navigate('/contact')}
                sx={{
                  bgcolor: '#fff',
                  color: '#1b5e20',
                  fontWeight: 700,
                  px: 3.5,
                  py: 1.25,
                  borderRadius: 50,
                  textTransform: 'none',
                  '&:hover': { bgcolor: '#f1f8e9', transform: 'translateY(-2px)' },
                  transition: 'all 0.2s ease',
                }}
              >
                Get Started
              </Button>
              <Button
                variant="outlined"
                onClick={() => navigate('/contact')}
                sx={{
                  color: '#fff',
                  borderColor: 'rgba(255,255,255,0.7)',
                  fontWeight: 700,
                  px: 3.5,
                  py: 1.25,
                  borderRadius: 50,
                  textTransform: 'none',
                  '&:hover': { borderColor: '#fff', bgcolor: 'rgba(255,255,255,0.12)' },
                }}
              >
                Contact Us
              </Button>
            </Stack>
          </Paper>

          {/* FAQs */}
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, sm: 4, md: 5 },
              borderRadius: 4,
              bgcolor: 'rgba(255, 255, 255, 0.95)',
              border: '1px solid #dce6dc',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              boxShadow: '0 20px 50px rgba(27, 94, 32, 0.15)',
            }}
          >
            <Box textAlign="center" sx={{ mb: { xs: 3, md: 4 } }}>
              <Box
                sx={{
                  width: 72,
                  height: 72,
                  mx: 'auto',
                  mb: 2,
                  borderRadius: '50%',
                  bgcolor: '#e8f5e9',
                  color: '#1b5e20',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 8px 20px rgba(27, 94, 32, 0.15)',
                  transition: 'transform 0.3s ease',
                  '&:hover': { transform: 'scale(1.05) rotate(-3deg)' },
                }}
              >
                <HelpOutlineIcon sx={{ fontSize: 36 }} />
              </Box>
              <Typography
                variant="h3"
                align="center"
                sx={{
                  fontWeight: 900,
                  color: '#1b5e20',
                  letterSpacing: '-0.02em',
                  fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.75rem' },
                }}
              >
                Frequently Asked Questions
              </Typography>
              <Typography
                variant="body1"
                align="center"
                sx={{
                  color: 'text.secondary',
                  mt: 1.5,
                  fontSize: { xs: '0.95rem', md: '1.05rem' },
                  maxWidth: 520,
                  mx: 'auto',
                }}
              >
                Quick answers about donating, pickups, and where your contributions go.
              </Typography>
              <Box sx={{ width: 60, height: 4, bgcolor: '#2e7d32', mx: 'auto', borderRadius: 2, mt: 2 }} />
            </Box>

            <Divider sx={{ my: { xs: 2, md: 3 }, borderColor: '#dce6dc' }} />

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: 1,
                mb: 2,
                px: 0.5,
              }}
            >
              <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                Showing all {FAQ_ITEMS.length} questions
              </Typography>
              <Button
                size="small"
                onClick={isAllExpanded ? handleCollapseAll : handleExpandAll}
                startIcon={isAllExpanded ? <UnfoldLessIcon /> : <UnfoldMoreIcon />}
                sx={{
                  textTransform: 'none',
                  color: '#1b5e20',
                  fontWeight: 600,
                  fontSize: '0.8rem',
                  '&:hover': { bgcolor: 'rgba(27, 94, 32, 0.06)' },
                }}
              >
                {isAllExpanded ? 'Collapse all' : 'Expand all'}
              </Button>
            </Box>

            <Stack spacing={1.5}>
              {FAQ_ITEMS.map((faq, index) => {
                const panelKey = String(index);
                const isExpanded = expanded === 'all' || expanded === panelKey;
                return (
                  <Accordion
                    key={`${faq.question}-${index}`}
                    expanded={isExpanded}
                    onChange={handleAccordionChange(panelKey)}
                    elevation={0}
                    sx={{
                      borderRadius: '12px !important',
                      border: '1px solid #dce6dc',
                      bgcolor: 'background.paper',
                      overflow: 'hidden',
                      transition: 'all 0.25s ease',
                      '&::before': { display: 'none' },
                      '&:hover': {
                        borderColor: '#a5d6a7',
                        boxShadow: '0 4px 14px rgba(27,94,32,0.08)',
                      },
                      '&.Mui-expanded': {
                        boxShadow: '0 6px 20px rgba(27,94,32,0.12)',
                        borderColor: '#a5d6a7',
                        bgcolor: 'rgba(232, 245, 233, 0.35)',
                      },
                    }}
                  >
                    <AccordionSummary
                      expandIcon={
                        <ExpandMoreIcon
                          sx={{
                            color: '#1b5e20',
                            transition: 'transform 0.25s ease',
                          }}
                        />
                      }
                      sx={{
                        px: { xs: 2, md: 3 },
                        py: { xs: 0.5, md: 0.75 },
                        '& .MuiAccordionSummary-content': {
                          my: { xs: 1, md: 1.5 },
                          alignItems: 'center',
                        },
                        '& .MuiAccordionSummary-expandIconWrapper': {
                          transition: 'transform 0.25s ease',
                        },
                        '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
                          transform: 'rotate(180deg)',
                        },
                      }}
                    >
                      <Box sx={{ flex: 1, pr: 1 }}>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            fontWeight: 700,
                            color: '#1b5e20',
                            fontSize: { xs: '0.95rem', md: '1.05rem' },
                            lineHeight: 1.4,
                          }}
                        >
                          {faq.question}
                        </Typography>
                      </Box>
                    </AccordionSummary>
                    <AccordionDetails sx={{ px: { xs: 2, md: 3 }, pb: 2.5, pt: 0 }}>
                      <Divider sx={{ mb: 1.5, borderColor: '#e8f5e9' }} />
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          lineHeight: 1.75,
                          fontSize: { xs: '0.9rem', md: '0.95rem' },
                        }}
                      >
                        {faq.answer}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                );
              })}
            </Stack>
          </Paper>
        </Stack>
      </Container>
    </Box>
  );
};

export default Donate;
