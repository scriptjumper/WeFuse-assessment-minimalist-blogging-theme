import React from 'react'
import { Link } from 'react-router-dom'

const ArticleList = (props) => {
  let articles = props.articles.map((article, idx) => {
    return (
      <Link
        to={`/article/${article.slug}`}
        key={idx}
        onClick={() => {
          props.handleArticleClicked(article.slug)
        }}>
        <section
          style={{
            backgroundImage: `url(${article.banner.image.url})`
          }}>
          <div className="blog_article">
            <h6>{article.category}</h6>
            <h1>{article.banner.title}</h1>

            <div className="blog_details">
              <span>
                <i className="far fa-clock"></i> {article.postDate.date}
              </span>
              <span>
                <i className="fas fa-user"></i> {article.author}
              </span>
            </div>
          </div>
        </section>
      </Link>
    )
  })

  return (
    <div className="blog_list">
      {props.loading && <p className="loading">Loading ...</p>}
      {articles}
    </div>
  )
}

export default ArticleList
