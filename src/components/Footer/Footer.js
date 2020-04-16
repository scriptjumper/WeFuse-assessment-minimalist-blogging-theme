import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer class="footer">
      <div class="contacting">
        <hr />
        <div class="contact_details">
          <span>
            Call Us: <em>(1)118 234 768</em>
          </span>{' '}
          -
          <span>
            {' '}
            Mail <em>info@example.com</em>
          </span>
        </div>

        <div class="social_media">
          <a href="#">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i class="fab fa-google-plus-g"></i>
          </a>
          <a href="#">
            <i class="fab fa-youtube"></i>
          </a>
          <a href="#">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
