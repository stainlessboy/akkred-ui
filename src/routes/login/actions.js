import fp from 'lodash/fp'
import axios from 'helpers/axiosHelper'
import * as API from 'constants/api'
import prop from 'ramda/src/prop'
import * as actionTypes from 'constants/actionTypes'

export const loginAction = data => {
//  Const remember = prop('remember', data)
  const params = {
    username: prop('username', data),
    password: prop('password', data)
  }
  return (dispatch, getState) => {
    const payload = axios({dispatch, getState})
      .post(API.LOGIN, params)
      .then(response => {
        const resp = prop('data', response)
        const token = prop('token', resp)
        document.cookie = `token=${token};`
        return resp
      })

    return dispatch({
      payload,
      type: actionTypes.LOGIN
    })
  }
}
export const clientRegisteAction = data => {
//  Const remember = prop('remember', data)
  const params = {
    full_name: prop('fullName', data),
    email: prop('email', data),
    phone_number: prop('phoneNumber', data),
    password: prop('password', data)
  }
  return (dispatch, getState) => {
    const payload = axios({dispatch, getState})
      .post(API.CLIENT_CREATE, params)
      .then(response => {
        return prop('data', response)
      })

    return dispatch({
      payload,
      type: actionTypes.CLIENT_UPDATE
    })
  }
}

export const userInfoFetch = token => {
  return (dispatch, getState) => {
    const payload = axios({dispatch, getState})
      .get(`${API.CHECK_TOKEN}${token}/`)
      .then(response => {
        return prop('data', response)
      })

    return dispatch({
      payload,
      type: actionTypes.USER_INFO
    })
  }
}
