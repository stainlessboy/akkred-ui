import React from 'react'
import {compose} from 'recompose'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'
import Icon from 'antd/lib/icon'
import {reduxForm, Field} from 'redux-form'
import {
  BLACK_COLOR,
  TEXT_COLOR_DEFAULT
} from 'constants/styles'
import Dialog from 'components/Dialog/index'
import {Button} from 'components/Button'
import Link from 'components/Link/Link'
import {TextField, Checkbox} from 'components/FormComponents'
import hexToRgb from 'helpers/hexToRgb'
import SocialLogin from '../../SocialLogin'

const enhance = compose(
  reduxForm({
    form: 'LoginForm',
    enableReinitialize: true
  }),

  injectSheet({
    dialogBody: {
      width: '365px',
      margin: 'auto',
      lineHeight: '1',
      padding: '36px 53px 40px'
    },

    field: {
      marginBottom: '25px',
      '&:last-child': {
        marginBottom: '0'
      }
    },

    label: {
      color: hexToRgb(BLACK_COLOR, '0.95'),
      fontSize: '12px',
      marginBottom: '13px'
    },

    actionButtons: {
      fontSize: '16px'
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
    }
  })
)

const LoginDialog = ({...props}) => {
  const {
    open,
    handleClose,
    handleSubmit,
    classes,
    loading
  } = props
  return (
    <Dialog
      open={open}
      className={classes.dialog}
      handleClose={handleClose}>
      <form onSubmit={handleSubmit} className={classes.dialogBody}>
        <div className={classes.fields}>
          <div className={classes.field}>
            <div className={classes.label}>Логин</div>
            <Field
              errorText={'ошибка'}
              name={'username'}
              component={TextField}/>
          </div>
          <div className={classes.field}>
            <div className={classes.label}>Пароль</div>
            <Field
              errorText={'ошибка'}
              name={'password'}
              type={'password'}
              component={TextField}/>
          </div>
          <div className={classes.field}>
            <Field
              name={'remember'}
              label={'Запомнить'}
              component={Checkbox}/>
          </div>
        </div>
        <div className={classes.actionButtons}>
          <Button
            text={loading ? <Icon type={'loading'}/> : 'Войти'}
            className={classes.loginButton}
            fullWidth/>
          <div className={classes.registerButton}>
            <Link to={'/register'}>Регистрация</Link>
          </div>
        </div>
        <SocialLogin text={'Войти с помощью'}/>
      </form>
    </Dialog>
  )
}

LoginDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired
}

export default enhance(LoginDialog)
