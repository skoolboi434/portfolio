import React from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';

const Home = () => (
  <React.Fragment>
    <Helmet>
      <meta charSet='utf-8' />
      <title>Travis Davis - Portfolio</title>
      <link rel='canonical' href='https://thetravisdavis.com' />
    </Helmet>
    <Container>
      <h1>Welcome!</h1>
    </Container>
  </React.Fragment>
);

export default Home;
