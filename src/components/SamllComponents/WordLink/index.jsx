import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
export default function(props) {
  const { categoryAddr, categoryName } = props
  return (
    <Link to={categoryAddr} className={'categoryTitle'}>
      {categoryName}
    </Link>
  )
}
