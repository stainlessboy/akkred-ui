import React from 'react'
import {compose} from 'recompose'
import {prop, path, pathOr} from 'ramda'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import Link from 'components/Link'
import dateFormat from 'helpers/dateFormat'
import {RUKOVODITELI_ITEM, RUKOVODITELI_URL} from 'constants/routes'
import sprintf from 'sprintf'
import stat1 from 'images/stat1.png'
import News from 'images/tashkent.jpg'
import Hasanboy from 'images/Hasanboy.jpg'

import {
  BACKGROUND_COLOR,
  ANCHOR_DISABLED, BLACK_COLOR
} from '../../constants/design'
import News1 from '../../images/tashkent.jpg'
import {Col} from 'antd'

const style = {
  mediaWrap: {
    display: 'flex',
    background: '#fff',
    borderRadius: '0 0 4px 4px',
    boxShadow: '0 1px 5px 0 rgba(0, 0, 0, 0.04)',
    backgroundColor: '#FFF',
    border: '1px solid #EEE',
    padding: '25px 10px 20px 20px',
    marginBottom: '30px'
  },
  imageWrap: {
    marginRight: '18px'
  },
  mainTextWrapper: {
    color: '#115185',
    fontSize: '22px'

  },
  textWrapper: {
    fontSize: '18px',
    color: '#000',
    fontFamily: '\'Montserrat-Regular\', sans-serif'

  },
  socialWrapper: {
    fontSize: '16px',
    color: '#222',
    backgroundColor: 'transparent',
    marginTop: '5px'
    // FontFamily: '"Montserrat-Regular", sans-serif'
  }
}
const enhance = compose(
  injectSheet(style)
)
const EmployerCard = props => {
  const {classes, data} = props
  const id = prop('id', data)
  // Const title = prop('title', data) || 'Сервис растет, помогите его улучшить для вас'
  // Const imageUrl = path(['image', 'file'], data) || 'Сервис растет, помогите его улучшить для вас'
  // Const createdDate = dateFormat(prop('createdDate', data)) || '12 февраля 2019'
  // Const img = pathOr(Task, ['gallery', '0', 'file'], data)

  return (
    <Link to={sprintf(RUKOVODITELI_ITEM, id)}>
      <div className={classes.mediaWrap}>
        <div className={classes.imageWrap}>
          <img style={{
            height: '200px',
            width: '200px'
          }} src={Hasanboy} alt=""/>
        </div>
        <div>
          <div className={classes.mainTextWrapper}>Умурзаков Сардор Уктамович</div>
          <div className={classes.textWrapper}>Вазир</div>
          <div className={classes.socialWrapper}>info@mift.uz</div>
          <div className={classes.socialWrapper}> +998 (71) 238-50-00</div>
          <div className={classes.socialWrapper}> More ...</div>
        </div>
      </div>
    </Link>

  )
}

EmployerCard.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired
}

export default enhance(EmployerCard)
