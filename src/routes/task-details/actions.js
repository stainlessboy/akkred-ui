import axios from 'helpers/axiosHelper'
import * as API from 'constants/api'
import * as actionTypes from 'constants/actionTypes'
import * as sprintf from 'sprintf'
import toSnakeCase from '../../helpers/toSnakeCase'
import fp from 'lodash/fp'

export const taskFetchItem = (id) => {
  return (dispatch, getState) => {
    const params = {
    }
    const payload = axios({dispatch, getState})
      .get(sprintf(API.TASK_ITEM, fp.toNumber(id)), {params})
      .then(response => {
        return fp.get('data', response)
      })

    return dispatch({
      payload,
      type: actionTypes.TASK_ITEM
    })
  }
}

export const resumeActiveList = (data) => {
  const params = toSnakeCase({
    pageSize: '100',
    ...data
  })
  return (dispatch, getState) => {
    const payload = axios({dispatch, getState})
      .get(API.RESUME_ACTIVE_LIST, {params})
      .then(response => {
        return fp.get('data', response)
      })

    return dispatch({
      payload,
      type: actionTypes.RESUME_LIST
    })
  }
}
