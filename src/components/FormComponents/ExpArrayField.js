import React from 'react'
import {compose} from 'recompose'
import injectSheet from 'react-jss'
import {Field} from 'redux-form'
import SearchFieldConfig from './SearchFieldConfig'
import TextField from './TextField/TextField'
import DateField from './DateField'
import * as API from '../../constants/api'
import {crossBrowserify, fallbacksStyle, MAIN_COLOR} from '../../constants/styles'
import Title from 'components/Title'
import {Checkbox, TextAreaField} from './index'
import PropTypes from 'prop-types'

const enhance = compose(
  injectSheet({
    addBtn: {
      color: MAIN_COLOR,
      fontWeight: '500',
      display: 'block',
      textAlign: 'center',
      marginTop: '30px'
    },
    fields: {
      marginTop: '40px'
    },
    time: {
      marginTop: '40px',
      ...fallbacksStyle('display', 'flex'),
      ...crossBrowserify('alignItems', 'flex-end'),
      '& > div': {
        width: 'calc(50% - 15px)',
        marginBottom: '16px'
      },
      '& > div:first-child': {
        marginRight: '30px'
      }
    },
    itemMargin: {
      marginLeft: '20px'
    }
  })
)

const ExpArrayField = (props) => {
  const {classes, fields, onBlur} = props
  const handleTouchTap = () => {
    return fields.push({})
  }

  return (
    <React.Fragment>
      <Title margin={'0 0 30px'} medium={true} text={'Опыт работы'}/>
      {fields.map((field, index) => {
        return (
          <React.Fragment key={index}>
            <div id={'companyRef'}/>
            <Field
              name={`${field}.organization`}
              component={TextField}
              label2={'Компания'}
            />
            <div id={'positionRef'} className={classes.fields}>
              <Field
                name={`${field}.speciality`}
                component={SearchFieldConfig}
                api={API.SPECIALITY_LIST}
                label2={'Должность'}
              />
            </div>
            <div id={'cityRef'} className={classes.fields}>
              <Field
                name={`${field}.country`}
                component={SearchFieldConfig}
                api={API.REGIONS_LIST}
                label2={'Город'}
              />
            </div>
            <div id={'timeRef'} className={classes.time}>
              <Field
                name={`${field}.fromDate`}
                component={DateField}
                label2={'Начало работы'}
              />
              <Field
                name={`${field}.toDate`}
                component={DateField}
                label2={'Окончание работы'}
              />
            </div>
            <Field
              name={'working'}
              className={classes.itemMargin}
              component={Checkbox}
              label={'Работаю в данный момент'}
            />

            <div id={'respRef'} className={classes.fields}>
              <Field
                name={`${field}.duties`}
                rows={5}
                component={TextAreaField}
                label={'Обязанности'}
              />
            </div>
          </React.Fragment>
        )
      })}
      <u onClick={handleTouchTap} className={classes.addBtn}>Добавить опыт работы</u>
    </React.Fragment>)
}

ExpArrayField.propTypes = {
  classes: PropTypes.object.isRequired,
  fields: PropTypes.object.isRequired
}

export default enhance(ExpArrayField)
