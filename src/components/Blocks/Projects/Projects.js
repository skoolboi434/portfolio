import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import CustomCard from '../../Blocks/Card/ProjectCard';

const Projects = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('data/Projects.json')
      .then(res => res.json())
      .then(json => {
        console.log(json);
        setData(json);
      });
  }, []);

  return (
    <Row>
      {data.map(post => {
        return <CustomCard key={post.id} title={post.title} type={post.type} imageURL={post.mainImage} buttonText='View Project' buttonURL={`/projects/:${post.id}`} />;
      })}
    </Row>
  );
};

export default Projects;
