import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Box, Typography, Paper, CircularProgress } from '@mui/material';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [generated, setGenerated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleGenerateToken = async () => {
    if (!email) {
      setError('Email is required');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch(
        'https://dogood-23738934914.us-central1.run.app/api/forgot-password',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setToken(data.token);
        setGenerated(true);
      } else {
        setError(data.message || 'Invalid email');
      }
    } catch (err) {
      setError('Something went wrong');
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
      const response = await fetch(
        'https://dogood-23738934914.us-central1.run.app/api/reset-password',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            token,
            newPassword,
          }),
        }
      );

      if (response.ok) {
        alert('Password reset completed. Use your new password to login.');
        navigate('/login');
      } else {
        const data = await response.json();
        setError(data.message || 'Invalid or expired token');
      }
    } catch (err) {
      setError('Something went wrong');
    }

    setLoading(false);
  };

  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        backgroundImage: "url('/login.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Paper
        elevation={6}
        sx={{
          maxWidth: 400,
          width: '100%',
          p: 4,
          borderRadius: 3,
          bgcolor: 'rgba(255,255,255,0.85)',
        }}
      >
        <Typography variant="h5" gutterBottom align="center">
          Forgot Password
        </Typography>

        {!generated ? (
          <>
            <TextField
              label="Email"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Button
              variant="contained"
              fullWidth
              sx={{ mt: 2 }}
              onClick={handleGenerateToken}
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} /> : 'Generate Reset Token'}
            </Button>
          </>
        ) : (
          <>
            <TextField
              label="Token"
              fullWidth
              margin="normal"
              value={token}
              onChange={(e) => setToken(e.target.value)}
            />

            <TextField
              label="New Password"
              type="password"
              fullWidth
              margin="normal"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />

            <Button
              variant="contained"
              fullWidth
              sx={{ mt: 2 }}
              onClick={handleResetPassword}
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} /> : 'Reset Password'}
            </Button>
          </>
        )}

        {error && (
          <Typography color="error" sx={{ mt: 2 }}>
            {error}
          </Typography>
        )}
      </Paper>
    </Box>
  );
};

export default ForgotPassword;
