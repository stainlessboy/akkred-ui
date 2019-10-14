import React from 'react'
import PropTypes from 'prop-types'
import {compose} from 'recompose'
import injectSheet from 'react-jss'
import ProfilePic from './ProfilePic'
import {
  crossBrowserify, fallbacksStyle
} from 'constants/styles'

const enhance = compose(
  injectSheet({
    infoData: {
      ...fallbacksStyle('display', 'flex'),
      ...crossBrowserify('alignItems', 'center')
    },
    type: {
      lineHeight: '24px',
      color: '#93A2B3'
    },
    infoName: {
      fontWeight: '500',
      fontSize: '18px',
      lineHeight: '26px',
      color: '#011933'
    }
  })
)

const ProfileInfo = ({image, type, classes, name, ...defaultProps}) => {
  const person = type === 'client' ? 'Заказчик' : 'Мастер'
  return (
    <div className={classes.infoData}>
      <ProfilePic type={'xs'} image={image}/>
      <div style={{marginLeft: '10px'}}>
        <div className={classes.type}>{person}</div>
        <div className={classes.infoName}>{name}</div>
      </div>
    </div>
  )
}

ProfileInfo.propTypes = {
  classes: PropTypes.object.isRequired,
  image: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string
}

ProfileInfo.defaultProps = {
  type: 'executor'
}

export default enhance(ProfileInfo)
