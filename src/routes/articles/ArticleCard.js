import _ from 'lodash'
import React from 'react'
import PropTypes from 'prop-types'
import {compose} from 'recompose'
import injectSheet from 'react-jss'
import classNames from 'classnames'
import {
  FIELD_BORDER_COLOR,
  DATE_COLOR,
  GREY_BORDER_STYLE,
  BLACK_COLOR,
  ANCHOR_DISABLED
} from 'constants/styles'
import hexToRgb from '../../helpers/hexToRgb'
import dateFormat from 'helpers/dateFormat'
import Link from '../../components/Link'

const enhance = compose(
  injectSheet({
    itemWrapper: {
      ...ANCHOR_DISABLED,
      display: 'block',
      marginBottom: '20px',
      borderRadius: '4px',
      border: GREY_BORDER_STYLE,
      overflow: 'hidden'
    },
    noImageWrapper: {
      paddingTop: '78px',
      backgroundColor: hexToRgb(FIELD_BORDER_COLOR, '0.4'),
      '& > div': {
        height: '258px'
      }

    },
    item: {
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative',
      height: '336px'
    },
    image: {
      backgroundPosition: 'center',
      backgroundSize: '100%',
      height: '50%'
    },
    text: {
      position: 'relative',
      fontFamily: '\'Montserrat\', sans-serif',
      color: BLACK_COLOR,
      padding: '12px 20px',
      height: '50%'
    },
    tag: {
      borderRadius: '5px',
      position: 'absolute',
      left: '20px',
      bottom: 'calc(100% + 15px)',
      background: '#5e77ff',
      fontSize: '12px',
      fontWeight: '500',
      color: '#fff',
      lineHeight: '25px',
      padding: '0 10px'
    },
    article: {
      background: '#F9AE46'
    },
    tagNoImage: {
      bottom: 'calc(100% + 3px)'
    },
    link: {
      //      Background: hexToRgb('#c6cbd4', '0.1')
    },
    date: {
      color: DATE_COLOR
    },
    title: {
      fontSize: '14px',
      fontWeight: '500',
      lineHeight: '1.57',
      maxHeight: '3.14em',
      overflow: 'hidden',
      margin: '3px 0'
    },
    description: {
      fontSize: '13px',
      fontWeight: 'normal',
      color: hexToRgb(BLACK_COLOR, '0.7'),
      lineHeight: '1.62',
      maxHeight: '4.86em',
      overflow: 'hidden'
    },
    moreButton: {
      cursor: 'pointer',
      position: 'absolute',
      padding: '7px 16px',
      right: '0',
      top: 'calc(50% - 19px)',
      '& > div': {
        background: '#95989A',
        borderRadius: '50%',
        marginTop: '3px',
        height: '6px',
        width: '6px',
        '&:first-child': {
          marginTop: '0'
        }
      }
    }
  })
)

const ArticleCard = props => {
  const {classes, data, id, smooth} = props
  const title = _.get(data, 'title')
  const description = _.get(data, 'description')
  const image = _.get(data, 'photo.file')
  const isArticle = _.get(data, 'type') === 'article'
  const link = _.get(data, 'link')
  const date = dateFormat(_.get(data, 'createdDate'))
  const tagName = isArticle ? 'Статья' : 'Новость'
  // Const query = paramsToQuery(_.get(hashHistory, ['location', 'search']))
  // Const openServicesDialog = toBoolean(_.get(query, 'servicesDialog'))
  return (
    <Link
      smooth={smooth}
      to={`/articles/${id}`}
      className={classNames({
        [classes.itemWrapper]: true,
        [classes.noImageWrapper]: !image
      })}>
      <div className={classes.item}>
        {image && (
          <div className={classes.image} style={{backgroundImage: `url(${image}`}} alt="image"/>
        )}
        <div className={classNames(classes.text, {[classes.link]: link})}>
          <div className={classNames({
            [classes.tag]: true,
            [classes.tagNoImage]: !image,
            [classes.article]: isArticle
          })}>{tagName}</div>
          <div className={classes.date}>{date}</div>
          <div className={classes.title}>{title}</div>
          <div className={classes.description} >{description}</div>
        </div>
      </div>
    </Link>
  )
}

ArticleCard.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  smooth: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired
}

ArticleCard.defaultProps = {
  smooth: false
}

export default enhance(ArticleCard)
