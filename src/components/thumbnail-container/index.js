import React from 'react'
import { Link } from 'gatsby'

import './index.scss'

export const ThumbnailContainer = ({ posts, category }) => {
  posts = posts
    .filter(({ node }) => node.frontmatter.tag)
    .filter(({ node }) =>
      category === 'All'
        ? node.frontmatter.tag
        : node.frontmatter.tag.indexOf(category) !== -1
    )

  return (
    <div className="container">
      <h4 className="countPost">{posts.length} Posts</h4>
      {posts.map(({ node }) => (
        <div key={node.id} className="thumbnail">
          <Link to={node.fields.slug}>
            <span className="title">{node.frontmatter.title} </span>
          </Link>
          <p className="excerpt">{node.excerpt}</p>
          <span className="postDate">{node.frontmatter.date}</span>
          <span className="postTag">
            {node.frontmatter.tag.map(v => ' #' + v)}
          </span>
        </div>
      ))}
    </div>
  )
}
export default ThumbnailContainer
