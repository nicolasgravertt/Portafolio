import React from 'react';
import {
  Drawer, List, Divider, ListItem, IconButton, ListItemButton, ListItemIcon, ListItemText,
} from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { styled } from '@mui/material/styles';
// import { Link } from 'react-scroll';

function MobileMenu({ open, onClose }) {
  const drawerWidth = 240;

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));

  //   const listItemProps = {
  //     button: true,
  //     component: Link,
  //     onClick: onClose,
  //     onKeyDown: onClose,
  //     spy: true,
  //     smooth: true,
  //     offset: 0,
  //     duration: 500,
  //     // className: {classes.listItem},
  //     // activeClass: classes.active,
  //   };

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="persistent"
      anchor="right"
      open={open}
    >
      <DrawerHeader>
        <IconButton onClick={onClose}>
          <ChevronRightIcon />
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {['Sobre Mi', 'Experiencia', 'Proyectos', 'Contacto'].map((text, index) => (
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
      <Divider />
    </Drawer>
  );
}

export default MobileMenu;
