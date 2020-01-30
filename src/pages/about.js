import React from 'react';
import { graphql } from 'gatsby'
import Layout from '../components/layout';

export default ({ data }) => {
  const title = data.site.siteMetadata.title

  return (
    <Layout title={title}>
        <h1>About CSS Modules</h1>
        <p>CSS Modules are cool</p>
    </Layout>
  )
}

export const query = graphql`
  query {
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