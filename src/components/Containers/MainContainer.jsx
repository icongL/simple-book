import React from 'react'
import { MainWrapper } from './styles.js'
const increaseClass = {
	heade: 'heade-main',
	main: 'main-container',
	default: ''
}

export default function MainContainer (props) {
	const { children, type = 'default' } = props
	console.log(increaseClass[type], type)
	const WrapperClass = ['kid_f_l', 'clearfix', increaseClass[type]].join(' ')
	return <MainWrapper className={ WrapperClass }>
		{ children }
	</MainWrapper>
}