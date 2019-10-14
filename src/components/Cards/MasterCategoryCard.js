import React from 'react'
import {compose} from 'recompose'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import Link from 'components/Link'
import Air from 'icons/Air'
import {
  BACKGROUND_COLOR,
  ANCHOR_DISABLED, BLACK_COLOR
} from '../../constants/design'
const style = {
  masterWrap: {
    display: 'block',
    ...ANCHOR_DISABLED,
    borderRadius: '4px',
    padding: '30px',
    paddingRight: '22px',
    background: BACKGROUND_COLOR
  },
  categoryName: {
    fontWeight: '600',
    lineHeight: '34px',
    fontSize: '20px',
    color: BLACK_COLOR,
    marginBottom: '8px',
    marginTop: '24px'
  },
  masterCount: {
    color: 'rgba(48, 68, 89, 0.9)',
    fontSize: '16px'
  }
}
const enhance = compose(
  injectSheet(style)
)
const MasterCard = props => {
  const {classes} = props

  return (
    <Link className={classes.masterWrap} to={'/'}>
      <Air/>
      <div className={classes.categoryName}>Ремонт и обслуживание систем кондиционирования</div>
      <div className={classes.masterCount}>Более 200 мастеров</div>
    </Link>
  )
}

MasterCard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default enhance(MasterCard)
