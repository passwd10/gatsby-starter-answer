import React from 'react'
import { Link } from 'gatsby'

import './index.scss'

export default ({ content, planTitle, showPlan }) => {

  return (showPlan &&
    (<div className='check-box'>
      <Link to='/plan'>
        <span className='plan-title'>{planTitle} 📝</span>
      </Link>
      <ul
        className='plan-list' 
        dangerouslySetInnerHTML={{ __html: content }}
        />
    </div>)
  )
}