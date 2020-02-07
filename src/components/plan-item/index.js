import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import './index.scss'

export default () => {
  const regExUl = /<ul>|<\/ul>/g
  const regExDel = /(<li><del>)(.*?)(<\/del><\/li>)/g

  return (
    <StaticQuery
      query={planQuery}
      render={data => {
        const plan = data.markdownRemark.html
          .split(regExUl)[1]
          .replace(regExDel, '')

        return (
          <ul
            className="plan-list"
            dangerouslySetInnerHTML={{ __html: plan }}
          />
        )
      }}
    ></StaticQuery>
  )
}
export const planQuery = graphql`
  query {
    markdownRemark(frontmatter: { layout: { eq: "plan" } }) {
      html
    }
  }
`
