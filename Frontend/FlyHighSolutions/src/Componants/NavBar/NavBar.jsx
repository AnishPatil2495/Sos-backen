import React from "react";
import { IconButton, Typography, AppBar, Container, Toolbar, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import EmojiObjectsTwoToneIcon from '@mui/icons-material/EmojiObjectsTwoTone';

const NavBar = () => {
  const navigate = useNavigate()

  return (
    <AppBar position="static" sx={{ border: "2px solid", background: "transparent" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton>
            <EmojiObjectsTwoToneIcon sx={{ color: "white", fontSize: "40px" }} />
          </IconButton>
          <Typography variant="h4">
            Fly High
          </Typography>
          <Button onClick={() => { navigate("/") }} sx={{ color: "white", ml: "auto" }}>
            Home
          </Button>
          <Button onClick={() => { navigate("/features") }} sx={{ color: "white" }}>
            Features
          </Button>
          <Button sx={{ color: "white" }}>
            Docs
          </Button>
          <Button sx={{ color: "white" }}>
            Login
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default NavBar;