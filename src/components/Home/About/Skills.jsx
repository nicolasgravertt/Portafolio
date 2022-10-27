import React from 'react';
import {
  Typography, Paper,
} from '@mui/material';
import { skillsList } from '../../../data';
import './Skills.css';

function Skills() {
  return (
    <div className="skillsContainer">
      {skillsList.map((elem) => (
        <Paper elevation={10} key={elem.title} className="paper">
          <Typography align="center">{elem.title}</Typography>
        </Paper>
      ))}
    </div>
  );
}

export default Skills;
