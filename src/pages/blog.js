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
        style={{
          backgroundImage: 'none',
        }}
      >
        <div className="section" style={{ textAlign: 'center' }}>
          <h1>Here is my bloggy blog blog</h1>
          <div className="post-list">
            {postList.edges.map(({ node }, i) => (
              <Link key={i} to={node.fields.slug} className="link">
                <div className="post">
                  <h4>{node.frontmatter.title}</h4>
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
