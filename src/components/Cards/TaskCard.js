import React from 'react'
import {compose} from 'recompose'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import Link from 'components/Link'
import Task from 'images/task.png'
import DateIcon from 'icons/Date'
import {prop, pathOr} from 'ramda'
import numberFormat from 'helpers/numberFormat'
import Location from 'icons/Location'
import {TASK_ITEM} from 'constants/routes'
import {
  ANCHOR_DISABLED,
  fallbacksStyle,
  crossBrowserify,
  PRIMARY_COLOR
} from '../../constants/design'
import sprintf from 'sprintf'
const style = {
  taskWrap: {
    display: 'block',
    ...ANCHOR_DISABLED,
    padding: '20px 20px 24px 0',
    maxHeight: '123px',
    borderBottom: '1px solid #ECECEC',
    ...fallbacksStyle('display', 'flex'),
    ...crossBrowserify('alignItems', 'center'),
    ...crossBrowserify('justifyContent', 'space-between')
  },
  infoWrap: {
    ...fallbacksStyle('display', 'flex'),
    ...crossBrowserify('alignItems', 'center')
  },
  taskName: {
    marginRight: '30px',
    fontSize: '16px',
    lineHeight: '22px',
    maxHeight: '44px',
    marginBottom: '13px',
    overflow: 'hidden'
  },
  img: {
    marginRight: '20px',
    width: '76px',
    height: '78px',
    padding: '14px 4px',
    border: '1px solid #EDEDED',
    borderRadius: '6px'
  },
  info: {
    ...fallbacksStyle('display', 'flex'),
    '& svg': {
      marginRight: '5px'
    }
  },
  date: {
    background: '#F6F8FB',
    borderRadius: '12px',
    padding: '3px 12px',
    display: 'inline-block',
    lineHeight: '20px'
  },
  location: {
    maxWidth: 'calc(100% - 180px)',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    marginLeft: '27px',
    display: 'inline-block',
    '& span': {
      borderBottom: 'dashed #8C9CAD 1px'
    }
  },
  priceLabel: {
    color: '#8C9CAD',
    lineHeight: '24px'
  },
  price: {
    whiteSpace: 'nowrap',
    color: PRIMARY_COLOR,
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '24px'
  }
}
const enhance = compose(
  injectSheet(style)
)
const MasterCard = props => {
  const {classes, data} = props

  const title = prop('title', data)
  const id = prop('id', data)
  const address = prop('address', data)
  const img = pathOr(Task, ['gallery', '0', 'file'], data)
  const district = pathOr('', ['district', 'name'], data)
  const price = numberFormat(prop('price', data), 'сум')

  return (
    <Link className={classes.taskWrap} to={sprintf(TASK_ITEM, id)}>
      <div className={classes.infoWrap}>
        <img className={classes.img} src={img} alt="img"/>
        <div>
          <div className={classes.taskName}>{title}</div>
          <div className={classes.info}>
            <span className={classes.date}><DateIcon/> Сегодня в 17:00</span>
            <span className={classes.location}><Location/><span> {district} {address}</span></span>
          </div>
        </div>
      </div>
      <div>
        <div className={classes.priceLabel}>Оплата до</div>
        <div className={classes.price}>{price}</div>
      </div>
    </Link>
  )
}

MasterCard.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired
}

export default enhance(MasterCard)
