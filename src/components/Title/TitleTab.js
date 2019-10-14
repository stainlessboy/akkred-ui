import React from 'react'
import PropTypes from 'prop-types'
import {compose} from 'recompose'
import path from 'ramda/src/path'
import injectSheet from 'react-jss'
import {PRIMARY_COLOR, BLACK_COLOR, fallbacksStyle} from 'constants/design'
import classNames from 'classnames'
import loMap from 'lodash/map'
import hexToRgb from 'helpers/hexToRgb'
import withHistory from 'helpers/withHistory'

const enhance = compose(
  withHistory,
  injectSheet({
    title: {
      ...fallbacksStyle('display', 'inline-block'),
      transition: 'all 300ms',
      cursor: 'pointer',
      fontWeight: '600',
      margin: '0',
      marginRight: '22px',
      lineHeight: '1.91',
      position: 'relative',
      fontSize: '22px',
      borderBottom: '2px solid transparent',
      color: hexToRgb(BLACK_COLOR, '0.2')
    },
    small: {
      fontWeight: '500',
      fontSize: '14px',
      lineHeight: '1.57',
      color: hexToRgb(BLACK_COLOR, '0.5')
    },
    medium: {
      fontWeight: '500',
      fontSize: '15px',
      lineHeight: '2.0'
    },
    large: {
      fontWeight: 'bold',
      fontSize: '26px',
      lineHeight: '43px'
    },
    active: {
      borderBottom: '3px solid',
      borderBottomColor: PRIMARY_COLOR,
      color: BLACK_COLOR
    }
  })
)

const TitleTab = props => {
  const {className, history, classes, type, tabs, filter, ...defaultProps} = props
  const small = type === 'small'
  const medium = type === 'medium'
  const large = type === 'large'
  const onChange = (tab) => history.replace(filter.createURL(filter.getParams({tab})))
  const tab = filter.getParam('tab') || path(['0', 'value'], tabs)
  return loMap(tabs, (title, index) => {
    return (
      <span
        key={index}
        onClick={() => {
          onChange(title.value)
        }}
        className={classNames({
          [classes.title]: true,
          [className]: true,
          [classes.small]: small,
          [classes.medium]: medium,
          [classes.large]: large,
          [classes.active]: tab === title.value
        })}
        {...defaultProps}
      >{title.label}
      </span>
    )
  }

  )
}

TitleTab.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
  tabs: PropTypes.array,
  onChange: PropTypes.func.isRequired
}

export default  enhance(TitleTab)
