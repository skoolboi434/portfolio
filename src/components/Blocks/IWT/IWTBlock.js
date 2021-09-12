import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { PrimaryButton } from '../../Elements/Button/Button.style';

const IWTBlock = ({ className, buttonURL, buttonText, children, text, sideImage }) => {
  return (
    <div className='custom-iwt'>
      <Row className={className}>
        <Col md={6} lg={6} className='image'>
          <Image src={sideImage} fluid />
        </Col>
        <Col md={6} lg={6} className='text'>
          {children}
          <p className='iwt-text pb-3'>{text}</p>
          <PrimaryButton className={className} buttonText={buttonText} buttonURL={buttonURL} target='_blank' />
        </Col>
      </Row>
    </div>
  );
};

export default IWTBlock;
