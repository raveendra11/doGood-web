import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { TextField, Button, Box, Typography, Paper, InputAdornment } from '@mui/material';
import { Email, Lock } from '@mui/icons-material';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://api.wedogood.help/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const userData = await response.json();
        localStorage.setItem('user', JSON.stringify(userData));
        navigate('/dashboard');
      } else {
        setError('Invalid email or password');
      }

      await login(email, password);
    } catch (error) {
      console.error('Login error:', error);
      setError('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        m: 0,
        p: 0,
        backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/login.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2
      }}
    >
      <Paper
        elevation={0}
        sx={{
          position: 'relative',
          zIndex: 1,
          maxWidth: 420,
          width: '100%',
          p: { xs: 3, md: 5 },
          borderRadius: 8,
          bgcolor: '#ffffff',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
          border: '4px solid #fff',
        }}
      >
        <Box textAlign="center" mb={4}>
          <Typography variant="h4" sx={{ fontWeight: 900, color: '#1b5e20', mb: 1, letterSpacing: '-0.02em' }}>
            Welcome Back
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500 }}>
            Sign in to continue your journey of giving
          </Typography>
        </Box>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Email Address"
            type="email"
            fullWidth
            margin="normal"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Email sx={{ color: '#2e7d32' }} />
                </InputAdornment>
              ),
            }}
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3 } }}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock sx={{ color: '#2e7d32' }} />
                </InputAdornment>
              ),
            }}
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3 } }}
          />

          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
            <Typography variant="body2">
              <Link to="/forgot-password" style={{ color: '#2e7d32', textDecoration: 'none', fontWeight: 600 }}>
                Forgot Password?
              </Link>
            </Typography>
          </Box>

          {error && (
            <Typography color="error" variant="body2" sx={{ mt: 2, textAlign: 'center', fontWeight: 600, bgcolor: '#ffebee', p: 1, borderRadius: 2 }}>
              {error}
            </Typography>
          )}

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ 
              mt: 4, 
              py: 1.5, 
              borderRadius: 3, 
              fontSize: '1.1rem', 
              fontWeight: 700,
              bgcolor: '#2e7d32',
              textTransform: 'none',
              '&:hover': { bgcolor: '#1b5e20' },
              boxShadow: '0 8px 16px rgba(46, 125, 50, 0.3)'
            }}
          >
            Login to Account
          </Button>

          <Typography variant="body2" sx={{ mt: 3, textAlign: 'center', color: 'text.secondary' }}>
            Don't have an account?{' '}
            <Link to="/register" style={{ color: '#2e7d32', textDecoration: 'none', fontWeight: 700 }}>
              Register here
            </Link>
          </Typography>
        </form>
      </Paper>
    </Box>
  );
};

export default Login;
