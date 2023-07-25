import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home/Home';

function AppRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
}

export default AppRoutes;
