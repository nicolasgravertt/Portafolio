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
        <Paper sx={{ backgroundColor: colors.secondary[500] }} elevation={10} key={elem.title} className="paper">
          <Typography color={colors.tertiary[500]} align="center">
            {elem.title}
          </Typography>
        </Paper>
      ))}
    </div>
  );
}

export default Skills;
