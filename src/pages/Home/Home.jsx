import React from 'react';
import {
  About, Front, Experience, Projects, Contact,
} from './Sections';

function Home() {
  return (
    <>
      <Front />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}

export default Home;
