import React from 'react';
import { Container, Typography, Divider, useTheme, Box, useMediaQuery } from '@mui/material';
import Social from '../../components/Layout/Footer/Social';
import { tokens } from '../../theme/Theme';

function Footer() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Container maxWidth="xl">
      <Divider style={{ backgroundColor: colors.secondary[400] }} />
      <Box
        sx={{
          paddingTop: theme.spacing(4),
          paddingBottom: theme.spacing(6),
        }}
      >
        <Social mobile={isMobile} />
        <Typography variant="h5" color={colors.tertiary[400]}>
          © 2023 Nicolas Gravertt, Inc.
        </Typography>
      </Box>
    </Container>
  );
}

export default Footer;
