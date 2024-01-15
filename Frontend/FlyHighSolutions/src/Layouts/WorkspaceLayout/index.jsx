import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import WorkspaceNavBar from "./WorkspaceNavBar";
import LeftSideBar from "../../Componants/LeftSideBar";
import { Outlet } from "react-router-dom";

const WorkspaceLayout = () => {
  const [open, setOpen] = useState(true)
  const handleDrawerClose = () => {
    console.log("first")
    setOpen(false)
  }
  const handleDrawerOpen = () => {
    setOpen(true)
  }
  console.log("open", open)
  return (

    <Box
      sx={{
        height: '100vh',
        display: "flex"
      }}
    >

      <LeftSideBar
        open={open}
        handleDrawerClose={handleDrawerClose}
        drawerWidth={"260px"}
      />

      <WorkspaceNavBar
        open={open}
        handleDrawerOpen={handleDrawerOpen} />


      <Outlet />
    </Box >


  )
}

export default WorkspaceLayout;