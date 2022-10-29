import React from 'react';
import { Typography, Button } from '@mui/material';
import { Link } from 'react-scroll';
import HomeContainer from '../../../../components/Home/Common/HomeContainer/HomeContainer';
import './Front.css';

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
  return (
    <HomeContainer id="home">
      <Typography
        color="primary"
        variant="h5"
        marginBottom={0}
      >
        Hola!
        <div
          style={{ display: 'inline-block' }}
        >
          👋
        </div>
        ,
        {' '}
        soy
      </Typography>
      <Typography
        variant="h1"
        color="primary"
      >
        Nicolas Gravertt
      </Typography>
      <Typography
        variant="h2"
        color="primary"
      >
        Estudio a diario y creo paginas web.
      </Typography>
      <Typography
        variant="h5"
        color="initial"
      >
        Junior Full Stack Web Developer.
      </Typography>
      <Typography
        variant="h6"
        color="initial"
        marginBottom="30px"
      >
        Egresado de Duoc UC.
      </Typography>
      <div>
        <Button
          component={AnimatedLink}
          spy
          smooth
          offset={0}
          duration={500}
          to="contact"
          variant="outlined"
          color="primary"
          size="large"
        >
          Contacto
        </Button>
      </div>
    </HomeContainer>
  );
}

export default Home;
