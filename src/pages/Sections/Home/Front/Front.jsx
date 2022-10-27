import React from 'react';
import { Typography, Button } from '@mui/material';
import HomeContainer from '../../../../components/Home/Common/HomeContainer/HomeContainer';
import './Front.css';

function Home() {
  return (
    <HomeContainer id="home">
      <div>
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
            variant="outlined"
            color="primary"
            size="large"
          >
            Pongamonos en contacto
          </Button>
        </div>
      </div>
    </HomeContainer>
  );
}

export default Home;
