import React from 'react';
import { Box, Link } from '@mui/material';

function IconBtn({
  icon: Icon, href,
}) {
  return (
    <Box>
      <Link target="_blank" href={href}>
        <Icon />
      </Link>
    </Box>
  );
}

export default IconBtn;
