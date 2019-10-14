import fpGet from 'lodash/fp/get'
import axios from 'helpers/axiosHelper'
import * as API from 'constants/api'
import * as actionTypes from 'constants/actionTypes'
import toSnakeCase from 'helpers/toSnakeCase'

export const getNewsList = (data) => {
  return (dispatch, getState) => {
    const params = toSnakeCase({
      page_size: 8,
      ...data
    })
    const payload = axios({dispatch, getState})
      .get(API.NEWS_LIST, {params})
      .then(response => {
        return fpGet('data', response)
      })

    return dispatch({
      payload,
      type: actionTypes.NEWS_LIST
    })
  }
}
