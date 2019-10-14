import React from 'react'
import {compose} from 'recompose'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import {prop} from 'ramda'
import T from 'components/Translate'
import {
  BACKGROUND_COLOR,
  ANCHOR_DISABLED, BLACK_COLOR
} from '../../constants/design'
import CreditIcon from '../../icons/CreditIcon'
const style = {
  creditWrap: {
    display: 'block',
    ...ANCHOR_DISABLED,
    borderRadius: '4px',
    padding: '30px',
    paddingRight: '22px',
    paddingBottom: '0',
    background: BACKGROUND_COLOR
  },
  title: {
    fontWeight: '600',
    lineHeight: '34px',
    fontSize: '20px',
    color: BLACK_COLOR,
    marginBottom: '8px',
    marginTop: '12px'
  },
  desc: {
    color: 'rgba(48, 68, 89, 0.9)',
    fontSize: '16px'
  },
  icon: {
    background: 'rgba(103, 112, 230, 0.06)',
    padding: '10px 10px 13px',
    borderRadius: '12px',
    display: 'inline-block'
  }
}
const enhance = compose(
  injectSheet(style)
)
const CreditCard = props => {
  const {classes, data} = props
  const text = prop('text', data)
  const title = prop('title', data)
  return (
    <div className={classes.creditWrap}>
      <span className={classes.icon}>
        <CreditIcon/>
      </span>
      <div className={classes.title}><T>{title}</T></div>
      <div className={classes.desc}><T>{text}</T></div>
    </div>
  )
}

CreditCard.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired
}

export default enhance(CreditCard)
