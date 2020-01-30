import React from 'react';
import { Link } from 'gatsby'

import './index.scss'

export const Top = ({ title }) => {
  return (
    <div className="top">
      <Link to={`/`} className="link">
        <span style={{color:'white'}}>{title}</span>
      </Link>
    </div>
  )
}

export default Top;
