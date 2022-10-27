import React from 'react';
import { Container } from '@mui/material';
import './HomeContainer.css';

function HomeContainer({ children }) {
  return (
    <Container className="homeContainer" maxWidth="xl">
      {children}
    </Container>
  );
}

export default HomeContainer;
