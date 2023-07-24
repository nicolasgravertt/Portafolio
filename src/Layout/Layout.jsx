import React from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

export default function Layout({ children }) {
  return (
    <div className="relative h-screen ">
      <div className="">
        <Navbar />
      </div>
      {children}
      <Footer />
    </div>
  );
}
