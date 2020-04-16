import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="contacting">
        <hr />
        <div className="contact_details">
          <span>
            Call Us: <em>(1)118 234 768</em>
          </span>{' '}
          -
          <span>
            {' '}
            Mail <em>info@example.com</em>
          </span>
        </div>

        <div className="social_media">
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i className="fab fa-google-plus-g"></i>
          </a>
          <a href="#">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="#">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
