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
  ANCHOR_DISABLED, BLACK_COLOR, fallbacksStyle, crossBrowserify
} from '../../constants/design'
import News1 from '../../images/tashkent.jpg'
import {Col} from 'antd'

const style = {
  newsWrap: {
    display: 'block',
    ...ANCHOR_DISABLED,
    borderRadius: '4px',
    padding: '30px 0 22px 0'
  },
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
    height: '240px'
  },
  newDate: {
    paddingLeft: '9px',
    color: '#8b8b8b',
    fontsize: '15px'

  },
  newText: {
    fontSize: '18px'
  },
  mediaWrap: {
    margin: '10px',
    borderRadius: '5px',
    background: '#fff',
    boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)'
  }
}
const enhance = compose(
  injectSheet(style)
)
const DocumentCard = props => {
  const {classes, data} = props
  const id = prop('id', data)
  const title = prop('title', data) || 'Сервис растет, помогите его улучшить для вас'
  const file = path(['file', 'file'], data)

  return (

    <div
      // ClassName={classes.mediaWrap}
      style={{
        ...fallbacksStyle('display', 'flex'),
        ...crossBrowserify('alignItems', 'center'),
        ...crossBrowserify('justifyContent', 'space-between'),
        border: '2px solid #f2f2f2',
      }}
    >
      <div className={classes.newText}>{title}
      </div>
      <div className={classes.newText}><a href={file} target='_blank'>скачать</a>
      </div>
    </div>

  )
}

DocumentCard.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired
}

export default enhance(DocumentCard)
