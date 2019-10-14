import fpGet from 'lodash/fp/get'
import axios from 'helpers/axiosHelper'
import * as API from 'constants/api'
import * as actionTypes from 'constants/actionTypes'
import toSnakeCase from 'helpers/toSnakeCase'

export const getReestrList = (data) => {
  return (dispatch, getState) => {
    const params = toSnakeCase({
      page_size: 20,
      ...data
    })
    const payload = axios({dispatch, getState})
      .get(API.REESTR_LIST, {params})
      .then(response => {
        return fpGet('data', response)
      })

    return dispatch({
      payload,
      type: actionTypes.REESTR_LIST
    })
  }
}
