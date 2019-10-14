import React from 'react'
import {compose, withHandlers, withState} from 'recompose'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'
import Icon from 'antd/lib/icon'
import {reduxForm, Field, getFormValues} from 'redux-form'
import {connect} from 'react-redux'
import {
  crossBrowserify,
  fallbacksStyle,
  TEXT_COLOR_DEFAULT,
  BORDER_STYLE,
  animationStyle,
  MAIN_COLOR
} from 'constants/styles'
import {
  TextField,
  Checkbox,
  SearchFieldConfig,
  PhoneTextField,
  DateField
} from 'components/FormComponents'
import formValidate from 'helpers/formValidate'
import {normalizePhone} from 'helpers/normalizeNumber'
import Dialog from 'components/Dialog'
import {Button} from 'components/Button'
import hexToRgb from 'helpers/hexToRgb'
import Title from 'components/Title'
import TitleTab from 'components/Title/TitleTab'
import {applicantRegister, employerRegister} from './actions'
import {EMP_TYPE} from '../../../../constants/backend'
const TIMEOUT = 800
const LOGIN_TIME = 100
const enhance = compose(
  reduxForm({
    form: 'RegisterForm',
    enableReinitialize: true
  }),

  connect(
    state => ({values: getFormValues('RegisterForm')(state)}),
    {employerRegister, applicantRegister, formValidate}
  ),
  withState('tab', 'setTab', 'employer'),
  withHandlers({
    onSubmit: ({values, tab, ...props}) => () => {
      const isEmployer = tab === 'employer'
      if (isEmployer) {
        return props.employerRegister(values)
          .then(() => props.onSuccess(true))
          .then(() => setTimeout(() => props.handleClose(), TIMEOUT))
          .catch(errr => {
            return props.formValidate('RegisterForm', errr)
          })
      }
      return props.applicantRegister(values)
        .then(() => props.onSuccess(true))
        .then(() => setTimeout(() => props.handleClose(), TIMEOUT))
        .catch(errr => {
          return props.formValidate('RegisterForm', errr)
        })
    }
  }),
  injectSheet({
    dialogBody: {
      width: '756px',
      margin: 'auto',
      padding: '40px 100px 33px',
      background: hexToRgb('#f6f7f9', '0.6')
    },
    loginButton: {
      fontSize: '12px',
      fontWeight: '600',
      height: '38px',
      marginTop: '40px'
    },

    registerButton: {
      fontSize: '12px',
      textAlign: 'center',
      marginTop: '16px',
      '& > a': {
        color: TEXT_COLOR_DEFAULT,
        fontSize: 'inherit'
      }
    },
    field: {
      paddingTop: '30px'
    },
    name: {
      extend: 'field',
      ...fallbacksStyle('display', 'flex'),
      ...crossBrowserify('alignItems', 'flex-end')
    },
    itemMargin: {
      margin: '10px 0 0 11px'
    },
    contacts: {
      extend: 'field',
      ...fallbacksStyle('display', 'flex'),
      ...crossBrowserify('alignItems', 'flex-end'),
      paddingBottom: '14px',
      '& > div': {
        width: 'calc(50% - 15px)',
        marginBottom: '16px'
      },
      '& > div:first-child': {
        marginRight: '30px'
      }
    },
    policy: {
      opacity: '0.6',
      fontSize: '13px',
      fontWeight: '300',
      lineHeight: '1.62',
      marginTop: '12px',
      paddingBottom: '30px',
      borderBottom: BORDER_STYLE
    },
    label: {
      fontWeight: '500',
      marginBottom: '15px',
      '& span': {
        color: '#fa2279'
      }
    },
    email: {
      extend: 'field',
      borderTop: BORDER_STYLE
    },
    signUp: {
      textAlign: 'center',
      extend: 'field',
      '& u': {
        cursor: 'pointer',
        fontWeight: '500',
        color: MAIN_COLOR
      }
    }
  })
)

const tabs = [
  {
    value: 'employer',
    label: 'Работодатель'
  },
  {
    value: 'applicant',
    label: 'Специалист'
  }
]
const onOpenLogin = (onLogin, onClose) => {
  onLogin()
  setTimeout(onClose, LOGIN_TIME)
}
const RegisterDialog = props => {
  const {
    open,
    handleClose,
    handleSubmit,
    classes,
    loading,
    tab,
    onSubmit,
    onLoginOpen,
    setTab
  } = props
  const isApp = tab === 'applicant'

  const credentials = (
    <React.Fragment>
      <div className={classes.email}>
        <Field
          placeholder='Например «myjob@info.uz»'
          name={'username'}
          component={TextField}
          required={true}
          label={'Email'}
        />
      </div>
      <div className={classes.field}>
        <Field
          placeholder='Придумайте пароль'
          name={'password'}
          component={TextField}
          required={true}
          type={'password'}
          label={'Пароль'}
        />
      </div>
    </React.Fragment>
  )
  return (
    <Dialog
      open={open}
      className={classes.dialog}
      handleClose={handleClose}
      width={'100%'}>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.dialogBody}>
        <Title text={'Регистрация'} medium={true} margin={'0 0 12px'}/>
        <TitleTab onChange={setTab} type={'medium'} tabs={tabs} value={tab}/>
        {isApp && (
          <div style={animationStyle}>
            <div className={classes.field}>
              <Field
                label={'Ваше имя'}
                required={true}
                name={'fullName'}
                component={TextField}
              />
            </div>

            <div className={classes.contacts}>
              <Field
                label={'Дата рождения'}
                required={true}
                name={'birthdate'}
                component={DateField}
                placeholder={'дд/мм/гг'}
              />
              <Field
                required={true}
                label={'Номер телефона'}
                name={'phone'}
                normalize={normalizePhone}
                component={TextField}
              />
            </div>
            {credentials}
          </div>
        )}
        {!isApp && (
          <div style={animationStyle}>
            <div className={classes.name}>
              <Field
                label={'Форма и название организации'}
                required={true}
                name={'form'}
                margin={'0 10px 0 0'}
                isStatic={true}
                items={EMP_TYPE}
                component={SearchFieldConfig}
                width={'124px'}
              />
              <Field
                name={'title'}
                placeholder={'Название'}
                component={TextField}
                width={'436px'}
              />
            </div>

            <div>
              <Field
                name={'isRecruiter'}
                className={classes.itemMargin}
                component={Checkbox}
                required={true}
                label={'Кадровое агенство'}
              />
            </div>

            <div className={classes.contacts}>
              <Field
                name={'contactPerson'}
                component={TextField}
                placeholder={'Ф.И.О.'}
                required={true}
                label={'Имя контактного лица'}
              />
              <Field
                name={'phone'}
                component={PhoneTextField}
                required={true}
                normalize={normalizePhone}
                label={'Номер контактного лица'}
              />
            </div>
            {credentials}
          </div>
        )}
        <div className={classes.field}>
          <Button
            submitType={'submit'}
            type={'medium'}
            text={loading ? <Icon type={'loading'}/> : 'Зарегестрироваться'}
            fullWidth/>
        </div>
        <div className={classes.policy}>
          Нажимая кнопку «Зарегестрировать компанию», Вы соглашаетесь с условиями <u>пользовательского соглашения</u>
        </div>
        <div className={classes.signUp}>
          Уже зарегестрировались? <u onClick={() => onOpenLogin(onLoginOpen, handleClose)}>Войти</u>
        </div>
      </form>
    </Dialog>
  )
}

RegisterDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
  loading: PropTypes.bool,
  handleClose: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  setTab: PropTypes.func.isRequired,
  tab: PropTypes.string.isRequired,
  onSubmit: PropTypes.string.isRequired,
  onLoginOpen: PropTypes.func.isRequired
}

export default enhance(RegisterDialog)
