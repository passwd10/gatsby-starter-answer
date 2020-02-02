import React from 'react';
import { graphql } from 'gatsby'
import Layout from '../components/layout';

export default ({ data }) => {
  const { title, planTitle, showPlan } = data.site.siteMetadata

  const posts = data.allMarkdownRemark.edges

  const regExUl = /<ul>|<\/ul>/g
  const regExDel = /(<li><del>)(.*?)(<\/del><\/li>)/g

  const planList = posts
    .filter(({ node }) => node.frontmatter.tag)
    .filter(({ node }) => !node.frontmatter.tag.indexOf('TIL'))

  const todoList = planList
    .map(v => v.node.html
      .split(planTitle)
      .slice(1)[0]
      .split(regExUl)[1]
      .replace(regExDel, ''))
    .join('')

  const completedList = planList
    .map(v => v.node.html
      .split(planTitle)
      .slice(1)[0]
      .split(regExUl)[1]
      .match(regExDel))
    .join('').split(',').join('')

  return (
    <Layout title={title}>
      <h2>{planTitle}</h2>
      <div dangerouslySetInnerHTML={{ __html: todoList }} />
      <h2>Completed List</h2>
      <div dangerouslySetInnerHTML={{ __html: completedList }} />
    </Layout>
  )
}

export const planQuery = graphql`
  query PlanQuery {
    site {
      siteMetadata {
        title
        planTitle
        showPlan
      }
    }
    allMarkdownRemark {
      edges {
        node {
          id
          html
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tag
          }
        }
      }
    }
  }
`