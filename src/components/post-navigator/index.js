import React from 'react'
import { Link } from 'gatsby'

import './index.scss'

export const PostNavigator = ({ pageContext }) => {
  const { previous, next } = pageContext

  return (
    <div className="navigator">
      <span className="prev">
        {previous && (
          <Link to={previous.fields.slug} rel="prev">
            {`<`} {previous.frontmatter.title}
          </Link>
        )}
      </span>
      <span className="next">
        {next && (
          <Link to={next.fields.slug} rel="next">
            {next.frontmatter.title} {`>`}
          </Link>
        )}
      </span>
    </div>
  )
}

export default PostNavigator
