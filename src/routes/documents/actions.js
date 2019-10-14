import fpGet from 'lodash/fp/get'
import axios from 'helpers/axiosHelper'
import * as API from 'constants/api'
import * as actionTypes from 'constants/actionTypes'
import toSnakeCase from 'helpers/toSnakeCase'

export const getDocumentsList = (data) => {
  return (dispatch, getState) => {
    const params = toSnakeCase({
      page_size: 10,
      ...data
    })
    const payload = axios({dispatch, getState})
      .get(API.DOCUMENTS_LIST, {params})
      .then(response => {
        return fpGet('data', response)
      })

    return dispatch({
      payload,
      type: actionTypes.DOCUMENTS_LIST
    })
  }
}
