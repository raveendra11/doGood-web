import React from 'react';
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
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import SchoolIcon from '@mui/icons-material/School';
import ElderlyIcon from '@mui/icons-material/Elderly';
import WarningIcon from '@mui/icons-material/Warning';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FavoriteIcon from '@mui/icons-material/Favorite';
import GroupsIcon from '@mui/icons-material/Groups';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';

const QUICK_LINKS = [
  {
    icon: <VolunteerActivismIcon />,
    title: 'Donate',
    description: 'Give clothes, books, food, or funds to those in need.',
    path: '/donate',
    color: '#1b5e20',
  },
  {
    icon: <FavoriteIcon />,
    title: 'Request Help',
    description: 'Reach out if you or someone you know needs support.',
    path: '/request-help',
    color: '#E91E63',
  },
  {
    icon: <EmojiObjectsIcon />,
    title: 'Our Causes',
    description: 'See the initiatives we run and the lives we touch.',
    path: '/causes',
    color: '#FF9800',
  },
  {
    icon: <ImageSearchIcon />,
    title: 'Gallery',
    description: 'Browse photos and videos from recent donation drives.',
    path: '/gallery',
    color: '#1E88E5',
  },
];

const CAUSE_HIGHLIGHTS = [
  {
    icon: <VolunteerActivismIcon />,
    title: 'Clothing Drives',
    description:
      'Gently used clothes redistributed to children, elders, and families in need.',
    color: '#1b5e20',
  },
  {
    icon: <RestaurantIcon />,
    title: 'Food Sharing',
    description:
      'Surplus food redirected to orphanages, old-age homes, and community kitchens.',
    color: '#E65100',
  },
  {
    icon: <SchoolIcon />,
    title: 'Education Support',
    description:
      'Books and stationery provided to underprivileged children to help them learn.',
    color: '#1565C0',
  },
  {
    icon: <ElderlyIcon />,
    title: 'Elder Care',
    description:
      'Donation drives and companionship programs that bring comfort to seniors.',
    color: '#6A1B9A',
  },
  {
    icon: <WarningIcon />,
    title: 'Emergency Relief',
    description:
      'Rapid response with food, clothing, and shelter during crises and disasters.',
    color: '#C62828',
  },
];

const STATS = [
  { value: '5+', label: 'Donations', icon: <VolunteerActivismIcon />, color: '#1b5e20' },
  { value: '10+', label: 'Volunteers', icon: <GroupsIcon />, color: '#E91E63' },
  { value: '50+', label: 'Lives Touched', icon: <FavoriteIcon />, color: '#FF9800' },
  { value: '5+', label: 'Communities', icon: <EmojiObjectsIcon />, color: '#1E88E5' },
];

const DEVELOPMENT_BANNER =
  "This site is currently under active development. Some features may change, and certain functionality may not work as intended. Please check back for updates.";

const SectionHeader = ({ eyebrow, title, subtitle }) => (
  <Box textAlign="center" sx={{ mb: { xs: 4, md: 6 } }}>
    <Typography
      variant="overline"
      sx={{
        color: '#1b5e20',
        fontWeight: 700,
        letterSpacing: 2.5,
        fontSize: '0.8rem',
      }}
    >
      {eyebrow}
    </Typography>
    <Typography
      variant="h3"
      sx={{
        fontWeight: 800,
        color: '#1b5e20',
        mt: 0.5,
        mb: subtitle ? 1.5 : 0,
        fontSize: { xs: '2rem', md: '2.75rem' },
      }}
    >
      {title}
    </Typography>
    {subtitle && (
      <Typography
        variant="body1"
        sx={{
          color: 'text.secondary',
          maxWidth: 680,
          mx: 'auto',
          fontSize: '1.05rem',
          lineHeight: 1.6,
        }}
      >
        {subtitle}
      </Typography>
    )}
    <Box
      sx={{
        width: 60,
        height: 4,
        bgcolor: '#1b5e20',
        mx: 'auto',
        borderRadius: 2,
        mt: 2.5,
      }}
    />
  </Box>
);

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box
      component="main"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        minHeight: '100dvh',
        width: '100%',
        backgroundImage: 'linear-gradient(to bottom, transparent 0%, #fdfbf7 100%)',
        backgroundColor: '#fdfbf7',
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 'env(safe-area-inset-top)',
        overflowX: 'hidden',
        zIndex: 0,
      }}
    >
      <style>
        {`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(28px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
          @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.08); opacity: 0.85; }
          }
        `}
      </style>

      {/* ===== HERO ===== */}
      <Box
        sx={{
          width: '100%',
          height: { xs: '70vh', md: '100vh' },
          backgroundImage: {
            xs: "url('/bg-mobile.png')",
            md: "url('/bg.png')",
          },
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: { xs: 'top center', md: 'center' },
          position: 'relative',
        }}
      >
        {/* Development banner */}
        <Box
          sx={{
            position: 'absolute',
            // Use clamp so the banner hugs the bottom of the navbar on phones
            // and on devices with notches/safe-area insets.
            top: {
              xs: 'calc(60px + env(safe-area-inset-top, 0px))',
              md: 'calc(68px + env(safe-area-inset-top, 0px))',
            },
            left: 0,
            right: 0,
            color: '#fff',
            textAlign: 'center',
            py: 1.25,
            px: 2,
            fontSize: { xs: 12, sm: 14 },
            fontWeight: 500,
            textShadow: '1px 1px 3px rgba(0,0,0,0.4)',
            background:
              'linear-gradient(90deg, rgba(27,94,32,0.55) 0%, rgba(15,59,96,0.55) 100%)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            borderBottom: '1px solid rgba(255,255,255,0.18)',
            zIndex: (theme) => theme.zIndex.appBar - 1,
            animation: 'fadeIn 0.6s ease-out',
          }}
        >
          <Stack direction="row" spacing={1} alignItems="center" justifyContent="center">
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                bgcolor: '#FFB74D',
                animation: 'pulse 1.8s ease-in-out infinite',
                boxShadow: '0 0 8px #FFB74D',
              }}
            />
            <Typography variant="body2">{DEVELOPMENT_BANNER}</Typography>
          </Stack>
        </Box>

        {/* Hero text/buttons removed — full-bleed background image is the hero */}

        {/* Scroll indicator */}
        <Box
          aria-hidden
          sx={{
            position: 'absolute',
            bottom: 24,
            left: '50%',
            transform: 'translateX(-50%)',
            color: '#fff',
            textAlign: 'center',
            opacity: 0.85,
            animation: 'float 2.4s ease-in-out infinite',
            display: { xs: 'none', md: 'block' },
          }}
        >
          <Box
            sx={{
              width: 26,
              height: 42,
              borderRadius: 13,
              border: '2px solid rgba(255,255,255,0.8)',
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'center',
              pt: 0.75,
              mx: 'auto',
            }}
          >
            <Box
              sx={{
                width: 4,
                height: 8,
                bgcolor: '#fff',
                borderRadius: 2,
                animation: 'float 1.8s ease-in-out infinite',
              }}
            />
          </Box>
          <Typography variant="caption" sx={{ display: 'block', mt: 0.5, letterSpacing: 1.5 }}>
            SCROLL
          </Typography>
        </Box>
      </Box>

      {/* ===== STATS STRIP ===== */}
      <Box
        sx={{
          mt: { xs: -1, md: -1 },
          mb: { xs: 2, md: 4 },
          position: 'relative',
          zIndex: 2,
          px: { xs: 1, md: 3 },
        }}
      >
        <Container maxWidth="xl">
          <Paper
            elevation={16}
            sx={{
              borderRadius: 10,
              py: { xs: 3, md: 4 },
              px: { xs: 2, md: 5 },
              bgcolor: 'background.paper',
              boxShadow: '0 18px 50px rgba(27, 94, 32, 0.12)',
            }}
          >
            <Grid container spacing={{ xs: 2, md: 3 }}>
              {STATS.map((stat) => (
                <Grid key={stat.label} size={{ xs: 6, md: 3 }}>
                  <Stack
                    direction="row"
                    spacing={2}
                    alignItems="center"
                    sx={{
                      p: { xs: 1.5, md: 2 },
                      borderRadius: 3,
                      transition: 'bgcolor 0.2s',
                      '&:hover': { bgcolor: '#f1f8e9' },
                    }}
                  >
                    <Box
                      sx={{
                        width: { xs: 48, md: 56 },
                        height: { xs: 48, md: 56 },
                        borderRadius: 2.5,
                        bgcolor: `${stat.color}22`,
                        color: stat.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        '& svg': { fontSize: { xs: 26, md: 30 } },
                      }}
                    >
                      {stat.icon}
                    </Box>
                    <Box>
                      <Typography
                        variant="h4"
                        sx={{
                          fontWeight: 800,
                          color: '#1b5e20',
                          lineHeight: 1,
                          fontSize: { xs: '1.5rem', md: '2rem' },
                        }}
                      >
                        {stat.value}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          fontWeight: 600,
                          mt: 0.5,
                        }}
                      >
                        {stat.label}
                      </Typography>
                    </Box>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Container>
      </Box>

      {/* ===== MISSION ===== */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: 4,
                  overflow: 'hidden',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
                  aspectRatio: '4 / 3',
                  backgroundImage: 'url(/children.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: 'brightness(1.15) contrast(1.05) saturate(1.15)',
                  transition: 'filter 0.3s ease, transform 0.3s ease',
                  '&:hover': {
                    filter: 'brightness(1.22) contrast(1.05) saturate(1.2)',
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.45) 100%)',
                  },
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 20,
                    left: 20,
                    right: 20,
                    zIndex: 1,
                    color: '#fff',
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 800, textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
                    Every gift matters.
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.95)' }}>
                    Real stories from the communities we serve.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                variant="overline"
                sx={{ color: '#1b5e20', fontWeight: 700, letterSpacing: 2.5 }}
              >
                Our Mission
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  color: '#1b5e20',
                  mt: 0.5,
                  mb: 2,
                  fontSize: { xs: '1.9rem', md: '2.5rem' },
                  lineHeight: 1.2,
                }}
              >
                Bridging kindness with need.
              </Typography>
              <Typography sx={{ color: 'text.secondary', mb: 2, lineHeight: 1.7, fontSize: '1.05rem' }}>
                doGood is a transparent platform that connects generous donors
                with children, elders, and families who need support. Every
                donation — whether it's clothes, books, food, or time — moves
                through a verified network of volunteers to reach the right
                hands.
              </Typography>
              <Typography sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.7 }}>
                We believe no resource should go to waste and no person should
                be left behind. Together, we turn small acts of kindness into
                lasting change.
              </Typography>
              <Button
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                onClick={() => navigate('/about')}
                sx={{
                  bgcolor: '#1b5e20',
                  color: '#fff',
                  fontWeight: 700,
                  px: 3.5,
                  py: 1.25,
                  borderRadius: 50,
                  textTransform: 'none',
                  boxShadow: '0 8px 22px rgba(27,94,32,0.35)',
                  '&:hover': {
                    bgcolor: '#2e7d32',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 12px 28px rgba(27,94,32,0.45)',
                  },
                  transition: 'all 0.2s ease',
                }}
              >
                Read Our Story
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ===== QUICK LINKS ===== */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: '#f1f8e9' }}>
        <Container maxWidth="lg">
          <SectionHeader
            eyebrow="Get Involved"
            title="How would you like to help?"
            subtitle="Whether you want to give, receive, or simply learn more — there's a place for you here."
          />
          <Grid container spacing={3}>
            {QUICK_LINKS.map((link) => (
              <Grid key={link.title} size={{ xs: 12, sm: 6, md: 3 }}>
                <Card
                  elevation={0}
                  sx={{
                    height: '100%',
                    borderRadius: 3,
                    border: '1px solid #dce6dc',
                    transition: 'all 0.25s ease',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      boxShadow: `0 14px 32px ${link.color}30`,
                      borderColor: link.color,
                    },
                  }}
                >
                  <CardActionArea
                    onClick={() => navigate(link.path)}
                    sx={{ height: '100%', p: { xs: 2.5, md: 3 } }}
                  >
                    <Box
                      sx={{
                        width: 56,
                        height: 56,
                        borderRadius: 3,
                        bgcolor: `${link.color}1a`,
                        color: link.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2,
                        '& svg': { fontSize: 30 },
                      }}
                    >
                      {link.icon}
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, color: '#1b5e20', mb: 0.5 }}>
                      {link.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.55 }}>
                      {link.description}
                    </Typography>
                    <Stack direction="row" spacing={0.5} alignItems="center" sx={{ mt: 2, color: link.color }}>
                      <Typography variant="caption" sx={{ fontWeight: 700, letterSpacing: 0.5 }}>
                        LEARN MORE
                      </Typography>
                      <ArrowForwardIcon sx={{ fontSize: 16 }} />
                    </Stack>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ===== CAUSES PREVIEW ===== */}
      <Box
        sx={{
          py: { xs: 10, md: 14 },
          position: 'relative',
          backgroundColor: '#f1f8e9',
          backgroundImage: [
            'radial-gradient(circle at 10% 20%, rgba(165, 214, 167, 0.45) 0%, transparent 45%)',
            'radial-gradient(circle at 90% 75%, rgba(200, 230, 201, 0.55) 0%, transparent 50%)',
            'linear-gradient(180deg, #f1f8e9 0%, #e8f5e9 100%)',
          ].join(', '),
        }}
      >
        <Container maxWidth="lg">
          <Box textAlign="center" sx={{ mb: { xs: 5, md: 7 } }}>
            <Chip
              label="Our Causes"
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
                boxShadow: '0 2px 8px rgba(27,94,32,0.08)',
              }}
            />
            <Typography
              variant="h2"
              sx={{
                fontWeight: 900,
                color: '#1b5e20',
                mb: 2,
                letterSpacing: '-0.02em',
                fontSize: { xs: '2.25rem', sm: '2.75rem', md: '3.25rem' },
                lineHeight: 1.1,
              }}
            >
              Where Your{' '}
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(90deg, #1b5e20 0%, #43A047 100%)',
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
                color: 'text.secondary',
                maxWidth: 640,
                mx: 'auto',
                fontSize: { xs: '1rem', md: '1.1rem' },
                lineHeight: 1.7,
              }}
            >
              Five core areas where every contribution creates real, measurable
              impact. Each cause is a promise — that your giving reaches the
              people who need it most.
            </Typography>
            <Box sx={{ width: 60, height: 4, bgcolor: '#2e7d32', mx: 'auto', borderRadius: 2, mt: 3 }} />
          </Box>

          <Grid container spacing={{ xs: 3, sm: 4, md: 4 }} alignItems="stretch" sx={{ rowGap: { xs: 3, sm: 4, md: 4 } }}>
            {CAUSE_HIGHLIGHTS.map((cause) => {
              const isFeatured = !!cause.featured;
              return (
                <Grid key={cause.title} size={{ xs: 12, sm: 6, md: 6, lg: 4 }}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 0,
                      height: '100%',
                      minHeight: { xs: 'auto', md: 220 },
                      borderRadius: 4,
                      border: '1px solid',
                      borderColor: isFeatured ? cause.color : '#dce6dc',
                      background: isFeatured
                        ? `linear-gradient(135deg, ${cause.color} 0%, ${cause.color}dd 100%)`
                        : 'background.paper',
                      color: isFeatured ? '#fff' : 'inherit',
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      flexDirection: 'column',
                      '&:hover': {
                        transform: 'translateY(-6px)',
                        boxShadow: `0 18px 40px ${cause.color}38`,
                        borderColor: cause.color,
                        '& .cause-arrow': { transform: 'translateX(4px)', opacity: 1 },
                        '& .cause-accent': { width: '100%' },
                      },
                      ...(isFeatured && {
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: -60,
                          right: -60,
                          width: 180,
                          height: 180,
                          borderRadius: '50%',
                          bgcolor: 'rgba(255,255,255,0.14)',
                        },
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          bottom: -70,
                          left: -70,
                          width: 160,
                          height: 160,
                          borderRadius: '50%',
                          bgcolor: 'rgba(255,255,255,0.08)',
                        },
                      }),
                    }}
                  >
                    {/* Top color accent bar — animates on hover */}
                    <Box
                      className="cause-accent"
                      sx={{
                        height: 4,
                        width: isFeatured ? '100%' : '40%',
                        bgcolor: cause.color,
                        transition: 'width 0.4s ease',
                      }}
                    />

                    <Box
                      sx={{
                        p: { xs: 3, md: 3.5 },
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        flexGrow: 1,
                        position: 'relative',
                        zIndex: 1,
                      }}
                    >
                      <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                        <Box
                          sx={{
                            width: 60,
                            height: 60,
                            borderRadius: 3,
                            bgcolor: isFeatured ? 'rgba(255,255,255,0.22)' : `${cause.color}1a`,
                            color: isFeatured ? '#fff' : cause.color,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            transition: 'transform 0.3s ease',
                            '.MuiPaper-root:hover &': { transform: 'scale(1.1) rotate(-6deg)' },
                            '& svg': { fontSize: 32 },
                          }}
                        >
                          {cause.icon}
                        </Box>
                        <Chip
                          label={cause.category}
                          size="small"
                          sx={{
                            fontWeight: 700,
                            fontSize: '0.7rem',
                            bgcolor: isFeatured ? 'rgba(255,255,255,0.22)' : `${cause.color}14`,
                            color: isFeatured ? '#fff' : cause.color,
                            border: isFeatured ? '1px solid rgba(255,255,255,0.3)' : 'none',
                          }}
                        />
                      </Stack>

                      <Box sx={{ flexGrow: 1 }}>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 800,
                            color: isFeatured ? '#fff' : '#1b5e20',
                            mb: 1,
                            lineHeight: 1.25,
                            fontSize: '1.15rem',
                          }}
                        >
                          {cause.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: isFeatured ? 'rgba(255,255,255,0.92)' : 'text.secondary',
                            lineHeight: 1.6,
                          }}
                        >
                          {cause.description}
                        </Typography>
                      </Box>

                      <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        sx={{
                          pt: 1.5,
                          mt: 0.5,
                          borderTop: isFeatured
                            ? '1px solid rgba(255,255,255,0.2)'
                            : '1px dashed #dce6dc',
                        }}
                      >
                        <Typography
                          variant="caption"
                          sx={{
                            fontWeight: 700,
                            letterSpacing: 0.5,
                            textTransform: 'uppercase',
                            fontSize: '0.7rem',
                            color: isFeatured ? 'rgba(255,255,255,0.85)' : 'text.secondary',
                          }}
                        >
                          {isFeatured ? '⚡ Urgent' : 'Ongoing'}
                        </Typography>
                        <Stack
                          direction="row"
                          spacing={0.5}
                          alignItems="center"
                          sx={{
                            color: isFeatured ? '#fff' : cause.color,
                            transition: 'all 0.25s ease',
                          }}
                        >
                          <Typography
                            variant="caption"
                            sx={{ fontWeight: 700, letterSpacing: 0.5 }}
                          >
                            LEARN MORE
                          </Typography>
                          <Box
                            className="cause-arrow"
                            sx={{
                              display: 'inline-flex',
                              transition: 'transform 0.25s ease',
                              opacity: 0.7,
                            }}
                          >
                            <ArrowForwardIcon sx={{ fontSize: 16 }} />
                          </Box>
                        </Stack>
                      </Stack>
                    </Box>
                  </Paper>
                </Grid>
              );
            })}
          </Grid>

          <Box textAlign="center" sx={{ mt: { xs: 5, md: 7 } }}>
            <Button
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              onClick={() => navigate('/causes')}
              sx={{
                bgcolor: '#1b5e20',
                color: '#fff',
                fontWeight: 700,
                px: 4,
                py: 1.5,
                borderRadius: 50,
                textTransform: 'none',
                fontSize: '1rem',
                boxShadow: '0 8px 22px rgba(27,94,32,0.3)',
                '&:hover': {
                  bgcolor: '#2e7d32',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 12px 28px rgba(27,94,32,0.45)',
                },
                transition: 'all 0.2s ease',
              }}
            >
              Explore All Causes
            </Button>
          </Box>
        </Container>
      </Box>

      {/* ===== GALLERY PREVIEW ===== */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#e8f5e9' }}>
        <Container maxWidth="lg">
          <SectionHeader
            eyebrow="Recent Impact"
            title="Moments from the field"
            subtitle="A glimpse into the donation drives, distributions, and smiles that keep us going."
          />
          <Grid container spacing={2}>
            {[
              { src: '/children_cloths_donation.jpg', title: 'Clothes Donation Drive' },
              { src: '/bg_o.png', title: 'Community Outreach' },
              { src: '/bg_23.png', title: 'Volunteer Stories' },
              { src: '/bg_last_new.png', title: 'On The Ground' },
            ].map((img, idx) => (
              <Grid key={img.title} size={{ xs: 12, sm: 6, md: 3 }}>
                <Box
                  onClick={() => navigate('/gallery')}
                  sx={{
                    position: 'relative',
                    aspectRatio: '1 / 1',
                    borderRadius: 3,
                    overflow: 'hidden',
                    cursor: 'pointer',
                    backgroundImage: `url(${img.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transition: 'transform 0.3s ease',
                    '&:hover': { transform: 'scale(1.02)' },
                    '&:hover .overlay': { opacity: 1 },
                    '&:hover img-label': { transform: 'translateY(0)' },
                  }}
                >
                  <Box
                    className="overlay"
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      bgcolor: 'rgba(27, 94, 32, 0.55)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                      display: 'flex',
                      alignItems: 'flex-end',
                      p: 2,
                    }}
                  >
                    <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: '1.05rem' }}>
                      {img.title}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Box textAlign="center" sx={{ mt: 4 }}>
            <Button
              variant="text"
              endIcon={<ArrowForwardIcon />}
              onClick={() => navigate('/gallery')}
              sx={{
                color: '#1b5e20',
                fontWeight: 700,
                textTransform: 'none',
                fontSize: '1rem',
                '&:hover': { bgcolor: 'rgba(27,94,32,0.08)' },
              }}
            >
              View Full Gallery
            </Button>
          </Box>
        </Container>
      </Box>

      {/* ===== INTRO / MOVEMENT ===== */}
      <Box
        sx={{
          py: { xs: 10, md: 14 },
          backgroundColor: '#f1f8e9',
          backgroundImage:
            'radial-gradient(circle at 15% 20%, rgba(200, 230, 201, 0.55) 0%, transparent 45%), radial-gradient(circle at 85% 80%, rgba(165, 214, 167, 0.45) 0%, transparent 50%)',
        }}
      >
        <Container maxWidth="md">
          <Paper
            elevation={0}
            sx={{
              p: { xs: 4, md: 7 },
              borderRadius: 4,
              textAlign: 'center',
              bgcolor: 'background.paper',
              border: '1px solid #dce6dc',
              boxShadow: '0 18px 50px rgba(27, 94, 32, 0.10)',
            }}
          >
            <Chip
              label="🌱 A community-driven movement"
              sx={{
                mb: 2.5,
                px: 1,
                fontWeight: 700,
                letterSpacing: 0.5,
                bgcolor: '#e8f5e9',
                color: '#1b5e20',
                border: '1px solid #c8e6c9',
              }}
            />
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                color: '#1b5e20',
                mb: 2,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                letterSpacing: '-0.02em',
                lineHeight: 1.15,
              }}
            >
              Doing Good,{' '}
              <Box
                component="span"
                sx={{
                  background:
                    'linear-gradient(90deg, #1b5e20 0%, #2e7d32 50%, #43A047 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Together.
              </Box>
            </Typography>
            <Typography
              sx={{
                color: 'text.secondary',
                maxWidth: 620,
                mx: 'auto',
                fontSize: { xs: '1rem', md: '1.1rem' },
                lineHeight: 1.7,
              }}
            >
              Join us in supporting underprivileged communities through
              clothing drives, food sharing, and education. Every small act of
              kindness creates a ripple of change.
            </Typography>
            <Box
              sx={{
                width: 60,
                height: 4,
                bgcolor: '#1b5e20',
                mx: 'auto',
                borderRadius: 2,
                mt: 3,
              }}
            />
          </Paper>
        </Container>
      </Box>

      <Divider sx={{ borderColor: '#dce6dc' }} />
    </Box>
  );
};

export default Home;
