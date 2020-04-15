import React from 'react'

function ArticleList() {
  return (
    <div className="articles">
      <section>
        <div>
          <h6>TECH</h6>
          <h1>THIS IS A TEST ARTICLE</h1>

          <div class="blog_details">
            <span>
              <i class="far fa-clock"></i> March 24, 2020
            </span>
            <span>
              <i class="fas fa-user"></i> Admin
            </span>
          </div>
        </div>
      </section>

      <section>
        <div>
          <h6>TECH</h6>
          <h1>THIS IS A TEST ARTICLE 2</h1>

          <div class="blog_details">
            <span>
              <i class="far fa-clock"></i> March 24, 2020
            </span>
            <span>
              <i class="fas fa-user"></i> Admin
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ArticleList
