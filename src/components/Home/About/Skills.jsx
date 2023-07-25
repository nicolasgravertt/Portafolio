import React from 'react';
import { Typography, Paper, useTheme } from '@mui/material';
import { skillsList } from '../../../data';
import './Skills.css';
import { tokens } from '../../../theme/Theme';

function Skills() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <div className="skillsContainer">
      {skillsList.map((elem) => (
        <Paper elevation={10} key={elem.title} className="paper">
          <Typography color={colors.grey[400]} align="center">
            {elem.title}
          </Typography>
        </Paper>
      ))}
    </div>
  );
}

export default Skills;
