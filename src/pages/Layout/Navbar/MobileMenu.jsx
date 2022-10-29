import React from 'react';
import {
  Drawer, List, Divider, ListItem, IconButton, ListItemButton, ListItemIcon, ListItemText,
} from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {
  Person, Email, Folder, Leaderboard,
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-scroll';

const smoothScrollProps = {
  spy: true,
  smooth: true,
  offset: -70,
  duration: 500,
};

const AnimatedLink = React.forwardRef((props, ref) => (
  <div ref={ref} style={{ width: '100%' }}>
    <Link {...smoothScrollProps} {...props} />
  </div>
));

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
        <ListItem key="Sobre Mi" disablePadding>
          <ListItemButton component={AnimatedLink} to="about">
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText primary="Sobre Mi" />
          </ListItemButton>
        </ListItem>
        <ListItem key="Experiencia" disablePadding>
          <ListItemButton component={AnimatedLink} to="experience">
            <ListItemIcon>
              <Leaderboard />
            </ListItemIcon>
            <ListItemText primary="Experiencia" />
          </ListItemButton>
        </ListItem>
        <ListItem key="Proyectos" disablePadding>
          <ListItemButton component={AnimatedLink} to="projects">
            <ListItemIcon>
              <Folder />
            </ListItemIcon>
            <ListItemText primary="Proyectos" />
          </ListItemButton>
        </ListItem>
        <ListItem key="Contacto" disablePadding>
          <ListItemButton component={AnimatedLink} to="contact">
            <ListItemIcon>
              <Email />
            </ListItemIcon>
            <ListItemText primary="Contacto" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
    </Drawer>
  );
}

export default MobileMenu;
