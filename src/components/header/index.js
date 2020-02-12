import React from 'react'
import { Link } from 'gatsby'

import Bio from '../bio'

import './index.scss'

export const Header = ({ title }) => {
  return (
    <div className="header">
        <Link to="/about" className="title-link">
        <span className="blog-title">
          {title}
          </span>
        </Link>
      <Bio />
    </div>
  )
}

export default Header
