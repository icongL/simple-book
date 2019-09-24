import Styled from 'styled-components'
export const SearchContainer = Styled.div`
    position: relative;
    top: 9px;
    padding-left: 15px;
    height: 38px;
  	input {
      width: 98px;
      padding: 0 40px 0 20px;
      height: 38px;
      font-size: 14px;
      border: 1px solid #eee;
      border-radius: 40px;
      background: #eee;
      transition: width .5s;
      -moz-transition: width .5s;
      -webkit-transition: width .5s;
      -o-transition: width .5s;
      transition-delay: .1s;
      -moz-transition-delay: .1s;
      -webkit-transition-delay: .1s;
  	}
    > button {
      &.showButtonBg {
        background: #ccc;
      }
      position: absolute;
      top: 4px;
      right: 5px;
      width: 30px;
      border-radius: 50%;

      height: 30px!important;
      line-height: normal!important;
      padding: 0!important;
      color: #969696!important;
      background: none;
      text-align: center;
      border: none;
  }
`
