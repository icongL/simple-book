import React from 'react'
import { MainWrpper } from './styles.js'
export default function MainContent (props) {
	const { children } = props
	return <MainWrpper className={ ['kid_f_l', 'clearfix']}>
		{ children }
	</MainWrpper>
}