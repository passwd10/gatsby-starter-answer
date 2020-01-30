import React from 'react';
import { Link } from 'gatsby'

import './index.scss'

export const Top = ({ title }) => {
  return (
    <div className="top">
      <Link to={`/`} className="link">
        <h1 className='title'>{title}</h1>
      </Link>
    </div>
  )
}

export default Top;
