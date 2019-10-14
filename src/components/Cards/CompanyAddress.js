import React from 'react'
import PropTypes from 'prop-types'
import PinIcon from '../../icons/PinIcon'

const iconStyle = {
  verticalAlign: 'baseline'
}
const Address = ({name, style}) => {
  return (
    <span style={{display: 'block', ...style}}><PinIcon style={iconStyle}/> {name}</span>
  )
}

Address.propTypes = {
  name: PropTypes.string.isRequired,
  style: PropTypes.object
}
export default Address
