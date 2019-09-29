import React from 'react'
import { OperationWrapper } from './styles'
import Diamond from './../SamllComponents/Diamond'
import Star from './../SamllComponents/Star/'
import WordLink from './../SamllComponents/WordLink'

export default function OperationPanel(props) {
  const {
    articleAddr,
    diamondDigit,
    categoryName,
    categoryAddr,
    starDigit
  } = props
  return (
    <OperationWrapper className="article-operation">
      <Diamond diamondDigit={diamondDigit} />
      <WordLink
        categoryName={categoryName}
        categoryAddr={categoryAddr}
        articleAddr={articleAddr}
      />
      <Star starDigit={starDigit} />
    </OperationWrapper>
  )
}
