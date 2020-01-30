import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Bio from '../components/bio'
import DisqusTemplate from '../components/DisqusTemplate'
import PostContent from '../components/post-content'
import PostTitle from '../components/post-title'

export default ({ data, pageContext }) => {
  const post = data.markdownRemark
  const metaData = data.site.siteMetadata

  const { siteUrl, title } = metaData

  return (
    <Layout title={title}>
      <PostTitle title={post.frontmatter.title}/>
      <PostContent post={post.html} />
      <p>-----------------</p>
      <Bio />
      <DisqusTemplate
        siteUrl={siteUrl}
        title={post.frontmatter.title}
        identifier={post.id}
        slug={pageContext.slug}
      />
    </Layout>
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