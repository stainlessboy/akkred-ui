import _ from 'lodash'
import axios from 'helpers/axiosHelper'
import * as API from 'constants/api'
import moment from 'moment'

import * as actionTypes from 'constants/actionTypes'
import setCookie from 'helpers/setCookie'

export const getRegionsList = (type) => {
  return (dispatch, getState) => {
    const params = {
      page_size: 100,
      ordering: 'name',
      type
    }
    const payload = axios({dispatch, getState})
      .get(API.REGIONS_LIST, {params})
      .then(response => {
        return _.get(response, 'data')
      })

    return dispatch({
      payload,
      type: actionTypes.REGIONS_LIST
    })
  }
}

export const getTepOrganList = (type) => {
  return (dispatch, getState) => {
    const params = {
      page_size: 100,
      ordering: 'name',
      type
    }
    const payload = axios({dispatch, getState})
      .get(API.TYPE_ORGAN_LIST, {params})
      .then(response => {
        return _.get(response, 'data')
      })

    return dispatch({
      payload,
      type: actionTypes.TYPE_ORGAN_LIST
    })
  }
}

export const getCategoryList = (type) => {
  return (dispatch, getState) => {
    const params = {
      page_size: 100,
      ordering: 'name',
      type
    }
    const payload = axios({dispatch, getState})
      .get(API.CATEGORY_LIST, {params})
      .then(response => {
        return _.get(response, 'data')
      })

    return dispatch({
      payload,
      type: actionTypes.CATEGORY_LIST
    })
  }
}

export const getDriverLicenseList = () => {
  return (dispatch, getState) => {
    const params = {
      page_size: 100,
      ordering: 'name'
    }
    const payload = axios({dispatch, getState})
      .get(API.DRIVER_LICENSE_LIST, {params})
      .then(response => {
        return _.get(response, 'data')
      })

    return dispatch({
      payload,
      type: actionTypes.DRIVER_LICENSE_LIST
    })
  }
}

export const getCurrencyList = () => {
  return (dispatch, getState) => {
    const params = {
      page_size: 100,
      ordering: 'name'
    }
    const payload = axios({dispatch, getState})
      .get(API.CURRENCY_LIST, {params})
      .then(response => {
        return _.get(response, 'data')
      })

    return dispatch({
      payload,
      type: actionTypes.CURRENCY_LIST
    })
  }
}

export const getSpecialityList = () => {
  return (dispatch, getState) => {
    const params = {
      page_size: 100,
      ordering: 'name'
    }
    const payload = axios({dispatch, getState})
      .get(API.SPECIALITY_LIST, {params})
      .then(response => {
        return _.get(response, 'data')
      })

    return dispatch({
      payload,
      type: actionTypes.SPECIALITY_LIST
    })
  }
}

export const setAppLanguageAction = lang => {
  const ONE_YEAR = 365
  return dispatch => {
    if (lang === 'uz') moment.locale('uz-latn')
    else moment.locale(lang)

    setCookie('lang', lang, ONE_YEAR)
    return dispatch({
      payload: Promise.resolve(lang),
      type: actionTypes.LANGUAGE
    })
  }
}
