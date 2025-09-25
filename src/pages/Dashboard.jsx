import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Box, Paper } from '@mui/material';

const Dashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if (!user) navigate('/login'); // Redirect if not logged in
  }, [user, navigate]);

  return (
    <Box
          sx={{
            position: "relative",
            minHeight: "100dvh", // full viewport height including under navbar
            width: "100%",
    
            // Responsive background images
            backgroundImage: {
              xs: "url('/bg-mobile.png')", // portrait image for phones
              md: "url('/bg.png')",        // landscape/wide for desktops
            },
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover", // no white space, fills screen
            backgroundPosition: { xs: "top center", md: "center" },
            backgroundColor: "#0f3b60",
    
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
    
            // Safe area for notches
            paddingTop: "env(safe-area-inset-top)",
            overflow: "hidden",
            zIndex: 0, // ensures background sits behind AppBar
          }}
        >
          {/* Optional content here */}
        
      <Paper
        elevation={6}
        sx={{
          maxWidth: 600,
          width: '100%',
          p: { xs: 3, md: 4 },
          borderRadius: 3,
          textAlign: 'center',
          bgcolor: 'rgba(255,255,255,0.85)', // translucent for readability
        }}
      >
        <Typography variant="h4" gutterBottom fontWeight="bold">
          Welcome to doGood!
        </Typography>

        {user?.name && (
          <Typography variant="h6" gutterBottom>
            Hi {user.name}, thanks for registering with us 💙
          </Typography>
        )}

        <Typography variant="body1" paragraph>
          We truly appreciate your interest in joining our community. 
        </Typography>

        <Typography variant="body1" paragraph>
          This site is still under development. Some features may not work yet, 
          but we are constantly working to bring you the full experience soon.
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Stay tuned for updates and new functionalities coming your way!
        </Typography>
      </Paper>
    </Box>
  );
};

export default Dashboard;
