import React, { useMemo, useState, useCallback } from 'react';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import VideocamIcon from '@mui/icons-material/Videocam';
import CloseIcon from '@mui/icons-material/Close';

const CATEGORY_LABELS = {
  all: 'All',
  video: 'Videos',
  image: 'Photos',
};

const GALLERY_ITEMS = [
  {
    id: 'food-distribution',
    type: 'video',
    url: 'https://www.youtube.com/embed/ec-1NSL1GAk',
    title: 'Food Distribution',
    description: 'Distributing meals to daily workers and orphans.',
    category: 'Hunger Relief',
    date: '2024-08-12',
  },
  {
    id: 'community-support',
    type: 'video',
    url: 'https://www.youtube.com/embed/aquzw8uZi_w',
    title: 'Community Support',
    description: 'Donated blankets on the new years eve.',
    category: 'Basic Needs',
    date: '2024-12-31',
  },
  {
    id: 'clothes-donation-video',
    type: 'video',
    url: 'https://www.youtube.com/embed/O2NcKd_GIZc',
    title: 'Clothes Donation Drive',
    description: 'A short video showcasing our impact in the community.',
    category: 'Basic Needs',
    date: '2024-10-05',
  },
  {
    id: 'clothes-donation-photo',
    type: 'image',
    url: '/children_cloths_donation.jpg',
    title: 'Clothes Donation Drive',
    description: 'Providing clothes to children in need.',
    category: 'Basic Needs',
    date: '2024-09-18',
  },
];

const formatDate = (iso) => {
  if (!iso) return '';
  try {
    return new Date(iso).toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  } catch {
    return '';
  }
};

const Lightbox = ({ item, onClose }) => {
  if (!item) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <Box
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      onClick={handleBackdropClick}
      sx={{
        position: 'fixed',
        inset: 0,
        bgcolor: 'rgba(0, 0, 0, 0.85)',
        zIndex: (theme) => theme.zIndex.modal + 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: { xs: 2, md: 4 },
        animation: 'fadeIn 0.2s ease-out',
        '@keyframes fadeIn': {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      }}
    >
      <IconButton
        onClick={onClose}
        aria-label="Close lightbox"
        sx={{
          position: 'absolute',
          top: 16,
          right: 16,
          color: '#fff',
          bgcolor: 'rgba(255,255,255,0.1)',
          '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' },
        }}
      >
        <CloseIcon />
      </IconButton>

      <Box
        sx={{
          width: '100%',
          maxWidth: 1100,
          maxHeight: '90vh',
          bgcolor: 'background.paper',
          borderRadius: 3,
          overflow: 'hidden',
          boxShadow: 24,
          display: 'flex',
          flexDirection: 'column',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: { xs: 260, sm: 420, md: 560 },
            bgcolor: '#000',
          }}
        >
          {item.type === 'image' ? (
            <Box
              component="img"
              src={item.url}
              alt={item.title}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                display: 'block',
              }}
            />
          ) : (
            <Box
              component="iframe"
              src={`${item.url}?autoplay=1&rel=0`}
              title={item.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              sx={{
                width: '100%',
                height: '100%',
                border: 0,
                display: 'block',
              }}
            />
          )}
        </Box>
        <Box sx={{ p: { xs: 2.5, md: 3 } }}>
          <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
            <Chip
              label={item.category}
              size="small"
              sx={{
                bgcolor: '#e8f5e9',
                color: '#1b5e20',
                fontWeight: 600,
              }}
            />
            <Typography variant="caption" color="text.secondary">
              {formatDate(item.date)}
            </Typography>
          </Stack>
          <Typography variant="h6" sx={{ fontWeight: 700, color: '#1b5e20', mb: 0.5 }}>
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

const GalleryCard = ({ item, onOpen }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <Card
      elevation={0}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 3,
        border: '1px solid #dce6dc',
        overflow: 'hidden',
        bgcolor: 'background.paper',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 12px 28px rgba(27, 94, 32, 0.15)',
        },
      }}
    >
      <CardActionArea
        onClick={() => onOpen(item)}
        aria-label={`Open ${item.title}`}
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            aspectRatio: '16 / 11',
            bgcolor: '#1b5e20',
            overflow: 'hidden',
          }}
        >
          {item.type === 'image' ? (
            !imgError ? (
              <CardMedia
                component="img"
                image={item.url}
                alt={item.title}
                onError={() => setImgError(true)}
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.4s ease',
                  '.MuiCardActionArea-root:hover &': { transform: 'scale(1.05)' },
                }}
              />
            ) : (
              <Stack
                alignItems="center"
                justifyContent="center"
                spacing={1}
                sx={{ width: '100%', height: '100%', color: '#fff' }}
              >
                <PhotoCameraIcon sx={{ fontSize: 40, opacity: 0.8 }} />
                <Typography variant="caption">Image unavailable</Typography>
              </Stack>
            )
          ) : (
            <>
              <Box
                component="iframe"
                src={item.url}
                title={item.title}
                loading="lazy"
                tabIndex={-1}
                sx={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  border: 0,
                  pointerEvents: 'none',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  bgcolor: 'rgba(0,0,0,0.25)',
                  opacity: 1,
                  transition: 'opacity 0.25s ease',
                  '.MuiCardActionArea-root:hover &': { opacity: 0 },
                }}
              >
                <Box
                  sx={{
                    width: 64,
                    height: 64,
                    borderRadius: '50%',
                    bgcolor: 'rgba(255,255,255,0.9)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 6px 16px rgba(0,0,0,0.25)',
                  }}
                >
                  <PlayArrowIcon sx={{ fontSize: 40, color: '#1b5e20' }} />
                </Box>
              </Box>
            </>
          )}

          <Chip
            icon={item.type === 'video' ? <VideocamIcon /> : <PhotoCameraIcon />}
            label={item.type === 'video' ? 'Video' : 'Photo'}
            size="small"
            sx={{
              position: 'absolute',
              top: 12,
              left: 12,
              fontWeight: 600,
              bgcolor: 'rgba(255,255,255,0.92)',
              color: '#1b5e20',
              '& .MuiChip-icon': { color: '#1b5e20' },
            }}
          />
        </Box>

        <CardContent sx={{ p: 2.5, flexGrow: 1 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
            <Typography variant="caption" sx={{ color: '#2e7d32', fontWeight: 600 }}>
              {item.category}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {formatDate(item.date)}
            </Typography>
          </Stack>
          <Typography variant="h6" sx={{ fontWeight: 700, color: '#1b5e20', mb: 1, lineHeight: 1.3 }}>
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.55 }}>
            {item.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxItem, setLightboxItem] = useState(null);

  const stats = useMemo(() => {
    const total = GALLERY_ITEMS.length;
    const videos = GALLERY_ITEMS.filter((i) => i.type === 'video').length;
    const photos = GALLERY_ITEMS.filter((i) => i.type === 'image').length;
    return { total, videos, photos };
  }, []);

  const filtered = useMemo(() => {
    if (activeFilter === 'all') return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((i) => i.type === activeFilter);
  }, [activeFilter]);

  const handleOpen = useCallback((item) => setLightboxItem(item), []);
  const handleClose = useCallback(() => setLightboxItem(null), []);

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 10, md: 12 },
        px: 2,
        backgroundColor: '#1b5e20',
        backgroundImage: [
          'radial-gradient(circle at 12% 18%, rgba(129, 199, 132, 0.45) 0%, transparent 40%)',
          'radial-gradient(circle at 88% 25%, rgba(165, 214, 167, 0.40) 0%, transparent 42%)',
          'radial-gradient(circle at 50% 60%, rgba(200, 230, 201, 0.30) 0%, transparent 55%)',
          'radial-gradient(circle at 20% 92%, rgba(102, 187, 106, 0.35) 0%, transparent 45%)',
          'linear-gradient(160deg, #0d3a13 0%, #1b5e20 35%, #2e7d32 70%, #1b5e20 100%)',
        ].join(', '),
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
        minHeight: '100dvh',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180' viewBox='0 0 180 180'><g fill='none' stroke='rgba(255,255,255,0.04)' stroke-width='1'><path d='M90 10 Q120 60 90 110 Q60 160 90 170'/><path d='M30 30 Q70 70 30 110'/><path d='M150 30 Q110 70 150 110'/></g></svg>\")",
          backgroundSize: '180px 180px',
          opacity: 0.55,
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={5}>
          {/* Hero */}
          <Box textAlign="center">
            <Typography
              variant="overline"
              sx={{ color: '#2e7d32', fontWeight: 700, letterSpacing: 2 }}
            >
              Our Impact
            </Typography>
            <Typography
              variant="h3"
              sx={{ fontWeight: 800, color: '#1b5e20', mb: 2, mt: 0.5 }}
            >
              Donation Gallery
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: 'text.secondary', maxWidth: 720, mx: 'auto', fontSize: '1.05rem' }}
            >
              Explore our recent donation efforts and impact stories. We believe in transparency
              and sharing the joy of giving.
            </Typography>
          </Box>

          {/* Stats */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            justifyContent="center"
            alignItems="stretch"
          >
            {[
              { label: 'Total Items', value: stats.total, color: '#1b5e20' },
              { label: 'Videos', value: stats.videos, color: '#2e7d32' },
              { label: 'Photos', value: stats.photos, color: '#388e3c' },
            ].map((stat) => (
              <Box
                key={stat.label}
                sx={{
                  flex: 1,
                  minWidth: 140,
                  textAlign: 'center',
                  py: 2,
                  px: 3,
                  borderRadius: 3,
                  bgcolor: 'background.paper',
                  border: '1px solid #dce6dc',
                  boxShadow: '0 2px 8px rgba(27, 94, 32, 0.06)',
                }}
              >
                <Typography variant="h4" sx={{ fontWeight: 800, color: stat.color, lineHeight: 1 }}>
                  {stat.value}
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                  {stat.label}
                </Typography>
              </Box>
            ))}
          </Stack>

          {/* Filters */}
          <Stack
            direction="row"
            spacing={1}
            justifyContent="center"
            flexWrap="wrap"
            sx={{ rowGap: 1 }}
          >
            {Object.keys(CATEGORY_LABELS).map((key) => {
              const isActive = activeFilter === key;
              return (
                <Chip
                  key={key}
                  label={CATEGORY_LABELS[key]}
                  onClick={() => setActiveFilter(key)}
                  clickable
                  aria-pressed={isActive}
                  sx={{
                    px: 1,
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    bgcolor: isActive ? '#1b5e20' : 'background.paper',
                    color: isActive ? '#fff' : '#1b5e20',
                    border: '1px solid',
                    borderColor: isActive ? '#1b5e20' : '#dce6dc',
                    '&:hover': {
                      bgcolor: isActive ? '#1b5e20' : '#c8e6c9',
                    },
                  }}
                />
              );
            })}
          </Stack>

          {/* Grid */}
          {filtered.length === 0 ? (
            <Box textAlign="center" sx={{ py: 8 }}>
              <Typography variant="h6" color="text.secondary">
                No items in this category yet.
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                Check back soon — we're always adding new stories.
              </Typography>
            </Box>
          ) : (
            <Grid container spacing={3}>
              {filtered.map((item) => (
                <Grid key={item.id} size={{ xs: 12, sm: 6, md: 6, lg: 4 }}>
                  <GalleryCard item={item} onOpen={handleOpen} />
                </Grid>
              ))}
            </Grid>
          )}
        </Stack>
      </Container>

      <Lightbox item={lightboxItem} onClose={handleClose} />
    </Box>
  );
};

export default Gallery;
