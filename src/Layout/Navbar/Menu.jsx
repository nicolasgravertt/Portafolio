import React, { useState } from 'react';
import {
  Tab, Tabs, Box,
} from '@mui/material';
import { Link } from 'react-scroll';

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
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{
      height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-end',
    }}
    >
      <Tabs
        sx={{ marginRight: '20px' }}
        value={value}
        onChange={handleChange}
        textColor="inherit"
        variant="fullWidth"
        aria-label="full width tabs example"
      >
        <Tab
          component={AnimatedLink}
          custom={0}
          to="about"
          label="Sobre Mi"
          id="0"
        />
        <Tab
          component={AnimatedLink}
          custom={1}
          to="experience"
          label="Experiencia"
          id="1"
        />
        <Tab
          component={AnimatedLink}
          custom={2}
          to="projects"
          label="Proyectos"
          id="2"
        />
        <Tab
          component={AnimatedLink}
          custom={3}
          to="contact"
          label="Contacto"
          id="3"
        />
      </Tabs>
    </Box>
  );
}

export default Menu;
