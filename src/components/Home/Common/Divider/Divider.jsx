import React from 'react';
import './Divider.css';
import { useTheme } from '@mui/material';

function Divider() {
  const theme = useTheme();
  return <div style={{ backgroundColor: theme.palette.primary.main }} className="divider" />;
}

export default Divider;
