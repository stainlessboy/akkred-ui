import React from 'react'
import {compose, withState} from 'recompose'
import injectSheet from 'react-jss'
import fp from 'lodash/fp'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import sprintf from 'sprintf'
import MoreIcon from 'icons/Remove'
import Updated from 'icons/Updated'
import T from 'components/Translate'
import Link from 'components/Link'
import dateFormat from 'helpers/dateFormat'
import IoMdTrash from 'react-icons/lib/io/ios-trash-outline'
import {Button, GREY, WHITE, YELLOW} from 'components/Button'
import hexToRgb from '../../helpers/hexToRgb'
import {
  TASK_ITEM,
  TASJ_EDIT_VIEW,
  APPLICANT_ITEM_URL
} from 'constants/routes'
import {
  crossBrowserify,
  fallbacksStyle, LABEL_COLOR,
  LIGHT_GREY_BORDER_STYLE,
  MAIN_COLOR,
  PRIMARY_COLOR,
  ANCHOR_DISABLED,
  ZERO
} from 'constants/styles'
import {BLACK_COLOR} from '../../constants/styles'

const enhance = compose(
  withState('updateId', 'setUpdateId', ZERO),
  injectSheet({
    wrapper: {
      backgroundColor: '#fff',
      overflow: 'hidden',
      borderRadius: '4px',
      border: 'solid 1px rgba(198, 203, 212, 0.65)',
      marginBottom: '20px',
      boxSizing: 'border-box',
      position: 'relative'
    },
    resumeItem: {
      ...fallbacksStyle('display', 'flex')
    },
    resumeContent: {
      padding: '18px 25px 0 30px',
      display: 'block',
      ...ANCHOR_DISABLED
    },
    resumeTitle: {
      ...fallbacksStyle('display', 'flex'),
      ...crossBrowserify('justifyContent', 'space-between'),
      ...crossBrowserify('alignItems', 'center'),
      fontWeight: '500',
      fontSize: '16px',
      lineHeight: '1.38'
    },
    mainResume: {
      color: MAIN_COLOR,
      fontSize: '14px'
    },
    resumeSalary: {
      fontSize: '14px',
      lineHeight: '1.5',
      marginBottom: '11px',
      marginTop: '8px'
    },
    stats: {
      fontSize: '14px',
      lineHeight: '1.5',
      position: 'relative',
      display: 'inline-block',
      zIndex: '3',
      '& a': {
        color: BLACK_COLOR,
        display: 'inline-block',
        '&:first-child': {
          borderRight: LIGHT_GREY_BORDER_STYLE,
          marginRight: '11px'
        }
      },
      '& span': {
        fontWeight: '500',
        color: MAIN_COLOR,
        padding: '0 11px 0 5px'
      }
    },
    resumeCity: {
      display: 'none',
      fontSize: '11px',
      lineHeight: '15px',
      color: '#232323',
      marginBottom: '20px'
    },
    resumeDate: {
      position: 'absolute',
      right: '24px',
      bottom: '17px',
      fontSize: '15px',
      lineHeight: '20px',
      color: '#232323',
      fontStyle: 'italic'
    },
    rating: {
      ...fallbacksStyle('display', 'flex'),
      ...crossBrowserify('flexDirection', 'column-reverse'),
      position: 'absolute',
      top: '22px',
      right: '23px',
      whiteSpace: 'nowrap',
      fontSize: '13px',
      marginLeft: '10px',
      color: PRIMARY_COLOR,
      '& .ant-rate-star': {
        margin: '-2px 0 0 0'
      },
      '& .ant-rate-star-second': {
        minHeight: '18px'
      }
    },
    removeBtn: {
      cursor: 'pointer',
      position: 'absolute',
      top: '22px',
      right: '50px',
      lineHeight: '27px',
      padding: '0 10px 0 7px',
      fontSize: '11px',
      whiteSpace: 'nowrap',
      color: '#656565',
      background: '#e2e2e2'
    },
    removeApp: {
      right: '25px'
    },
    noBorder: {
      border: 'none'
    },
    smallBtn: {
      fontSize: '11px',
      padding: '0 15px'
    },
    greyBtn: {
      fontSize: '11px',
      padding: '0 8px'
    },
    bottomButtons: {
      '& > button': {
        marginRight: '10px'
      }
    },
    footer: {
      padding: '0 25px 20px 30px',
      marginTop: '23px',
      ...fallbacksStyle('display', 'flex'),
      ...crossBrowserify('justifyContent', 'space-between'),
      ...crossBrowserify('alignItems', 'center')
    },
    date: {
      zIndex: '3',
      color: hexToRgb('#a1a7b3', '0.8'),
      fontWeight: '1.5',
      '& svg': {marginLeft: '5px', cursor: 'pointer'}
    },
    progress: {
      background: '#f2f4f6',
      padding: '7px 0 5px',
      textAlign: 'center',
      fontSize: '14px',
      lineHeight: '1.57',
      '& span': {
        fontWeight: '500',
        color: MAIN_COLOR
      }
    }
  })
)

const updateLoadingStyle = {
  animation: 'spin-off 2s infinite ease-out'
}
const updateLoader = (
  <Updated style={updateLoadingStyle}/>
)
const iconStyle = {
  width: '22px',
  height: '28px'
}

const moreStyle = {
  fontSize: '22px',
  color: LABEL_COLOR,
  marginLeft: '40px'
}

const Resume = props => {
  const {
    classes,
    noBorder,
    deleteBtn,
    noRating,
    bottomBtn,
    onResumeActivate,
    onResumeDeactivate,
    data,
    activateLoading,
    deactivateLoading,
    updateDateLoading,
    onResumeUpdate,
    onResumeEdit,
    editView,
    updateId,
    setUpdateId,
    main
  } = props

  const id = fp.get('id', data)
  const title = fp.get('title', data)
  const appealCount = fp.toInteger(fp.get('appealCount', data))
  const viewCount = fp.toInteger(fp.get('viewCount', data))
  const modifiedDate = dateFormat(fp.get('modifiedDate', data))
  const completed = fp.flow(fp.get('completed'), fp.round)(data)
  const updateLoading = updateId === id
  const viewPath = {pathname: sprintf(APPLICANT_ITEM_URL, 'guest'), search: 'resume=' + id}
  const appealedPath = sprintf(APPLICANT_ITEM_URL, 'feedback')
  return (
    <div className={classNames({
      [classes.wrapper]: true,
      [classes.noBorder]: noBorder
    })}>
      <Link absolute={true} to={editView ? sprintf(TASJ_EDIT_VIEW, id, 'view') : sprintf(TASK_ITEM, id)}/>
      <div className={classes.resumeContent}>

        <div className={classes.resumeTitle}>
          {title}
          <div className={classes.mainResume}>
            {main && <T>Основное резюме</T>}
            <MoreIcon style={moreStyle}/>
          </div>
        </div>
        <div className={classes.resumeSalary}><T>Зарплата от</T> 5 000 000 сум</div>
        <div className={classes.stats}>
          <Link to={viewPath}>
            <T>Просмотры</T>:<span>{viewCount}</span>
          </Link>
          <Link to={appealedPath}>
            <T>Отклики</T>:<span>{appealCount}</span>
          </Link>
        </div>
        <div className={classes.resumeCity}>Tashkent</div>
      </div>
      <div className={classes.footer}>
        {bottomBtn &&
          <div className={classes.bottomButtons}>
            {main && <Button
              text={'Продвижение  резюме'}
              onClick={() => onResumeDeactivate(id)}
              loading={deactivateLoading}
              type={'small'}
              color={YELLOW}>
            </Button>}
            {!main && <Button
              onClick={() => onResumeActivate(id)}
              loading={activateLoading}
              text={'Сделать основным'}
              type={'small'}
              color={GREY}>
            </Button>}
            <Button
              onClick={() => onResumeEdit(id)}
              type={'small'}
              color={WHITE}
              bordered={true}>
              Редактировать резюме
            </Button>

            {false && <Button
              type={'small'}
              color={GREY}>
              <IoMdTrash style={iconStyle}/> Удалить
            </Button>}

          </div>
        }
        <div className={classes.date}>
          <T>Обновленно</T>: {modifiedDate}&nbsp;
          {updateDateLoading && updateLoading
            ? updateLoader
            : <Updated onClick={() => {
              setUpdateId(id)
              onResumeUpdate(id)
            }}/>}
        </div>
      </div>

      {deleteBtn &&
          <div
            className={classNames({
              [classes.removeBtn]: true,
              [classes.removeApp]: noRating
            })}>
            <IoMdTrash style={iconStyle}/> Удалить
          </div>
      }
      {!bottomBtn && <div className={classes.resumeDate}>23-мая</div>}

      {main && (
        <div className={classes.progress}>
          Резюме заполненно на <span>{completed}%.</span>
        </div>
      )}
    </div>
  )
}
Resume.propTypes = {
  main: PropTypes.bool,
  classes: PropTypes.object.isRequired,
  noBorder: PropTypes.bool,
  deleteBtn: PropTypes.bool,
  noRating: PropTypes.bool,
  bottomBtn: PropTypes.bool,
  onResumeDeactivate: PropTypes.func,
  onResumeActivate: PropTypes.func,
  onResumeEdit: PropTypes.func,
  onResumeUpdate: PropTypes.func,
  activateLoading: PropTypes.bool,
  updateDateLoading: PropTypes.bool,
  editView: PropTypes.bool,
  updateId: PropTypes.number.isRequired,
  setUpdateId: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
}
export default enhance(Resume)
