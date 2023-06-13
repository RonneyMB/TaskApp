import React from 'react'
import './itemListS.css'

export function ItemList(props) {
  return (
   <ul className='containerList'>
        {props.children}
   </ul>
  )
}
