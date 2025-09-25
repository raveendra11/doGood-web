import React from "react";
import { Box, Typography } from "@mui/material";

const Home = () => {
  const message =
    "This site is currently under active development. Some features may change, and certain functionality may not work as intended. So, please check back for updates.";

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100dvh",
        width: "100%",
        backgroundImage: {
          xs: "url('/bg-mobile.png')",
          md: "url('/bg.png')",
        },
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: { xs: "top center", md: "center" },
        backgroundColor: "#0f3b60",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "env(safe-area-inset-top)",
        overflow: "hidden",
        zIndex: 0,
      }}
    >
      {/* Static banner under navbar */}
      <Box
        sx={{
          position: "fixed",
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
  );
};

export default Home;
