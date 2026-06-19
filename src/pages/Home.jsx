import React from "react";
import { Box, Typography, Container, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const message =
    "This site is currently under active development. Some features may change, and certain functionality may not work as intended. So, please check back for updates.";

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        backgroundImage: "linear-gradient(to bottom, transparent 0%, #fdfbf7 100%)",
        backgroundColor: "#fdfbf7",
        display: "flex",
        flexDirection: "column",
        paddingTop: "env(safe-area-inset-top)",
        overflowY: "auto",
        zIndex: 0,
      }}
    >
      {/* Hero Image Section */}
      <Box
        sx={{
          width: "100%",
          height: { xs: "60vh", md: "100vh" },
          backgroundImage: {
            xs: "url('/bg-mobile.png')",
            md: "url('/bg.png')",
          },
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: { xs: "top center", md: "center" },
          position: "relative",
        }}
      >
        {/* Static banner under navbar - now relative to hero image */}
        <Box
          sx={{
            position: "absolute",
            top: 64, // adjust if your AppBar height is different
            left: 0,
            right: 0,
            bgcolor: "rgba(0,0,0,0)", // transparent dark background
            backdropFilter: "blur(6px)",
            color: "#fff",
            textAlign: "center",
            py: 1,
            px: 2,
            fontSize: { xs: 12, sm: 14 },
            fontWeight: 500,
            textShadow: "1px 1px 3px rgba(0,0,0,0.4)",
            zIndex: (theme) => theme.zIndex.appBar - 1,
          }}
        >
          <Typography variant="body2">{message}</Typography>
        </Box>
      </Box>

      {/* <Container maxWidth="md" sx={{ flexGrow: 1, display: "flex", alignItems: "center", justifyContent: "center", py: { xs: 8, md: 12 } }}>
        <Stack 
          spacing={4} 
          alignItems="center" 
          textAlign="center" 
          sx={{ 
            color: "#2c3e50", 
            animation: "fadeInUp 1s ease-out",
            p: { xs: 4, md: 8 },
            borderRadius: 8,
            bgcolor: "rgba(255, 255, 255, 0.6)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.8)",
            boxShadow: "0 20px 50px rgba(0,0,0,0.05)",
          }}
        >
          <Typography 
            variant="h1" 
            sx={{ 
              fontWeight: 900, 
              fontSize: { xs: "2.5rem", md: "4.5rem" }, 
              letterSpacing: "-0.02em",
              color: "#0f3b60",
              mb: 2
            }}
          >
            Doing Good, <br />
            <span style={{ color: "#1b5e20", opacity: 0.9 }}>Together.</span>
          </Typography>

          <Typography 
            variant="h5" 
            sx={{ 
              fontWeight: 400, 
              color: "#546e7a",
              maxWidth: "700px", 
              lineHeight: 1.6,
              mb: 4
            }}
          >
            Join us in our mission to support underprivileged communities through 
            clothing drives, food sharing, and education. Every small act of 
            kindness creates a ripple of change.
          </Typography>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={3}>
            <Button 
              variant="contained" 
              size="large" 
              onClick={() => navigate("/causes")}
              sx={{ 
                bgcolor: "#0f3b60", 
                color: "#fff", 
                fontWeight: 700, 
                px: 4, 
                py: 1.5, 
                borderRadius: "50px",
                boxShadow: "0 10px 20px rgba(15, 59, 96, 0.2)",
                "&:hover": { bgcolor: "#164a7a", boxShadow: "0 12px 24px rgba(15, 59, 96, 0.3)" }
              }}
            >
              Explore Our Causes
            </Button>
            <Button 
              variant="outlined" 
              size="large" 
              onClick={() => navigate("/about")}
              sx={{ 
                color: "#0f3b60", 
                borderColor: "#0f3b60", 
                fontWeight: 700, 
                px: 4, 
                py: 1.5, 
                borderRadius: "50px",
                "&:hover": { borderColor: "#164a7a", bgcolor: "rgba(15, 59, 96, 0.05)" }
              }}
            >
              Learn More
            </Button>
          </Stack>
        </Stack>
      </Container> */}

      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </Box>
  );
};

export default Home;
