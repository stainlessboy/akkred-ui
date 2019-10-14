import _ from 'lodash'
import axios from 'axios'
import {API_URL} from 'constants/api'
import * as actionTypes from 'constants/actionTypes'
import toCamelCase from 'helpers/toCamelCase'
import history from '../history'

const UN_AUTH = 401
const CONTENT_TYPE_JSON = 'application/json'

const responseToCamelCase = (data, response) => {
  const responseContentType = _.get(response, ['content-type'])
  if (_.isEqual(CONTENT_TYPE_JSON, responseContentType) && data) {
    return toCamelCase(JSON.parse(data))
  }

  if (_.isObject(data) || _.isArray(data)) {
    return toCamelCase(data)
  }
  return data
}

const apiErrorHandler = _.curry((dispatch, error) => {
  const status = _.get(error, ['response', 'status'])
  if (_.isEqual(UN_AUTH, status) && history && dispatch) {
    dispatch({type: `${actionTypes.SIGN_IN}_CLEAR`})
    history.replace('/')
  }

  return Promise.reject(error)
})

const axiosRequest = ({getState, dispatch}, noAuth = false) => {
  const state = getState && getState()
  const token = _.get(state, ['login', 'data', 'token'])

  axios.defaults.baseURL = API_URL
  axios.defaults.transformResponse = [responseToCamelCase]
  axios.defaults.timeout = 100000

  if (!noAuth) {
    axios.defaults.headers.common.Authorization = token ? `Token ${token}` : ''
  } else {
    axios.defaults.headers.common = {}
  }

  axios.interceptors.response.use(response => response, apiErrorHandler(dispatch))

  return axios
}

export default axiosRequest
