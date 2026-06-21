import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Container,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import SchoolIcon from '@mui/icons-material/School';
import ElderlyIcon from '@mui/icons-material/Elderly';
import WarningIcon from '@mui/icons-material/Warning';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const CAUSES = [
  {
    id: 'clothing',
    title: 'Clothing Drives',
    description:
      'We collect gently used clothes and distribute them to children, elders, and families in need. No piece of clothing should go to waste when it can bring warmth and dignity to someone else.',
    icon: <ShoppingBagIcon />,
    category: 'Basic Needs',
    color: '#1b5e20',
    stat: '5K+ items',
  },
  {
    id: 'food',
    title: 'Food Sharing',
    description:
      'Through partnerships with donors, restaurants, and individuals, we redirect surplus food to orphanages, old-age homes, and community kitchens. Together, we reduce waste and fight hunger.',
    icon: <RestaurantIcon />,
    category: 'Hunger Relief',
    color: '#E65100',
    stat: '3K+ meals',
  },
  {
    id: 'education',
    title: 'Education Support',
    description:
      'Access to education is a basic right. We provide books, stationery, and learning materials to underprivileged children to ensure they have the tools to learn and grow.',
    icon: <SchoolIcon />,
    category: 'Education',
    color: '#1565C0',
    stat: '1.2K students',
  },
  {
    id: 'elder',
    title: 'Elder Care Assistance',
    description:
      'Elders deserve care, respect, and companionship. We organize donation drives for essential items and create programs that bring comfort and joy to senior citizens in need.',
    icon: <ElderlyIcon />,
    category: 'Elderly Care',
    color: '#6A1B9A',
    stat: '400+ seniors',
  },
  {
    id: 'emergency',
    title: 'Emergency Relief',
    description:
      'In times of natural disasters or crises, we mobilize quickly to provide immediate assistance such as food, clothing, and shelter to affected communities.',
    icon: <WarningIcon />,
    category: 'Crisis Response',
    color: '#C62828',
    stat: '24h response',
    featured: true,
  },
];

const FILTERS = [
  { key: 'all', label: 'All Causes' },
  { key: 'Basic Needs', label: 'Basic Needs' },
  { key: 'Hunger Relief', label: 'Hunger Relief' },
  { key: 'Education', label: 'Education' },
  { key: 'Elderly Care', label: 'Elderly Care' },
  { key: 'Crisis Response', label: 'Crisis Response' },
];

const CauseCard = ({ cause, onLearnMore }) => (
  <Card
    elevation={0}
    sx={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      borderRadius: 4,
      border: '1px solid',
      borderColor: cause.featured ? cause.color : '#dce6dc',
      bgcolor: 'background.paper',
      position: 'relative',
      overflow: 'hidden',
      transition: 'all 0.3s ease',
      '&:hover': {
        transform: 'translateY(-8px)',
        boxShadow: `0 18px 40px ${cause.color}28`,
        borderColor: cause.color,
        '& .cause-arrow': { transform: 'translateX(4px)', opacity: 1 },
      },
    }}
  >
    {cause.featured && (
      <Box
        sx={{
          position: 'absolute',
          top: 16,
          right: -36,
          transform: 'rotate(35deg)',
          bgcolor: cause.color,
          color: '#fff',
          px: 4,
          py: 0.5,
          fontSize: '0.7rem',
          fontWeight: 800,
          letterSpacing: 1,
          textTransform: 'uppercase',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        }}
      >
        Featured
      </Box>
    )}
    <CardContent sx={{ p: { xs: 3, md: 3.5 }, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
      <Stack direction="row" justifyContent="space-between" alignItems="flex-start" sx={{ mb: 2.5 }}>
        <Box
          sx={{
            width: 56,
            height: 56,
            borderRadius: 3,
            bgcolor: `${cause.color}1a`,
            color: cause.color,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '& svg': { fontSize: 30 },
            transition: 'transform 0.3s ease',
            '.MuiCard-root:hover &': { transform: 'scale(1.08) rotate(-4deg)' },
          }}
        >
          {cause.icon}
        </Box>
        <Chip
          label={cause.category}
          size="small"
          sx={{
            fontWeight: 700,
            bgcolor: `${cause.color}14`,
            color: cause.color,
            borderRadius: 1.5,
          }}
        />
      </Stack>

      <Typography variant="h5" sx={{ fontWeight: 800, color: '#1b5e20', mb: 1, lineHeight: 1.25 }}>
        {cause.title}
      </Typography>

      <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.65, mb: 2.5, flexGrow: 1 }}>
        {cause.description}
      </Typography>

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ pt: 2, borderTop: '1px dashed #dce6dc' }}
      >
        <Box>
          <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600, letterSpacing: 0.5, textTransform: 'uppercase', fontSize: '0.65rem' }}>
            Impact
          </Typography>
          <Typography variant="subtitle2" sx={{ color: cause.color, fontWeight: 800 }}>
            {cause.stat}
          </Typography>
        </Box>
        <CardActionArea
          onClick={() => onLearnMore(cause)}
          aria-label={`Learn more about ${cause.title}`}
          sx={{
            borderRadius: 50,
            width: 40,
            height: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: `${cause.color}14`,
            color: cause.color,
            transition: 'all 0.25s ease',
          }}
        >
          <ArrowForwardIcon className="cause-arrow" sx={{ fontSize: 20, transition: 'transform 0.25s ease' }} />
        </CardActionArea>
      </Stack>
    </CardContent>
  </Card>
);

const Causes = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = useMemo(() => {
    if (activeFilter === 'all') return CAUSES;
    return CAUSES.filter((c) => c.category === activeFilter);
  }, [activeFilter]);

  return (
    <Box
      component="section"
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
        pt: { xs: 10, md: 14 },
        pb: { xs: 12, md: 16 },
        position: 'relative',
        color: '#fff',
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={{ xs: 6, md: 8 }}>
          {/* ===== HERO HEADER ===== */}
          <Box textAlign="center">
            <Chip
              label="Our Causes"
              sx={{
                mb: 2,
                px: 1,
                fontWeight: 700,
                letterSpacing: 1.5,
                textTransform: 'uppercase',
                fontSize: '0.75rem',
                color: '#fff',
                bgcolor: 'rgba(255, 255, 255, 0.18)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.25)' },
              }}
            />
            <Typography
              variant="h2"
              sx={{
                fontWeight: 900,
                color: '#fff',
                mb: 2,
                letterSpacing: '-0.02em',
                fontSize: { xs: '2.25rem', sm: '2.75rem', md: '3.5rem' },
                lineHeight: 1.1,
                textShadow: '0 4px 10px rgba(0,0,0,0.3)',
              }}
            >
              Where Your{' '}
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(90deg, #ffffff 0%, #c8e6c9 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Kindness
              </Box>{' '}
              Goes
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'rgba(255,255,255,0.9)',
                fontWeight: 500,
                maxWidth: 680,
                mx: 'auto',
                fontSize: { xs: '1rem', md: '1.1rem' },
                lineHeight: 1.7,
              }}
            >
              Five core initiatives we're running right now. Each cause reflects
              our commitment to creating a real, lasting impact in the
              communities we serve.
            </Typography>
            <Box sx={{ width: 60, height: 4, bgcolor: '#4CAF50', mx: 'auto', borderRadius: 2, mt: 3 }} />
          </Box>

          {/* ===== FILTER CHIPS ===== */}
          <Stack
            direction="row"
            spacing={1}
            justifyContent="center"
            flexWrap="wrap"
            sx={{ rowGap: 1 }}
          >
            {FILTERS.map((filter) => {
              const isActive = activeFilter === filter.key;
              return (
                <Chip
                  key={filter.key}
                  label={filter.label}
                  onClick={() => setActiveFilter(filter.key)}
                  clickable
                  aria-pressed={isActive}
                  sx={{
                    px: 1,
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    bgcolor: isActive ? '#1b5e20' : '#ffffff',
                    color: isActive ? '#fff' : '#1b5e20',
                    border: '1px solid',
                    borderColor: isActive ? '#1b5e20' : '#c8e6c9',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      bgcolor: isActive ? '#1b5e20' : '#c8e6c9',
                    },
                  }}
                />
              );
            })}
          </Stack>

          {/* ===== CAUSES GRID ===== */}
          {filtered.length === 0 ? (
            <Paper
              elevation={0}
              sx={{
                p: 6,
                textAlign: 'center',
                borderRadius: 4,
                bgcolor: '#ffffff',
                border: '1px dashed #c8e6c9',
              }}
            >
              <Typography variant="h6" sx={{ color: '#1b5e20', mb: 1 }}>
                No causes in this category yet
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                We're always expanding our work. Check back soon!
              </Typography>
            </Paper>
          ) : (
            <Grid container spacing={3}>
              {filtered.map((cause) => (
                <Grid
                  key={cause.id}
                  size={{
                    xs: 12,
                    sm: cause.featured ? 12 : 6,
                    md: cause.featured ? 8 : 4,
                    lg: cause.featured ? 8 : 4,
                  }}
                >
                  <CauseCard cause={cause} onLearnMore={() => navigate('/donate')} />
                </Grid>
              ))}
            </Grid>
          )}

          {/* ===== DIVIDER ===== */}
          <Divider sx={{ borderColor: '#c8e6c9', my: { xs: 2, md: 4 } }} />

          {/* ===== CTA ===== */}
          <Paper
            elevation={0}
            sx={{
              p: { xs: 4, md: 6 },
              borderRadius: 4,
              textAlign: 'center',
              background: 'linear-gradient(135deg, #1b5e20 0%, #2e7d32 50%, #43A047 100%)',
              color: '#fff',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 20px 50px rgba(27,94,32,0.25)',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: -80,
                right: -80,
                width: 240,
                height: 240,
                borderRadius: '50%',
                bgcolor: 'rgba(255,255,255,0.08)',
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -60,
                left: -60,
                width: 180,
                height: 180,
                borderRadius: '50%',
                bgcolor: 'rgba(255,255,255,0.06)',
              },
            }}
          >
            <VolunteerActivismIcon sx={{ fontSize: 48, mb: 2, opacity: 0.95 }} />
            <Typography
              variant="overline"
              sx={{ fontWeight: 700, letterSpacing: 2.5, opacity: 0.9, display: 'block' }}
            >
              Make an Impact
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 800,
                mt: 1,
                mb: 2,
                fontSize: { xs: '1.75rem', md: '2.25rem' },
                position: 'relative',
                zIndex: 1,
              }}
            >
              Pick a cause. Change a life.
            </Typography>
            <Typography
              sx={{
                opacity: 0.95,
                maxWidth: 560,
                mx: 'auto',
                mb: 4,
                lineHeight: 1.7,
                position: 'relative',
                zIndex: 1,
              }}
            >
              Every contribution — big or small — moves us closer to a kinder,
              more equitable world. Choose where you want to make a difference
              today.
            </Typography>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              justifyContent="center"
              sx={{ position: 'relative', zIndex: 1 }}
            >
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
                onClick={() => navigate('/donate')}
                sx={{
                  bgcolor: '#fff',
                  color: '#1b5e20',
                  fontWeight: 700,
                  px: 4,
                  py: 1.5,
                  borderRadius: 50,
                  textTransform: 'none',
                  fontSize: '1rem',
                  boxShadow: '0 8px 22px rgba(0,0,0,0.18)',
                  '&:hover': {
                    bgcolor: '#f1f8e9',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 12px 28px rgba(0,0,0,0.25)',
                  },
                  transition: 'all 0.2s ease',
                }}
              >
                Donate Now
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={() => navigate('/gallery')}
                sx={{
                  color: '#fff',
                  borderColor: 'rgba(255,255,255,0.7)',
                  fontWeight: 700,
                  px: 4,
                  py: 1.5,
                  borderRadius: 50,
                  textTransform: 'none',
                  fontSize: '1rem',
                  '&:hover': {
                    borderColor: '#fff',
                    bgcolor: 'rgba(255,255,255,0.12)',
                  },
                }}
              >
                See Our Impact
              </Button>
            </Stack>
          </Paper>
        </Stack>
      </Container>
    </Box>
  );
};

export default Causes;
