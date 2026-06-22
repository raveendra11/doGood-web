import React, { useEffect, useState } from 'react';
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import { useAuth } from '../context/AuthContext';

const NAV_LINKS = [
  { label: 'Home',      path: '/',          icon: <HomeIcon /> },
  { label: 'About',  path: '/about',     icon: <InfoIcon /> },
  { label: 'Causes',    path: '/causes',    icon: <FavoriteIcon /> },
  { label: 'Gallery',   path: '/gallery',   icon: <PhotoLibraryIcon /> },
  { label: 'Donate',    path: '/donate',    icon: <VolunteerActivismIcon /> },
  { label: 'Contact',   path: '/contact',   icon: <ContactMailIcon /> },
];

const NAV_FONT = '"Poppins", "Helvetica Neue", Arial, sans-serif';

// Friendly display name pulled from a user object (best-effort, no PII leakage)
const getUserDisplay = (user) => {
  if (!user) return '';
  return (
    user.name ||
    user.fullName ||
    user.username ||
    (user.email ? user.email.split('@')[0] : '') ||
    'Friend'
  );
};

// User initials for the avatar fallback
const getInitials = (user) => {
  const name = getUserDisplay(user);
  if (!name) return 'U';
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((s) => s[0].toUpperCase())
    .join('');
};

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Switch between drawer / menus when the breakpoint changes
  useEffect(() => {
    if (isMobile) {
      setAnchorEl(null);
    } else {
      setDrawerOpen(false);
    }
  }, [isMobile]);

  // Auto-close the mobile drawer on every route change (covers programmatic nav too)
  useEffect(() => {
    setDrawerOpen(false);
  }, [location.pathname]);

  // Lock body scroll while the drawer is open
  useEffect(() => {
    if (!drawerOpen) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [drawerOpen]);

  const handleMenu = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const handleProfile = () => {
    navigate('/profile');
    handleClose();
  };
  const handleDashboard = () => {
    navigate('/dashboard');
    handleClose();
  };
  const handleLogout = () => {
    handleClose();
    logout();
  };
  const toggleDrawer = () => setDrawerOpen((prev) => !prev);
  const closeDrawer = () => setDrawerOpen(false);

  const isActive = (path) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  // ---------- shared style helpers ----------
  const navLinkSx = (active) => ({
    fontFamily: NAV_FONT,
    position: 'relative',
    color: '#fff',
    fontWeight: active ? 800 : 600,
    textTransform: 'none',
    fontSize: '0.95rem',
    px: 1.75,
    py: 0.85,
    borderRadius: 999,
    letterSpacing: '0.02em',
    backgroundColor: active ? 'rgba(255, 255, 255, 0.18)' : 'transparent',
    boxShadow: active ? 'inset 0 0 0 1px rgba(255, 255, 255, 0.45)' : 'none',
    transition:
      'background-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease',
    textShadow: '0 1px 3px rgba(0,0,0,0.35)',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.25)',
      transform: 'translateY(-1px)',
    },
    '&:focus-visible': {
      outline: '2px solid #fff',
      outlineOffset: 2,
    },
  });

  const authButtonSx = (variant) => ({
    fontFamily: NAV_FONT,
    fontWeight: 700,
    textTransform: 'none',
    fontSize: '0.92rem',
    px: 2.25,
    py: 0.75,
    ml: 1,
    minHeight: 40,
    borderRadius: 999,
    letterSpacing: '0.02em',
    transition: 'all 0.2s ease',
    '&:focus-visible': { outline: '2px solid #fff', outlineOffset: 2 },
    ...(variant === 'outlined'
      ? {
          color: '#fff',
          border: '1.5px solid rgba(255, 255, 255, 0.75)',
          backgroundColor: 'rgba(255, 255, 255, 0.08)',
          textShadow: '0 1px 3px rgba(0,0,0,0.35)',
          '&:hover': {
            borderColor: '#fff',
            backgroundColor: 'rgba(255, 255, 255, 0.20)',
            transform: 'translateY(-1px)',
          },
        }
      : {
          color: '#fff',
          backgroundColor: '#1b5e20',
          boxShadow: '0 4px 14px rgba(27, 94, 32, 0.28)',
          '&:hover': {
            backgroundColor: '#2e7d32',
            transform: 'translateY(-1px)',
            boxShadow: '0 6px 18px rgba(27, 94, 32, 0.40)',
          },
        }),
  });

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: 'transparent',
          backgroundImage: 'none',
          boxShadow: 'none',
        }}
      >
        <Toolbar
          sx={{
            minHeight: { xs: 60, md: 72 },
            px: { xs: 2, md: 3 },
            paddingTop: 'env(safe-area-inset-top)',
            // No glass effect — fully transparent bar.
            background: 'transparent',
            backdropFilter: 'none',
            WebkitBackdropFilter: 'none',
            borderBottom: 'none',
            boxShadow: 'none',
            transition: 'box-shadow 0.25s ease, background-color 0.25s ease',
            position: 'relative',
          }}
        >
          {/* Brand */}
          <Box
            component={Link}
            to="/"
            aria-label="Go to homepage"
            sx={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              color: 'inherit',
              position: 'relative',
              zIndex: 1,
              transition: 'transform 0.2s ease',
              '&:hover': { transform: 'scale(1.02)' },
              '&:focus-visible': {
                outline: '2px solid #1b5e20',
                outlineOffset: 4,
                borderRadius: 2,
              },
            }}
          >
            <Box
              component="img"
              src="doGood.png"
              alt=""
              sx={{
                height: { xs: 36, md: 42 },
                width: { xs: 36, md: 42 },
                borderRadius: '50%',
                mr: 1.25,
                boxShadow: '0 2px 8px rgba(0,0,0,0.25)',
              }}
            />
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          {/* Desktop nav links */}
          {!isMobile && (
            <Box
              component="nav"
              aria-label="Primary"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 0.25,
                mr: 1.5,
                position: 'relative',
                zIndex: 1,
              }}
            >
              {NAV_LINKS.map(({ label, path }) => {
                const active = isActive(path);
                return (
                  <Button
                    key={path}
                    component={NavLink}
                    to={path}
                    sx={navLinkSx(active)}
                    aria-current={active ? 'page' : undefined}
                  >
                    {label}
                  </Button>
                );
              })}
            </Box>
          )}

          {/* Auth / Account (desktop) */}
          {!isMobile && (
            <Stack
              direction="row"
              alignItems="center"
              spacing={0.5}
              sx={{ position: 'relative', zIndex: 1 }}
            >
              {currentUser ? (
                <>
                  <IconButton
                    size="medium"
                    aria-label={`Account menu for ${getUserDisplay(currentUser)}`}
                    aria-controls={anchorEl ? 'user-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={anchorEl ? 'true' : undefined}
                    onClick={handleMenu}
                    sx={{
                      ml: 0.5,
                      p: 0.5,
                      transition: 'transform 0.2s ease',
                      '&:hover': { transform: 'scale(1.05)' },
                      '&:focus-visible': { outline: '2px solid #1b5e20', outlineOffset: 2 },
                    }}
                  >
                    <Avatar
                      sx={{
                        fontFamily: NAV_FONT,
                        width: 38,
                        height: 38,
                        bgcolor: '#fff',
                        color: '#1b5e20',
                        fontWeight: 700,
                        fontSize: '0.95rem',
                        border: '2px solid rgba(255,255,255,0.6)',
                      }}
                    >
                      {getInitials(currentUser)}
                    </Avatar>
                  </IconButton>
                  <Menu
                    id="user-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                    slotProps={{
                      paper: {
                        sx: {
                          mt: 1,
                          minWidth: 220,
                          borderRadius: 3,
                          boxShadow: '0 12px 32px rgba(0,0,0,0.18)',
                          overflow: 'hidden',
                        },
                      },
                    }}
                  >
                    <Box sx={{ px: 2, py: 1.25, bgcolor: '#f1f8e9' }}>
                      <Typography sx={{ fontFamily: NAV_FONT, fontWeight: 700, color: '#1b5e20', lineHeight: 1.2 }}>
                        {getUserDisplay(currentUser)}
                      </Typography>
                      {currentUser.email && (
                        <Typography
                          variant="caption"
                          sx={{ fontFamily: NAV_FONT, color: 'text.secondary', display: 'block', mt: 0.25 }}
                        >
                          {currentUser.email}
                        </Typography>
                      )}
                    </Box>
                    <Divider />
                    <MenuItem onClick={handleDashboard} sx={{ py: 1.25, gap: 1.25 }}>
                      <DashboardIcon fontSize="small" sx={{ color: '#1b5e20' }} />
                      Dashboard
                    </MenuItem>
                    <MenuItem onClick={handleProfile} sx={{ py: 1.25, gap: 1.25 }}>
                      <AccountCircleIcon fontSize="small" sx={{ color: '#1b5e20' }} />
                      Profile
                    </MenuItem>
                    <Divider />
                    <MenuItem
                      onClick={handleLogout}
                      sx={{ py: 1.25, gap: 1.25, color: 'error.main' }}
                    >
                      <LogoutIcon fontSize="small" />
                      Logout
                    </MenuItem>
                  </Menu>
                </>
              ) : (
                <>
                  <Button
                    sx={authButtonSx('outlined')}
                    component={Link}
                    to="/login"
                    disabled
                  >
                    Login
                  </Button>
                  <Button
                    sx={authButtonSx('filled')}
                    component={Link}
                    to="/register"
                    disabled
                  >
                    Register
                  </Button>
                </>
              )}
            </Stack>
          )}

          {/* Mobile hamburger */}
          {isMobile && (
            <IconButton
              edge="end"
              aria-label={drawerOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={drawerOpen}
              aria-controls="mobile-drawer"
              onClick={toggleDrawer}
              sx={{
                color: '#fff',
                position: 'relative',
                zIndex: 1,
                '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.15)' },
                '&:focus-visible': { outline: '2px solid #fff', outlineOffset: 2 },
              }}
            >
              {drawerOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        id="mobile-drawer"
        anchor="right"
        open={drawerOpen}
        onClose={closeDrawer}
        ModalProps={{ keepMounted: true }}
        slotProps={{
          paper: {
            sx: {
              width: { xs: '85vw', sm: 320 },
              maxWidth: 360,
              background:
                'linear-gradient(160deg, #1b5e20 0%, #2e7d32 60%, #388e3c 100%)',
              color: '#fff',
              backgroundImage:
                'radial-gradient(circle at 20% 0%, rgba(255,255,255,0.18), transparent 50%)',
            },
          },
        }}
      >
        {/* Drawer header */}
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ px: 2, py: 2 }}
        >
          <Stack direction="row" alignItems="center" spacing={1.25}>
            <Box
              component="img"
              src="doGood.png"
              alt="doGood logo"
              sx={{ height: 38, width: 38, borderRadius: '50%' }}
            />
          </Stack>
          <IconButton
            aria-label="Close navigation menu"
            onClick={closeDrawer}
            sx={{
              color: '#fff',
              '&:hover': { backgroundColor: 'rgba(255,255,255,0.15)' },
            }}
          >
            <CloseIcon />
          </IconButton>
        </Stack>
        <Divider sx={{ borderColor: 'rgba(255,255,255,0.2)' }} />

        {/* Auth chip (if signed in) */}
        {currentUser && (
          <Box sx={{ px: 2, py: 1.5 }}>
            <Stack direction="row" spacing={1.25} alignItems="center">
              <Avatar
                sx={{
                  fontFamily: NAV_FONT,
                  width: 36,
                  height: 36,
                  bgcolor: '#fff',
                  color: '#1b5e20',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                }}
              >
                {getInitials(currentUser)}
              </Avatar>
              <Box sx={{ minWidth: 0 }}>
                <Typography sx={{ fontFamily: NAV_FONT, fontWeight: 700, lineHeight: 1.1 }} noWrap>
                  {getUserDisplay(currentUser)}
                </Typography>
                {currentUser.email && (
                  <Typography
                    variant="caption"
                    sx={{ fontFamily: NAV_FONT, color: 'rgba(255,255,255,0.8)' }}
                    noWrap
                  >
                    {currentUser.email}
                  </Typography>
                )}
              </Box>
            </Stack>
          </Box>
        )}

        {/* Primary nav */}
        <List component="nav" aria-label="Mobile primary" sx={{ pt: 0 }}>
          {NAV_LINKS.map(({ label, path, icon }) => {
            const active = isActive(path);
            return (
              <ListItem key={path} disablePadding>
                <ListItemButton
                  component={NavLink}
                  to={path}
                  selected={active}
                  aria-current={active ? 'page' : undefined}
                  sx={{
                    px: 2.5,
                    py: 1.25,
                    borderRadius: 2,
                    mx: 1,
                    my: 0.25,
                    color: '#fff',
                    '&.Mui-selected': {
                      backgroundColor: 'rgba(255,255,255,0.35)',
                      boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.55)',
                    },
                    '&:hover': { backgroundColor: 'rgba(255,255,255,0.12)' },
                    '&:focus-visible': {
                      outline: '2px solid #fff',
                      outlineOffset: -2,
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 36,
                      color: active ? '#fff' : 'rgba(255,255,255,0.85)',
                    }}
                  >
                    {icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={label}
                    primaryTypographyProps={{
                      fontFamily: NAV_FONT,
                      fontWeight: active ? 700 : 500,
                      color: '#fff',
                      fontSize: '0.98rem',
                      letterSpacing: '0.01em',
                    }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.2)', my: 1 }} />

        {/* Auth nav */}
        <List component="nav" aria-label="Mobile account">
          {currentUser ? (
            <>
              <ListItem disablePadding>
                <ListItemButton
                  component={NavLink}
                  to="/dashboard"
                  onClick={closeDrawer}
                  sx={{
                    px: 2.5,
                    py: 1.25,
                    borderRadius: 2,
                    mx: 1,
                    my: 0.25,
                    '&:hover': { backgroundColor: 'rgba(255,255,255,0.12)' },
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 36, color: 'rgba(255,255,255,0.85)' }}>
                    <DashboardIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Dashboard"
                    primaryTypographyProps={{ fontFamily: NAV_FONT, fontWeight: 700, color: '#fff' }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  component={NavLink}
                  to="/profile"
                  onClick={closeDrawer}
                  sx={{
                    px: 2.5,
                    py: 1.25,
                    borderRadius: 2,
                    mx: 1,
                    my: 0.25,
                    '&:hover': { backgroundColor: 'rgba(255,255,255,0.12)' },
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 36, color: 'rgba(255,255,255,0.85)' }}>
                    <AccountCircleIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Profile"
                    primaryTypographyProps={{ fontFamily: NAV_FONT, fontWeight: 700, color: '#fff' }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => {
                    closeDrawer();
                    logout();
                  }}
                  sx={{
                    px: 2.5,
                    py: 1.25,
                    borderRadius: 2,
                    mx: 1,
                    my: 0.25,
                    color: '#ffcdd2',
                    '&:hover': { backgroundColor: 'rgba(255,255,255,0.12)' },
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 36, color: '#ffcdd2' }}>
                    <LogoutIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Logout"
                    primaryTypographyProps={{ fontFamily: NAV_FONT, fontWeight: 800 }}
                  />
                </ListItemButton>
              </ListItem>
            </>
          ) : (
            <Box sx={{ px: 2, py: 1.5 }}>
              <Stack spacing={1.25}>
                <Button
                  fullWidth
                  component={Link}
                  to="/login"
                  onClick={closeDrawer}
                  disabled
                  sx={{
                    fontFamily: NAV_FONT,
                    color: '#fff',
                    border: '1.5px solid rgba(255,255,255,0.7)',
                    borderRadius: 999,
                    py: 1.1,
                    fontWeight: 700,
                    textTransform: 'none',
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.12)',
                      borderColor: '#fff',
                    },
                  }}
                >
                  Login
                </Button>
                <Button
                  fullWidth
                  component={Link}
                  to="/register"
                  onClick={closeDrawer}
                  variant="contained"
                  disabled
                  sx={{
                    fontFamily: NAV_FONT,
                    bgcolor: '#fff',
                    color: '#1b5e20',
                    borderRadius: 999,
                    py: 1.1,
                    fontWeight: 700,
                    textTransform: 'none',
                    boxShadow: '0 4px 14px rgba(0,0,0,0.2)',
                    '&:hover': { bgcolor: '#f1f8e9' },
                  }}
                >
                  Register
                </Button>
              </Stack>
            </Box>
          )}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
