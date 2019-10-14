import axios from 'helpers/axiosHelper'
import * as API from 'constants/api'
import * as actionTypes from 'constants/actionTypes'
import toSnakeCase from '../../helpers/toSnakeCase'
import fp from 'lodash/fp'

export const rukovoditeliActiveList = (data) => {
  const params = toSnakeCase({
    pageSize: '100',
    ...data
  })
  return (dispatch, getState) => {
    const payload = axios({dispatch, getState})
      .get(API.RUKOVODITELI_LIST, {params})
      .then(response => {
        return fp.get('data', response)
      })

    return dispatch({
      payload,
      type: actionTypes.RUKOVODITELI_LIST
    })
  }
}
