import React from 'react';
import { Box } from '@mui/material';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

export default function Layout({ children }) {
  return (
    <Box>
      <Navbar />
      <main className="content">{children}</main>
      <Footer />
    </Box>
  );
}
