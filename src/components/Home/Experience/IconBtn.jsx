import React from 'react';
import { Box, Link } from '@mui/material';

import './IconBtn.css';

function IconBtn({
  icon: Icon, href,
}) {
  return (
    <Box
      display="inline"
    >
      <Link target="_blank" href={href}>
        <Icon />
      </Link>
    </Box>
  );
}

export default IconBtn;
