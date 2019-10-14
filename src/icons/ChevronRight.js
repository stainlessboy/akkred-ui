import React from 'react'

const ChevronRight = ({color, style, ...defaultPorps}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={color} style={{...style}} width={24} height={24}
      {...defaultPorps}>
      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
    </svg>
  )
}

export default ChevronRight
