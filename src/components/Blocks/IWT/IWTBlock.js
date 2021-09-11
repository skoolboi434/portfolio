import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { PrimaryButton } from '../../Elements/Button/Button.style';
import Healthgram from '../../../assets/img/feature-healthgram.png';

const IWTBlock = ({ className, buttonURL, buttonText, children, text }) => {
  return (
    <div className='custom-iwt'>
      <Row className={className}>
        <Col md={6} lg={6} className='image'>
          <Image src={Healthgram} fluid />
        </Col>
        <Col md={6} lg={6} className='text'>
          {children}
          <p className='iwt-text pb-3'>{text}</p>
          <PrimaryButton className={className} buttonText={buttonText} buttonURL={buttonURL} />
        </Col>
      </Row>
    </div>
  );
};

export default IWTBlock;
