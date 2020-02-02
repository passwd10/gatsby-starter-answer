import React, { useState } from 'react'
import { graphql } from 'gatsby'
import _ from 'lodash'

import Layout from '../components/layout'
import Header from '../components/header'
import ThumbnailContainer from '../components/thumbnail-container'
import Category from '../components/category'
import PlanContainer from '../components/plan-container'

export default ({ data }) => {
  const initialCategory = 'All'
  const [category, setCategory] = useState(initialCategory)

  const posts = data.allMarkdownRemark.edges
  const { title, planTitle, showPlan } = data.site.siteMetadata
  const arr = []
  const tags = _.uniq(arr.concat(...posts.map(({ node }) => node.frontmatter.tag)))

  const regExUl = /<ul>|<\/ul>/g
  const regExDel = /(<li><del>)(.*?)(<\/del><\/li>)/g

  const content = posts
    .filter(({ node }) => node.frontmatter.tag)
    .filter(({ node }) => !node.frontmatter.tag.indexOf('TIL'))
    .map(v => v.node.html
      .split(planTitle)
      .slice(1)[0]
      .split(regExUl)[1]
      .replace(regExDel, ''))
    .join('')

  const selectCategory = (tag) => {
    setCategory(tag)
  }

  return (
    <Layout>
      <Header title={title} />
      <PlanContainer
        content={content}
        planTitle={planTitle}
        showPlan={showPlan}
      />
      <Category
        tags={tags}
        selectCategory={selectCategory}
      />
      <ThumbnailContainer
        posts={posts}
        category={category}
      />
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    site {
      siteMetadata {
        title
        author
        introduction
        planTitle
        showPlan
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          excerpt(pruneLength: 200)
          html
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tag
          }
          fields {
            slug
          }
        }
      }
    }
  }
`