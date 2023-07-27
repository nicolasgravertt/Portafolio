import React from 'react';
import './Divider.css';
import { useTheme } from '@mui/material';
import { tokens } from '../../../../theme/Theme';

function Divider() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return <div style={{ backgroundColor: colors.tertiary[400] }} className="divider" />;
}

export default Divider;
