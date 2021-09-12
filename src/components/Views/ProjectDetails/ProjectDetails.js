import React, { useEffect, useState } from 'react';
import Wrapper from '../../Elements/Wrapper/Wrapper';
import { PrimaryButton } from '../../Elements/Button/Button.style';
import { Image } from 'react-bootstrap';
import Superior from '../../../assets/img/feature-superior.png';
import { CustomIWTBlock } from '../../Blocks/IWT/IWTBlock.style';
import projects from '../../../data/ProjectData';

const ProjectDetails = ({ match }) => {
  console.log(projects);

  const project = projects.find(p => p.id === match.params.id);

  console.log(project);

  return (
    <Wrapper>
      <PrimaryButton buttonURL='/#portfolio' buttonText='Back To Portfolio' />
      <div className='project-details'>
        <h1 className='project-title pt-3'>{project.title}</h1>
        <p className='project-type'>
          <small>Project Type: {project.type}</small>
        </p>
        <div className='feature-image mb-5'>
          <Image src={`.${project.mainImage}`} fluid />
        </div>
      </div>
      <CustomIWTBlock reverse text={project.body} sideImage={`.${project.secondaryImage}`} buttonText='View Website' buttonURL={project.url} />
    </Wrapper>
  );
};

export default ProjectDetails;
