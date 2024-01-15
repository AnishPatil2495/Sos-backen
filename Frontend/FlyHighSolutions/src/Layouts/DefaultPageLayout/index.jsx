import React from "react";
import { Box } from "@mui/material";
import NavBar from "../../Componants/NavBar/NavBar";
import { Outlet } from "react-router-dom";

const DefaultPageLayout = ({ children }) => {
  return (
    <Box
      sx={{
        height: '100vh',
        backgroundColor: (theme) => theme.palette.primary.main,
        padding: "30px 60px",
      }}
    >
      <NavBar />
      <Outlet />
    </Box>
  )
}

export default DefaultPageLayout;