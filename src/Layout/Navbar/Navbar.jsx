import React, { useState } from 'react';
import { Link, Box, Hidden, IconButton, useTheme, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '../../components/Layout/Navbar/AppBar';
import Toolbar from '../../components/Layout/Navbar/Toolbar';
import Menu from './Menu';
import MobileMenu from './MobileMenu';
import { tokens } from '../../theme/Theme';

function Navbar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false);

  return (
    <>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between', backgroundColor: colors.primary[700] }}>
          <Typography variant="h6" color={colors.grey[400]}>
            <Link underline="none" color="inherit" href="/Portafolio">
              Nicolas Gravertt
            </Link>
          </Typography>
          <Box
            sx={{
              flex: 1,
              height: '100%',
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
            <Hidden smUp>
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
      <Hidden smUp>
        <MobileMenu open={mobileNavIsOpen} onClose={() => setMobileNavIsOpen(!mobileNavIsOpen)} />
      </Hidden>
      <Toolbar />
    </>
  );
}

export default Navbar;
