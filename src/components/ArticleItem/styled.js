import Styled from 'styled-components'

export const ArticleItemWrapper = Styled.li`
	min-height: 140px;
	width: 100%;
  padding: 15px 2px 20px 0;
  border-bottom: 1px solid #f0f0f0;
  word-wrap: break-word;
  position: relative;
  box-sizing: border-box;
  line-height: 20px;
	> a, > div  {
		display: inline-block;
		font-size: 0px;
	}
	.content {
		width: 458px;
		font-size: 14px;
		vertical-align: middle;
		> h3 {
	     margin: -7px 0 4px;
			 display: block;
			 font-size: 0px;
			 > a {
			 		line-height: 1.5;
			 		display: block;
			 		color: #333;
			 		font-size: 18px;
			 }
				a:hover {
			 	text-decoration: underline;
			}
		}
		p {
			margin: 0 0 8px;
	    font-size: 13px;
	    line-height: 24px;
	    color: #999;
		}
		.article-operation {
			padding-right: 0!important;
	    font-weight: 400;
	    line-height: 20px;
	    > * {
	    	font-size: 12px;
  	    margin-right: 10px;
	    }
	    .diamond {
	    	display: inline-block;
	    	transform: scale(0.8);
	    	color: #ea6f5a !important;
	    	span {
	    		margin-left: 3px;
	    		transform: scale(1.2);
	    	}
	    }
	    .categoryTitle {
	    	color: #b4b4b4;
	    }
	    .categoryTitle:hover {
  	    color: #787878;
	    }
	    .star {
	    	margin-right: 10px;
    		color: #b4b4b4;
	    }
		}
	}
	.photo {
		
		img {
			width: 150px;
			height: 100px;
		}
		&.hidden {
			display: none;
		}
	}

`