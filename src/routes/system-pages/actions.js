import axios from 'helpers/axiosHelper'
import fpGet from 'lodash/fp/get'
import {SYSTEM_PAGES_ITEM} from 'constants/api'
import sprintf from 'sprintf'
export const getData = (keyname, action) => {
  return (dispatch, getState) => {
    const payload = axios({dispatch, getState})
      .get(sprintf(SYSTEM_PAGES_ITEM, keyname))
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
