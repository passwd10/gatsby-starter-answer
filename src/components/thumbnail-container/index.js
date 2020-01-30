import React from 'react';
import { Link } from 'gatsby'

import './index.scss'

export const ThumbnailContainer = ({ countPosts, posts, category }) => {

  return (
    <div>
      <h4 className='countPost'>{countPosts} Posts</h4>
      {posts
        .filter(({ node }) =>
          category === 'All' ? node.frontmatter.tag
            : node.frontmatter.tag.indexOf(category) !== -1)
        .map(({ node }) => (
          <div key={node.id} className='thumbnail'>
            <div>
              <Link to={node.fields.slug}>
                <span className='title'>
                  {node.frontmatter.title}{" "}
                </span>
              </Link>
              <span className='date'>
                📆 {node.frontmatter.date}
              </span>
            </div>
            <p className='excerpt'>{node.excerpt}</p>
          </div>
        ))}
    </div>
  )
}

export default ThumbnailContainer;