import React from 'react'
import {compose} from 'recompose'
import PropTypes from 'prop-types'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './NotFound.css'

const enhance = compose()

const NotFound = ({title}) => {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1>{title}</h1>
        <p>Sorry, the page you were trying to view does not exist.</p>
      </div>
    </div>
  )
}

NotFound.propTypes = {
  title: PropTypes.string.isRequired
}

export default withStyles(s)(enhance(NotFound))
