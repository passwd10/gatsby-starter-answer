import React from 'react';
import { graphql } from 'gatsby'
import Container from '../components/container';
import Layout from '../components/layout';

export default ({ data }) => {
  const title = data.site.siteMetadata.title

  return (
    <Layout title={title}>
      <Container>
        <h1>About CSS Modules</h1>
        <p>CSS Modules are cool</p>
      </Container>
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