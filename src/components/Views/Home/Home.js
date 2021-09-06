import React from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';
import Hero from '../../Blocks/Hero/Hero';

const Home = () => (
  <React.Fragment>
    <Helmet>
      <meta charSet='utf-8' />
      <title>Travis Davis - Portfolio</title>
      <link rel='canonical' href='https://thetravisdavis.com' />
    </Helmet>
    <Container>
      <Hero />
    </Container>
  </React.Fragment>
);

export default Home;
