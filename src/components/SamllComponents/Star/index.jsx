import React from 'react'
import { StarWrapper } from './styles'

export default function(props) {
  const { starDigit } = props
  return <StarWrapper className={'iconfont'}>&#xe61a;{starDigit}</StarWrapper>
}
