/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import classes from './Login.css'
import TitleTab from 'components/Title/TitleTab'
import TextField from 'components/FormComponents/TextField'
import HyperButton from 'components/Button/Hyper'
import {Form, Field} from 'react-final-form'

const tabs = [
  {
    value: 'up',
    label: 'Регистрация'
  },
  {
    value: 'in',
    label: 'Вход'
  }
]
const Login = props => {
  const {onLogin, dataFilter, onRegister} = props

  const login = dataFilter.getParam('tab') === 'in'
  const register = (
    <React.Fragment>
      <div className={classes.field}>
        <Field
          name="fullName"
          component={TextField}
          label={'Имя*'}
          required={true}
        />
      </div>
      <div className={classes.field}>
        <Field
          name="email"
          component={TextField}
          label={'Email'}
          required={true}
        />
      </div>
      <div className={classes.field}>
        <Field
          name="phoneNumber"
          component={TextField}
          label={'Номер телефона'}
          required={true}
        />
      </div>
      <div className={classes.field}>
        <Field
          name="password"
          type={'password'}
          component={TextField}
          label={'Пароль'}
          required={true}

        />
      </div>
      <div className={classes.field}>
        <Field
          name="password"
          type={'password'}
          component={TextField}
          label={'Пароль'}
        />
      </div>
    </React.Fragment>

  )

  const signIn = (
    <React.Fragment>
      <div className={classes.field}>
        <Field
          name="username"
          component={TextField}
          label={'Email'}
          required={true}
        />
      </div>
      <div className={classes.field}>
        <Field
          name="password"
          type={'password'}
          component={TextField}
          label={'Пароль'}
        />
      </div>
    </React.Fragment>
  )
  return (
    <div className={classes.container}>
      <TitleTab filter={dataFilter} type={'large'} tabs={tabs}/>
      <div className={classes.title}>Войдите как заказчик, и создавайте задачи</div>
      <Form
        onSubmit={login ? onLogin : onRegister}
        initialValues={{}}
        render={({handleSubmit, form, submitting, pristine, values}) => (
          <form onSubmit={handleSubmit}>
            {login ? signIn : register}
            <div className={classes.buttons}>
              <HyperButton
                fullWidth={true}
                submitType={'submit'}
                type={'large'}
                text={login ? 'Войти' : 'Зарегестрироваться'}
                disabled={submitting || pristine}/>
            </div>
          </form>
        )}
      />
    </div>
  )
}

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
  onRegister: PropTypes.func.isRequired,
  dataFilter: PropTypes.object.isRequired
}

export default withStyles(classes)(Login)
