import React from 'react'

import Layout from '../components/layout'

const WorkPage = () => (
  <Layout>
    <div
      className="wrapper"
      style={{
        position: 'fixed',
        opacity: '0.5',
        backgroundImage: `url('https://images.unsplash.com/photo-1519671282429-b44660ead0a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80')`,
      }}
    >
      <div className="section" style={{ textAlign: 'center' }}>
        <h1>This is what I been working with</h1>
      </div>
    </div>
  </Layout>
)

export default WorkPage
