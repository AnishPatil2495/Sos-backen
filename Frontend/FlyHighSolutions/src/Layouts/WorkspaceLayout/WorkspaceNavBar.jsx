import React from "react";
import { IconButton, Typography, AppBar, Container, Toolbar, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

const WorkspaceNavBar = ({
  open,
  handleDrawerOpen,
}) => {
  const navigate = useNavigate()

  return (
    <AppBar position="static" sx={{
      color: (theme) => theme.palette.primary.main,
      width: "100%",
      background: "transparent",
    }}>
      <Container maxWidth="xl" sx={{ borderBottom: '3px solid', ml: 0, mr: 0 }}>
        <Toolbar disableGutters >
          <IconButton>
            <MenuIcon onClick={handleDrawerOpen} sx={{ color: (theme) => theme.palette.primary.main, fontSize: "40px", display: open ? "none" : 'flex' }} />
          </IconButton>
          <Typography variant="h4">
            Fly High
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default WorkspaceNavBar;