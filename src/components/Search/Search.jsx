import React from 'react'
import { SearchContainer  } from './styles'

export default function NavbarSearch (props) {
	const { value, isFocus, HotSearchKeyword, hotkeyWords, switchHotKeyword } = props
	const buttonClass = ['iconfont', isFocus ? 'showButtonBg' : null ].join(' ')
	const HotSearchKeywordClass = isFocus ?  'show' : 'hidden'
	return <SearchContainer>
		<input type="input" 
			value={ value } 
			onChange={ props.changeInputValue }
			placeholder="搜索"
			onBlur={ props.getMangeFocus }
			onFocus={ props.getMangeFocus }
			style={ { width: isFocus ? '178px' : null } } /> 
		<button type="button" onClick={ props.tapSearch } className={ buttonClass  }>&#xe616;</button>
		<HotSearchKeyword hotkeyWords={ hotkeyWords } isShow={ HotSearchKeywordClass } switchHotKeyword={ switchHotKeyword }  /> 
	</SearchContainer>
}