import React, { useState } from 'react'
import { graphql } from 'gatsby'
import _ from 'lodash'

import Layout from '../components/layout'
import Header from '../components/header'
import ThumbnailContainer from '../components/thumbnail-container'
import Category from '../components/category'
import CheckContainer from '../components/check-container'

export default ({ data }) => {
  const initialCategory = 'All'
  const [category, setCategory] = useState(initialCategory)

  const posts = data.allMarkdownRemark.edges
  const title = data.site.siteMetadata.title
  const arr = []
  const tags = _.uniq(arr.concat(...posts.map(({ node }) => node.frontmatter.tag)))

  const selectCategory = (tag) => {
    setCategory(tag)
  }

  return (
    <>
      <Layout>
        <Header title={title} />
        {/* <CheckContainer /> */}
        <ThumbnailContainer
          posts={posts}
          category={category}
        />
      </Layout>
      <Category
        tags={tags}
        selectCategory={selectCategory}
      />
    </>
  )
}

export const query = graphql`
  query MyQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tag
          }
          fields {
            slug
          }
          excerpt(pruneLength: 200)
        }
      }
    }
    site {
      siteMetadata {
        profile
        title
        author
        introduction
      }
    }
  }
`