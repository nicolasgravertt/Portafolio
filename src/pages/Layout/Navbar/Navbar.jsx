import React, { useState } from 'react';
import {
  Link, Box, Hidden, IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '../../../components/Layout/Navbar/AppBar';
import Toolbar from '../../../components/Layout/Navbar/Toolbar';
import Menu from './Menu';
import MobileMenu from './MobileMenu';

function Navbar() {
  const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false);
  return (
    <>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            href="/Portafolio"
            sx={{ fontSize: 24 }}
          >
            Nicolas Gravertt
          </Link>
          <Box sx={{
            flex: 1,
            display: 'flex',
            justifyContent: 'flex-end',
            fontSize: 16,
            color: 'common.white',
            ml: 3,
          }}
          >
            <Hidden smDown>
              <Menu />
            </Hidden>
            <Hidden mdUp>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={() => setMobileNavIsOpen(!mobileNavIsOpen)}
                edge="start"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
          </Box>
        </Toolbar>
      </AppBar>
      <Hidden mdUp>
        <MobileMenu
          open={mobileNavIsOpen}
          onClose={() => setMobileNavIsOpen(!mobileNavIsOpen)}
        />
      </Hidden>
      <Toolbar />
    </>
  );
}

export default Navbar;
