import React from 'react'
import PropTypes from 'prop-types'
import withHistory from 'helpers/withHistory'
import _ from 'lodash'

const isLeftClickEvent = (event) => {
  return event.button === Number('0')
}

const styles = {
  position: 'absolute',
  top: '0',
  bottom: '0',
  left: '0',
  right: '0',
  zIndex: '2'
}

const toString = (to) => {
  return _.isObject(to) ? `${to.pathname}/?${to.search}` : to
}

const isModifiedEvent = (event) => {
  return Boolean(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey)
}

const Link = ({to, history, children, smooth, style, absolute, ...props}) => {
  const handleClick = event => {
    if (props.onClick) {
      props.onClick(event)
    }

    if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
      return
    }

    if (event.defaultPrevented === true) {
      return
    }

    event.preventDefault()
    if (smooth) {
      history.push(to, {smooth})
    } else {
      history.push(to)
    }
  }
  return (
    <a href={toString(to)} {...props} style={_.assign({}, absolute && styles, style)} onClick={handleClick}>
      {children}
    </a>
  )
}

Link.propTypes = {
  to: PropTypes.any.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  smooth: PropTypes.bool
}

Link.defaultProps = {
  onClick: null
}

export default withHistory(Link)
