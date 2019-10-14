import _ from 'lodash'
import React from 'react'
import {compose} from 'recompose'
import injectSheet from 'react-jss'
import {PRIMARY_COLOR, crossBrowserify, fallbacksStyle, WHITE_COLOR, BLACK_COLOR} from 'constants/design'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import AntCheckbox from 'antd/lib/checkbox'
import toBoolean from 'helpers/toBoolean'

const enhance = compose(
  injectSheet({
    checkbox: {
      position: 'relative',
      paddingLeft: '22px',
      color: BLACK_COLOR,
      fontFamily: '\'Montserrat\', sans-serif',
      ...fallbacksStyle('display', 'inline-flex'),
      ...crossBrowserify('alignItems', 'center'),
      '& .ant-checkbox': {
        fontFamily: 'inherit',
        top: '2px',
        left: '0',
        position: 'absolute'
      },
      '& .ant-checkbox-inner': {
        background: WHITE_COLOR,
        border: '1px #b4bfc9 solid'
      },
      // Focus
      '& .ant-checkbox-input:focus': {
        '& + .ant-checkbox-inner': {
          borderColor: PRIMARY_COLOR
        }
      },
      // Hover
      '&:hover': {
        '& .ant-checkbox-inner': {
          borderColor: PRIMARY_COLOR
        }
      },
      // CHECKED or INDETERMINATE
      '& .ant-checkbox-checked, & .ant-checkbox-indeterminate': {
        '& .ant-checkbox-inner': {
          borderColor: PRIMARY_COLOR,
          background: PRIMARY_COLOR,
          '&:after': {
            borderColor: WHITE_COLOR
          }
        },
        '&:after': {
          border: `1px ${PRIMARY_COLOR} solid`
        }
      }
    }
  })
)

const checkedStyle = {
  color: PRIMARY_COLOR,
  fontWeight: '500'
}
const Checkbox = ({...defaultProps}) => {
  const {input, className, classes, label, checked, onChange} = defaultProps
  return (
    <div>
      <AntCheckbox
        {...defaultProps}
        className={classNames(classes.checkbox, className)}
        checked={checked || toBoolean(_.get(input, 'value'))}
        onChange={onChange || _.get(input, 'onChange')}>
        <span style={_.get(input, 'value') ? checkedStyle : {}}>{label}</span>
      </AntCheckbox>
    </div>
  )
}

Checkbox.propTypes = {
  label: PropTypes.string.isRequired
}

export default enhance(Checkbox)
