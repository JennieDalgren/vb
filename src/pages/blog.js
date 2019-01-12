import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'

const BlogPage = props => {
  console.log('props', props)
  const postList = props.data.allMarkdownRemark
  return (
    <Layout>
      <div
        className="wrapper"
        style={{ alignItems: 'flex-start', justifyContent: 'space-around' }}
      >
        <div className="sidebar">
          {postList.edges.map(({ node }, i) => (
            <Link key={i} to={node.fields.slug} className="link">
              <div>
                <p className="sidebar-date">{node.frontmatter.date}</p>
                <p className="sidebar-title">{node.frontmatter.title}</p>
              </div>
            </Link>
          ))}
        </div>
        <div
          className="section"
          style={{ textAlign: 'center', width: '75%', margin: 0 }}
        >
          <div className="post-list">
            {postList.edges.map(({ node }, i) => (
              <Link key={i} to={node.fields.slug} className="link">
                <div className="post">
                  <h3>{node.frontmatter.title}</h3>
                  <p className="post-date">{node.frontmatter.date}</p>
                  <p>{node.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BlogPage

export const listQuery = graphql`
  query ListQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          fields {
            slug
          }
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM Do YYYY")
            title
          }
        }
      }
    }
  }
`
