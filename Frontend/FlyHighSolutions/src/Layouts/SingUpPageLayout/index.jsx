import React from "react";
import { Box } from "@mui/material";

const SingupPageLayout = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        width: "165vh",
        display: "flex",
      }}
    >
      <Box
        sx={{
          height: '100vh',
          width: '25%',
          backgroundImage: "url(https://img.freepik.com/free-photo/flat-lay-workstation-with-copy-space-laptop_23-2148430879.jpg)",
          backgroundSize: '100% 100%'
        }}
      />
      <Box
        sx={{
          height: '100vh',
          width: '75%',
          backgroundColor: (theme) => theme.palette.primary.main,
        }}
      >

      </Box>
    </Box>
  )
}

export default SingupPageLayout;