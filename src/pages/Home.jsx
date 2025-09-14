import React from "react";
import { Box, useTheme } from "@mui/material";

const Home = () => {
  const theme = useTheme();

  // Get default AppBar (toolbar) height from theme
  const appBarHeight = theme.mixins.toolbar.minHeight;

  return (
    <Box
      sx={{
        position: "relative",
        // Fill viewport but subtract AppBar height dynamically
        minHeight: { xs: `calc(100dvh - ${appBarHeight}px)`, md: "100vh" },
        mt: { xs: `${appBarHeight}px`, md: 0 },
        width: "100%",

        // Responsive background
        backgroundImage: {
          xs: "url('/bg-mobile.png')",
          md: "url('/bg.png')",
        },
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: { xs: "50% 30%", md: "center" },
        backgroundColor: "#0f3b60",

        paddingTop: "env(safe-area-inset-top)", // safe area for notches
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Content wrapper */}
    </Box>
  );
};

export default Home;
