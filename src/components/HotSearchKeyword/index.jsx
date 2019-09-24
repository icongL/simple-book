import React from 'react'
import { HotSearchContainer } from './styled.js'
import propTypes from 'prop-types'
import Tag from './../tag/index.jsx'
const HotSearchKeyword = (props) => {
	const { isShow, hotkeyWords } = props
	const hotTag = hotkeyWords.map((item, index) => {
		return <Tag key={ item.inner } item={ item } />
	})
	return <HotSearchContainer className={ `${ isShow } clearfix` }>
		<div className="hot-search-title clearfix">
			<span>热门搜索</span>
			<button type="button" onClick={ props.switchHotKeyword }>
				<i className={ 'iconfont '}>&#xe626;</i>换一批
			</button>
		</div>
		<ol className="hot-search-inner kid_f_l clearfix">
			{ hotTag }
		</ol>
	</HotSearchContainer>
}
HotSearchKeyword.propTypes = {
	hotkeyWords: propTypes.array.isRequired,
	isShow: propTypes.string.isRequired,
}
 
export default HotSearchKeyword


