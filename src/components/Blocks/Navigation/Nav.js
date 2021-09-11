import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Navigation = () => {
  return (
    <Navbar expand='lg' className='navbar-custom navbar-light navbar-expand-md'>
      <Navbar.Brand href='/'>thetravisdavis</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto'>
          <Nav.Item>
            <Nav.Link href='/'>Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='/#portfolio'>Portfolio</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='/resume'>Resume</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='https://www.linkedin.com/in/travis-davis-17ba88b9/' target='_blank'>
              Contact
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
