import React from 'react'

import Layout from '../components/layout'

const ContactPage = () => (
  <Layout>
    <div
      className="wrapper"
      style={{
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-around',

        backgroundImage: `url('https://images.unsplash.com/photo-1503066375319-00fef06b159e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1932&q=80')`,
      }}
    >
      <div
        className="section contact-section"
        style={{
          width: 500,
          maxWidth: '100%',
          minHeight: '260px',
        }}
      >
        <h1 style={{ color: '#fff' }}>Let's talk</h1>
        <p>
          To discuss food, wine or possible ways to collaborate send me an email
          to{' '}
          <a target="_blank" href="mailto:victoria@corazonyzanahoria.com">
            victoria@corazonyzanahoria.com
          </a>{' '}
          or call me at{' '}
          <a target="_blank" href="tel:0034693101952">
            +34 693 101 952.
          </a>{' '}
          And check out my Instagram accounts{' '}
          <a target="_blank" href="https://instagram.com/corazonyzanahoria">
            @corazonyzanahoria
          </a>{' '}
          and{' '}
          <a target="_blank" href="https://instagram.com/vicbat">
            @vicbat
          </a>{' '}
          while you’re at it. ;)
        </p>
      </div>
    </div>
  </Layout>
)

export default ContactPage
