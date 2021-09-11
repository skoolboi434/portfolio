import React from 'react';
import { Col, Image } from 'react-bootstrap';
import { PrimaryButton } from '../../Elements/Button/Button.style';

const ProjectCard = ({ className, buttonURL, buttonText, title, type, imageURL }) => {
  return (
    <Col md={6} lg={4} className='card-container'>
      <div className='custom-card'>
        <div className='card-picture'>
          <Image src={imageURL} fluid />
        </div>
        <h4 className='card-heading'>
          <div className='heading-span span-1'>{title}</div>
        </h4>
        <div className='card-details'>
          <h4 className='text-uppercase mb-5'>{type}</h4>
          <PrimaryButton className={className} buttonText={buttonText} buttonURL={buttonURL} />
        </div>
      </div>
    </Col>
  );
};

export default ProjectCard;
