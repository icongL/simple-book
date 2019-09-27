import React from 'react'
import { Link } from 'react-router-dom'
import {  ArticleItemWrapper} from './styled.js'

export default function ArticleItem (props) {
	const { title,
		 starDigit,
		 photoAddr,
		 summary,
		 articleAddr,
		 diamondDigit,
		 categoryName,
		 categoryAddr  } = props
  const photoExist = typeof photoAddr === 'string'
	return <ArticleItemWrapper>
		<div className="content">
			<h3>
				<Link to={ articleAddr }>
					{ title }
				</Link>
			</h3>
			<p>{ summary  }</p>
			<div className="article-operation">
				<i className="iconfont diamond">&#xe62b;<span>{  diamondDigit }</span></i>
				<Link className="categoryTitle" to={ categoryAddr }> { categoryName }</Link>
				<i className={ 'iconfont star' }>&#xe61a;{ starDigit }</i>
			</div>
		</div>
		{  photoExist && (
			<Link to={ articleAddr  } className="photo">
				<img src={ photoAddr } alt="404" />
			</Link>)}
	</ArticleItemWrapper>
}