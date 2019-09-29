import React from 'react'
import { Link } from 'react-router-dom'
import { ArticleItemWrapper } from './styled.js'
import OperationPanel from './../OperationPanel'
export default function ArticleItem(props) {
  const {
    title,
    starDigit,
    photoAddr,
    summary,
    articleAddr,
    diamondDigit,
    categoryName,
    categoryAddr
  } = props
  const photoExist = typeof photoAddr === 'string'
  return (
    <ArticleItemWrapper>
      <div className="content">
        <h3>
          <Link to={articleAddr}>{title}</Link>
        </h3>
        <p>{summary}</p>
        <OperationPanel
          articleAddr={articleAddr}
          diamondDigit={diamondDigit}
          categoryName={categoryName}
          categoryAddr={categoryAddr}
          starDigit={starDigit}
        />
      </div>
      {photoExist && (
        <Link to={articleAddr} className="photo">
          <img src={photoAddr} alt="404" />
        </Link>
      )}
    </ArticleItemWrapper>
  )
}
