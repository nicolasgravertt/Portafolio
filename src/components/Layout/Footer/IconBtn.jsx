import React from 'react';
import { Box, Link, useTheme } from '@mui/material';

import { tokens } from '../../../theme/Theme';

function IconBtn({ icon: Icon, href }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box>
      <Link target="_blank" href={href}>
        <Icon sx={{ color: colors.secondary[400] }} />
      </Link>
    </Box>
  );
}

export default IconBtn;
