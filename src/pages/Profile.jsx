import React from 'react';
import { Box, Typography, Card, CardContent, Grid, Avatar, Divider, Button, Container } from '@mui/material';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
  const { currentUser, logout } = useAuth();
  const userProfileData = currentUser && typeof currentUser === 'object' ? currentUser : {};
  
  const formatLabel = (key) => key
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/[_-]+/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
    
  const formatValue = (value) => (
    typeof value === 'object' ? JSON.stringify(value) : String(value)
  );

  const visibleEntries = Object.entries(userProfileData).filter(
    ([key, value]) => (
      value !== null
      && value !== undefined
      && !/(password|secret|token|salt|hash)/i.test(key)
    ),
  );

  return (
    <Box 
      sx={{ 
        minHeight: '100vh',
        minHeight: '100dvh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        py: 4 
      }}
    >
      <Container maxWidth="sm">
        <Card 
          elevation={6} 
          sx={{ 
            borderRadius: 4, 
            overflow: 'visible',
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)'
          }}
        >
          <Box sx={{ position: 'relative', height: { xs: 90, md: 120 }, bgcolor: 'primary.main' }} />
          <CardContent sx={{ position: 'relative', pt: 0, textAlign: 'center' }}>
            <Avatar
              sx={{
                width: { xs: 80, md: 100 },
                height: { xs: 80, md: 100 },
                margin: { xs: '-40px auto 12px', md: '-50px auto 16px' },
                border: '4px solid white',
                boxShadow: 3,
                bgcolor: 'secondary.main',
                fontSize: { xs: '1.5rem', md: '2rem' },
              }}
            >
              {currentUser?.email ? currentUser.email[0].toUpperCase() : 'U'}
            </Avatar>
            
            <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
              Your Profile
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              Manage your account information and preferences
            </Typography>
            
            <Divider sx={{ mb: 4 }} />

            <Grid container spacing={3}>
              {visibleEntries.map(([key, value]) => (
                <Grid size={{ xs: 12, sm: 6 }} key={key}>
                  <Box sx={{ textAlign: 'left', p: 1 }}>
                    <Typography 
                      variant="caption" 
                      color="text.secondary" 
                      sx={{ 
                        display: 'block', 
                        fontWeight: 'bold', 
                        textTransform: 'uppercase', 
                        letterSpacing: 1,
                        mb: 0.5 
                      }}
                    >
                      {formatLabel(key)}
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 500, color: 'text.primary' }}>
                      {formatValue(value)}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>

            <Box sx={{ mt: 5, pt: 3, borderTop: '1px solid #eee' }}>
              <Button 
                variant="contained" 
                color="error" 
                onClick={logout}
                fullWidth
                sx={{ 
                  borderRadius: 2, 
                  py: 1.5, 
                  fontWeight: 'bold',
                  textTransform: 'none',
                  fontSize: '1rem',
                  boxShadow: 'none',
                  '&:hover': { boxShadow: 3 }
                }}
              >
                Logout Account
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default Profile;
