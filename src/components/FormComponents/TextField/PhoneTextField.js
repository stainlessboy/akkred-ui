import React from 'react'
import fp from 'lodash/fp'
import PropTypes from 'prop-types'
import {compose, mapPropsStream, withState, createEventHandler} from 'recompose'
import injectSheet from 'react-jss'
import axios from 'helpers/axiosHelper'
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
import hexToRgb from '../../../helpers/hexToRgb'
import {COUNTRY_FLAG_LIST} from '../../../constants/api'
const FROM = 1
const TO = 4
const enhance = compose(
  withState('country', 'setCountry', []),
  withState('flag', 'setFlag', null),
  mapPropsStream(props$ => {
    props$
      .first()
      .subscribe(props => {
        axios({}, true)
          .get(COUNTRY_FLAG_LIST, {params: {'page_size': '300'}})
          .then(response => {
            return props.setCountry(fp.get('data.results', response))
          })
          .catch(errr => errr)
        return null
      })

    const {handler: onPress, stream: onPress$} = createEventHandler()

    onPress$
      .withLatestFrom(props$)
      .subscribe(([value, {country, setFlag, ...props}]) => {
        const onlyNum = value.substring(FROM, TO)
        return fp.flow(
          fp.filter(item => fp.startsWith(onlyNum, item.phoneCode)),
          fp.head,
          setFlag
        )(country)
      })

    return props$.combineLatest(props => {
      return {
        ...props,
        onPress
      }
    })
  }),
  injectSheet({
    wrapper: {},
    inputWrapper: {
      border: FIELD_BORDER_STYLE,
      borderRadius: '4px',
      background: '#fff',
      position: 'relative',
      ...fallbacksStyle('display', 'flex'),
      ...crossBrowserify('alignItems', 'center'),
      ...crossBrowserify('justifyContent', 'center')
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
      border: 'none',
      borderRadius: '4px',
      height: '43px',
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
      height: '53px'
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

const PhoneTextField = (props) => {
  const {
    input,
    classes,
    label,
    label2,
    postfix,
    type,
    required,
    width,
    onPress,
    meta: {error, touched, submitFailed},
    errorText,
    ...defaultProps
  } = props
  return (
    <div className={classes.wrapper}>
      <Label required={required} label={label}/>
      <Label2 label={label2}/>
      <div
        style={{width}}
        className={classNames({
          [classes.inputWrapper]: true,
          [classes.errorBorder]: error
        })}>
        <input
          type={type}
          {...defaultProps}
          {...input}
          onChange={(p, a) => {
            onPress(p.target.value)
            input.onChange(p)
          }}
          className={classNames({
            [classes.inputField]: true
          })}
        />
        {postfix && <div className={classes.postfix}>{postfix}</div>}

      </div>
      {(error || submitFailed) && touched && <span className={classes.errorText}>{error || errorText}</span>}
    </div>
  )
}

PhoneTextField.propTypes = {
  overflow: PropTypes.bool
}

PhoneTextField.defaultProps = {
  prefix: null
}

export default enhance(PhoneTextField)
