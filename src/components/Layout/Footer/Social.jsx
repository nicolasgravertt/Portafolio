import React from 'react';
import {
  LinkedIn, Instagram, GitHub, Email,
} from '@mui/icons-material';
import IconBtn from './IconBtn';
import './Social.css';

function Social({ mobile }) {
  // const classes = useStyles();
  if (mobile) {
    return (
      <div>
        <IconBtn icon={GitHub} m={1} href="https://github.com/nicolasgravertt" />
        <IconBtn icon={Instagram} m={1} href="https://www.instagram.com/" />
        <IconBtn icon={LinkedIn} m={1} href="https://www.linkedin.com/in/nicolas-gravertt-acevedo/" />
        <IconBtn icon={Email} m={1} href="mailto:nicolasgravertt@hotmail.com" />
      </div>
    );
  }
  return (
    <div className="wrapper">
      <div className="socialIcon">
        <IconBtn icon={GitHub} m={1} href="https://github.com/nicolasgravertt" />
      </div>
      <div className="socialIcon">
        <IconBtn icon={Instagram} m={1} href="https://www.instagram.com/" />
      </div>
      <div className="socialIcon">
        <IconBtn icon={LinkedIn} m={1} href="https://www.linkedin.com/in/nicolas-gravertt-acevedo/" />
      </div>
      <div className="socialIcon">
        <IconBtn icon={Email} m={1} href="mailto:nicolasgravertt@hotmail.com" />
      </div>
      <div />
    </div>
  );
}

export default Social;
