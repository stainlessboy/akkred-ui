import fp from 'lodash/fp'
import axios from 'helpers/axiosHelper'
import toSnakeCase from 'helpers/toSnakeCase'
import sprintf from 'sprintf'
import * as API from 'constants/api'
import * as actionTypes from 'constants/actionTypes'

export const clientUpdateAction = (data, id) => {
  return (dispatch, getState) => {
    const params = toSnakeCase({
      fullName: fp.get('fullName', data),
      livingPlace: fp.get('livingPlace', data),
      phoneNumber: fp.get('phoneNumber', data),
      email: fp.get('email', data),
      password: fp.get('password', data),
    })
    const payload = axios({dispatch, getState})
      .put(sprintf(API.CLIENT_ITEM, id), params)
      .then(response => {
        return fp.get('data', response)
      })

    return dispatch({
      payload,
      type: actionTypes.USER_INFO
    })
  }
}
