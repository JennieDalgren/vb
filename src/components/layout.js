import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
  <>
    <Helmet
      title={'Victoria Bätz'}
      meta={[
        {
          name: 'copyright',
          content: 'Victoria Bätz',
        },
        {
          name: 'description',
          content: 'Foodie with a love for ', // UPDATE THIS FOR SEO
        },
        {
          name: 'keywords',
          content:
            'foodie, food tour, food blog, influencer, spain, travel, catalunya',
        },
      ]}
    >
      <html lang="en" />
      <link
        href="https://fonts.googleapis.com/css?family=Crimson+Text|Poppins"
        rel="stylesheet"
      />
    </Helmet>

    <div
      style={
        {
          // margin: '0 auto',
          // maxWidth: 960,
          // padding: '0px 1.0875rem 1.45rem',
          // paddingTop: 0,
        }
      }
    >
      <div className="content">
        <Header />
        {children}
      </div>
    </div>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
