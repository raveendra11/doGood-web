import React from 'react';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
  Paper,
  Container,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const faqs = [
  {
    question: 'What kind of donations do you accept?',
    answer:
      'We accept clothes, books, extra food, and other essential items. Monetary donations are not required — our focus is on sharing resources directly with those in need.',
  },
  {
    question: 'How can I volunteer?',
    answer:
      'You can join our volunteer program by signing up on the website. Volunteers help with collection drives, distribution, and community events.',
  },
  {
    question: 'Where do the donations go?',
    answer:
      'All donations are distributed to orphanages, elder care homes, and underprivileged communities. We ensure that everything reaches the right hands responsibly.',
  },
  {
    question: 'Can I donate items in bulk?',
    answer:
      'Yes! If you have bulk donations such as clothes, books, or food items, please contact us so we can arrange proper logistics for collection and distribution.',
  },
  {
    question: 'Do you provide tax receipts for donations?',
    answer:
      'Currently, we do not issue tax receipts as our focus is non-monetary contributions. However, we provide acknowledgments and regular updates on how your donations are making an impact.',
  },
];

const FAQ = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        minHeight: '100dvh',
        minHeight: '100dvh',
        width: '100%',
        backgroundColor: '#e8f5e9',
        backgroundImage: [
          'radial-gradient(circle at 12% 18%, rgba(129, 199, 132, 0.40) 0%, transparent 45%)',
          'radial-gradient(circle at 88% 80%, rgba(165, 214, 167, 0.35) 0%, transparent 50%)',
          "url('/faq.png')",
        ].join(', '),
        backgroundSize: 'auto, auto, cover',
        backgroundPosition: 'center, center, center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        py: { xs: 12, md: 14 },
        px: { xs: 1, sm: 2 },
      }}
    >
      <Container maxWidth="md">
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
                width: 64,
                height: 64,
                mx: 'auto',
                mb: 2,
                borderRadius: '50%',
                bgcolor: '#e8f5e9',
                color: '#1b5e20',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <HelpOutlineIcon sx={{ fontSize: 32 }} />
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
              Find answers to the most common questions about donating, volunteering, and how we operate.
            </Typography>
            <Box sx={{ width: 60, height: 4, bgcolor: '#2e7d32', mx: 'auto', borderRadius: 2, mt: 2 }} />
          </Box>

          <Divider sx={{ my: { xs: 2, md: 3 }, borderColor: '#dce6dc' }} />

          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              elevation={0}
              sx={{
                mb: 1.5,
                borderRadius: '12px !important',
                border: '1px solid #dce6dc',
                bgcolor: 'background.paper',
                '&::before': { display: 'none' },
                '&.Mui-expanded': { boxShadow: '0 4px 16px rgba(27,94,32,0.08)' },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: '#1b5e20' }} />}
                sx={{
                  px: { xs: 2, md: 3 },
                  py: { xs: 0.5, md: 1 },
                  '& .MuiAccordionSummary-content': { my: { xs: 1, md: 1.5 } },
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: 700, color: '#1b5e20', fontSize: { xs: '0.95rem', md: '1.05rem' } }}
                >
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: { xs: 2, md: 3 }, pb: 2 }}>
                <Typography
                  variant="body2"
                  sx={{ color: 'text.secondary', lineHeight: 1.7, fontSize: { xs: '0.9rem', md: '0.95rem' } }}
                >
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Paper>
      </Container>
    </Box>
  );
};

export default FAQ;
