import React, { useState } from 'react'
import { graphql } from 'gatsby'
import _ from 'lodash'

import Layout from '../components/layout'
import Header from '../components/header'
import ThumbnailContainer from '../components/thumbnail-container'
import Category from '../components/category'
import Footer from '../components/footer'

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
    <div className='home'>
      <Layout>
        <Header title={title} />
        <Category
          tags={tags}
          selectCategory={selectCategory}
        />
        <ThumbnailContainer
          posts={posts}
          category={category}
        />
      </Layout>
      <Footer />
    </div>
  )
}

export const query = graphql`
  query MyQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "YYYY-MM-DD")
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