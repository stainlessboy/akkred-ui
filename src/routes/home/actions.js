import axios from 'helpers/axiosHelper'
import * as API from 'constants/api'
import * as actionTypes from 'constants/actionTypes'
import {prop} from 'ramda'
import toSnakeCase from "../../helpers/toSnakeCase";
import fpGet from "lodash/fp/get";

export const getPerformerList = () => {
  return (dispatch, getState) => {
    const params = {
      page_size: 6
    }

    const payload = axios({dispatch, getState})
      .get(API.PERFORMER_LIST, {params})
      .then(response => {
        return prop('data', response)
      })

    return dispatch({
      payload: payload,
      type: actionTypes.PERFORMER_LIST
    })
  }
}

export const getNewsList = () => {
  return (dispatch, getState) => {
    const params = {
      page_size: 3
    }

    const payload = axios({dispatch, getState})
      .get(API.NEWS_LIST, {params})
      .then(response => {
        return prop('data', response)
      })

    return dispatch({
      payload: payload,
      type: actionTypes.NEWS_LIST
    })
  }
}
export const getSliderList = (data) => {
  return (dispatch, getState) => {
    const params = toSnakeCase({
      page_size: 8,
      ...data
    })
    const payload = axios({dispatch, getState})
      .get(API.SLIDER_LIST, {params})
      .then(response => {
        return fpGet('data', response)
      })

    return dispatch({
      payload,
      type: actionTypes.SLIDER_LIST
    })
  }
}
