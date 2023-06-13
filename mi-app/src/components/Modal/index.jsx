import React from 'react'
import  ReactDOM  from 'react-dom'
import "./ModalBack.css"

export default function Modales({children, }) {
  return ReactDOM.createPortal(
    <div className='ModalS'>
        {children}
    </div>,
    document.getElementById('modal')
  );
}
export { Modales }