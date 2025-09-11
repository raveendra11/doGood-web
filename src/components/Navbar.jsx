import React from 'react';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, IconButton } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleMenu = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const handleLogout = () => { logout(); navigate('/login'); handleClose(); };

  // common style for all nav buttons
  const navButtonStyle = { color: '#fff', fontWeight: 500, textShadow: '1px 1px 3px rgba(0,0,0,0.6)' };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: 'rgba(255,255,255,0.1)',
        boxShadow: 'none',
      }}
    >
      <Toolbar>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <IconButton edge="start" aria-label="logo" sx={{ mr: 2 }}>
            <img src="doGood.png" alt="" style={{ height: 50, width: 50 }} />
          </IconButton>
        </Link>

        <Typography variant="h6" sx={{ flexGrow: 1 }} />

        <Button sx={navButtonStyle} component={Link} to="/about">About Us</Button>
        {/*<Button sx={navButtonStyle} component={Link} to="/causes">Causes</Button>
        <Button sx={navButtonStyle} component={Link} to="/gallery">Stories</Button>
        <Button sx={navButtonStyle} component={Link} to="/contact">Contact</Button>*/}
        <Button sx={navButtonStyle} component={Link} to="/faq">FAQ</Button>

        {currentUser ? (
          <>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              sx={{ color: '#fff' }} // make account icon white too
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
            >
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </>
        ) : (
          <>
            <Button sx={navButtonStyle} component={Link} to="/register">Register</Button>
            <Button sx={navButtonStyle} component={Link} to="/login">Login</Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
