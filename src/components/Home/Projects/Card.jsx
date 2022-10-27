import React from 'react';
import {
  Card as MuiCard,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

import './Card.css';

function Card({
  title, backgroundImage, frontImage, overview, technologies,
}) {
  return (
    <MuiCard
      className="cardContainer"
    >
      <div>
        <CardMedia
          className="cardMedia"
          image={backgroundImage}
          title={title}
        >
          <img
            className="frontImage"
            src={frontImage}
            alt={title}
          />
        </CardMedia>
        <CardContent>
          <Typography variant="h5" className="cardTitle">
            {title}
          </Typography>
          <Typography
            variant="body2"
            className="overview"
            style={{ flexGrow: 2 }}
          >
            {overview}
          </Typography>
          <Typography
            variant="body2"
            className="technologies"
          >
            {technologies.join(' · ')}
          </Typography>
        </CardContent>
      </div>
    </MuiCard>
  );
}

export default Card;
