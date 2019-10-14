/* eslint-disable no-div-regex */
import _ from 'lodash'
const getQuery = (params) => {
  const search = _.trimStart(params, '?')
  if (params) {
    return JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
  }
  return {}
}

export default getQuery
