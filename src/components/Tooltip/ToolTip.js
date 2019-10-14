import React from 'react'
import PropTypes from 'prop-types'
import {compose} from 'recompose'
import injectSheet from 'react-jss'
import classNames from 'classnames'
import {PRIMARY_COLOR} from 'constants/design'

const enhance = compose(
  injectSheet({
    tooltipWrap: {
      '& $toolTip': {
        transition: 'all 300ms'
      },
      '&:hover': {
        '& $toolTip': {
          opacity: '1',
          visibility: 'visible'
        }
      },
      display: 'inline-block',
      position: 'relative'
    },
    toolTip: {
      zIndex: '1',
      opacity: '0',
      visibility: 'hidden',
      fontSize: '12px',
      borderRadius: '4px',
      fontStyle: 'normal',
      fontWeight: 'normal',
      whiteSpace: 'nowrap',
      lineHeight: '20px',
      background: PRIMARY_COLOR,
      color: '#fff',
      padding: '0 8px',
      position: 'absolute',
      top: '50%',
      left: 'calc(100% + 8px)',
      transform: 'translateY(-50%)',
      '&::after': {
        content: '" "',
        position: 'absolute',
        right: '100%',
        top: '50%',
        borderWidth: '5px',
        transform: 'translateY(-50%)',
        borderStyle: 'solid',
        borderColor: `transparent ${PRIMARY_COLOR} transparent transparent`
      }
    }
  })
)

const ToolTip = ({className, children, classes, text, ...defaultProps}) => {
  return (
    <div className={classNames(classes.tooltipWrap, className)}>
      {children}
      <div className={classes.toolTip}>{text}</div>
    </div>
  )
}

ToolTip.propTypes = {
  text: PropTypes.node.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
  classes: PropTypes.object,
  children: PropTypes.any,
  fullWidth: PropTypes.bool
}

export default enhance(ToolTip)
