import React from 'react'
import Favorite from 'icons/Popular'
import hexToRgb from '../../helpers/hexToRgb'
import {BLACK_COLOR} from '../../constants/styles'

const style = {
  lineHeight: '1.62',
  fontSize: '13px',
  color: hexToRgb(BLACK_COLOR, '0.7'),
  marginTop: '1px'
}
const CardRating = props => {
  return (
    <div style={style}><Favorite/> 3.4/5</div>
  )
}

export default CardRating
