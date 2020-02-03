import React from 'react'
import { Link } from 'gatsby'

import './index.scss'

export const PostNavigator = ({ pageContext }) => {
  const { previous, next } = pageContext

  const prevText
    = previous && (
      previous.frontmatter.title.length > 15
        ? previous.frontmatter.title.substring(0, 16) + '...'
        : previous.frontmatter.title)

  const nextText
    = next && (
      next.frontmatter.title.length > 15
        ? next.frontmatter.title.substring(0, 16) + '...'
        : next.frontmatter.title)

  return (
    <div className="navigator">
      <span>
        {previous && (
          <Link to={previous.fields.slug} rel="prev">
            {`<`} {prevText}
          </Link>
        )}
      </span>
      <span>
        {next && (
          <Link to={next.fields.slug} rel="next">
            {nextText} {`>`}
          </Link>
        )}
      </span>
    </div>
  )
}

export default PostNavigator