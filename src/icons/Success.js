import React from 'react'

const Cart = ({color, style, ...defaultPorps}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 70 70"
      fill={color} style={{...style}} width={70} height={70}
      {...defaultPorps}>
      <circle opacity="0.1" cx="35" cy="35" r="35" fill="#87D658"/>
      <path fill="#fff" d="M48.1663 25.25L29.3747 44.0417L20.833 35.5" stroke="#87D658" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default Cart
