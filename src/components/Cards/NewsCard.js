import React from 'react'
import {compose} from 'recompose'
import {prop, path, pathOr} from 'ramda'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import Link from 'components/Link'
import dateFormat from 'helpers/dateFormat'
import {NEWS_ITEM_URL} from 'constants/routes'
import sprintf from 'sprintf'

import {
  BACKGROUND_COLOR,
  ANCHOR_DISABLED, BLACK_COLOR
} from '../../constants/design'

const style = {
  // newsWrap: {
  //   display: 'block',
  //   ...ANCHOR_DISABLED,
  //   borderRadius: '4px',
  //   padding: '30px 0 22px 0'
  // },
  img: {
    marginBottom: '20px',
    height: '196px',
    backgroundColor: BACKGROUND_COLOR,
    backgroundSize: 'cover'
  },
  title: {
    fontWeight: '600',
    lineHeight: '34px',
    fontSize: '20px',
    color: BLACK_COLOR,
    marginBottom: '8px',
    marginTop: '5px'
  },
  date: {
    color: 'rgba(48, 68, 89, 0.7)',
    fontSize: '16px'
  },
  newsImage: {
    width: '100%',
    // Height: '50%'
    height: '240px',
    borderRadius: '10px 10px 0 0 '

  },
  newDate: {
    paddingLeft: '9px',
    marginTop: '10px',
    color: '#8287c5',
    fontweight: '500',
    fontsize: '15px'

  },
  newText: {
    padding: '10px',
    display: 'block',
    textOverflow: 'ellipsis',
    wordWrap: 'inherit',
    overflow: 'hidden',
    height: '7em',
    fontSize: '18px',
    color: '#1e2ab9',
    fontFamily: '"Montserrat-Medium", sans-serif',
  },
  mediaWrap: {
    margin: '10px',
    borderRadius: '10px',

    background: '#fff',
    boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)',
    height: '430px',
    paddingBottom: '10px'
  },
  newMore: {
    color: '#1e227e',
    fontSize: '15px',
    fontFamily: 'Montserrat-Medium, sans-serif',
    display: ' block',
    marginLeft: '10px',
    marginBottom: '10px',

  }
}
const enhance = compose(
  injectSheet(style)
)
const NewsCard = props => {
  const {classes, data} = props
  const id = prop('id', data)
  const title = prop('title', data) || 'Сервис растет, помогите его улучшить для вас'
  const imageUrl = path(['photo', 'file'], data) || 'Сервис растет, помогите его улучшить для вас'
  const createdDate = dateFormat(prop('createdDate', data)) || '12 февраля 2019'

  return (
    <Link to={sprintf(NEWS_ITEM_URL, id)}>
      <div className={classes.mediaWrap}>
        <img className={classes.newsImage} src={imageUrl} alt=""/>
        <div className={classes.newDate}>{createdDate}
        </div>
        <div className={classes.newText}>{title}
        </div>
        <div className={classes.newMore}>
          Подробнее...
        </div>
      </div>
    </Link>
  )
}

NewsCard.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired
}

export default enhance(NewsCard)
