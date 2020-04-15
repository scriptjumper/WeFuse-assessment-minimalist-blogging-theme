import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Blogs</Link>
        </li>
        <li>
          <Link to="/article">Article</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
