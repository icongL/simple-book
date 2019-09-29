import styled from 'styled-components'

export const HeadeWrapper = styled.div `
	height: 56px;
	position: relative;
	text-align: center;
	box-shadow: 0px 1px 2px -1px #ccc;
	.heade-content {
		width: 1440px;
		margin: 0px auto;
		
	}
`
export const LogoContainer = styled.h1 `
	width: 120px;
	padding: 0px 30px;
	margin: 0px;
	height: 100%;
`
export const LogoImg = styled.img `
	width: 100%;
	height: 56px;
`
export const NavbarLeft = styled.div `
	z-index: 2;
	height: 100%;
	position: relative;
	> div {
		display: block;
		height: 100%;
		float: right;
	}
	div > a,div > i,div > button {
		display: block;
		float: right;
		color: #969696;
		font-size：0px;
		line-height: 40px;
		 margin: 9px 5px 0 15px;
	}
	.icon_left {
		margin-right: 30px;
		> button {
			margin-top: 16px;
			width: 56px;
			height: 30px;
			padding: 0px;
			cursor: pointer;
			line-height: 25px;
		}
	}
	.log-in {
    font-size: 15px;
   	width: 60px;
    height: 40px;
    line-height: 40px;
	}
	.sign-up {
    width: 80px;
    height: 38px;
    line-height: 38px;
    margin-left: 15px;
    border: 1px solid rgba(236,97,73,.7);
    border-radius: 20px;
    font-size: 15px;
    color: #ea6f5a;
    background-color: transparent
	}
	.writeArticle {
    width: 100px;
    height: 40px;
    line-height: 40px;
    border-radius: 20px;
    font-size: 15px;
    color: #fff;
    background-color: #ea6f5a;
	}
`