import React from 'react'
import {compose} from 'recompose'
import PropTypes from 'prop-types'
import {prop, pathOr} from 'ramda'
import injectSheet from 'react-jss'
import Link from 'components/Link'
import ProfilePic from 'components/ProfilePic'
import Popular from 'icons/Popular'

import {
  crossBrowserify,
  fallbacksStyle,
  BACKGROUND_COLOR,
  ANCHOR_DISABLED, BLACK_COLOR
} from '../../constants/design'
const style = {
  masterWrap: {
    ...ANCHOR_DISABLED,
    borderRadius: '4px',
    padding: '30px',
    paddingRight: '40px',
    background: BACKGROUND_COLOR,
    ...fallbacksStyle('display', 'flex'),
    ...crossBrowserify('alignItems', 'center')
  },
  infoWrap: {
    paddingLeft: '18px',
    width: 'calc(100% - 71px)'
  },
  nameWrap: {
    ...fallbacksStyle('display', 'flex'),
    ...crossBrowserify('alignItems', 'center'),
    ...crossBrowserify('justifyContent', 'space-between'),
    margiBottom: '10px'
  },
  name: {
    fontWeight: '600',
    fontSize: '18px',
    lineHeight: 'normal'
  },
  jobTitle: {
    marginTop: '5px',
    lineHeight: '22px',
    fontSize: '15px',
    color: BLACK_COLOR
  }
}
const enhance = compose(
  injectSheet(style)
)
const MasterCard = props => {
  const {classes, data} = props
  const name = prop('fullName', data)
  const sphere = pathOr('Мастер по ремонту кондиционеров', ['speciality', '0', 'name'], data)

  return (
    <Link className={classes.masterWrap} to={'/'}>
      <ProfilePic type={'mini'}/>
      <div className={classes.infoWrap}>
        <div className={classes.nameWrap}>
          <div className={classes.name}>{name}</div>
          <Popular/>
        </div>
        <div className={classes.jobTitle}>{sphere}</div>
      </div>
    </Link>
  )
}

MasterCard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default enhance(MasterCard)
