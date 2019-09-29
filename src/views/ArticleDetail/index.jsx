import React, { PureComponent } from 'react'
import Heade from './../../layouts/Heade/index.jsx'
import Foot from './../../layouts/Foot/Foot.jsx'
import { baseURL } from './../../api/baseURl.js'
import OperationPanel from './../../components/OperationPanel'
import axios from 'axios'
import {
  DetailWrapper,
  ArticleTitle,
  ArticleContent,
  ContentLeft,
  ContentRight
} from './styles.js'
import MainContainer from './../../components/Containers/MainContainer.jsx'

// 获取简书详情
function getDetail(params) {
  axios.get(baseURL + 'detail').then(
    res => {
      this.setState(() => {
        return {
          html_content: res.data
        }
      })
    },
    res => {}
  )
}
function createMarkup(htmlString) {
  return {
    __html: htmlString.replace(/\s*/g, '')
  }
}

export default class BookDetail extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      html_content: '<article></article>',
      operatorInfo: {
        articleAddr: '',
        diamondDigit: '',
        categoryName: '',
        categoryAddr: 'ddsa',
        starDigit: 1500
      }
    }
    this.articleEle = React.createRef()
  }
  articleEle = null
  static getDerivedStateFromProps(props, state) {
    return state
  }

  render() {
    const { html_content, operatorInfo } = this.state
    return (
      <DetailWrapper>
        <Heade type="heade" />
        <div className="main-container">
          <MainContainer propName={['main-content']}>
            <ContentLeft className="main-left">
              <ArticleTitle>
                <h2>公告：关于暂停用户发布功能，并全面清查平台内容</h2>
                <OperationPanel {...operatorInfo} />
              </ArticleTitle>
              <ArticleContent
                dangerouslySetInnerHTML={createMarkup(html_content)}
              ></ArticleContent>
            </ContentLeft>
            <ContentRight className="main-right"></ContentRight>
          </MainContainer>
        </div>
        <Foot />
      </DetailWrapper>
    )
  }
  componentDidMount() {
    getDetail.call(this)
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    return null
  }
  componentDidUpdate(prevProps, prevState) {}
  componentDidWillmount() {}
  componentDidCatch(error) {
    return {
      error: true
    }
  }
  static gteDerivedStaeFromError() {
    return {
      error: true
    }
  }
}
