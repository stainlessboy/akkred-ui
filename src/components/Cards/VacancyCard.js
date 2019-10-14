import _ from 'lodash'
import React from 'react'
import PropTypes from 'prop-types'
import {compose} from 'recompose'
import injectSheet from 'react-jss'
import classNames from 'classnames'
import Link from 'components/Link'
import {VACANCY_ITEM} from 'constants/routes'
import Image from 'images/myjob.png'
import sprintf from 'sprintf'
import {
  crossBrowserify,
  fallbacksStyle,
  PRIMARY_COLOR,
  WHITE_COLOR,
  GREY_BORDER_STYLE, BLACK_COLOR,
  FADE_IN_ANIMATE,
  ANCHOR_DISABLED
} from 'constants/styles'
import {
  numberFormat
} from 'helpers'
import hexToRgb from '../../helpers/hexToRgb'
import {getOnlyString} from '../../helpers/get'
import dateFormat from '../../helpers/dateFormat'
import CompanyName from './CompanyName'
import CompanyAddress from './CompanyAddress'

const enhance = compose(
  injectSheet({
    vacancy: {
      width: '100%',
      color: BLACK_COLOR,
      animationName: 'fadeIn',
      animationDuration: '2s',
      display: 'block',
      ...ANCHOR_DISABLED
    },
    vacancyWrap: {
      border: GREY_BORDER_STYLE,
      borderRadius: '4px',
      ...fallbacksStyle('display', 'flex'),
      overflow: 'hidden'
    },
    ...FADE_IN_ANIMATE,
    pinned: {
      '& $body': {
        background: PRIMARY_COLOR,
        color: WHITE_COLOR,
        '& $position': {
          color: 'inherit'
        }
      }
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

    body: {
      padding: '19px 22px 16px 25px',
      position: 'relative',
      width: '100%'
    },

    header: {
      ...fallbacksStyle('display', 'flex'),
      ...crossBrowserify('justifyContent', 'space-between'),
      marginBottom: '3px',
      lineHeight: '1.57'
    },

    position: {
      color: BLACK_COLOR,
      fontWeight: '500',
      fontSize: '14px'
    },

    createdDate: {
      fontSize: '13px',
      textAlign: 'right',
      color: hexToRgb(BLACK_COLOR, '0.4')
    },

    desc: {
      maxHeight: '42px',
      overflow: 'hidden',
      lineHeight: '1.62',
      fontSize: '13px',
      paddingRight: '120px',
      color: hexToRgb(BLACK_COLOR, '0.7')
    },

    salary: {
      fontSize: '14px',
      lineHeight: '1.57'
    },

    footer: {
      ...fallbacksStyle('display', 'flex'),
      ...crossBrowserify('alignItems', 'center'),
      ...crossBrowserify('justifyContent', 'space-between'),
      marginTop: '7px',
      lineHeight: 'normal',
      position: 'relative'
    },

    comName: {
      paddingTop: '2px',
      display: '-webkit-box',
      fontSize: '13px',
      WebkitLineClamp: '1',
      WebkitBoxOrient: 'vertical',
      textOverflow: 'ellipsis',
      wordBreak: 'break-all'
    },
    addr: {
      whiteSpace: 'nowrap',
      position: 'absolute',
      right: '200px',
      top: '5px'
    },

    rating: {
      whiteSpace: 'nowrap',
      fontSize: '11px',
      marginLeft: '10px',
      color: PRIMARY_COLOR,
      '& > li': {
        marginRight: '2px',
        '&:last-child': {
          marginRight: '0'
        }
      }
    },

    moreButton: {
      cursor: 'pointer',
      position: 'absolute',
      padding: '7px 16px',
      right: '0',
      top: 'calc(50% - 19px)',
      '& > div': {
        background: '#95989A',
        borderRadius: '50%',
        marginTop: '3px',
        height: '6px',
        width: '6px',
        '&:first-child': {
          marginTop: '0'
        }
      }
    },
    margin: {marginBottom: '20px'}
  })
)

const VacancyCard = props => {
  const {classes, data, marginBottom, smooth} = props
  const id = _.get(data, 'id') || 'Дизайнер'
  const name = _.get(data, 'title') || 'Дизайнер'
  const desc = getOnlyString(_.get(data, 'duties')) || 'Ведущий инженер по планированию и оптимизации радиорелейных линий связи'
  const createdDate = dateFormat(_.get(data, 'publicationDate'))
  const salaryCurrency = _.get(data, 'salaryCurrency') || 'сум'
  const minSalary = numberFormat(_.get(data, 'salaryFrom')) || '1 000 000'
  const companyName = _.get(data, ['owner', 'title']) || 'OOO «Ucell»'
  const region = _.get(data, ['place', 'name']) || 'г. Ташкент'
  const pinned = false
  // Const query = paramsToQuery(_.get(hashHistory, ['location', 'search']))
  // Const openServicesDialog = toBoolean(_.get(query, 'servicesDialog'))
  return (
    <Link
      to={sprintf(VACANCY_ITEM, id)}
      smooth={smooth}
      className={classNames(classes.vacancy, {
        [classes.pinned]: pinned,
        [classes.margin]: marginBottom
      })}>
      <div className={classes.vacancyWrap}>
        <div className={classes.image} style={{backgroundImage: 'url(' + Image + ')'}}/>
        <div className={classes.body}>
          <div className={classes.header}>
            <div className={classes.position} title={name}>{name}</div>
            <div className={classes.createdDate}>
              {createdDate}
            </div>
          </div>
          <div className={classes.desc}>{desc}</div>
          <div className={classes.footer}>
            <CompanyName name={companyName}/>
            <span className={classes.addr}><CompanyAddress name={region}/></span>
            <div className={classes.salary}>от {minSalary}{salaryCurrency}</div>
          </div>
          {false &&
          <div className={classes.moreButton}>
            <div/><div/><div/>
          </div>
          }
        </div>
      </div>
    </Link>
  )
}

VacancyCard.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  type: PropTypes.oneOf(['new', 'top']),
  marginBottom: PropTypes.bool,
  smooth: PropTypes.bool
}

export default enhance(VacancyCard)
