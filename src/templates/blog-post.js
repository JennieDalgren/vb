import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

function BlogPost(props) {
  const post = props.data.markdownRemark
  const { title } = post.frontmatter
  return (
    <Layout>
      <div
        className="wrapper"
        style={{ alignItems: 'flex-start', justifyContent: 'space-around' }}
      >
        <div className="section" style={{ width: '75%', margin: 0 }}>
          <h1>{title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </div>
    </Layout>
  )
}

export default BlogPost
export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
      }
    }
  }
`
