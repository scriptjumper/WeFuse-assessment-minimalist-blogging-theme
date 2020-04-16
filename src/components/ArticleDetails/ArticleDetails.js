import React from 'react'
import Utils from '../Utils/Utils'

const ArticleDetails = (props) => {
  let article = props.article,
    blogDate = ''

  if (article.postDate !== undefined) {
    blogDate = Utils.dateFormatter(article.postDate.date)
  }

  return (
    <div className="blog">
      {props.loading && <p className="loading">Loading ...</p>}
      {!props.loading && (
        <span>
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
        </span>
      )}
    </div>
  )
}

export default ArticleDetails
