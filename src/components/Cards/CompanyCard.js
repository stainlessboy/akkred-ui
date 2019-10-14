import _ from 'lodash'
import React from 'react'
import PropTypes from 'prop-types'
import {compose} from 'recompose'
import injectSheet from 'react-jss'
import classNames from 'classnames'
import Image from 'images/myjob.png'
import {
  crossBrowserify,
  fallbacksStyle,
  GREY_BORDER_STYLE, BLACK_COLOR
} from 'constants/styles'
import hexToRgb from '../../helpers/hexToRgb'

const enhance = compose(
  injectSheet({
    company: {
      ...fallbacksStyle('display', 'flex'),
      fontSize: '12px',
      overflow: 'hidden',
      width: '100%',
      border: GREY_BORDER_STYLE,
      borderRadius: '4px'
    },
    image: {
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      display: 'block',
      height: '131px',
      width: '131px',
      minWidth: '131px'
    },
    imageSmall: {
      height: '112px',
      width: '105px',
      minWidth: '105px'
    },
    body: {
      overflow: 'hidden',
      padding: '19px 30px 19px 25px',
      position: 'relative',
      width: '100%'
    },

    header: {
      marginBottom: '3px',
      lineHeight: '1.57',
      color: BLACK_COLOR,
      fontWeight: '500',
      fontSize: '14px',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      maxHeight: '1.57em'
    },
    desc: {
      maxHeight: '42px',
      overflow: 'hidden',
      lineHeight: '1.62',
      fontSize: '13px',
      color: hexToRgb(BLACK_COLOR, '0.7')
    },
    small: {
      maxHeight: '1.62em'
    },
    footer: {
      marginTop: '6px',
      fontSize: '13px'

    },
    invited: {
      borderColor: '#2bc48c'
    }
  })
)

const CompanyCard = props => {
  const {classes, small, data, invited} = props
  const name = _.get(data, 'title') || 'OOO Ucell'
  const desc = _.get(data, 'description') || 'Slack — IT компания. From wireless woes to tricky tickets.'
  const vacancyNum = _.get(data, ['vacancyCount']) || '0'
  const pinned = false
  // Const query = paramsToQuery(_.get(hashHistory, ['location', 'search']))
  // Const openServicesDialog = toBoolean(_.get(query, 'servicesDialog'))
  return (
    <div className={classNames(classes.company, {
      [classes.pinned]: pinned,
      [classes.invited]: invited
    })}>
      <div className={classNames({
        [classes.image]: true,
        [classes.imageSmall]: small
      })} style={{backgroundImage: 'url(' + Image + ')'}}/>
      <div className={classes.body}>
        <div className={classes.header}>{name}</div>
        <div className={classNames({
          [classes.desc]: true,
          [classes.small]: small
        })}>{desc}</div>
        <div className={classes.footer}><u>{vacancyNum} вакансий</u></div>
      </div>
    </div>
  )
}

CompanyCard.propTypes = {
  data: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  small: PropTypes.bool,
  invited: PropTypes.bool
}

export default enhance(CompanyCard)
