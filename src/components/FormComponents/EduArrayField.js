import React from 'react'
import {compose} from 'recompose'
import injectSheet from 'react-jss'
import {Field} from 'redux-form'
import PropTypes from 'prop-types'
import SearchFieldConfig from './SearchFieldConfig'
import TextField from './TextField/TextField'
import DateField from './DateField'
import * as API from '../../constants/api'
import {crossBrowserify, fallbacksStyle, MAIN_COLOR} from '../../constants/styles'
import * as CONST from '../../constants/backend'
import Title from 'components/Title'
import {Checkbox, RadioGroup} from './index'

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
    },
    itemWrap: {
      marginTop: '20px',
      borderTop: '1px solid #efefef',
      paddingTop: '20px',
      '&:last-child': {
        marginTop: '0',
        borderTop: 'none',
        paddingTop: '0'
      }
    }
  })
)

const EduArrayField = (props) => {
  const {classes, fields, extra, label} = props
  const handleTouchTap = () => {
    return fields.push({})
  }
  return (
    <React.Fragment>
      <Title medium={true} margin={'0 0 30px'} text={label || 'Образование'}/>
      {fields.map((field, index) => {
        return (
          <div className={classes.itemWrap} key={index}>
            <Field
              name={`${field}.educationLevel`}
              isStatic={true}
              component={SearchFieldConfig}
              items={CONST.EDUCATION}
              label2={'Уровень образования'}
            />
            <div className={classes.fields}>
              <Field
                name={`${field}.institution`}
                component={SearchFieldConfig}
                api={API.INSTITUTION_LIST}
                label2={'Учебное заведение'}
              />
            </div>
            {!extra && <div className={classes.fields}>
              <Field
                name={`${field}.faculty`}
                component={TextField}
                label2={'Факультет'}
              />
            </div>}
            <div className={classes.fields}>
              <Field
                name={`${field}.speciality`}
                component={TextField}
                label2={'Специальность'}
              />
            </div>
            <div className={classes.fields}>
              <Field
                name={`${field}.country`}
                component={SearchFieldConfig}
                api={API.REGIONS_LIST}
                label2={'Страна обучения'}
              />
            </div>
            {!extra && <div className={classes.fields}>
              <Field
                label={'Форма обучения'}
                name={'eduType'}
                component={RadioGroup}
                block={true}
                items={CONST.EDU_TYPE}
              />
            </div>}
            <div className={classes.time}>
              <Field
                name={`${field}.fromDate`}
                component={DateField}
                label2={'Начало обучения'}
              />
              <Field
                name={`${field}.toDate`}
                component={DateField}
                label2={'Окончание обучения'}
              />
            </div>
            {!extra && <Field
              name={'studying'}
              className={classes.itemMargin}
              component={Checkbox}
              label={'Учусь в данный момент'}
            />}
          </div>
        )
      })}
      <u onClick={handleTouchTap} className={classes.addBtn}>Добавить опыт образование</u>
    </React.Fragment>)
}

EduArrayField.propTypes = {
  classes: PropTypes.object.isRequired,
  fields: PropTypes.object.isRequired,
  extra: PropTypes.bool,
  label: PropTypes.string
}
export default enhance(EduArrayField)
