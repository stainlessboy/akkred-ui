import React from 'react'
import {
  compose,
  withState,
  mapPropsStream,
  createEventHandler
} from 'recompose'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {reset} from 'redux-form'
import injectSheet from 'react-jss'
import classNames from 'classnames'
import LeftIcon from 'react-icons/lib/md/keyboard-arrow-left'
import withHistory from 'helpers/withHistory'
import fp from 'lodash/fp'
import formValidate from 'helpers/formValidate'
import Container from 'components/Container'
import Link from 'components/Link'
import LoginDialog from 'components/HomePage/Dialogs/LoginDialog'
import LogoTitle from 'components/Title/LogoTitle'
import {loginAction, logoutAction} from 'routes/user/actions'
import {
  BLACK_COLOR,
  crossBrowserify,
  fallbacksStyle
} from '../../constants/styles'
import hexToRgb from '../../helpers/hexToRgb'
import DropdownList from './DropdownList'

const enhance = compose(
  withHistory,
  connect(state => ({
    loginForm: fp.get('form.LoginForm.values', state),
    isAuth: fp.get('login.data.token', state),
    userData: fp.get('user.data', state),
    authLoading: fp.get('login.loading', state)
  }), {formValidate, loginAction, reset, logoutAction}),
  withState('loginOpen', 'setLoginOpen', false),
  mapPropsStream(props$ => {
    const {handler: onLogin, stream: onLogin$} = createEventHandler()
    const {handler: onLoginOpen, stream: onLoginOpen$} = createEventHandler()
    const {handler: onLoginClose, stream: onLoginClose$} = createEventHandler()

    onLoginOpen$
      .withLatestFrom(props$)
      .subscribe(([value, props]) => {
        props.reset('LoginForm')
        return props.setLoginOpen(true)
      })

    onLoginClose$
      .withLatestFrom(props$)
      .subscribe(([value, props]) => {
        return props.setLoginOpen(false)
      })

    onLogin$
      .withLatestFrom(props$)
      .subscribe(([value, props]) => {
        const values = fp.get('loginForm', props)
        return props.loginAction(values)
          .then(() => props.setLoginOpen(false))
          .catch(errr => {
            return props.formValidate('LoginForm', errr)
          })
      })

    return props$.combineLatest(props => ({
      ...props,
      onLogin,
      onLoginOpen,
      onLoginClose
    }))
  }),
  withState('scrollValue', 'setScrollValue', null),

  injectSheet({
    headerContainer: {
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      zIndex: '4010',
      background: '#fcfcfd'
    },

    back: {
      fontWeight: '500',
      cursor: 'pointer',
      '& svg': {
        marginRight: '-6px',
        fontSize: '17px'
      }
    },
    header: {
      background: 'inherit',
      ...fallbacksStyle('display', 'flex'),
      ...crossBrowserify('justifyContent', 'space-between'),
      ...crossBrowserify('alignItems', 'center'),
      height: '68px',
      position: 'relative'
    },

    item: {
      color: hexToRgb(BLACK_COLOR, '0.75'),
      fontSize: '14px'
    },
    auth: {
      extend: 'languages',
      marginLeft: '16px',
      paddingLeft: '30px'
    }
  })
)

const HeaderSimple = props => {
  const {
    classes,
    history,
    loginOpen,
    onLogin,
    isAuth,
    authLoading,
    onLoginOpen,
    onLoginClose,
    userData,
    query
  } = props

  const goBack = () => query.re ? history.push(query.re) : history.goBack()
  return (
    <div className={classes.headerContainer}>
      <Container>
        <div className={classes.header}>
          <div className={classes.back} onClick={goBack}><LeftIcon/> Назад</div>
          <LogoTitle/>

          <div className={classNames(classes.item, classes.auth)}>
            {!isAuth && <a onClick={onLoginOpen}>Войти</a>}
            {!isAuth && <Link to={'/register'}>Регистрация</Link>}
            {isAuth && <DropdownList user={userData} logout={props.logoutAction} />}

          </div>
        </div>
        <LoginDialog
          open={loginOpen}
          onSubmit={onLogin}
          loading={authLoading}
          handleClose={onLoginClose}
        />
      </Container>
    </div>
  )
}
HeaderSimple.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  query: PropTypes.object.isRequired,
  logoutAction: PropTypes.func.isRequired,
  userData: PropTypes.object.isRequired

}
export default enhance(HeaderSimple)
