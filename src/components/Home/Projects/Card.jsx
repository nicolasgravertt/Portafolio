import React from 'react';
import { Card as MuiCard, CardContent, CardMedia, Typography, useTheme } from '@mui/material';

import './Card.css';
import { tokens } from '../../../theme/Theme';

function Card({ title, backgroundImage, frontImage, overview, technologies }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MuiCard sx={{ backgroundColor: colors.primary[400] }} className="cardContainer">
      <div>
        <CardMedia className="cardMedia" image={backgroundImage} title={title}>
          <img className="frontImage" src={frontImage} alt={title} />
        </CardMedia>
        <CardContent>
          <Typography color={colors.tertiary[400]} variant="h5" className="cardTitle">
            {title}
          </Typography>
          <Typography color={colors.tertiary[400]} variant="h6" className="overview" style={{ flexGrow: 2 }}>
            {overview}
          </Typography>
          <Typography color={colors.secondary[400]} variant="h7" className="technologies">
            {technologies.join(' · ')}
          </Typography>
        </CardContent>
      </div>
    </MuiCard>
  );
}

export default Card;
