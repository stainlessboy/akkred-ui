import React from 'react'
import Slider from 'antd/lib/slider'
import Input from 'antd/lib/input/Input'
import {compose, mapPropsStream, withState} from 'recompose'
import injectSheet from 'react-jss'
import toInteger from 'lodash/fp/toInteger'
import {PRIMARY_COLOR} from '../../constants/design'
const ZERO = 0
const ONE = 1
const enhance = compose(
  withState('value', 'setVal', {}),
  mapPropsStream(props$ => {
    props$
      .first()
      .subscribe(({setVal, max, min}) => {
        setVal({
          slide: [min, max],
          from: min,
          to: max
        })
      })
    return props$
  }),
  injectSheet({
    wrapSlide: {
      '& .ant-slider-track': {
        background: PRIMARY_COLOR + '!important',
        height: '10px'
      },
      '& .ant-slider-rail': {
        height: '10px'
      },
      '& .ant-slider-step': {
        height: '10px'

      },
      '& .ant-slider-handle': {
        height: '16px',
        width: '16px',
        border: 'none',
        boxShadow: '0px 3px 16px rgba(0, 0, 0, 0.24)'

      }
    },
    sliderRange: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      lineHeight: '40px !important',
      '& > div': {
        '&:first-child': {
          width: 'calc(50% - 10px)'
        },
        '&:last-child': {
          width: 'calc(50% - 10px)'
        }
      },
      '& .ant-input': {
        '&:first-child': {marginRight: '10px'},
        '&:last-child': {marginLeft: '10px'}
      }

    }

  })
)

const changeFrom = (from, props) => {
  const values = props.value
  const postFrom = from < props.min ? props.min : from
  return props.setVal({
    ...values,
    from: postFrom,
    slide: [postFrom, values.to]
  })
}
const changeTo = (to, props) => {
  const values = props.value
  const postTo = to < values.from ? values.from : to
  return props.setVal({
    ...values,
    to: postTo,
    slide: [values.from, postTo]
  })
}
const changeSlide = (slide, props) => {
  return props.setVal({
    slide,
    from: slide[ZERO],
    to: slide[ONE]
  })
}

const onBlur = (props) => {
  const values = props.value
  const to = values.to < values.from ? values.from : values.to
  const from = values.from > values.to ? values.to : values.from
  return props.setVal({
    slide: [from, to],
    from,
    to
  })
}

const onValueChange = (props) => {
  return props.input.onChange(props.value)
}

const SliderWrapper = props => {
  const {classes, max, min, value} = props
  return (
    <div className={classes.wrapSlide}>
      <div className={classes.sliderRange}>
        <Input
          value={value && value.from}
          onPressEnter={() => onValueChange(props)}
          onChange={ev => changeFrom(toInteger(ev.target.value), props)}
        />
        &#8213;
        <Input
          value={value && value.to}
          onBlur={() => onBlur(props)}
          onPressEnter={() => onValueChange(props)}
          onChange={ev => {
            changeTo(toInteger(ev.target.value), props)
          }}
        />
      </div>
      <Slider
        min={min}
        max={max}
        range={true}
        step={100}
        tipFormatter={null}
        className={classes.slider}
        onAfterChange={() => onValueChange(props)}
        value={value && value.slide}
        onChange={val => changeSlide(val, props)}
      />
    </div>
  )
}

export default enhance(SliderWrapper)
