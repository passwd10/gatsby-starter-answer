import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

export default ({ data }) => {
  const title = data.site.siteMetadata.title

  return (
    <Layout title={title}>
      <h1>404</h1>
      <p>Sorry Page Not Found</p>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
