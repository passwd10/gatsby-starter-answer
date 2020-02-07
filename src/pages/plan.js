import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export default ({ data }) => {
  const html = data.markdownRemark.html
  const { title } = data.site.siteMetadata

  return (
    <Layout title={title}>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export const planQuery = graphql`
  query PlanQuery {
    markdownRemark(frontmatter: { layout: { eq: "plan" } }) {
      html
    }
    site {
      siteMetadata {
        planTitle
        title
      }
    }
  }
`
