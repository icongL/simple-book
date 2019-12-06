import React, { PureComponent } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import MainContent from './../../layouts/HomeMainContent'
import Heade from './../../layouts/Heade/index.jsx'
import Foot from './../../layouts/Foot/Foot.jsx'
import BackTop from './../../components/ClickBackTop/index.jsx'
import { baseURL } from './../../api/baseURl.js'

import {
  initHomeArticlesAction,
  changArticlePageNum
} from './../../store/actionCreators.js'

function getMenus() {
  axios.get(baseURL + 'menus').then(
    ({ data: { menus } }) => {
      this.setState(() => {
        return {
          menus
        }
      })
    },
    () => {
      this.setState(() => {
        return {
          requestError: true
        }
      })
    }
  )
}

class Home extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      menus: [],
      requestError: false,
      downloadImgIsShow: false,
      backButtonHide: true
    }
    // ref
    this.rootHometRef = React.createRef()
    // Event bind this
    this._homeRootScrollHandler = this._homeRootScrollHandler.bind(this)
    this.downloadBigPhotoToggleShow = this.downloadBigPhotoToggleShow.bind(this)
    this.showBackInfo = this.toggleShowBackInfo.bind(this, false)
    this.hiddenBackInfo = this.toggleShowBackInfo.bind(this, true)
    this.toPageTop = this.toPageTop.bind(this)
  }
  static getDervedStateFromProps(props, state) {
    return state
  }
  isChange = null
  // refs
  roo0HometRef = null
  downloadBigPhotoToggleShow(newValue) {
    this.setState(() => {
      return {
        downloadImgIsShow: newValue
      }
    })
  }
  _homeRootScrollHandler(event) {
    const {
      articles: { length: articlesLen },
      articlePage,
      pageSize,
      maxPage
    } = this.props
    const referLoad =
      document.body.clientHeight -
        20 -
        (window.innerHeight + window.pageYOffset) <
      30
    const stepPage = articlePage * pageSize - articlesLen
    if (!referLoad || stepPage !== 0 || this.isChange !== null) {
      return false
    } else {
      const newPage = this.props.articlePage + 1
      // 超过最大页面值，无需在执行scroll加载, 注销事件
      if (newPage > maxPage) {
        return window.removeEventListener('scroll', this._homeRootScrollHandler)
      }
      this.isChange = setTimeout(() => {
        this.props.changeArticlePage(newPage)
      }, 500)
    }
  }
  _getInitPageData() {
    // 请求图书列表
    this.props.getAricles && this.props.getAricles(this.props.articlePage)
    // 请求菜单列表
    getMenus && getMenus.call(this)
  }
  isScrollOver = null
  toggleShowBackInfo(isHidde, event) {
    console.log(isHidde)
    this.setState(() => {
      return {
        backButtonHide: isHidde
      }
    })
  }
  toPageTop() {
    var scrollHeight =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop
    if (this.isScrollOver !== null || scrollHeight <= 0) {
      return false
    }
    // 执行向上跳转动画tyarn
    //yarn
    ;(function smoothscroll() {
      var currentScroll =
        document.documentElement.scrollTop || document.body.scrollTop
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll)
        window.scrollTo(0, currentScroll - currentScroll / 5)
      }
    })()
  }
  render () {
    const { menus, downloadImgIsShow, backButtonHide } = this.state
    const { articles } = this.props
    return (
      <div className="home-container clearfix" ref={this.rootHometRef}>
        <BackTop
          isHidden={backButtonHide}
          showBackInfo={this.showBackInfo}
          hidenBackInfo={this.hiddenBackInfo}
          toPageTop={this.toPageTop}
        />
        <Heade />
        <MainContent
          downloadBigPhotoToggleShow={this.downloadBigPhotoToggleShow}
          downloadImgIsShow={downloadImgIsShow}
          Articleitems={articles}
          menus={menus}
        />
        <Foot />
      </div>
    )
  }
  componentDidMount() {
    this._getInitPageData()
    window.addEventListener('scroll', this._homeRootScrollHandler, false)
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    return null
  }
  componentDidUpdate(prevProps, prevState) {
    const { articlePage, articles } = this.props
    if (prevProps.articlePage !== articlePage) {
      this.props.getAricles(articlePage)
    }
    if (prevProps.articles.length !== articles) {
      clearTimeout(this.isChange)
      this.isChange = null
    }
  }
  componentWillUnmount() {
    // 注销事件
    window.removeEventListener('scroll', this._homeRootScrollHandler)
  }
}

const mapStateToProps = function(state) {
  return {
    articlePage: state.getIn(['Home', 'articlePage']),
    articles: state.getIn(['Home', 'articles']).toJS(),
    pageSize: state.getIn(['Home', 'pageSize']),
    maxPage: state.getIn(['Home', 'articlesMaxPage'])
  }
}

const mapDispatchToProps = function(_dispatch) {
  return {
    changeArticlePage(newPage) {
      _dispatch(changArticlePageNum(newPage))
    },
    getAricles(currentPage) {
      _dispatch(initHomeArticlesAction(currentPage))
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
