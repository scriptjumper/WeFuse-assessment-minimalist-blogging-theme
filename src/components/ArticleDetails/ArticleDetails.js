import React from 'react'

const ArticleDetails = (props) => {
  return (
    <div>
      <p dangerouslySetInnerHTML={{ __html: props.article.pageData }} />
    </div>
  )
}

export default ArticleDetails
