import {path, prop, propOr, map} from 'ramda'
import React from 'react'
import {compose, withState} from 'recompose'
import injectSheet from 'react-jss'
import Container from 'components/Container'
import Title from 'components/Title'
import {Button} from 'components/Button'
import dateFormat from 'helpers/dateFormat'
import numberFormat from 'helpers/numberFormat'
import PropTypes from 'prop-types'
import Location from 'icons/Location'
import Date from 'icons/Date'
import ProfileInfo from 'components/ProfilePic/ProfileInfo'

import {
  crossBrowserify,
  fallbacksStyle,
  ROLL_UP_FADE_IN
} from '../../constants/styles'
import hexToRgb from '../../helpers/hexToRgb'
import {PRIMARY_COLOR} from '../../constants/design'

const enhance = compose(
  withState('openDialog', 'setOpenDialog', false),
  injectSheet({
    wrapperContainer: {
      ...fallbacksStyle('display', 'flex')
      //      ...crossBrowserify('justifyContent', 'space-between'),
      //     ...crossBrowserify('alignItems', 'flex-end'),
    },
    ...ROLL_UP_FADE_IN,
    wrapper: {
      padding: '20px 0 75px',
      width: '767px',
      animationName: 'rollUpFadeIn',
      animationDuration: '1s'
    },
    date: {
      fontSize: '15px',
      lineHeight: '23px',
      color: '#8C9CAD'
    },
    info: {
      ...fallbacksStyle('display', 'flex'),
      ...crossBrowserify('justifyContent', 'space-between'),
      ...crossBrowserify('alignItems', 'flex-end'),
      margin: '20px 0 30px',
      width: 'calc(100% - 100px)'
    },
    price: {
      color: PRIMARY_COLOR,
      fontWeight: '600',
      fontSize: '22px',
      lineHeight: '32px'
    },
    infoLabel: {
      lineHeight: '24px'
    },
    speciality: {
      fontSize: '15px',
      lineHeight: '23px',
      color: '#637283'
    },
    content: {
      background: hexToRgb('#F7F7F7', '0.6'),
      borderRadius: '6px',
      padding: '40px'
    },
    contentTitle: {
      fontWeight: '600',
      fontSize: '22px',
      lineHeight: '36px',
      color: '#011933',
      marginBottom: '45px'
    },
    label: {
      fontSize: '15px',
      lineHeight: '25px',
      color: '#637283',
      marginBottom: '6px'
    },
    deadline: {
      fontSize: '16px',
      lineHeight: '20px'
    },
    contentInfo: {
      marginBottom: '40px',
      maxWidth: 'calc(100% - 170px)',
      ...fallbacksStyle('display', 'flex'),
      ...crossBrowserify('justifyContent', 'space-between'),
      ...crossBrowserify('alignItems', 'flex-end')
    },
    address: {
      extend: 'deadline',
      borderBottom: '1.2px dashed #011933'
    },
    contentDescr: {
      fontSize: '16px',
      lineHeight: '27px',
      marginBottom: '40px'
    },
    right: {
      paddingTop: '55px',
      marginLeft: '100px'
    },
    similar: {
      fontWeight: '500',
      fontSize: '18px',
      lineHeight: '24px',
      margin: '100px 0 24px'
    },
    simTitle: {
      lineHeight: '20px',
      textDecorationLine: 'underline'
    },
    simPrice: {
      fontSize: '13px',
      lineHeight: '20px',
      color: '#93A2B3',
      margin: '2px 0 20px'

    }
  })
)

const TaskDetails = props => {
  const {classes, taskDetail, taskList} = props
  // .const loading = loGet(resumeDetail, 'loading')
  const list = propOr([], 'data', taskList)
  const data = prop('data', taskDetail)
  const title = prop('title', data)
  const fullName = path(['owner', 'fullName'], data)
  const address = prop('address', data)
  const text = prop('text', data)
  const price = numberFormat(prop('price', data), 'сум')
  const speciality = path(['speciality', 'name'], data)
  const createdDate = dateFormat(prop('createdDate', data), true)
  const deadline = dateFormat(prop('deadline', data), true)

  return (
    <Container className={classes.wrapperContainer}>
      <div className={classes.wrapper}>
        <div className={classes.date}>{createdDate}</div>
        <Title type={'large'} className={classes.titleWrap} text={title}/>
        <div className={classes.info}>
          <div>
            <div className={classes.infoLabel}>Оплата до</div>
            <div className={classes.price}>{price}</div>
          </div>
          <div className={classes.speciality}>
            {speciality}
          </div>
        </div>
        <div className={classes.content}>
          <div className={classes.contentTitle}>Подробно о задание</div>
          <div className={classes.contentInfo}>
            <div>
              <div className={classes.label}>К выполнению:</div>
              <div className={classes.deadline}><Date style={{width: '14px', height: '16', margin: '0 6px 3px 0'}}/>{deadline}</div>
            </div>
            <div>
              <div className={classes.label}>Адрес:</div>
              <div className={classes.address}><Location style={{margin: '0 6px 4px 0'}}/>{address}</div>
            </div>
          </div>
          <div className={classes.label}>Описание задания:</div>
          <div className={classes.contentDescr} dangerouslySetInnerHTML={{__html: text}}/>
          <Button text={'Предложить свои услуги'} type={'large'} fullWidth={true}/>
        </div>
      </div>
      <div className={classes.right}>
        <ProfileInfo type={'client'} name={fullName}/>
        <div className={classes.similar}>Похожие задания</div>
        {map(
          item => (
            <React.Fragment key={item.id}>
              <div className={classes.simTitle}>{item.title}</div>
              <div className={classes.simPrice}>Оплата до: {numberFormat(item.price)} сум</div>
            </React.Fragment>
          ),
          list
        )}

      </div>
    </Container>
  )
}

TaskDetails.propTypes = {
  classes: PropTypes.object.isRequired,
  taskList: PropTypes.object.isRequired,
  taskDetail: PropTypes.object.isRequired,
  id: PropTypes.number
}

export default enhance(TaskDetails)
