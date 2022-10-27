import React from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Social from '../../components/Layout/Footer/Social';

export default function Layout({ children }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <div className="relative h-screen ">
      <div className="">
        <Navbar />
      </div>
      {children}
      {!isMobile && <Social />}
      <Footer />
    </div>
  );
}
