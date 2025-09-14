import React from "react";
import { Box } from "@mui/material";

const Home = () => {
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
    </Box>
  );
};

export default Home;
