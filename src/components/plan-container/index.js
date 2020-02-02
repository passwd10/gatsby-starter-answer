import React from 'react'
import { Link } from 'gatsby'

import './index.scss'

export default ({ content, planTitle, showPlan }) => {

  return (showPlan &&
    (<div className='check-box'>
      <Link to='/plan'>
        <h3 className='plan-title'>{planTitle}</h3>
      </Link>
      <ul dangerouslySetInnerHTML={{ __html: content }} />
    </div>)
  )
}