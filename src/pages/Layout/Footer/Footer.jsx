import React from 'react';
import {
  Container, Typography, Divider, useTheme, Box, useMediaQuery,
} from '@mui/material';
import Social from '../../../components/Layout/Footer/Social';

function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Container maxWidth="xl">
      <Divider style={{ backgroundColor: theme.palette.primary.main }} />
      <Box sx={{
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(6),
      }}
      >
        <Social mobile={isMobile} />
        <Typography variant="body2" color="initial">
          © 2022 Nicolas Gravertt, Inc.
        </Typography>
      </Box>
    </Container>
  );
}

export default Footer;
