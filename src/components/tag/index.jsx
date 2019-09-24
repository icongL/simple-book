import React from 'react'
import { TagContainer  } from './styled.js'
export default function Tag (props) {
	const { href, inner } = props.item
	return <TagContainer>
		<a href={  href } >{ inner }</a>
	</TagContainer>
}