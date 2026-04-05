import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useAuth } from '../context/AuthContext';

const NAV_LINKS = [
  { label: 'About Us', path: '/about' },
  { label: 'Causes', path: '/causes' },
  { label: 'Stories', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
  { label: 'FAQ', path: '/faq' },
];

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  React.useEffect(() => {
    if (!isMobile) {
      setDrawerOpen(false);
    }
  }, [isMobile]);
  const handleMenu = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const handleLogout = () => { logout(); navigate('/login'); handleClose(); };
  const toggleDrawer = () => setDrawerOpen((prev) => !prev);

  const isActive = (path) => location.pathname === path;

  const navButtonStyle = (path) => ({
    color: '#fff',
    fontWeight: isActive(path) ? 700 : 500,
    textTransform: 'none',
    fontSize: '0.95rem',
    px: 1.5,
    position: 'relative',
    letterSpacing: '0.02em',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: 4,
      left: '50%',
      transform: isActive(path) ? 'translateX(-50%) scaleX(1)' : 'translateX(-50%) scaleX(0)',
      transformOrigin: 'center',
      width: '60%',
      height: '2px',
      backgroundColor: '#fff',
      borderRadius: '2px',
      transition: 'transform 0.25s ease',
    },
    '&:hover': {
      backgroundColor: 'rgba(255,255,255,0.15)',
      '&::after': {
        transform: 'translateX(-50%) scaleX(1)',
      },
    },
    transition: 'background-color 0.2s ease',
  });

  const authButtonStyle = (variant) => ({
    fontWeight: 600,
    textTransform: 'none',
    fontSize: '0.9rem',
    px: 2,
    ml: 1,
    borderRadius: '20px',
    transition: 'all 0.2s ease',
    ...(variant === 'outlined'
      ? {
          color: '#fff',
          border: '1.5px solid rgba(255,255,255,0.7)',
          '&:hover': {
            border: '1.5px solid #fff',
            backgroundColor: 'rgba(255,255,255,0.1)',
          },
        }
      : {
          color: '#2e7d32',
          backgroundColor: '#fff',
          '&:hover': {
            backgroundColor: 'rgba(255,255,255,0.88)',
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
          },
        }),
  });

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: 'linear-gradient(135deg, rgba(27,94,32,0.92) 0%, rgba(46,125,50,0.88) 100%)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          boxShadow: '0 2px 12px rgba(0,0,0,0.18)',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        <Toolbar sx={{ minHeight: { xs: 60, md: 68 }, px: { xs: 2, md: 3 } }}>
          {/* Logo + Brand */}
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
            <Box component="span" sx={{ mr: 0.5, p: 0.5, display: 'flex', alignItems: 'center' }}>
              <img src="doGood.png" alt="" style={{ height: 44, width: 44, borderRadius: '50%' }} />
            </Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                fontSize: '1.25rem',
                color: '#fff',
                letterSpacing: '0.04em',
                textShadow: '0 1px 4px rgba(0,0,0,0.25)',
              }}
            >
              doGood
            </Typography>
          </Link>

          {/* Spacer */}
          <Box sx={{ flexGrow: 1 }} />

          {/* Desktop nav links */}
          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mr: 1 }}>
              {NAV_LINKS.map(({ label, path }) => (
                <Button key={path} sx={navButtonStyle(path)} component={Link} to={path}>
                  {label}
                </Button>
              ))}
            </Box>
          )}

          {/* Auth / Account */}
          {!isMobile && (
            <>
              {currentUser ? (
                <>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    sx={{
                      color: '#fff',
                      ml: 1,
                      '&:hover': { backgroundColor: 'rgba(255,255,255,0.15)' },
                    }}
                  >
                    <AccountCircle />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    PaperProps={{
                      sx: {
                        mt: 0.5,
                        borderRadius: 2,
                        minWidth: 140,
                        boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
                      },
                    }}
                  >
                    <MenuItem onClick={handleLogout} sx={{ fontWeight: 500 }}>Logout</MenuItem>
                  </Menu>
                </>
              ) : (
                <>
                  <Button sx={authButtonStyle('outlined')} component={Link} to="/login">Login</Button>
                  <Button sx={authButtonStyle('filled')} component={Link} to="/register">Register</Button>
                </>
              )}
            </>
          )}

          {/* Mobile hamburger */}
          {isMobile && (
            <IconButton
              edge="end"
              aria-label="open navigation menu"
              onClick={toggleDrawer}
              sx={{ color: '#fff' }}
            >
              {drawerOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer}
        PaperProps={{
          sx: {
            width: 260,
            background: 'linear-gradient(160deg, #1b5e20 0%, #2e7d32 100%)',
            color: '#fff',
          },
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', px: 2, py: 2 }}>
          <Box component="img" src="doGood.png" alt="" sx={{ height: 38, width: 38, borderRadius: '50%', mr: 1.25 }} />
          <Typography variant="h6" sx={{ fontWeight: 800, color: '#fff', letterSpacing: '0.04em' }}>
            doGood
          </Typography>
        </Box>
        <Divider sx={{ borderColor: 'rgba(255,255,255,0.2)', mb: 1 }} />
        <List>
          {NAV_LINKS.map(({ label, path }) => (
            <ListItem key={path} disablePadding>
              <ListItemButton
                component={Link}
                to={path}
                onClick={toggleDrawer}
                selected={isActive(path)}
                sx={{
                  px: 3,
                  py: 1.2,
                  '&.Mui-selected': { backgroundColor: 'rgba(255,255,255,0.15)' },
                  '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' },
                }}
              >
                <ListItemText
                  primary={label}
                  primaryTypographyProps={{
                    fontWeight: isActive(path) ? 700 : 500,
                    color: '#fff',
                    fontSize: '1rem',
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider sx={{ borderColor: 'rgba(255,255,255,0.2)', my: 1 }} />
        <List>
          {currentUser ? (
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => { handleLogout(); toggleDrawer(); }}
                sx={{ px: 3, py: 1.2, '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' } }}
              >
                <ListItemText primary="Logout" primaryTypographyProps={{ fontWeight: 600, color: '#fff' }} />
              </ListItemButton>
            </ListItem>
          ) : (
            <>
              <ListItem disablePadding>
                <ListItemButton
                  component={Link}
                  to="/login"
                  onClick={toggleDrawer}
                  sx={{ px: 3, py: 1.2, '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' } }}
                >
                  <ListItemText primary="Login" primaryTypographyProps={{ fontWeight: 600, color: '#fff' }} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  component={Link}
                  to="/register"
                  onClick={toggleDrawer}
                  sx={{ px: 3, py: 1.2, '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' } }}
                >
                  <ListItemText primary="Register" primaryTypographyProps={{ fontWeight: 600, color: '#fff' }} />
                </ListItemButton>
              </ListItem>
            </>
          )}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
