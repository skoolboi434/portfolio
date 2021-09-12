import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Navigation = () => {
  return (
    <div className='navigation'>
      <input className='navigation-checkbox' type='checkbox' name='' id='navi-toggle' />
      <label htmlFor='navi-toggle' className='navigation-button'>
        <span className='navigation-icon'>&nbsp;</span>
      </label>

      <div className='navigation-background'>&nbsp;</div>

      <nav className='navigation-nav'>
        <ul className='navigation-list'>
          <li className='navigation-item'>
            <a href='#' className='navigation-link'>
              Home
            </a>
          </li>
          <li className='navigation-item'>
            <a href='/#porfolio' className='navigation-link'>
              Portfolio
            </a>
          </li>
          <li className='navigation-item'>
            <a href='https://github.com/skoolboi434' className='navigation-link' target='_blank'>
              Github
            </a>
          </li>
          <li className='navigation-item'>
            <a href='https://www.linkedin.com/in/travis-davis-17ba88b9/' className='navigation-link' target='_blank'>
              LinkedIn
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
