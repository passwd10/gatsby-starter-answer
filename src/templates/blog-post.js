import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Bio from '../components/bio'
import DisqusTemplate from '../components/DisqusTemplate'

import '../styles/code.scss'

export default ({ data, pageContext }) => {
  const post = data.markdownRemark
  const metaData = data.site.siteMetadata

  const { siteUrl, title } = metaData

  return (
    <div>
      <Layout title={title}>
        <div>
          <h1>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
        <p>---</p>
        <Bio />
        <DisqusTemplate
          siteUrl={siteUrl}
          title={post.frontmatter.title}
          identifier={post.id}
          slug={pageContext.slug}
        />
      </Layout>
    </div>
  )
}
export const query = graphql`
  query  BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
      id
    }
    site {
      siteMetadata {
        title
        siteUrl
        comment {
          utterances
          disqusShortName
        }
      }
    }
  }
`