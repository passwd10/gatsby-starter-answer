import React from 'react';
import { Link } from 'gatsby';

import Bio from '../bio';

import './index.scss';

export const Header = ({ title }) => {
  return (
    <div className='header'>
      <h1 className='blog-title'>
        <Link to='/' className='title-link'>{title}</Link>
      </h1>
      <Bio/>
    </div>
  )
}

export default Header;