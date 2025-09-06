import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Box } from '@mui/material';

const Dashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if (!user) navigate('/login'); // Redirect if not logged in
  }, [user, navigate]);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4">Welcome to doGood!</Typography>
    </Box>
  );
};

export default Dashboard;

