import React from 'react'
import { Link } from 'react-router-dom'
import { Parallax } from 'react-parallax'

const Header = (props) => {
  let page = props.homepage,
    newPage = {},
    backGroundStyle

  if (page.banner) {
    newPage.title = page.banner.title
    newPage.description = page.banner.description
    newPage.image = page.banner.image.url
  }

  if (page.title) {
    newPage.image = ''
    backGroundStyle = { textAlign: 'center', backgroundColor: '#232228', height: '100vh' }
  } else {
    backGroundStyle = { textAlign: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)', height: '100vh' }
  }

  return (
    <header className="header">
      <Parallax bgImage={newPage.image} bgImageAlt={newPage.title} strength={200} style={{ height: '100%' }}>
        <div style={backGroundStyle}>
          <div className="navbar">
            <Link
              to="/"
              onClick={() => {
                props.fetchBlogArticles()
              }}>
              <img src="./logo192.png" alt="logo" className="logo" height="30" />
            </Link>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
              <span className="navicon"></span>
            </label>
            <ul className="menu">
              <li>
                <Link
                  to="/"
                  onClick={() => {
                    props.fetchBlogArticles()
                  }}>
                  Blogs
                </Link>
              </li>
            </ul>
          </div>

          <div className="header_content">
            <h1>{newPage.title ? newPage.title : 'Minimalist Blogging Theme'}</h1>
            <hr />
            <p>
              {newPage.description
                ? newPage.description
                : 'Welcome to Neuro, Responsive and Minimal Personal Wordpress Theme. Create Blog, News and Article with Maximum Flexibility.'}
            </p>
          </div>
        </div>
      </Parallax>
    </header>
  )
}

export default Header
