import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import './index.scss'

export default () => {
  const regExUl = /<ul>|<\/ul>/g
  const regExDel = /(<li><del>)(.*?)(<\/del><\/li>)/g

  // content.map(v => v.node.html
  //   .split(planTitle)
  //   .slice(1)[0]
  // .split(regExUl)[1]
  // .replace(regExLink, '<li><a href="' + v.node.fields.slug + '">')
  // .replace(regExLinkBack, '</a></li>')
  // .replace(regExDel, '')
  // )
  // .join('')

  return (
    <StaticQuery
      query={planQuery}
      render={data => {
        const plan = data.markdownRemark.html
          .split(regExUl)[1]
          .replace(regExDel, '')

        return (
          <ul
            className='plan-list'
            dangerouslySetInnerHTML={{ __html: plan }}
          />
        )
      }}
    >
    </StaticQuery>
  )
}
export const planQuery = graphql`
  query {
    markdownRemark(frontmatter: {layout: {eq: "plan"}}) {
      html
    }
  }
`