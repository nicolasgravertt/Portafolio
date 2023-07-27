import React from 'react';
import { Typography, Button, useTheme, Box } from '@mui/material';
import { Link } from 'react-scroll';
import HomeContainer from '../../../../components/Home/Common/HomeContainer/HomeContainer';
import { tokens } from '../../../../theme/Theme';

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

function Home() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <HomeContainer id="home">
      <Typography variant="h5" color={colors.secondary[400]} marginBottom={0}>
        Hola!
        <div style={{ display: 'inline-block' }}>👋</div>, soy
      </Typography>
      <Typography variant="h1" color={colors.secondary[400]}>
        Nicolas Gravertt
      </Typography>
      <Typography variant="h2" color={colors.tertiary[400]}>
        Estudio a diario y creo paginas web.
      </Typography>
      <Typography variant="h4" color={colors.tertiary[400]}>
        Full Stack Web Developer.
      </Typography>
      <Typography variant="h6" color={colors.tertiary[400]} marginBottom="30px">
        Egresado de Duoc UC.
      </Typography>
      <Box color={colors.tertiary[500]}>
        <Button component={AnimatedLink} to="contact" color="inherit" variant="outlined" size="large">
          Contacto
        </Button>
      </Box>
    </HomeContainer>
  );
}

export default Home;
