import axios from 'helpers/axiosHelper'
import * as API from 'constants/api'
import * as actionTypes from 'constants/actionTypes'
import * as sprintf from 'sprintf'
import toSnakeCase from '../../helpers/toSnakeCase'
import fp from 'lodash/fp'

export const rukovodFetchItem = (id) => {
  return (dispatch, getState) => {
    const params = {
    }
    const payload = axios({dispatch, getState})
      .get(sprintf(API.RUKOVODITELI_ITEM, fp.toNumber(id)), {params})
      .then(response => {
        return fp.get('data', response)
      })

    return dispatch({
      payload,
      type: actionTypes.RUKOVODITELI_ITEM
    })
  }
}
