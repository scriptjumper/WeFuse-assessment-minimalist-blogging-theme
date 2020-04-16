import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
      <div className="navbar">
        <img src="./logo192.png" alt="logo" className="logo" height="30" />
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          <li>
            <Link to="/">Blogs</Link>
          </li>
        </ul>
      </div>

      <div className="header_content">
        <h1>This is a test Assessment</h1>
        <hr />
        <p>Please make sure that you implement everything</p>
      </div>
    </header>
  )
}

export default Header
