import axios from 'helpers/axiosHelper'
import * as API from 'constants/api'
import * as actionTypes from 'constants/actionTypes'
import * as sprintf from 'sprintf'
import toSnakeCase from '../../helpers/toSnakeCase'
import fp from 'lodash/fp'
import {SYSTEM_PAGES_ITEM} from "constants/api";
import fpGet from "lodash/fp/get";

// export const reestrFetchItem = (area) => {
//   return (dispatch, getState) => {
//     const payload = axios({dispatch, getState})
//       .get(sprintf(API.REESTR_ITEM, area )
//       .then(response => {
//         return fp.get('data', response)
//       })
//
//     return dispatch({
//       payload,
//       type: actionTypes.REESTR_ITEM
//     })
//   }
// }

export const reestrFetchItem = (area, action) => {
  return (dispatch, getState) => {
    const payload = axios({dispatch, getState})
      .get(sprintf(API.REESTR_ITEM, area))
      .then(response => {
        return fpGet('data', response)
      })

    return dispatch(
      {
        type: action,
        payload
      }
    )
  }
}

