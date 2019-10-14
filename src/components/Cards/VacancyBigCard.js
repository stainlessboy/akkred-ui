import React from 'react'
import {compose} from 'recompose'
import injectSheet from 'react-jss'
import classNames from 'classnames'
import ToolTip from 'components/Tooltip'
import {
  ANCHOR_DISABLED,
  BLACK_COLOR,
  crossBrowserify,
  fallbacksStyle, GREY_BORDER_STYLE,
  PRIMARY_BORDER,
  PRIMARY_COLOR,
  WHITE_COLOR
} from '../../constants/styles'
import MdCheckCircle from 'react-icons/lib/md/check-circle'
import MdFavoriteBorder from 'react-icons/lib/md/favorite-border'
import MdFavorite from 'react-icons/lib/md/favorite'
import IoMdTrash from 'react-icons/lib/io/ios-trash-outline'
import TiPencil from 'react-icons/lib/ti/pencil'
import PinIcon from '../../icons/PinIcon'
import {Button} from 'components/Button'
import Link from 'components/Link'
import hexToRgb from '../../helpers/hexToRgb'
import _ from 'lodash'
import {getOnlyString} from '../../helpers/get'
import {numberFormat} from '../../helpers'
import PropTypes from 'prop-types'
import dateFormat from '../../helpers/dateFormat'
import sprintf from 'sprintf'
import {VACANCY_ITEM} from '../../constants/routes'
import {GREY} from '../Button'

const enhance = compose(
  injectSheet({
    vacancy: {
      backgroundColor: '#fff',
      border: GREY_BORDER_STYLE,
      borderRadius: '4px',
      marginBottom: '20px',
      padding: '20px 22px',
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
      '& $vacancyButton': {
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
    vacancyTitle: {
      maxHeight: '1.38em',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      maxWidth: 'calc(100% - 200px)',
      textOverflow: 'ellipsis',
      fontSize: '16px',
      fontWeight: '500',
      lineHeight: '1.38'
    },
    vacancySalary: {
      fontWeight: '500'
    },
    vacancyInfo: {
      margin: '15px 0'
    },
    vacancyCompany: {
      ...fallbacksStyle('display', 'flex')
    },
    vacancyCompanyPhoto: {
      backgroundColor: '#efefef',
      backgroundSize: 'cover',
      boderRadius: '4px',
      backgroundPosition: 'center',
      height: '56px',
      width: '56px'
    },
    vacancyCompanyInfo: {
      marginLeft: '10px'
    },
    vacancyCompanyName: {
      fontSize: '13px',
      textDecoration: 'underline',
      ...fallbacksStyle('display', 'flex'),
      ...crossBrowserify('alignItems', 'center'),
      marginBottom: '11px'
    },
    vacancyCompanyComment: {
      fontSize: '13px',
      fontWeight: '300',
      lineHeight: '1.62',
      maxHeight: '3.24em',
      overflow: 'hidden',
      marginTop: '17px',
      color: hexToRgb(BLACK_COLOR, '0.7')
    },
    vacancyActions: {

    },
    vacancyButton: {
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
    vacancyDate: {
      fontSize: '13px',
      color: hexToRgb(BLACK_COLOR, '0.4')
    },
    checkIcon: {
      width: '17px',
      height: '17px',
      marginLeft: '5px'
    },
    noBorder: {
      border: 'none'
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
const pinStyle = {
  verticalAlign: 'text-top'
}
const iconStyle = {
  width: '20px',
  height: '25px'
}

const FALSE = false
const VacancyBigCard = ({classes, smooth, marginBottom, noBorder, custom, setOpenChatDialog, data}) => {
  const name = _.get(data, 'title') || 'Дизайнер'
  const id = _.get(data, 'id')
  const desc = getOnlyString(_.get(data, 'duties')) || 'Ведущий инженер по планированию и оптимизации радиорелейных линий связи'
  const createdDate = dateFormat(_.get(data, 'publicationDate'))

  const minSalary = numberFormat(_.get(data, 'salaryFrom')) || '1 000 000'
  const companyName = _.get(data, ['owner', 'title']) || 'OOO «Ucell»'
  const region = _.get(data, ['place', 'name']) || 'г. Ташкент'

  return (
    <Link
      to={sprintf(VACANCY_ITEM, id)}
      smooth={smooth}
      className={classNames({
        [classes.vacancy]: true,
        [classes.topVacancy]: false,
        [classes.marginBottom]: marginBottom,
        [classes.borderVacancy]: false,
        [classes.noBorder]: noBorder
      })}
    >
      <header>
        <div className={classes.vacancyTitle}>{name}</div>
        <div className={classes.vacancySalary}>От {minSalary}</div>
      </header>
      <div className={classes.vacancyInfo}>
        <div className={classes.vacancyCompany}>
          <div className={classes.vacancyCompanyPhoto}/>
          <div className={classes.vacancyCompanyInfo}>
            <div className={classes.vacancyCompanyName}>
              {companyName}
              <div>
                <ToolTip text={'Компания проверена !'}>
                  <MdCheckCircle className={classes.checkIcon}/>
                </ToolTip>
              </div>
            </div>
            <span className={classes.addr}><PinIcon style={pinStyle}/> {region}</span>
          </div>
        </div>
        <div className={classes.vacancyCompanyComment}>{desc}</div>
      </div>
      <footer>
        {!custom &&
          <div className={classes.vacancyActions}>
            <Button type={'small'} color={GREY} text={'Откликнуться'}/>
            <div className={classes.vacancyButton}>
              {FALSE ? <MdFavoriteBorder style={iconStyle}/> : <MdFavorite color={'#cbd0d8'} style={iconStyle}/>}
            </div>
          </div>
        }
        {custom &&
          <div className={classes.vacancyActions}>
            <div className={classNames(classes.vacancyButton, classes.primaryBtn)}>
              Продвижение  вакансии
            </div>
            <div className={classes.vacancyButton}>
              <TiPencil style={iconStyle}/>
              Редактировать
            </div>
            <div className={classes.vacancyButton}>
              <IoMdTrash style={iconStyle}/>
              Удалить
            </div>
          </div>
        }
        <div className={classes.vacancyDate}>{createdDate}</div>
      </footer>
    </Link>
  )
}

VacancyBigCard.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  type: PropTypes.oneOf(['new', 'top']),
  marginBottom: PropTypes.bool,
  smooth: PropTypes.bool
}

export default enhance(VacancyBigCard)
