import React from 'react'
import propTypes from 'prop-types'
import { ArticlesContainer, ContentLeft, ContentRight } from './styles.js'
import MainContainer from './../../components/Containers/MainContainer.jsx'
import ArticleItem from './../../components/ArticleItem/index.jsx'
import Menu from './../../components/Menu/index.jsx'
import Brand from './../../components/Brand/index.jsx'

export default function MainContent(props) {
  const { Articleitems, downloadImgIsShow, menus } = props
  const ArticleForce = Articleitems.map((item, offset) => {
    return <ArticleItem {...item} key={item.articleAddr}></ArticleItem>
  })
  return (
    <MainContainer
      type="main"
      isFloat={true}
      className={['kid_f_l', 'clearfix'].join(' ')}
    >
      <ContentLeft>
        <div className="split-lint"></div>
        <ArticlesContainer className="clearfix">
          {ArticleForce}
        </ArticlesContainer>
      </ContentLeft>
      <ContentRight>
        <div className="menus-containner">
          {menus.map((item, offset) => {
            return <Menu key={item.menuLink} {...item}></Menu>
          })}
        </div>
        <div className="download-sill">
          <Brand
            downloadImgIsShow={downloadImgIsShow}
            downloadBigPhotoToggleShow={props.downloadBigPhotoToggleShow}
          />
        </div>
      </ContentRight>
    </MainContainer>
  )
}
MainContent.propTypes = {
  Articleitems: propTypes.array.isRequired
}
