import React from 'react';
import './App.css';

import {
  Route, Routes,
} from 'react-router-dom';

import Layout from './Layout/Layout';
import AppRoutes from './routes/routes';

function App() {
  return (
    <Routes>
      <Route
        exact
        path="/*"
        element={(
          <Layout>
            <AppRoutes />
          </Layout>
        )}
      />
    </Routes>
  );
}

export default App;
