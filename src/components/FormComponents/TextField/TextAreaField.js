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
import Label from 'components/FormComponents/FieldLabel/FieldLabel2'
import TextArea from 'antd/lib/input/TextArea'

const enhance = compose(
  injectSheet({
    inputWrapper: {
      position: 'relative'
    },
    prefix: {
      ...fallbacksStyle('display', 'flex'),
      ...crossBrowserify('alignItems', 'center'),
      ...crossBrowserify('justifyContent', 'center'),
      position: 'absolute',
      top: '0',
      left: '15px',
      bottom: '0',
      '& > svg': {
        fontSize: '20px'
      }
    },
    inputField: {
      ...crossBrowserify('transition', 'all 300ms'),
      border: FIELD_BORDER_STYLE,
      borderRadius: '4px',
      color: TEXT_COLOR_DEFAULT,
      fontSize: '13px',
      padding: '5px 15px',
      outline: 'none',
      height: '32px',
      width: '100%'
    },
    inputNumber: {
      border: FIELD_BORDER_STYLE,
      borderRadius: '4px',
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
      paddingLeft: '50px'
    },
    errorText: {
      paddingTop: '3px',
      fontSize: '13px',
      color: '#dc6b8a',
      left: '0'
    }
  })
)

const TextField = (props) => {
  const {
    input,
    className,
    classes,
    label,
    prefix,
    meta: {error, touched, submitFailed},
    errorText,
    ...defaultProps
  } = props

  return (
    <div className={classes.wrapper}>
      <Label label={label}/>
      <div className={classes.inputWrapper}>
        {prefix && <div className={classes.prefix}>{prefix}</div>}
        <TextArea
          className={classNames(classes.inputNumber, className, {
            [classes.inputFieldPrefix]: prefix
          })}
          {...defaultProps}
          {...input}/>
      </div>
      {(error || submitFailed) && touched && <span className={classes.errorText}>{error || errorText}</span>}
    </div>
  )
}

TextField.propTypes = {
  prefix: PropTypes.node
}

TextField.defaultProps = {
  prefix: null
}

export default enhance(TextField)
