import React, { useState, useMemo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
  Paper,
  Container,
  TextField,
  IconButton,
  InputAdornment,
  Chip,
  Stack,
  Button,
  Tooltip,
  Fade,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import SearchOffIcon from '@mui/icons-material/SearchOff';
import UnfoldLessIcon from '@mui/icons-material/UnfoldLess';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';

const faqs = [
  {
    question: 'What kind of donations do you accept?',
    answer:
      'We accept clothes, books, extra food, and other essential items. Monetary donations are not required — our focus is on sharing resources directly with those in need.',
    category: 'Donating',
  },
  {
    question: 'Can I donate items in bulk?',
    answer:
      'Yes! If you have bulk donations such as clothes, books, or food items, please contact us so we can arrange proper logistics for collection and distribution.',
    category: 'Donating',
  },
  {
    question: 'What items are not accepted for donation?',
    answer:
      'We cannot accept perishable food items that are expired, broken or hazardous items, used mattresses, or items that require major repair. Please ensure donations are in good, usable condition.',
    category: 'Donating',
  },
  {
    question: 'Do you provide tax receipts for donations?',
    answer:
      'Currently, we do not issue tax receipts as our focus is non-monetary contributions. However, we provide acknowledgments and regular updates on how your donations are making an impact.',
    category: 'Donating',
  },
  {
    question: 'How can I volunteer?',
    answer:
      'You can join our volunteer program by signing up on the website. Volunteers help with collection drives, distribution, and community events.',
    category: 'Volunteering',
  },
  {
    question: 'How do I update my volunteer information or preferences?',
    answer:
      'Log in to your volunteer account on our website to update your contact information, availability, and areas of interest. You can also contact our volunteer coordinator for assistance.',
    category: 'Volunteering',
  },
  {
    question: 'How can I organize a donation drive in my community?',
    answer:
      'We provide toolkits and support for community donation drives. Contact our community outreach team to get started with planning materials, promotion help, and logistics coordination.',
    category: 'Volunteering',
  },
  {
    question: 'Where do the donations go?',
    answer:
      'All donations are distributed to orphanages, elder care homes, and underprivileged communities. We ensure that everything reaches the right hands responsibly.',
    category: 'Logistics',
  },
  {
    question: 'How do I schedule a pickup for my donations?',
    answer:
      'For bulk donations, we offer pickup services within our service area. Please fill out the donation request form or contact us directly to schedule a convenient time.',
    category: 'Logistics',
  },
  {
    question: "Is there a way to track what happens to my donations?",
    answer:
      "While we don't offer individual item tracking, we provide regular impact reports and stories showing how donations are used in the communities we serve. Follow us on social media for updates.",
    category: 'About Us',
  },
];

const CATEGORIES = ['All', 'Donating', 'Volunteering', 'Logistics', 'About Us'];

const highlightMatch = (text, term) => {
  if (!term) return text;
  const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const parts = text.split(new RegExp(`(${escaped})`, 'gi'));
  return parts.map((part, i) =>
    part.toLowerCase() === term.toLowerCase() ? (
      <Box
        key={i}
        component="mark"
        sx={{
          bgcolor: 'rgba(46, 125, 50, 0.18)',
          color: 'inherit',
          px: 0.25,
          borderRadius: 0.5,
          fontWeight: 700,
        }}
      >
        {part}
      </Box>
    ) : (
      <React.Fragment key={i}>{part}</React.Fragment>
    )
  );
};

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [expanded, setExpanded] = useState(false);

  const filteredFAQs = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    return faqs.filter((faq) => {
      const matchesCategory =
        activeCategory === 'All' || faq.category === activeCategory;
      const matchesTerm =
        !term ||
        faq.question.toLowerCase().includes(term) ||
        faq.answer.toLowerCase().includes(term);
      return matchesCategory && matchesTerm;
    });
  }, [searchTerm, activeCategory]);

  const categoryCounts = useMemo(() => {
    const counts = { All: faqs.length };
    faqs.forEach((faq) => {
      counts[faq.category] = (counts[faq.category] || 0) + 1;
    });
    return counts;
  }, []);

  const handleAccordionChange = (panel) => (_event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleExpandAll = () => {
    setExpanded('all');
  };

  const handleCollapseAll = () => {
    setExpanded(false);
  };

  const isAllExpanded = expanded === 'all';

  const hasActiveFilters = searchTerm.trim() !== '' || activeCategory !== 'All';
  const clearFilters = () => {
    setSearchTerm('');
    setActiveCategory('All');
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        // eslint-disable-next-line no-dupe-keys
        minHeight: '100dvh',
        width: '100%',
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(/about-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        py: { xs: 12, md: 14 },
        px: { xs: 1, sm: 2 },
        position: 'relative',
        color: '#fff',
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
          {/* Header */}
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
              Find answers to the most common questions about donating, volunteering, and how we operate.
            </Typography>
            <Box sx={{ width: 60, height: 4, bgcolor: '#2e7d32', mx: 'auto', borderRadius: 2, mt: 2 }} />
          </Box>

          <Divider sx={{ my: { xs: 2, md: 3 }, borderColor: '#dce6dc' }} />

          {/* Search Bar */}
          <Box sx={{ mb: 2.5 }}>
            <TextField
              placeholder="Search FAQs..."
              aria-label="Search frequently asked questions"
              sx={{
                width: '100%',
                borderRadius: 2,
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                  transition: 'box-shadow 0.2s ease',
                  '& fieldset': { borderColor: '#dce6dc' },
                  '&:hover fieldset': { borderColor: '#1b5e20' },
                  '&.Mui-focused fieldset': {
                    borderColor: '#1b5e20',
                    borderWidth: 1.5,
                  },
                  '&.Mui-focused': {
                    boxShadow: '0 0 0 4px rgba(27, 94, 32, 0.08)',
                  },
                },
                '& .MuiInputBase-input': {
                  px: 3,
                  py: 2,
                  fontSize: { xs: '0.9rem', sm: '1rem' },
                },
              }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon fontSize="small" sx={{ color: 'action.disabled' }} />
                  </InputAdornment>
                ),
                endAdornment: searchTerm ? (
                  <InputAdornment position="end">
                    <Tooltip title="Clear search">
                      <IconButton
                        size="small"
                        aria-label="clear search"
                        onClick={() => setSearchTerm('')}
                        sx={{
                          color: 'action.disabled',
                          '&:hover': { color: 'action.active' },
                        }}
                      >
                        <ClearIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </InputAdornment>
                ) : null,
              }}
            />
          </Box>

          {/* Category Chips */}
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 1,
              mb: 2.5,
              justifyContent: { xs: 'flex-start', sm: 'center' },
            }}
            role="tablist"
            aria-label="FAQ categories"
          >
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              const count = categoryCounts[category] || 0;
              return (
                <Chip
                  key={category}
                  role="tab"
                  aria-selected={isActive}
                  label={
                    <Box component="span" sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.75 }}>
                      {category}
                      <Box
                        component="span"
                        sx={{
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          px: 0.75,
                          py: 0.1,
                          borderRadius: 1,
                          bgcolor: isActive ? 'rgba(255,255,255,0.25)' : 'rgba(27, 94, 32, 0.12)',
                          color: isActive ? '#fff' : '#1b5e20',
                          minWidth: 18,
                          textAlign: 'center',
                          lineHeight: 1.4,
                        }}
                      >
                        {count}
                      </Box>
                    </Box>
                  }
                  onClick={() => setActiveCategory(category)}
                  clickable
                  sx={{
                    fontWeight: 600,
                    fontSize: '0.85rem',
                    px: 0.5,
                    py: 2,
                    height: 34,
                    borderRadius: '17px',
                    transition: 'all 0.2s ease',
                    bgcolor: isActive ? '#1b5e20' : 'transparent',
                    color: isActive ? '#fff' : '#1b5e20',
                    border: '1.5px solid',
                    borderColor: isActive ? '#1b5e20' : '#dce6dc',
                    '&:hover': {
                      bgcolor: isActive ? '#1b5e20' : 'rgba(27, 94, 32, 0.06)',
                      borderColor: '#1b5e20',
                      transform: 'translateY(-1px)',
                    },
                    '&:active': { transform: 'translateY(0)' },
                  }}
                />
              );
            })}
          </Box>

          {/* Result bar */}
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
              {filteredFAQs.length === faqs.length
                ? `Showing all ${faqs.length} questions`
                : `Showing ${filteredFAQs.length} of ${faqs.length} questions`}
            </Typography>
            {filteredFAQs.length > 0 && (
              <Tooltip title={isAllExpanded ? 'Collapse all' : 'Expand all'}>
                <Button
                  size="small"
                  onClick={isAllExpanded ? handleCollapseAll : handleExpandAll}
                  startIcon={
                    isAllExpanded ? <UnfoldLessIcon /> : <UnfoldMoreIcon />
                  }
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
              </Tooltip>
            )}
          </Box>

          {/* FAQ List or Empty State */}
          {filteredFAQs.length === 0 ? (
            <Fade in timeout={400}>
              <Box
                role="status"
                aria-live="polite"
                sx={{
                  textAlign: 'center',
                  py: { xs: 5, md: 6 },
                  px: 2,
                  borderRadius: 3,
                  border: '2px dashed #dce6dc',
                  bgcolor: 'rgba(232, 245, 233, 0.4)',
                }}
              >
                <Box
                  sx={{
                    width: 64,
                    height: 64,
                    mx: 'auto',
                    mb: 2,
                    borderRadius: '50%',
                    bgcolor: '#e8f5e9',
                    color: '#2e7d32',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <SearchOffIcon sx={{ fontSize: 32 }} />
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    color: '#1b5e20',
                    fontWeight: 700,
                    mb: 1,
                    fontSize: { xs: '1.05rem', md: '1.2rem' },
                  }}
                >
                  No matching questions
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                    mb: 3,
                    fontSize: { xs: '0.9rem', md: '0.95rem' },
                    maxWidth: 420,
                    mx: 'auto',
                  }}
                >
                  We couldn't find any FAQs matching your search. Try different keywords or clear filters to see all questions.
                </Typography>
                {hasActiveFilters && (
                  <Button
                    variant="contained"
                    onClick={clearFilters}
                    startIcon={<ClearIcon />}
                    sx={{
                      textTransform: 'none',
                      bgcolor: '#2e7d32',
                      color: '#fff',
                      fontWeight: 600,
                      px: 3,
                      borderRadius: '20px',
                      boxShadow: '0 4px 12px rgba(46, 125, 50, 0.25)',
                      '&:hover': {
                        bgcolor: '#1b5e20',
                        boxShadow: '0 6px 16px rgba(46, 125, 50, 0.35)',
                      },
                    }}
                  >
                    Clear filters
                  </Button>
                )}
              </Box>
            </Fade>
          ) : (
            <Stack spacing={1.5}>
              {filteredFAQs.map((faq, index) => {
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
                          {highlightMatch(faq.question, searchTerm)}
                        </Typography>
                        <Chip
                          label={faq.category}
                          size="small"
                          sx={{
                            mt: 0.75,
                            height: 20,
                            fontSize: '0.7rem',
                            fontWeight: 600,
                            bgcolor: 'rgba(46, 125, 50, 0.1)',
                            color: '#2e7d32',
                            border: '1px solid rgba(46, 125, 50, 0.2)',
                            '& .MuiChip-label': { px: 1 },
                          }}
                        />
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
                        {highlightMatch(faq.answer, searchTerm)}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                );
              })}
            </Stack>
          )}
        </Paper>

        {/* CTA: Still have questions? */}
        <Fade in timeout={600}>
          <Paper
            elevation={0}
            sx={{
              mt: { xs: 3, md: 4 },
              p: { xs: 3, md: 4 },
              borderRadius: 4,
              textAlign: 'center',
              background: 'linear-gradient(135deg, #1b5e20 0%, #2e7d32 100%)',
              color: '#fff',
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: -50,
                right: -50,
                width: 200,
                height: 200,
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.06)',
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -40,
                left: -40,
                width: 160,
                height: 160,
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.05)',
              },
            }}
          >
            <Box sx={{ position: 'relative', zIndex: 1 }}>
              <Box
                sx={{
                  width: 56,
                  height: 56,
                  mx: 'auto',
                  mb: 1.5,
                  borderRadius: '50%',
                  bgcolor: 'rgba(255, 255, 255, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <VolunteerActivismIcon sx={{ fontSize: 28 }} />
              </Box>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 800,
                  mb: 1,
                  fontSize: { xs: '1.25rem', md: '1.5rem' },
                }}
              >
                Still have questions?
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  opacity: 0.92,
                  mb: 3,
                  fontSize: { xs: '0.9rem', md: '0.95rem' },
                  maxWidth: 460,
                  mx: 'auto',
                }}
              >
                Our team is here to help. Reach out and we'll get back to you as soon as possible.
              </Typography>
              <Button
                component={RouterLink}
                to="/contact"
                variant="contained"
                startIcon={<ContactSupportIcon />}
                sx={{
                  textTransform: 'none',
                  bgcolor: '#fff',
                  color: '#1b5e20',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  px: 3.5,
                  py: 1.25,
                  borderRadius: '24px',
                  boxShadow: '0 6px 18px rgba(0, 0, 0, 0.2)',
                  transition: 'all 0.25s ease',
                  '&:hover': {
                    bgcolor: '#f1f8e9',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 10px 24px rgba(0, 0, 0, 0.28)',
                  },
                  '&:active': { transform: 'translateY(0)' },
                }}
              >
                Contact our team
              </Button>
            </Box>
          </Paper>
        </Fade>
      </Container>
    </Box>
  );
};

export default FAQ;
