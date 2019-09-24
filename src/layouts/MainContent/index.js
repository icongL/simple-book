import React, { Component } from 'react'
import { MainWrpper } from './../../components/Containers/MainContainer.jsx'


export default function MainContent (props) {
	const { children } = props
	return <MainWrpper className={ ['kid_f_l', 'clearfix']}>
		{ children }
	</MainWrpper>
}