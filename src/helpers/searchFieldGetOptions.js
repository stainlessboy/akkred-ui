import _ from 'lodash'
import axios from 'helpers/axiosHelper'
import toCamelCase from 'helpers/toCamelCase'
import caughtCancel from 'helpers/caughtCancel'

let listToken = null
const PAGE_SIZE = 100
const getOptions = (api, search, params, pageSize = PAGE_SIZE, withPageSize, getState, dispatch) => {
  const CancelToken = axios({getState, dispatch}).CancelToken
  if (listToken) {
    listToken.cancel()
  }
  listToken = CancelToken.source()
  return axios({getState, dispatch})
    .get(api, {params: _.merge(_.merge(params, {search}), {page_size: pageSize}), cancelToken: listToken.token})
    .then(({data}) => {
      if (withPageSize) {
        return Promise.resolve(toCamelCase(data.results))
      }
      return Promise.resolve(toCamelCase(data))
    })
    .catch((error) => {
      caughtCancel(error)
    })
}

export default getOptions
