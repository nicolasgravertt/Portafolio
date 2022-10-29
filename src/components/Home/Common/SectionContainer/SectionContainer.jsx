import React from 'react';
import { Container, Typography } from '@mui/material';
import Divider from '../Divider/Divider';
import './SectionContainer.css';

function SectionContainer({
  children, title, ...rest
}) {
  return (
    <Container component="section" className="sectionContainer" maxWidth="xl" {...rest}>
      {title && (
        <div className="titleContainer">
          <Divider />
          <Typography variant="h4" color="initial" className="title">
            {title}
          </Typography>
          <Divider />
        </div>
      )}
      <div>
        {children}
      </div>
    </Container>
  );
}

export default SectionContainer;
