import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
  let page = props.homepage,
    newPage = {},
    backGroundStyle,
    navbarImgStyle

  if (page.banner) {
    newPage.title = page.banner.title
    newPage.description = page.banner.description
    newPage.image = page.banner.image.url
  }

  if (newPage.image && !page.title) {
    backGroundStyle = {
      backgroundImage: `url(${newPage.image})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }

    navbarImgStyle = { height: '100%', backgroundColor: 'rgba(0,0,0,0.5)' }
  } else {
    backGroundStyle = {
      backgroundColor: '#232228'
    }
  }

  return (
    <header style={backGroundStyle} className="header">
      <div style={navbarImgStyle}>
        <div className="navbar">
          <img src="./logo192.png" alt="logo" className="logo" height="30" />
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
    </header>
  )
}

export default Header
