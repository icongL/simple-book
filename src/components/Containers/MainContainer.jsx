import React from 'react'
import { MainWrapper } from './styles.js'
const increaseClass = {
  heade: 'heade-main',
  main: 'main-wrapper',
  default: 'main-wrapper'
}

export default function MainContainer(props) {
  const { children, type = 'default', isFloat, propName = '' } = props
  const WrapperClass = [
    'clearfix',
    isFloat ? 'kid_f_l' : null,
    increaseClass[type],
    ...propName
  ].join(' ')
  return <MainWrapper className={WrapperClass}>{children}</MainWrapper>
}
