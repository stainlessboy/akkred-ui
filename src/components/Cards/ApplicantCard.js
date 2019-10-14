import _ from 'lodash'
import React from 'react'
import PropTypes from 'prop-types'
import {compose} from 'recompose'
import injectSheet from 'react-jss'
import classNames from 'classnames'
import Image from 'images/myjob.png'
import Favorite from 'icons/Popular'
import ProfilePic from 'components/ProfilePic'
import {
  crossBrowserify,
  fallbacksStyle,
  GREY_BORDER_STYLE, BLACK_COLOR, FADE_IN_ANIMATE
} from 'constants/styles'
import hexToRgb from '../../helpers/hexToRgb'
import sprintf from 'sprintf'
import {TASK_ITEM} from '../../constants/routes'
import Link from 'components/Link'

const enhance = compose(
  injectSheet({
    resume: {
      ...fallbacksStyle('display', 'flex'),
      fontSize: '12px',
      overflow: 'hidden',
      width: '100%',
      border: GREY_BORDER_STYLE,
      animationName: 'fadeIn',
      animationDuration: '2s',
      borderRadius: '4px'
    },
    ...FADE_IN_ANIMATE,
    image: {
      padding: '0 20px',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      ...fallbacksStyle('display', 'flex'),
      ...crossBrowserify('alignItems', 'center'),
      ...crossBrowserify('justifyContent', 'center')
    },

    body: {
      padding: '20px 13px 18px 0',
      position: 'relative',
      width: '100%'
    },

    header: {
      ...fallbacksStyle('display', 'flex'),
      ...crossBrowserify('justifyContent', 'space-between'),
      marginBottom: '3px',
      lineHeight: '1.57',
      color: BLACK_COLOR,
      fontWeight: '500',
      fontSize: '14px'
    },

    desc: {
      overflow: 'hidden',
      lineHeight: '1.62',
      fontSize: '13px',
      color: hexToRgb(BLACK_COLOR, '0.7'),
      marginTop: '1px'
    },
    rating: {
      extend: 'desc',
      marginTop: '6px'
    }
  })
)

const ApplicantCard = ({data, smooth, ...props}) => {
  const {classes} = props
  const name = _.get(data, 'title')
  const id = _.get(data, 'id')
  const experience = _.get(data, 'isExperienced') ? '3 года' : 'без опыта'
  return (
    <Link
      to={sprintf(TASK_ITEM, id)}
      smooth={smooth}
      className={classNames(classes.resume)}>
      <div className={classes.image}>
        <ProfilePic type={'mini'} image={Image}/>
      </div>
      <div className={classes.body}>
        <div className={classes.header}>{name}</div>
        <div className={classes.desc}>Опыт: {experience}</div>
        <div className={classes.desc}>Образование: Средне-специальное</div>
        <div className={classes.rating}><Favorite/> 3.4/5</div>
      </div>
    </Link>
  )
}

ApplicantCard.propTypes = {
  data: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  smooth: PropTypes.bool

}

export default enhance(ApplicantCard)
