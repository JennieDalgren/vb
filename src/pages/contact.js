import React from 'react'

import Layout from '../components/layout'

const ContactPage = () => (
  <Layout>
    <div
      className="wrapper"
      style={{
        position: 'fixed',

        backgroundImage: `url('https://images.unsplash.com/photo-1503066375319-00fef06b159e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1932&q=80')`,
      }}
    >
      <div
        className="section"
        style={{
          textAlign: 'center',
          alignSelf: 'flex-start',
          marginLeft: '75px',
          minWidth: '25%',
          minHeight: '260px',
        }}
      >
        <h1 style={{ color: '#fff' }}>Let's talk</h1>
      </div>
    </div>
  </Layout>
)

export default ContactPage
