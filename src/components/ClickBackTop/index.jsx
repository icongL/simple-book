import React from 'react'
import { BackContaioner } from './styles.js'
export default function(props) {
  const { isHidden } = props
  const backInfoClass = isHidden ? 'back-prompt hidden' : 'back-prompt'
  return (
    <BackContaioner
      onMouseEnter={props.showBackInfo}
      onMouseLeave={props.hidenBackInfo}
      onClick={props.toPageTop}
    >
      <i className="iconfont">&#xe65c;</i>
      <span className={backInfoClass}>
        回到顶部
        <i className="triangle-right"></i>
      </span>
    </BackContaioner>
  )
}
