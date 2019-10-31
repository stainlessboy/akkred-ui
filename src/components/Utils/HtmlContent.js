import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

const withStyles = injectSheet({
  content: {
    '& table': {
      border: '1px solid'

    }
  }
})

const HtmlContent = ({classes, content}) => {
  return (
    <div className={classes.content} dangerouslySetInnerHTML={{__html: content}}/>
  )
}

HtmlContent.propTypes = {
  content: PropTypes.any.isRequired
}

export default withStyles(HtmlContent)
