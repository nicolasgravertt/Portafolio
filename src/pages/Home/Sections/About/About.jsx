import React from 'react';
import { useTheme, Grid, Typography, Box, useMediaQuery } from '@mui/material';
import './About.css';
import SectionContainer from '../../../../components/Home/Common/SectionContainer/SectionContainer';
import Skills from '../../../../components/Home/About/Skills';
import Avatar from '../../../../components/Home/About/Avatar';
import { tokens } from '../../../../theme/Theme';

function About() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <SectionContainer id="about" title="Sobre Mi">
      <Grid container spacing={0} alignItems="center" style={{ width: '100%' }}>
        {isMobile && (
          <Grid item xs={12} md={5} className="gridItemWrapper">
            <Box mb={6}>
              <Avatar />
            </Box>
          </Grid>
        )}
        <Grid
          item
          xs={12}
          md={7}
          className="gridItemWrapper"
          style={{ flexDirection: 'column', alignItems: 'space-around' }}
        >
          <Box mb={4}>
            <Typography color={colors.grey[400]} variant="body1">
              Hola mi nombre es Nicolás Gravertt. Busco contribuir con mi experiencia en prácticas y habilidad en el
              logro de las metas generales de la empresa tanto como las responsabilidades a mi cargo, con la oportunidad
              de continuar desarrollándome.
            </Typography>
          </Box>
          <Skills />
        </Grid>
        {!isMobile && (
          <Grid item xs={12} md={5} className="gridItemWrapper">
            <Avatar />
          </Grid>
        )}
      </Grid>
    </SectionContainer>
  );
}

export default About;
