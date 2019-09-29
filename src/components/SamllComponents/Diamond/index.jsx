import React from 'react'
import { DiamondWrapper } from './styles'

export default function(props) {
  const { diamondDigit } = props
  return (
    <DiamondWrapper className="iconfont">
      &#xe62b;<span>{diamondDigit}</span>
    </DiamondWrapper>
  )
}
