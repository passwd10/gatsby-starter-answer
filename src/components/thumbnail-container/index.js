import React from 'react';
import { Link } from 'gatsby'

import './index.scss'

export const ThumbnailContainer = ({ countPosts, posts, category }) => {

  return (
    <div>
      <h4>{countPosts} Posts</h4>
      {posts
        .filter(({ node }) =>
          category === 'All' ? node.frontmatter.tag
          : node.frontmatter.tag.indexOf(category) !== -1)
        .map(({ node }) => (
          <div key={node.id}>
            <Link to={node.fields.slug}>
              <div>
                <span className='title'>
                  {node.frontmatter.title}{" "}
                </span>
                <span className='date'>
                  📆 {node.frontmatter.date}
                </span>
              </div>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
    </div>
  )
}

export default ThumbnailContainer;