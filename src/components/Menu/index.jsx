import React from 'react'
import { Link } from 'react-router-dom'
import './styled.scss'

export default function Menu (props) {
	const { photoAddr, menuLink } = props 
	return <Link to={  '' + menuLink } className="menuLink" >
		<img src={ photoAddr }  alt="404" />
	</Link>
}