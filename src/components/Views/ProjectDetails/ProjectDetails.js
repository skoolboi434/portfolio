import React, { useEffect, useState } from 'react';
import Wrapper from '../../Elements/Wrapper/Wrapper';
import { PrimaryButton } from '../../Elements/Button/Button.style';
import { Image } from 'react-bootstrap';
import Superior from '../../../assets/img/feature-superior.png';
import { CustomIWTBlock } from '../../Blocks/IWT/IWTBlock.style';
import projects from '../../../data/ProjectData';

const ProjectDetails = ({ match }) => {
  return (
    <Wrapper>
      <PrimaryButton buttonURL='/#portfolio' buttonText='Back To Portfolio' />
      <div className='project-details'>
        <h1 className='project-title pt-3'>Project Title</h1>
        <p className='project-type'>
          <small>Project Type: </small>
        </p>
        <div className='feature-image mb-5'>
          <Image src={Superior} fluid />
        </div>
      </div>
      <CustomIWTBlock reverse text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' buttonText='View Website' />
    </Wrapper>
  );
};

export default ProjectDetails;
