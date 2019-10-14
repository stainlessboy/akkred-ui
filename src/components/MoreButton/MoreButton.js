import React from 'react'
import PropTypes from 'prop-types'
import {compose} from 'recompose'
import injectSheet from 'react-jss'
import classNames from 'classnames'
import hexToRgb from 'helpers/hexToRgb'
import {crossBrowserify} from 'constants/styles'
import {BLACK_COLOR} from '../../constants/styles'

const enhance = compose(
  injectSheet({
    wrapper: {
      textAlign: 'right',
      marginTop: '30px'
    },
    button: {
      background: hexToRgb('#ececec', '0.5'),
      border: 'none',
      borderRadius: '4px',
      outline: 'none',
      cursor: 'pointer',
      color: hexToRgb(BLACK_COLOR, '0.73'),
      display: 'inline-block',
      fontSize: '14px',
      fontWeight: '600',
      padding: '0',
      lineHeight: '45px',
      width: '100%',
      ...crossBrowserify('display', 'block'),
      ...crossBrowserify('transition', 'all 300ms'),
      '&:hover': {
        background: hexToRgb('#ececec', '0.7')
      }
    }
  })
)

const MoreButton = ({...props}) => {
  const {className, classes, text, onClick} = props
  return (
    <div className={classes.wrapper}>
      <button
        type={'button'}
        className={classNames(classes.button, className)}
        onClick={onClick}
        {...props}>
        {text}
      </button>
    </div>
  )
}

MoreButton.propTypes = {
  text: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired
}

export default enhance(MoreButton)
