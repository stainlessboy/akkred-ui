import React from 'react'
import {compose} from 'recompose'
import injectSheet from 'react-jss'
import classNames from 'classnames'
import {
  ANCHOR_DISABLED,
  BLACK_COLOR,
  crossBrowserify,
  fallbacksStyle, GREY_BORDER_STYLE,
  PRIMARY_BORDER,
  PRIMARY_COLOR,
  WHITE_COLOR
} from 'constants/styles'
import Fav from 'icons/Favorite'
import IoMdTrash from 'react-icons/lib/io/ios-trash-outline'
import TiPencil from 'react-icons/lib/ti/pencil'
import {Button} from 'components/Button'
import Link from 'components/Link'
import hexToRgb from '../../helpers/hexToRgb'
import fp from 'lodash/fp'
import {getOnlyString} from 'helpers/get'
import PropTypes from 'prop-types'
import dateFormat from 'helpers/dateFormat'
import sprintf from 'sprintf'
import {TASK_ITEM} from 'constants/routes'
import ProfilePic from 'components/ProfilePic'
import {WHITE} from '../Button'
import Favorite from 'icons/Popular'

const enhance = compose(
  injectSheet({
    applicant: {
      backgroundColor: '#fff',
      border: GREY_BORDER_STYLE,
      borderRadius: '4px',
      marginBottom: '20px',
      padding: '18px 22px 20px',
      display: 'block',
      color: BLACK_COLOR,
      ...ANCHOR_DISABLED,
      '& header, & footer': {
        ...fallbacksStyle('display', 'flex'),
        ...crossBrowserify('alignItems', 'center'),
        ...crossBrowserify('justifyContent', 'space-between')
      },
      '& $checkIcon': {
        color: PRIMARY_COLOR
      }
    },
    topVacancy: {
      background: PRIMARY_COLOR,
      color: WHITE_COLOR,
      '& $applicantButton': {
        background: 'transparent',
        border: `1px solid ${WHITE_COLOR}`,
        color: WHITE_COLOR
      },
      '& $checkIcon': {
        color: WHITE_COLOR
      }
    },
    borderVacancy: {
      border: '1.5px solid' + PRIMARY_BORDER
    },
    applicantTitle: {
      maxHeight: '1.38em',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      maxWidth: 'calc(100% - 200px)',
      textOverflow: 'ellipsis',
      fontSize: '16px',
      fontWeight: '500',
      lineHeight: '1.38'
    },
    applicantSalary: {
      fontSize: '14px',
      lineHeight: '1.57',
      fontWeight: '500'
    },
    applicantInfo: {
      margin: '15px 0'
    },
    applicantCompany: {
      ...fallbacksStyle('display', 'flex')
    },
    applicantCompanyInfo: {
      marginLeft: '10px'
    },

    desc: {
      overflow: 'hidden',
      fontSize: '13px'
    },
    rating: {
      overflow: 'hidden',
      lineHeight: '1.62',
      fontSize: '13px',
      color: hexToRgb(BLACK_COLOR, '0.7'),
      marginTop: '5px'
    },
    applicantDesc: {
      fontSize: '13px',
      lineHeight: '1.62',
      maxHeight: '3.24em',
      overflow: 'hidden',
      marginTop: '18px',
      marginBottom: '20px',
      color: hexToRgb(BLACK_COLOR, '0.7')
    },
    applicantActions: {

    },
    applicantButton: {
      border: '1px #ececec solid',
      borderRadius: '4px',
      color: '#656565',
      cursor: 'pointer',
      display: 'inline-block',
      fontSize: '11px',
      padding: '0 9px',
      lineHeight: '34px',
      verticalAlign: 'top',
      marginLeft: '10px'
    },
    applicantDate: {
      fontSize: '13px',
      color: hexToRgb(BLACK_COLOR, '0.4')
    },
    checkIcon: {
      width: '17px',
      height: '17px',
      marginLeft: '5px'
    },
    primaryBtn: {
      background: PRIMARY_COLOR,
      color: WHITE_COLOR
    },
    marginBottom: {
      marginBottom: '20px'
    }
  })
)
const iconStyle = {
  width: '20px',
  height: '25px'
}

const favStyle = {
  marginRight: '5px',
  marginBottom: '3px'
}

const VacancyBigCard = ({classes, smooth, marginBottom, custom, data}) => {
  const name = fp.get('title', data)
  const id = fp.get('id', data)
  const exp = fp.get('exp', data) || '3 года'
  const desc = getOnlyString(fp.get('additionalInfo', data))
  const createdDate = dateFormat(fp.get('publicationDate', data))
  const minSalary = fp.get('wishedSalary', data) || fp.get('startSalary', data) || 'Не указана'

  return (
    <Link
      to={sprintf(TASK_ITEM, id)}
      smooth={smooth}
      className={classNames({
        [classes.applicant]: true,
        [classes.marginBottom]: marginBottom
      })}
    >
      <header>
        <div className={classes.applicantTitle}>{name}</div>
        <div className={classes.applicantSalary}>{minSalary}</div>
      </header>
      <div className={classes.applicantInfo}>
        <div className={classes.applicantCompany}>
          <ProfilePic type={'xs'}/>
          <div className={classes.applicantCompanyInfo}>
            <div className={classes.desc}>Опыт: {exp}</div>
            <div className={classes.rating}><Favorite/> 3.4/5</div>
          </div>
        </div>
        <div className={classes.applicantDesc}>{desc}</div>
      </div>
      <footer>
        {!custom &&
          <div className={classes.applicantActions}>
            <Button type={'small'} color={WHITE} bordered={true}>
              <Fav style={favStyle}/>
              Добавить в избранное
            </Button>
          </div>
        }
        {custom &&
          <div className={classes.applicantActions}>
            <div className={classNames(classes.applicantButton, classes.primaryBtn)}>
              Продвижение  вакансии
            </div>
            <div className={classes.applicantButton}>
              <TiPencil style={iconStyle}/>
              Редактировать
            </div>
            <div className={classes.applicantButton}>
              <IoMdTrash style={iconStyle}/>
              Удалить
            </div>
          </div>
        }
        <div className={classes.applicantDate}>{createdDate}</div>
      </footer>
    </Link>
  )
}

VacancyBigCard.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  type: PropTypes.oneOf(['new', 'top']),
  marginBottom: PropTypes.bool,
  smooth: PropTypes.bool,
  custom: PropTypes.bool
}

export default enhance(VacancyBigCard)
