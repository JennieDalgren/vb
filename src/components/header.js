import React from 'react'
import { Link } from 'gatsby'

const activeStyle = {
  paddingBottom: 10,
  borderBottom: '2px solid black',
}

const Header = () => (
  <div className="header">
    <div className="menuWrapper">
      <ul className="menu">
        <li>
          <Link to="/" activeStyle={activeStyle}>
            About
          </Link>
        </li>
        <li>
          <Link to="/work" activeStyle={activeStyle}>
            Work
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
  </div>
)

export default Header
