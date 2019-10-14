import fpGet from 'lodash/fp/get'
import axios from 'helpers/axiosHelper'
import * as API from 'constants/api'
import * as actionTypes from 'constants/actionTypes'
export const articleListFetch = (data) => {
  return (dispatch, getState) => {
    const params = {
      page_size: fpGet('pageSize', data) || '8',
      page: fpGet('page', data)
    }
    const payload = axios({dispatch, getState})
      .get(API.ARTICLE_LIST, {params})
      .then(response => {
        return fpGet('data', response)
      })

    return dispatch({
      payload,
      type: actionTypes.NEWS_LIST
    })
  }
}
