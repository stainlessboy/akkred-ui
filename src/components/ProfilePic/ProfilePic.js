import React from 'react'
import PropTypes from 'prop-types'
import {compose} from 'recompose'
import injectSheet from 'react-jss'
import {
  crossBrowserify, fallbacksStyle
} from 'constants/styles'
import classNames from 'classnames'
import Image from 'images/myjob.png'

const enhance = compose(
  injectSheet({
    wrapper: {
      height: '126px',
      width: '126px',
      minWidth: '126px',
      borderRadius: '50%',
      display: 'inline-block',
      background: '#fefefe',
      // .     border: 'solid 1px rgba(149, 152, 154, 0.45)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      border: 'none'
    },
    mini: {
      height: '71px',
      minWidth: '71px',
      width: '71px'
    },
    xs: {
      height: '52px',
      width: '52px',
      minWidth: '52px'
    },
    xxs: {
      height: '27px',
      width: '27px',
      minWidth: '27px'
    },
    medium: {
      height: '112px',
      width: '112px',
      minWidth: '112px',
    },
    large: {
      height: '240px',
      width: '240px',
      minWidth: '240px',
    },
    square: {
      borderRadius: '4px'
    },
    socials: {
      ...fallbacksStyle('display', 'flex'),
      ...crossBrowserify('alignItems', 'center'),
      ...crossBrowserify('justifyContent', 'center'),
      marginTop: '15px'
    }
  })
)

const ProfilePic = ({className, image, type, classes, square, ...defaultProps}) => {
  const mini = type === 'mini'
  const medium = type === 'medium'
  const large = type === 'large'
  const xs = type === 'xs'
  const xxs = type === 'xxs'
  return (
    <div className={classNames({
      [classes.wrapper]: true,
      [className]: true,
      [classes.xs]: xs,
      [classes.xxs]: xxs,
      [classes.mini]: mini,
      [classes.medium]: medium,
      [classes.large]: large,
      [classes.square]: square
    })}
    style={{backgroundImage: `url(${image || Image})`}}
    >
    </div>
  )
}

ProfilePic.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  fullWidth: PropTypes.bool,
  image: PropTypes.string,
  type: PropTypes.string,
  square: PropTypes.bool
}

ProfilePic.defaultProps = {
  square: false
}

export default enhance(ProfilePic)
