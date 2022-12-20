import React from 'react'
import './CardStyles.scss'


export default function Card(Props) {
  return (
    <div className='card'>{Props.children}</div>
  )
}
