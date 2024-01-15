import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { DrawerHeader } from './style';

const LeftSideBar = ({
  open,
  handleDrawerClose,
  drawerWidth
}) => {
  console.log("open", open)

  return (
    <Drawer
      sx={{
        width: open ? drawerWidth : "0px",
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: open ? drawerWidth : "0px",
          boxSizing: 'border-box',
          overflow: "hidden"
        },
        borderRight: '3px solid',

      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          <MenuIcon sx={{ color: (theme) => theme.palette.primary.main, fontSize: "40px" }} />
        </IconButton>
      </DrawerHeader>
      <Divider sx={{ borderWidth: "2px", borderColor: (theme) => theme.palette.primary.main, }} />
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ borderWidth: "2px", borderColor: (theme) => theme.palette.primary.main, }} />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}

export default LeftSideBar;