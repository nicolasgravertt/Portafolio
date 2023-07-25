import React from 'react';
import { Container, Typography, useTheme } from '@mui/material';
import Divider from '../Divider/Divider';
import './SectionContainer.css';
import { tokens } from '../../../../theme/Theme';

function SectionContainer({ children, title, ...rest }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Container component="section" className="sectionContainer" maxWidth="xl" {...rest}>
      {title && (
        <div className="titleContainer">
          <Divider />
          <Typography variant="h4" color={colors.grey[400]} className="title">
            {title}
          </Typography>
          <Divider />
        </div>
      )}
      <div>{children}</div>
    </Container>
  );
}

export default SectionContainer;
