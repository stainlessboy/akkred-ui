import React from 'react'
import {compose} from 'recompose'
import injectSheet from 'react-jss'
import classNames from 'classnames'

import {MAIN_COLOR, NAV_BACKGROUND} from '../../constants/styles'
import PropTypes from 'prop-types'

/* eslint-disable standard/computed-property-even-spacing */
const enhance = compose(
  injectSheet({
    wrapper: {
      background: NAV_BACKGROUND,
      position: 'relative',
      borderBottom: '3px solid transparent',
      '&:hover': {
        borderColor: MAIN_COLOR,
        '& $menuItem': {
          opacity: '1',
          visibility: 'visible'
        }
      },
      '& span': {
        cursor: 'pointer',
        fontSize: '15px',
        lineHeight: '63px',
        whiteSpace: 'nowrap'
      }
    },
    menuItem: {
      whiteSpace: 'nowrap',
      transition: 'all 300ms',
      background: 'inherit',
      position: 'absolute',
      top: 'calc(100% + 3px)',
      opacity: '0',
      visibility: 'hidden',
      left: '0'
    }
  })
)

const DropDown = ({classes, children, text, className}) => {
  return (
    <div className={classNames(classes.wrapper, className)}>
      <span>{text}</span>
      {React.cloneElement(
        children,
        {className: classNames(children.props.className, classes.menuItem)}
      )}
    </div>
  )
}
DropDown.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string
}
export default enhance(DropDown)
