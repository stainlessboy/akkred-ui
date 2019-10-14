import React from 'react'
import PropTypes from 'prop-types'
import CheckIcon from 'react-icons/lib/md/check-circle'
import {MAIN_COLOR} from '../../constants/styles'
import ToolTip from 'components/Tooltip'

const CompanyName = ({name, big}) => {
  const style = {
    fontSize: big ? '18px' : '13px',
    fontWeight: big && '500',
    lineHeight: big && '1.22'
  }

  const iconStyle = {
    width: !big && '15px',
    height: !big && '15px',
    fontSize: big && '21px',
    marginLeft: '4px',
    verticalAlign: 'text-top'
  }
  return (
    <div style={style}>
      <u>{name}</u>
      <ToolTip text={'Компания проверена !'}>
        <CheckIcon style={iconStyle} color={MAIN_COLOR}/>
      </ToolTip>
    </div>
  )
}

CompanyName.propTypes = {
  name: PropTypes.string.isRequired,
  big: PropTypes.bool
}
export default CompanyName
