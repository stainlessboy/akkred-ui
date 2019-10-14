import React from 'react'

const PhoneSimple = ({color, style, ...defaultPorps}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 8 10"
      fill={color} style={{...style}} width={8} height={10}
      {...defaultPorps}>
      <path fill="#7848B7" fillRule="nonzero" d="M8 3.53H5.714V0H2.286v3.53H0l4 4.117L8 3.53zM0 8.823V10h8V8.824H0z"/>
    </svg>
  )
}

export default PhoneSimple
