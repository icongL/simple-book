import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
// component required static or status
import {
  createHeadeInputFocusAction,
  changeModalIsEnterAction
} from './../../store/actionCreators.js'
import logo from './../../assets/images/logo.jpg'
import { HeadeWrapper, LogoContainer, LogoImg, NavbarLeft } from './styles.js'
// Component import
import HotSearchKeyword from './../../components/HotSearchKeyword/index.jsx'
import Navbar from './../Navbar/Navbar.jsx'
import MainContainer from './../../components/Containers/MainContainer.jsx'
import NavbarSearch from './../../components/Search/Search.jsx'

class Heade extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      renderError: false,
      navs: [],
      search: {
        inputValue: ''
      },
      hotkeyWords: [
        { inner: '阿里巴巴', href: '/baidu.com' },
        { inner: '阿里科技', href: 'baidu.com' },
        { inner: '联合技术学院', href: 'baidu.com' },
        { inner: '腾讯科技', href: 'baidu.com' }
      ]
    }
    // 函数this绑定
    this._changeInputValue = this._changeInputValue.bind(this)
    this._switchHotKeyword = this._switchHotKeyword.bind(this)
    this._modlaEnter = this._modlaEnter.bind(this)
    this._modalLeave = this._modalLeave.bind(this)
  }
  _modlaEnter() {
    this.props.changeModalEnter(true)
  }
  _modalLeave() {
    console.log(1)
    this.props.changeModalEnter(false)
  }
  // 更新输入框的值
  _changeInputValue(event) {
    const newValue = event.target.value.trim()
    if (newValue === this.state.search.inputValue) return false
    this.setState(state => {
      return Object.assign({}, state, {
        search: {
          inputValue: newValue,
          isFocus: state.search.isFocus
        }
      })
    })
  }
  _switchHotKeyword() {}
  static getDerivedStateFromProps(state, props) {
    return state
  }

  render() {
    const { hotkeyWords } = this.state
    const { inputValue } = this.state.search
    const { isFocus, isEnter } = this.props
    return (
      <HeadeWrapper className={['heade-container']}>
        <div className="kid_f_l clearfix heade-content">
          <LogoContainer>
            <Link to={'/'} className={['con-block']}>
              <LogoImg src={logo} alt={logo} />
            </Link>
          </LogoContainer>
          <MainContainer type="heade" isFloat={true}>
            <Navbar></Navbar>
            <NavbarSearch
              isFocus={isFocus}
              isEnter={isEnter}
              inputValue={inputValue}
              getMangeFocus={this.props.changHeadeIsFocus}
              changeInputValue={this._changeInputValue}
              HotSearchKeyword={HotSearchKeyword}
              hotkeyWords={hotkeyWords}
              switchHotKeyword={this._switchHotKeyword}
              modalEnter={this._modlaEnter}
              modalLeave={this._modalLeave}
            ></NavbarSearch>
          </MainContainer>
          <NavbarLeft className="f_r kid_f_r  clearfix">
            <div className="link_right  clearfix">
              <Link className="writeArticle" to="writeArticle">
                写文章
              </Link>
              <Link className="sign-up" to="/register">
                注册
              </Link>
              <Link className="log-in" to="/login">
                登录
              </Link>
            </div>
            <div className="icon_left clearfix">
              <button type="button">
                <span className="iconfont">&#xe62b;</span>
              </button>
              <button type="button">
                <i className="iconfont">&#xe636;</i>
              </button>
            </div>
          </NavbarLeft>
        </div>
      </HeadeWrapper>
    )
  }
  componentDidMount() {}
  getSnapshotBeforeUpdate(prevProps, prevState) {
    return null
  }
  componentDidUpdate() {}
  componentWillUnmount() {}
  static getDerivedStateFromError(error) {
    return {
      renderError: true
    }
  }
}

// store mapProps
const mapStatetoProps = state => {
  return {
    isFocus: state.get('heade').get('isFocus'),
    isEnter: state.get('heade').get('isEnter')
  }
}
const mapDispatchToProps = _dispatch => {
  return {
    changHeadeIsFocus(event) {
      // 判断是否是获取焦点
      const focusEle = document.activeElement
      const isFocus = focusEle === event.target
      _dispatch(createHeadeInputFocusAction(isFocus))
    },
    changeModalEnter(isEnter) {
      // 进行改变进行参数
      _dispatch(changeModalIsEnterAction(isEnter))
    }
  }
}

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(Heade)
