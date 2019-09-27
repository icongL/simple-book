import React from 'react'
import { SearchContainer  } from './styles'

export default function NavbarSearch (props) {
	const { value, isFocus, modalEnter, modalLeave, HotSearchKeyword, hotkeyWords, switchHotKeyword, isEnter  } = props
	const ModalAndInputShow = isFocus || isEnter
	const buttonClass = ModalAndInputShow ? 'showButtonBg iconfont' : 'iconfont'
	const HotSearchKeywordClass = ModalAndInputShow ?  'show' : 'hidden'
	return <SearchContainer>
		<input type="input" 
			value={ value } 
			onChange={ props.changeInputValue }
			placeholder="搜索"
			onBlur={ props.getMangeFocus }
			onFocus={ props.getMangeFocus }
			style={ { width: ModalAndInputShow ? '178px' : null } } /> 
		<button type="button" onClick={ props.tapSearch } className={ buttonClass  }>&#xe616;</button>
		<HotSearchKeyword 
			modalEnter={ modalEnter }
			modalLeave={ modalLeave}
			hotkeyWords={ hotkeyWords }
			isShow={ HotSearchKeywordClass }
			switchHotKeyword={ switchHotKeyword }  /> 
	</SearchContainer>
}