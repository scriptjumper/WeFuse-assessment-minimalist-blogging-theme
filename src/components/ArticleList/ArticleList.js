import React from 'react'

const ArticleList = (props) => {
  let articles = props.articles.map((article, idx) => {
    return (
      <section key={idx}>
        <div>
          <h6>{article.category}</h6>
          <h1>{article.title}</h1>

          <div className="blog_details">
            <span>
              <i className="far fa-clock"></i> {article.date}
            </span>
            <span>
              <i className="fas fa-user"></i> {article.author}
            </span>
          </div>
        </div>
      </section>
    )
  })

  return <div className="articles">{articles}</div>
}

export default ArticleList
