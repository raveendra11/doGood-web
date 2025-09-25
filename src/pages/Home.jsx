import React from "react";
import { Box } from "@mui/material";
import { keyframes } from "@mui/system";

// Marquee animation (right ➜ left)
const marquee = keyframes`
  0%   { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
`;

const Home = () => {
  const message =
    "This site is currently under active development. Some features may change, and certain functionality may not work as intended.So, please check back for updates.";

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100dvh",
        width: "100%",

        // Responsive background images
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

        // Safe area for notches
        paddingTop: "env(safe-area-inset-top)",
        overflow: "hidden",
        zIndex: 0,
      }}
    >
      {/* Transparent scrolling banner under fixed navbar */}
      <Box
        role="status"
        aria-live="polite"
        sx={{
          position: "fixed",
          top: { xs: 64, md: 64 }, // default MUI AppBar height; adjust if yours differs
          left: 0,
          right: 0,
          height: 40,
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          zIndex: (theme) => theme.zIndex.appBar - 1, // below navbar, above page bg
          backgroundColor: "rgba(0,0,0,0)",
          backdropFilter: "blur(6px)",
          color: "#fff",
        }}
      >
        {/* Edge fade so the text doesn't hard-cut at sides */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            "&::before, &::after": {
              content: '""',
              position: "absolute",
              top: 0,
              bottom: 0,
              width: 32,
            },
            "&::before": {
              left: 0,
              background:
                "linear-gradient(to right, rgba(0,0,0,0.25), rgba(0,0,0,0))",
            },
            "&::after": {
              right: 0,
              background:
                "linear-gradient(to left, rgba(0,0,0,0.25), rgba(0,0,0,0))",
            },
          }}
        />

        {/* Marquee track */}
        <Box
          sx={{
            whiteSpace: "nowrap",
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            px: 2,
            // Continuous scroll
            animation: `${marquee} 55s linear infinite`,
            "@media (prefers-reduced-motion: reduce)": {
              animationPlayState: "paused",
            },
            fontSize: { xs: 12, sm: 14 },
            textShadow: "1px 1px 3px rgba(0,0,0,0.6)",
          }}
        >
          {/* Duplicate the message so it loops seamlessly */}
          <span>{message}</span>
          <span>•</span>
          <span>{message}</span>
          <span>•</span>
          <span>{message}</span>
        </Box>
      </Box>

      {/* (Optional) any hero content can go here */}
      {/* <Box sx={{ color: '#fff' }}>Welcome</Box> */}
    </Box>
  );
};

export default Home;
