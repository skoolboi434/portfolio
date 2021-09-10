import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Logo from '../../../assets/img/vector-logo.png';
import { PrimaryButton } from '../../Elements/Button/Button.style';
import { CustomWrapper } from '../../Elements/Wrapper/Wrapper.style';

const Hero = ({ className, buttonURL, buttonText }) => {
  return (
    <CustomWrapper className={`hero mb-5 ${className}`}>
      <Row>
        <Col md={6} lg={6} className='hero-titles'>
          <h3 className='hero-title'>Hey</h3>
          <h1 className='title-text-lg text-uppercase'>I am Travis</h1>
          <h4 className='title-text-sml text-uppercase'>Front End Developer</h4>
          <div className='hero-btns'>
            <PrimaryButton className={className} buttonText={buttonText} buttonURL={buttonURL} />
          </div>
        </Col>
        <Col md={6} lg={6} className='hero-image'>
          <Image src={Logo} className='img-fluid' />
        </Col>
      </Row>
    </CustomWrapper>
  );
};

export default Hero;
