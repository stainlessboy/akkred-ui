import _ from 'lodash'
import React from 'react'
import {compose} from 'recompose'
import injectSheet from 'react-jss'
import {PRIMARY_COLOR, crossBrowserify} from '../../../constants/design'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import AntRadio from 'antd/lib/radio'

const enhance = compose(
  injectSheet({
    radio: {
      color: '#000',
      '&.ant-radio-wrapper-checked': {
        color: '#2d2d2d'
      },
      lineHeight: '1.57',
      marginRight: '40px',
      marginBottom: '15px',
      '&:hover': {
        '& .ant-radio-inner': {
          borderColor: `${PRIMARY_COLOR} !important`
        }
      },
      '& span.ant-radio+*': {
        padding: '0 0 0 5px',
        fontFamily: '\'Montserrat\', sans-serif'
      },
      // DEFAULT
      '& .ant-radio': {
        '& .ant-radio-inner': {
          height: '18px',
          width: '18px',
          border: '1px #cfcfcf solid',
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.08)',
          '&:after': {
            background: PRIMARY_COLOR,
            border: 'none !important',
            top: '4px',
            left: '4px',
            height: '8px',
            width: '8px'
          }
        }
      },
      // CHECKED
      '& .ant-radio-checked': {
        '& .ant-radio-inner': {
          boxShadow: 'none',
          background: '#fff',
          borderColor: `${PRIMARY_COLOR} !important`,
          '&:after': _.merge({
          }, crossBrowserify('transform', 'scale(1)'))
        },
        '&:after': {
          border: `1px ${PRIMARY_COLOR} solid`
        }
      }
    }
  })
)

const Radio = ({className, classes, label, ...defaultProps}) => {
  return (
    <AntRadio
      className={classNames(classes.radio, className)}
      {...defaultProps}>
      {label}
    </AntRadio>
  )
}

Radio.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired
}

export default enhance(Radio)
