import React from 'react'

const ArticleDetails = (props) => {
  let article = props.article,
    blogDate = ''

  if (article.postDate !== undefined) {
    blogDate = article.postDate.date
  }

  return (
    <div className="blog">
      <div className="information">
        <div>
          <span>
            <i className="far fa-calendar"></i> {blogDate}
          </span>
        </div>
        <div>
          <span>
            <i className="far fa-folder-open"></i> {article.category}
          </span>
        </div>
      </div>

      <div className="details">
        <p dangerouslySetInnerHTML={{ __html: article.pageData }} />
      </div>
    </div>
  )
}

export default ArticleDetails
