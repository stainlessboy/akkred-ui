import React from 'react'
import {compose} from 'recompose'
import injectSheet from 'react-jss'
import classNames from 'classnames'
import propTypes from 'prop-types'

const enhance = compose(
  injectSheet({
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 15px'
    }
  })
)

const Container = ({className, classes, children, ...others}) => {
  return (
    <div {...others} className={classNames(classes.container, className)}>
      {children}
    </div>
  )
}

Container.propTypes = {
  className: propTypes.string,
  classes: propTypes.object.isRequired,
  children: propTypes.node.isRequired
}
export default enhance(Container)
