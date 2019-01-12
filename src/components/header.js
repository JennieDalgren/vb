import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
// import Image from './image'

const activeStyle = {
  paddingBottom: 5,
  borderBottom: '1px solid black',
}

const Header = props => (
  <div className="header">
    <ul className="menu">
      <li className="logoLink">
        <Link to="/">Victoria</Link>
      </li>
      <li>
        <Link to="/about" activeStyle={activeStyle}>
          About
        </Link>
      </li>
      <li>
        <Link to="/work" activeStyle={activeStyle}>
          Collaborate
        </Link>
      </li>
      <li>
        <Link to="/contact" activeStyle={activeStyle}>
          Contact
        </Link>
      </li>
      <li>
        <Link to="/blog" activeStyle={activeStyle}>
          Blog
        </Link>
      </li>
    </ul>
  </div>
)

export default Header
