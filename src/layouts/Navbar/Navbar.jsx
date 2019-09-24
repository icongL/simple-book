import React from 'react'
import {  Link } from "react-router-dom";
import { NavContainer} from './styles.js'

const defaultNavs = [
	{ title: '发现', href: '/find' },
	{  title: '关注', href: '/attention'},
	{  title: '消息', href: '/message'}

] 

export default function Navbar (props) {
	const { navs = defaultNavs } = props
	console.log(navs)
	return <NavContainer className={ ['kid_f_l', 'clearfix'] }>
		{ navs.map((item, index) => {
			return <Link key={ item.title } to={ item.href }>
				<span></span>
				{ item.title }
			</Link>
		}) }
	</NavContainer>
}