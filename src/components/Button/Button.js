import React from 'react'
import PropTypes from 'prop-types'
import {compose} from 'recompose'
import injectSheet from 'react-jss'
import {
  crossBrowserify,
  WHITE_COLOR,
  BUTTON_GREY_COLOR,
  YELLOW_COLOR,
  BLACK_COLOR,
  MAIN_COLOR
} from 'constants/styles'
import {PRIMARY_COLOR} from 'constants/design'
import classNames from 'classnames'
import hexToRgb from 'helpers/hexToRgb'
import {YELLOW, GREY, WHITE} from './index'
import Icon from 'antd/lib/icon'
import T from 'components/Translate'
const enhance = compose(
  injectSheet({
    button: {
      ...crossBrowserify('transition', 'all 400ms ease'),
      position: 'relative',
      background: PRIMARY_COLOR,
      color: WHITE_COLOR,
      cursor: 'pointer',
      border: '1px solid transparent',
      fontWeight: '500',
      borderRadius: '4px',
      fontSize: '14px',
      outline: 'none',
      padding: '0 22px',
      height: '34px',
      zIndex: '3',
      '&:hover': {
        background: hexToRgb(PRIMARY_COLOR, '0.8')
      },
      '&:active': {
        background: hexToRgb(PRIMARY_COLOR, '1')
      }
    },

    medium: {
      fontSize: '14px',
      height: '45px',
      lineHeight: '45px'
    },

    large: {
      fontSize: '15px',
      padding: '0 32px',
      height: '50px',
      lineHeight: '50px'
    },

    small: {
      fontWeight: '400',
      fontSize: '13px',
      padding: '0 15px',
      height: '38px',
      lineHeight: '38px'
    },
    xs: {
      fontSize: '11px',
      padding: '0 24px',
      height: '27px',
      lineHeight: '27px'
    },
    fullWidth: {
      width: '100%'
    },
    alternate: {
      backgroundColor: 'transparent',
      color: MAIN_COLOR,
      '&:hover': {
        background: 'unset',
        color: hexToRgb(MAIN_COLOR, '0.8')
      }
    },
    grey: {
      backgroundColor: BUTTON_GREY_COLOR,
      color: BLACK_COLOR,
      '&:hover': {
        background: '#ececec'
      }
    },
    bordered: {
      border: '1px #ececec solid',
      background: ''
    },
    white: {
      border: '1px solid #EDEDED',
      background: '#fff',
      color: '#909AA6',
      '&:hover': {
        background: hexToRgb('#efefef', '0.3')
      }
    },
    yellow: {
      background: YELLOW_COLOR,
      color: BLACK_COLOR,
      '&:hover': {
        background: hexToRgb(YELLOW_COLOR, '0.7')
      }
    },
    disabled: {
      background: '#F7F7F7',
      border: '1px solid #EDEDED',
      color: '#99A2AD',
      '&:hover': {
        background: '#F7F7F7',
        cursor: 'block'
      }
    },
    loading: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: '0',
      top: '0',
      background: hexToRgb('#efefef', '0.8'),
      borderRadius: '4px',
      '& i': {
        '&:before': {display: 'none'},
        color: MAIN_COLOR,
        fontWeight: 'bold'
      }
    }
  })
)

const Button = props => {
  const {
    className,
    classes,
    text,
    type,
    alternate,
    light,
    fullWidth,
    children,
    style,
    color,
    bordered,
    disabled,
    loading,
    submitType,
    ...defaultProps
  } = props

  return (
    <button
      className={classNames(classes.button, className, {
        [classes.small]: type === 'small',
        [classes.medium]: type === 'medium',
        [classes.large]: type === 'large',
        [classes.xs]: type === 'xs',
        [classes.fullWidth]: fullWidth,
        [classes.alternate]: alternate,
        [classes.light]: light,
        [classes.grey]: color === GREY,
        [classes.yellow]: color === YELLOW,
        [classes.bordered]: bordered,
        [classes.disabled]: disabled,
        [classes.white]: color === WHITE
      })}
      type={submitType}
      {...defaultProps}
      style={style}
      disabled={disabled}
    >
      {children || <T>{text}</T>}
      {loading && <span className={classes.loading}><Icon type={'loading'}/></span>}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.node,
  type: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
  fullWidth: PropTypes.bool,
  loading: PropTypes.bool,
  color: PropTypes.oneOfType([GREY, WHITE, YELLOW]),
  bordered: PropTypes.bool,
  light: PropTypes.bool,
  submitType: PropTypes.string
}

export default enhance(Button)
