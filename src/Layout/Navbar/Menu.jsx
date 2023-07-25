import React, { useContext, useState } from 'react';
import { Tab, Tabs, Box, IconButton, useTheme } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Link } from 'react-scroll';
import { ColorModeContext, tokens } from '../../theme/Theme';

const smoothScrollProps = {
  spy: true,
  smooth: true,
  offset: -70,
  duration: 500,
};

const AnimatedLink = React.forwardRef((props, ref) => (
  <div ref={ref}>
    <Link {...smoothScrollProps} {...props} />
  </div>
));

function Menu() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
      }}
    >
      <Box display="flex">
        <IconButton style={{ color: colors.grey[400] }} onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
        <Tabs
          style={{
            color: colors.grey[400],
          }}
          sx={{ marginRight: '20px' }}
          value={value}
          onChange={handleChange}
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab component={AnimatedLink} custom={0} to="about" label="Sobre Mi" id="0" />
          <Tab component={AnimatedLink} custom={1} to="experience" label="Experiencia" id="1" />
          <Tab component={AnimatedLink} custom={2} to="projects" label="Proyectos" id="2" />
          <Tab component={AnimatedLink} custom={3} to="contact" label="Contacto" id="3" />
        </Tabs>
      </Box>
    </Box>
  );
}

export default Menu;
