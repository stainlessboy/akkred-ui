import fp from 'lodash/fp'
import prop from 'ramda/src/prop'
import axios from 'helpers/axiosHelper'
import * as API from 'constants/api'
import * as actionTypes from 'constants/actionTypes'

export const loginAction = data => {
//  Const remember = fp.get('remember', data)
  const params = {
    username: fp.get('username', data),
    password: fp.get('password', data)
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

export const logoutAction = () => {
  return (dispatch, getState) => {
    const payload = axios({dispatch, getState})
      .delete(API.LOGOUT)
      .then(response => {
        document.cookie = 'token='
        return prop('data', response)
      })
      .catch(() => {
        document.cookie = 'token='
        dispatch({type: `${actionTypes.LOGIN}_CLEAR`})
        dispatch({type: `${actionTypes.USER_INFO}_CLEAR`})
      })
    dispatch({type: `${actionTypes.USER_INFO}_CLEAR`})
    dispatch({type: `${actionTypes.LOGIN}_CLEAR`})
    return dispatch({
      payload,
      type: `${actionTypes.LOGIN}`
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

