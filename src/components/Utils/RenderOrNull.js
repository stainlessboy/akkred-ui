import React from 'react'
import fp from 'lodash/fp'
import PropTypes from 'prop-types'

class RenderOrNull extends React.Component {
  constructor (props) {
    super(props)
    const visible = Boolean(props.value)
    this.state = {visible}
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    const {props} = this
    const visible = Boolean(props.value)
    if (prevProps.value !== props.value) {
      if (!visible) {
        return setTimeout(
          () => this.setState({visible}),
          600
        )
      }
      return this.setState({visible})
    }
    return null
  }

  render () {
    const {value, children} = this.props
    if (fp.isArray(value) && !fp.isEmpty(value)) {
      return children
    } else if (fp.isArray(value) && fp.isEmpty(value)) return null
    return this.state.visible && children
  }
}

RenderOrNull.propTypes = {
  value: PropTypes.any.isRequired,
  children: PropTypes.any.isRequired
}

export default RenderOrNull
