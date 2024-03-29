import React, { useContext } from 'react';
import { Drawer, List, Divider, ListItem, IconButton, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Person, Email, Folder, Leaderboard } from '@mui/icons-material';
import { styled, useTheme } from '@mui/material/styles';
import { Link } from 'react-scroll';
import { ColorModeContext, tokens } from '../../theme/Theme';

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

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

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
      PaperProps={{
        sx: {
          backgroundColor: colors.primary[400],
          color: colors.secondary[400],
        },
      }}
      variant="persistent"
      anchor="right"
      open={open}
    >
      <DrawerHeader>
        <IconButton onClick={onClose}>
          <ChevronRightIcon sx={{ color: colors.secondary[400] }} />
        </IconButton>
      </DrawerHeader>
      <Divider style={{ backgroundColor: colors.secondary[400] }} />
      <List>
        <ListItem key="Mode" disablePadding>
          <ListItemButton onClick={colorMode.toggleColorMode}>
            <ListItemIcon>
              {theme.palette.mode === 'dark' ? (
                <DarkModeIcon sx={{ color: colors.secondary[400] }} />
              ) : (
                <LightModeIcon sx={{ color: colors.secondary[400] }} />
              )}
            </ListItemIcon>
            {theme.palette.mode === 'dark' ? <ListItemText primary="Óscuro" /> : <ListItemText primary="Claro" />}
          </ListItemButton>
        </ListItem>
        <ListItem key="Sobre Mi" disablePadding>
          <ListItemButton component={AnimatedLink} to="about">
            <ListItemIcon>
              <Person sx={{ color: colors.secondary[400] }} />
            </ListItemIcon>
            <ListItemText primary="Sobre Mi" />
          </ListItemButton>
        </ListItem>
        <ListItem key="Experiencia" disablePadding>
          <ListItemButton component={AnimatedLink} to="experience">
            <ListItemIcon>
              <Leaderboard sx={{ color: colors.secondary[400] }} />
            </ListItemIcon>
            <ListItemText primary="Experiencia" />
          </ListItemButton>
        </ListItem>
        <ListItem key="Proyectos" disablePadding>
          <ListItemButton component={AnimatedLink} to="projects">
            <ListItemIcon>
              <Folder sx={{ color: colors.secondary[400] }} />
            </ListItemIcon>
            <ListItemText primary="Proyectos" />
          </ListItemButton>
        </ListItem>
        <ListItem key="Contacto" disablePadding>
          <ListItemButton component={AnimatedLink} to="contact">
            <ListItemIcon>
              <Email sx={{ color: colors.secondary[400] }} />
            </ListItemIcon>
            <ListItemText primary="Contacto" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider style={{ backgroundColor: colors.secondary[400] }} />
    </Drawer>
  );
}

export default MobileMenu;
