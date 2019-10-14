import React from 'react'
import path from 'ramda/src/path'
import prop from 'ramda/src/prop'
import {compose, withHandlers, withState} from 'recompose'
import {connect} from 'react-redux'
import Dialog from 'components/Dialog'
import injectSheet from 'react-jss'
import * as actionTypes from 'constants/actionTypes'
import Title from 'components/Title'
import {Form, Field} from 'react-final-form'
import TextField from '../FormComponents/TextField'
import SuccessIcon from 'icons/Success'
import {Button} from '../Button'
import axios from '../../helpers/axiosHelper'
import toSnakeCase from '../../helpers/toSnakeCase'
import * as API from '../../constants/api'

export const createFeed = (data) => {
  return (dispatch, getState) => {
    const payload = axios({dispatch, getState})
      .post(API.FEEDBACK_CREATE, toSnakeCase(data))
      .then(response => {
        return prop('data', response)
      })

    return dispatch({
      payload,
      type: actionTypes.FEEDBACK_CREATE
    })
  }
}

export const onToggle = (toogle) => {
  return (dispatch, getState) => {
    dispatch({
      type: actionTypes.FEEDBACK,
      data: toogle,
      loading: false
    })
  }
}
const enhance = compose(
  connect(
    state => ({open: path(['feedback', 'data'], state)}),
    {onToggle, createFeed}
  ),
  withState('success', 'setSuccess', false),
  withHandlers({
    onSubmit: props => (values) => {
      props.createFeed(values)
        .then(() => props.setSuccess(true))
    }
  }),
  injectSheet({
    wrapper: {
      boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.03)',
      borderRadius: '6px',
      background: '#fff',
      padding: '40px 60px'
    },
    title: {
      textAlign: 'center'
    },
    field: {
      marginBottom: '30px'
    },
    success: {
      textAlign: 'center'
    }
  })
)
const Feedback = props => {
  const {classes, open, onToggle, onSubmit, success, setSuccess} = props
  return (
    <Dialog
      open={open}
      handleClose={() => {
        onToggle(false)
        setSuccess(false)
      }}>
      <div className={classes.wrapper}>
        <Title margintype={'medium'} text={'Обратный звонок'} className={classes.title}/>

        <Form
          onSubmit={onSubmit}
          initialValues={{}}
          render={({handleSubmit, form, submitting, pristine, values}) => (
            <form onSubmit={handleSubmit}>
              {success && (
                <div className={classes.success}>
                  <SuccessIcon/>
                  <Title margin={'25px 0 20px'} text={'Готово!'} />
                  <div>
                  Наш оператор перезвонит вам в течении 5 минут
                  на номер {path(['phoneNumber'], values)}
                  </div>
                </div>
              )}
              {!success && (
                <React.Fragment>
                  <div className={classes.field}>
                    <Field
                      name="name"
                      component={TextField}
                      label={'Имя'}
                    />
                  </div>
                  <div className={classes.field}>
                    <Field
                      name="phoneNumber"
                      component={TextField}
                      label={'Ваш номер телефона'}
                    />
                  </div>

                  <div className={classes.buttons}>
                    <Button
                      submitType={'submit'}
                      type={'large'}
                      text={'Отправить'}
                      fullWidth={true}
                      disabled={submitting || pristine}/>
                  </div>
                </React.Fragment>
              )}
            </form>
          )}
        />
      </div>
    </Dialog>
  )
}

export default enhance(Feedback)
