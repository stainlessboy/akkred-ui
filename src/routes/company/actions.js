import sprintf from 'sprintf'
import axios from 'helpers/axiosHelper'
import toSnakeCase from 'helpers/toSnakeCase'
import {prop, propOr, map, filter, pipe} from 'ramda'
import {removeFalsy} from 'helpers/get'
import {momentToString} from 'helpers/dateHelper'
import * as API from 'constants/api'
import * as actionTypes from 'constants/actionTypes'
const exists = n => n

const createSerializer = (data) => {
  const gallery = pipe(propOr([], 'gallery'), filter(exists), map(prop('id')))(data)
  return removeFalsy(toSnakeCase({
    title: prop('title', data),
    text: prop('text', data),
    speciality: prop('speciality', data),
    gallery: gallery,
    deadline: momentToString(prop('deadline', data)),
    district: prop('district', data),
    address: prop('address', data),
    price: prop('price', data)
  }))
}

export const createTaskAction = (data) => {
  const params = createSerializer(data)
  return (dispatch, getState) => {
    const payload = axios({dispatch, getState})
      .post(API.TASK_CREATE, params)
      .then(response => {
        return prop('data', response)
      })

    return dispatch({
      payload,
      type: actionTypes.TASK_CREATE
    })
  }
}

export const updateResumeAction = (data, id) => {
  const params = createSerializer(data)
  return (dispatch, getState) => {
    const payload = axios({dispatch, getState})
      .put(sprintf(API.RESUME_UPDATE, Number(id)), params)
      .then(response => {
        return prop('data', response)
      })

    return dispatch({
      payload,
      type: actionTypes.RESUME_UPDATE
    })
  }
}
