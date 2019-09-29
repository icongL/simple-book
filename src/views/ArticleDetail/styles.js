import Styled from 'styled-components'

export {
	ContentLeft,
	ContentRight
}
from './../../assets/component-styles/common-styles'
export const DetailWrapper = Styled.div `
	overflow: hidden;
	> .main-container {
		background-color: #f9f9f9; 
		padding-top: 10px;
	}
	.main-content {
		> div {
			padding: 0px;
			background: #fff;
		}
	}
	.main-content .main-left {
		padding: 24px;
		width: 700px;
		box-shadow: 0px 0px 1px 0px #EDEDED ;
		-webkit-box-shadow: 0px 0px 1px 0px #EDEDED;
		-o-box-shadow: 0px 0px 1px 0px #EDEDED;
		-ms-box-shadow: 0px 0px 1px 0px #EDEDED;
	}
	.article-content {
		background-color: #fff;
		text-align: center;
		
	}
	.article-content section {
		font-size: 14px;
	}
	
	
 `
export const ArticleTitle = Styled.div `
	background: white;
	h2 {
		font-size: 32px;
		font-weight: 600;
		padding: 5px 0px;
	}
	margin-bottom: 10px;
`

export const ArticleContent = Styled.div `
	background: white;
	article img {
		width: 90%;
	}
`