import React from 'react';
import { CustomWrapper } from '../../Elements/Wrapper/Wrapper.style';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <CustomWrapper className='footer'>
      <Row>
        <Col lg={6}>
          <p className='footer-text'>Copyright ©2021 All rights reserved</p>
        </Col>
        <Col lg={6}>
          <div className='footer-social'>
            <a href='https://github.com/skoolboi434' class='social-link' target='_blank'>
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href='https://www.linkedin.com/in/travis-davis-17ba88b9/' class='social-link' target='_blank'>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </Col>
      </Row>
    </CustomWrapper>
  );
};

export default Footer;
