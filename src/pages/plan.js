import React from 'react';
import { graphql } from 'gatsby'
import Layout from '../components/layout';

import '../styles/plan.scss'

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
    <div className='plan'>
      <Layout title={title}>
        <h1 className='plan-title'>{planTitle}</h1>
        <h2 className='todo'>Todo List</h2>
        <ul dangerouslySetInnerHTML={{ __html: todoList }} />
        <h2 className='completed'>Completed List</h2>
        <ul dangerouslySetInnerHTML={{ __html: completedList }} />
      </Layout>
    </div>
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