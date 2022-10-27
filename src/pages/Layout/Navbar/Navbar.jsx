import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../../../components/Layout/Navbar/AppBar';
import Toolbar from '../../../components/Layout/Navbar/Toolbar';

const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3,
};

function Navbar() {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            href="/"
            sx={{ fontSize: 24 }}
          >
            Nicolas Gravertt
          </Link>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="/"
              sx={rightLink}
            >
              Iniciar sesión
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}

export default Navbar;
