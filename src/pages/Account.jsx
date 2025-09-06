// src/pages/Account.jsx
import { Box, Typography } from '@mui/material';
import { useAuth } from '../context/AuthContext';

export default function Account() {
  const { currentUser } = useAuth();
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>Account</Typography>
      <Typography>Email: {currentUser?.email}</Typography>
      {currentUser?.username && <Typography>Username: {currentUser.username}</Typography>}
      {/* Add change password UI later if you want */}
    </Box>
  );
}
