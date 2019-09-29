import Styled from 'styled-components'

export const HotSearchContainer = Styled.div `
	width: 210px;
	height: 189px;
	background: #fff;
	position: absolute;
	left: 15;
	overflow: hidden;
	z-index: 5;
	margin-top: 9px;
	padding: 20px 20px 10px 20px;
	transition-property: all;
	transition-duration: .5s;
	transition-timing-function: linear-out;
	transition-delay: 0s;
	box-shadow: 0 0 8px rgba(0,0,0,.2);
	&.show {
		visibility: visible;
	}
	&.hidden {
		visibility: hidden;
	}
	.hot-search-title {
		margin-button: 10px;
		span {
			float: left;
	    font-size: 14px;
	    color: #969696;
		}
	  button {
	  	i {
	  		font-size: 14px;
	  		padding: 0px 5px;
	  	}
	  	color: #969696;
	    background-color: transparent;
	    float: right;
	    border-width: 0;
	    padding: 0;
	  }
	}
	.hot-search-inner {
		padding-inline-start: 0px;
	}
}`