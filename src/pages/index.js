import React from 'react'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <div
      className="wrapper"
      style={{
        flexDirection: 'column',
        position: 'fixed',
        alignItems: 'center',
        backgroundImage: `url("/assets/img_8339.jpg")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
      }}
    >
      <div className="index-section">
        <h1>Bienveindo!</h1>
        <h3>I'm Victoria. </h3>
        <h4>Storyteller, food lover and culture intermediary/mediator</h4>
      </div>
    </div>
  </Layout>
)

export default IndexPage
