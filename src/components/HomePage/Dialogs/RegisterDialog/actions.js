import fp from 'lodash/fp'
import axios from 'helpers/axiosHelper'
import toSnakeCase from 'helpers/toSnakeCase'
import * as API from 'constants/api'
import * as actionTypes from 'constants/actionTypes'

export const employerRegister = data => {
  const params = toSnakeCase({
    title: fp.get('title', data),
    contactPerson: fp.get('contactPerson', data),
    phone: fp.get('phone', data),
    isRecruiter: fp.get('isRecruiter', data),
    username: fp.get('username', data),
    password: fp.get('password', data)
  })
  return (dispatch, getState) => {
    const payload = axios({dispatch, getState})
      .post(API.EMPLOYER_REGISTER, params)
      .then(response => {
        const resp = fp.get('data', response)
        return resp
      })

    return dispatch({
      payload,
      type: actionTypes.REGISTER
    })
  }
}

export const applicantRegister = data => {
  const params = toSnakeCase({
    email: fp.get('username', data),
    password: fp.get('password', data),
    phone: fp.get('phone', data),
    birthdate: (fp.get('birthdate', data)).format('YYYY-MM-DD'),
    fullName: fp.get('fullName', data)
  })
  return (dispatch, getState) => {
    const payload = axios({dispatch, getState})
      .post(API.APPLICANT_REGISTER, params)
      .then(response => {
        const resp = fp.get('data', response)
        return resp
      })

    return dispatch({
      payload,
      type: actionTypes.REGISTER
    })
  }
}
