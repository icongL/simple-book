import Styled from 'styled-components'	

export const BackContaioner = Styled.button`
  position: fixed;
  bottom: 40px;
  right: 40px;
  z-index: 1040;
	width: 52px;
	height: 52px;
	background-color: #fff;
	border: 1px solid #ccc;
	line-height: 52px;
	border: 1px solid #dcdcdc;
  background-color: #fff;
  transition: .1s ease-in;
  cursor: pointer;
  text-align: center;
  display: block;
  .back-prompt {
  	display: block;
  	height: 25px;
  	padding: 0px 5px;
  	line-height: 25px;
  	background: #000;
  	color: #fff;
  	font-size: 12px;
  	left: -65px;
  	top: 50%;
  	margin-top: -12.5px;
  	font-style: normal;
  	position: absolute;
  	&.hidden{
  		display: none;
  	}
  	.triangle-right {
  		display: block;
  		position: absolute;
  		right: -6px;
  		top: 50%;
  		margin-top: -2.5px;
  		background: transparent;
  		width: 0px;
  		height: 0px;
  		border-top: 5px solid transparent;
  		border-bottom: 5px solid transparent;
  		border-left:5px solid black;
  	}
  }
  > i {
    font-size: 20px;
    display: block;
  }
`
