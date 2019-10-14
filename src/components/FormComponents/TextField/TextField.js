import React from 'react'
import PropTypes from 'prop-types'
import {compose} from 'recompose'
import injectSheet from 'react-jss'
import {
  BORDER_COLOR,
  crossBrowserify,
  fallbacksStyle,
  FIELD_BORDER_STYLE,
  TEXT_COLOR_DEFAULT
} from 'constants/styles'
import classNames from 'classnames'
import Label from 'components/FormComponents/FieldLabel'
import Label2 from 'components/FormComponents/FieldLabel/FieldLabel2'
import InputNumber from 'antd/lib/input-number'
import hexToRgb from '../../../helpers/hexToRgb'

const enhance = compose(
  injectSheet({
    wrapper: {},
    inputWrapper: {
      border: FIELD_BORDER_STYLE,
      borderRadius: '6px',
      background: '#FCFCFC',
      position: 'relative',
      ...fallbacksStyle('display', 'flex'),
      ...crossBrowserify('alignItems', 'center'),
      ...crossBrowserify('justifyContent', 'center')
    },
    overflow: {
      overflow: 'hidden'
    },
    prefix: {
      ...fallbacksStyle('display', 'flex'),
      ...crossBrowserify('alignItems', 'center'),
      ...crossBrowserify('justifyContent', 'center'),
      position: 'absolute',
      top: '0',
      left: '17px',
      bottom: '0',
      '& > svg': {
        fontSize: '20px'
      }
    },
    postfix: {
      ...fallbacksStyle('display', 'flex'),
      ...crossBrowserify('alignItems', 'center'),
      ...crossBrowserify('justifyContent', 'center'),
      '& > svg': {
        fontSize: '20px'
      }
    },
    inputField: {
      background: '#FCFCFC',
      border: 'none',
      borderRadius: '6px',
      height: '50px',
      ...crossBrowserify('transition', 'all 300ms'),
      color: TEXT_COLOR_DEFAULT,
      fontSize: '15px',
      padding: '5px 15px',
      outline: 'none',
      width: '100%',
      '&::placeholder': {
        color: hexToRgb('#a1a7b3', '0.8')
      }
    },
    bigInput: {
      height: '43px'
    },
    inputNumber: {
      border: FIELD_BORDER_STYLE,
      borderRadius: 'unset',
      boxShadow: 'none !important',
      color: TEXT_COLOR_DEFAULT,
      fontFamily: 'inherit',
      '& .ant-input-number-input': {
        borderRadius: 'unset',
        color: TEXT_COLOR_DEFAULT,
        padding: '0 15px'
      },
      '& .ant-input-number-handler-wrap': {
        display: 'none'
      },
      '&:hover, &:focus': {
        borderColor: BORDER_COLOR
      }
    },
    inputFieldPrefix: {
      paddingLeft: '38px'
    },
    errorText: {
      paddingTop: '3px',
      fontSize: '13px',
      color: '#dc6b8a',
      left: '0'
    },
    errorBorder: {
      borderColor: '#fa2279'
    }
  })
)

const TextField = (props) => {
  const {
    input,
    className,
    classes,
    label,
    label2,
    prefix,
    postfix,
    type,
    required,
    width,
    big,
    hint,
    overflow,
    wrapperClass,
    meta: {error, touched, submitFailed},
    errorText,
    ...defaultProps
  } = props

  const getFieldByType = () => {
    switch (type) {
      case 'number': return (
        <InputNumber
          {...defaultProps}
          onChange={input.onChange}
          value={input.value}
          className={classNames(classes.inputNumber, className, {
            [classes.inputFieldPrefix]: prefix
          })}
        />
      )
      default: return (
        <input
          type={type}
          {...defaultProps}
          {...input}
          className={classNames({
            [className]: true,
            [classes.inputField]: true,
            [classes.inputFieldPrefix]: prefix,
            [classes.bigInput]: big
          })}
        />
      )
    }
  }
  return (
    <div className={classes.wrapper}>
      <Label hint={hint} required={required} label={label}/>
      <Label2 hint={hint} label={label2}/>
      <div
        style={{width}}
        className={classNames({
          [classes.inputWrapper]: true,
          [wrapperClass]: true,
          [classes.overflow]: overflow,
          [classes.errorBorder]: error
        })}>
        {prefix && <div className={classes.prefix}>{prefix}</div>}
        {getFieldByType()}
        {postfix && <div className={classes.postfix}>{postfix}</div>}

      </div>
      {(error || submitFailed) && touched && <span className={classes.errorText}>{error || errorText}</span>}
    </div>
  )
}

TextField.propTypes = {
  prefix: PropTypes.node,
  overflow: PropTypes.bool,
  type: PropTypes.oneOf(['text', 'number', 'password'])
}

TextField.defaultProps = {
  prefix: null,
  overflow: true
}

export default enhance(TextField)
