import React from 'react'
import PropTypes from 'prop-types'
import {compose} from 'recompose'
import injectSheet from 'react-jss'
import {BLACK_COLOR} from '../../constants/design'
import classNames from 'classnames'
import T from 'components/Translate'

const enhance = compose(
  injectSheet({
    title: {
      marginBottom: '24px',
      fontWeight: '600',
      margin: '0',
      lineHeight: '1.91',
      position: 'relative',
      fontSize: '22px',
      color: BLACK_COLOR
    },
    isProfile: {
      fontSize: '18px',
      lineHeight: '2.33',
      fontWeight: '500',
      marginBottom: '16px'
    },
    small: {
      fontSize: '16px',
      lineHeight: '2.63',
      fontWeight: 'normal'
    },
    large: {
      fontSize: '35px',
      fontWeight: 'bold',
      lineHeight: '53px'
    },
    medium: {
      fontSize: '26px',
      fontWeight: '600'
    }
  })
)

const Title = props => {
  const {
    className,
    classes,
    type,
    margin,
    text,
    isProfile,
    fontSize,
    children,
    style,
    ...defaultProps
  } = props

  const small = type === 'small'
  const medium = type === 'medium'
  const large = type === 'large'
  return (
    <h2 className={classNames(className, {
      [classes.title]: true,
      [classes.small]: small,
      [classes.medium]: medium,
      [classes.large]: large,
      [classes.isProfile]: isProfile
    })} {...defaultProps} style={{fontSize, margin, ...style}}>{children || <T>{text}</T>}</h2>
  )
}

Title.propTypes = {
  className: PropTypes.string,
  fontSize: PropTypes.string,
  text: PropTypes.node,
  margin: PropTypes.string,
  isProfile: PropTypes.bool,
  type: PropTypes.string

}

export default enhance(Title)
