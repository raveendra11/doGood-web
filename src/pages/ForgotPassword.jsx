import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  TextField,
  Button,
  Box,
  Typography,
  Paper,
  CircularProgress,
  InputAdornment,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import KeyIcon from '@mui/icons-material/Key';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [generated, setGenerated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const parseResponse = async (response) => {
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      return await response.json();
    }
    return await response.text();
  };

  const handleGenerateToken = async () => {
    if (!email) {
      setError('Email is required');
      return;
    }
    setLoading(true);
    setError('');

    try {
      const response = await fetch('https://api.wedogood.help/api/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await parseResponse(response);

      if (response.ok) {
        if (typeof data === 'object' && data.token) {
          setToken(data.token);
        } else if (typeof data === 'string') {
          const uuidMatch = data.match(/[0-9a-fA-F-]{36}/);
          if (uuidMatch) {
            setToken(uuidMatch[0]);
          } else {
            setError('Token not found in response');
            setLoading(false);
            return;
          }
        } else {
          setError('Unexpected server response');
          setLoading(false);
          return;
        }
        setGenerated(true);
      } else {
        setError(typeof data === 'string' ? data : data?.message || 'Invalid email');
      }
    } catch (err) {
      console.error(err);
      setError('Network error or server not reachable');
    }
    setLoading(false);
  };

  const handleResetPassword = async () => {
    if (!token || !newPassword) {
      setError('All fields are required');
      return;
    }
    setLoading(true);
    setError('');

    try {
      const response = await fetch('https://api.wedogood.help/api/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, newPassword }),
      });
      const data = await parseResponse(response);
      if (response.ok) {
        navigate('/login');
      } else {
        setError(typeof data === 'string' ? data : data?.message || 'Password reset failed');
      }
    } catch (err) {
      console.error(err);
      setError('Network error or server not reachable');
    }
    setLoading(false);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        minHeight: '100dvh',
        width: '100%',
        backgroundColor: '#1b5e20',
        backgroundImage: [
          'linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45))',
          "url('/login.jpg')",
        ].join(', '),
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: { xs: 1.5, sm: 2 },
        py: { xs: 12, md: 8 },
        overflowX: 'hidden',
      }}
    >
      <Paper
        elevation={0}
        sx={{
          position: 'relative',
          zIndex: 1,
          maxWidth: 440,
          width: '100%',
          p: { xs: 3, sm: 4, md: 5 },
          borderRadius: 4,
          bgcolor: '#ffffff',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
          border: '4px solid #fff',
        }}
      >
        <Box textAlign="center" sx={{ mb: { xs: 3, md: 4 } }}>
          <Box
            sx={{
              width: 56,
              height: 56,
              mx: 'auto',
              mb: 1.5,
              borderRadius: '50%',
              bgcolor: '#e8f5e9',
              color: '#1b5e20',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <KeyIcon sx={{ fontSize: 28 }} />
          </Box>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 900,
              color: '#1b5e20',
              mb: 1,
              letterSpacing: '-0.02em',
              fontSize: { xs: '1.5rem', sm: '1.85rem', md: '2.125rem' },
            }}
          >
            {generated ? 'Reset Password' : 'Forgot Password'}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500 }}>
            {generated
              ? 'Enter the token we sent and your new password.'
              : "Enter your email and we'll send you a reset token."}
          </Typography>
        </Box>

        {!generated ? (
          <>
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
                    <EmailIcon sx={{ color: '#2e7d32' }} />
                  </InputAdornment>
                ),
              }}
              sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3 } }}
            />
            {error && (
              <Typography color="error" variant="body2" sx={{ mt: 1, textAlign: 'center' }}>
                {error}
              </Typography>
            )}
            <Button
              variant="contained"
              fullWidth
              size="large"
              endIcon={!loading && <ArrowForwardIcon />}
              onClick={handleGenerateToken}
              disabled={loading}
              sx={{
                mt: 3,
                py: 1.5,
                fontWeight: 'bold',
                borderRadius: 3,
                bgcolor: '#1b5e20',
                '&:hover': { bgcolor: '#2e7d32' },
              }}
            >
              {loading ? <CircularProgress size={24} color="inherit" /> : 'Generate Reset Token'}
            </Button>
          </>
        ) : (
          <>
            <TextField
              label="Reset Token"
              fullWidth
              margin="normal"
              variant="outlined"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <KeyIcon sx={{ color: '#2e7d32' }} />
                  </InputAdornment>
                ),
              }}
              sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3 } }}
            />
            <TextField
              label="New Password"
              type="password"
              fullWidth
              margin="normal"
              variant="outlined"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon sx={{ color: '#2e7d32' }} />
                  </InputAdornment>
                ),
              }}
              sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3 } }}
            />
            {error && (
              <Typography color="error" variant="body2" sx={{ mt: 1, textAlign: 'center' }}>
                {error}
              </Typography>
            )}
            <Button
              variant="contained"
              fullWidth
              size="large"
              endIcon={!loading && <ArrowForwardIcon />}
              onClick={handleResetPassword}
              disabled={loading}
              sx={{
                mt: 3,
                py: 1.5,
                fontWeight: 'bold',
                borderRadius: 3,
                bgcolor: '#1b5e20',
                '&:hover': { bgcolor: '#2e7d32' },
              }}
            >
              {loading ? <CircularProgress size={24} color="inherit" /> : 'Reset Password'}
            </Button>
          </>
        )}

        <Box textAlign="center" sx={{ mt: 3 }}>
          <Link
            to="/login"
            style={{
              textDecoration: 'none',
              color: '#1b5e20',
              fontWeight: 600,
              fontSize: '0.875rem',
            }}
          >
            ← Back to Login
          </Link>
        </Box>
      </Paper>
    </Box>
  );
};

export default ForgotPassword;
