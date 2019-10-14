import React from 'react'
import PropTypes from 'prop-types'
import {compose} from 'recompose'
import injectSheet from 'react-jss'
import Link from '../Link'
import LogoIcon from 'icons/LogoIcon'

const enhance = compose(
  injectSheet({
    logo: {
      paddingRight: '25px'
    }
  })
)

const LogoTitle = ({className, classes, text, ...defaultProps}) => {
  return (
    <Link to={'/'} {...defaultProps} className={classes.logo}><LogoIcon/></Link>

  )
}

LogoTitle.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
}

export default enhance(LogoTitle)
