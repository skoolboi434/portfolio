import React from 'react';
import { Helmet } from 'react-helmet';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWordpress } from '@fortawesome/free-brands-svg-icons';
import { faCode, faDatabase } from '@fortawesome/free-solid-svg-icons';
import { CustomHero } from '../../Blocks/Hero/Hero.style';
import { PrimaryButton } from '../../Elements/Button/Button.style';
import Wrapper from '../../Elements/Wrapper/Wrapper';

import Projects from '../../Blocks/Projects/Projects';

const Home = ({ className }) => {
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Travis Davis - Portfolio</title>
        <link rel='canonical' href='https://thetravisdavis.com' />
      </Helmet>
      <CustomHero btnActive buttonText='Hire Me' buttonURL='https://www.linkedin.com/in/travis-davis-17ba88b9/' />
      <Wrapper className={`about-section ${className}`}>
        <Row>
          <Col md={12} lg={{ span: 6, offset: 6 }}>
            <h2 className='about-title text-uppercase pt-5'>
              <span>Let me</span>
              <span>introduce</span>
              <span>myself</span>
            </h2>
            <p className='para w-50 mb-4'>I'm a Web Developer with 5 years of development experience. I specialize in Wordpress &amp; Frontend Development.</p>
            <PrimaryButton buttonText='View LinkedIn' buttonURL='https://www.linkedin.com/in/travis-davis-17ba88b9/' target='_blank' />
          </Col>
        </Row>
      </Wrapper>

      <Wrapper className={`skills-section ${className}`}>
        <Row>
          <Col lg={12} className='text-center'>
            <h1 className='title-text text-uppercase'>Skills</h1>
          </Col>
        </Row>
        <Row className='skills-container'>
          <Col md={12} lg={4}>
            <div className='skill text-center'>
              <FontAwesomeIcon icon={faWordpress} />
              <h5 className='skill-title text-uppercase'>Wp Development</h5>
              <p className='skill-text'>Custom WordPress Theme Development</p>
            </div>
          </Col>
          <Col md={12} lg={4}>
            <div className='skill text-center'>
              <FontAwesomeIcon icon={faCode} />
              <h5 className='skill-title text-uppercase'>Front-End Development</h5>
              <p className='skill-text'>JS Front End Development</p>
            </div>
          </Col>
          <Col md={12} lg={4}>
            <div className='skill text-center'>
              <FontAwesomeIcon icon={faDatabase} />
              <h5 className='skill-title text-uppercase'>Back-End Development</h5>
              <p className='skill-text'>PHP &amp; MySQL Development</p>
            </div>
          </Col>
        </Row>
      </Wrapper>

      <Wrapper className='portfolio-section mb-5'>
        <a id='portfolio'></a>
        <Row className='mb-4'>
          <Col lg={12} className='text-center'>
            <h1 className='title-text text-uppercase'>Featured Projects</h1>
          </Col>
        </Row>
        <Projects />
      </Wrapper>
    </React.Fragment>
  );
};

export default Home;
