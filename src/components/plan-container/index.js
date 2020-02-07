import React from 'react'
import { Link } from 'gatsby'

import PlanItem from '../plan-item'

import './index.scss'

export default ({ planTitle, showPlan }) => {
  return (
    showPlan && (
      <div className="check-box">
        <Link to="/plan">
          <span className="plan-title">{planTitle} 📝</span>
        </Link>
        <PlanItem
        // planTitle={planTitle}
        />
      </div>
    )
  )
}
