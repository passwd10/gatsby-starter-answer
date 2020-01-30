import React, { useState } from 'react'
import { graphql } from 'gatsby'
import _ from 'lodash'

import Layout from '../components/layout'
import Header from '../components/header'
import ThumbnailContainer from '../components/thumbnail-container'
import Tag from '../components/tag'
import Footer from '../components/footer'

export default ({ data }) => {
  const initialCategory = 'All'
  const [category, setCategory] = useState(initialCategory)

  const posts = data.allMarkdownRemark.edges
  const countPosts = data.allMarkdownRemark.totalCount
  const title = data.site.siteMetadata.title
  const arr = []
  const tags = _.uniq(arr.concat(...posts.map(({ node }) => node.frontmatter.tag)))

  const selectCategory = (tag) => {
    setCategory(tag)
  }

  return (
    <div className='home'>
      <Layout title={'HOME'}>
        <Header title={title} />

        <h1>Tags🔖</h1>

        <Tag
          tags={tags}
          selectCategory={selectCategory}
        />
        <ThumbnailContainer
          posts={posts}
          countPosts={countPosts}
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
      totalCount
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
          excerpt
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