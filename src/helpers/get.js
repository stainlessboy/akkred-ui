import fp from 'lodash/fp'
import _ from 'lodash'
import curryRight from 'lodash/curryRight'
import isUndefined from 'lodash/isUndefined'
import filterHelper from 'helpers/filterHelper'
import not from 'helpers/not'
import pickBy from 'lodash/pickBy'

const ONLY_PHONE = 4
export const compareFilterByProps = curryRight((props, nextProps, filterName = 'filter', except = {}) => {
  return props[filterName].filterRequest(except) === nextProps[filterName].filterRequest(except)
})

export const getStateData = (path, name, state, filter = true, pageSize) => {
  const list = fp.get(`${path}.data`, state)
  const loading = fp.get(`${path}.loading`, state)
  const failed = fp.get(`${path}.failed`, state)
  const pathname = fp.get(['router', 'pathname'], state)
  const queries = fp.get(['router', 'queries'], state)
  const obj = {}
  obj[`${name}List`] = {
    data: fp.getOr([], 'results', list),
    loading,
    failed
  }

  if (filter) {
    obj[`${name}Filter`] = filterHelper(list, pathname, queries, {}, pageSize)
  }

  return obj
}

export const getItemStateData = (path, name, state) => {
  const data = fp.getOr({}, `${path}.data`, state)
  const loading = fp.get(`${path}.loading`, state)
  const obj = {}
  obj[`${name}Detail`] = {
    data,
    loading
  }
  return obj
}

export const getStateLoading = (path, name, state) => {
  const loading = fp.get(`${path}.loading`, state)
  //  Console.warn(loading)
  return {[`${name}Loading`]: loading}
}

const filterIt = _.cond([
  [_.isArray, _.flow([_.isEmpty, not])],
  [_.stubTrue, _.identity]
])
export const removeFalsy = (obj) => pickBy(obj, filterIt)

export const arrayObjToObj = (ARR) => fp.flow(
  fp.map(fp.values),
  fp.fromPairs
)(ARR)

export const getOnlyString = (str) => {
  if ((str === null) || (str === '') || isUndefined(str)) return null

  return fp.trim(
    str
      .replace(/<[^>]*>/g, '')
      .replace(/&[^;]*;/g, '')
      .replace(/\/[^\/]*\//g, '')
      .replace(/{[^}]*}/g, '')
  )
}
export const getWithBR = (str) => {
  if ((str === null) || (str === '') || isUndefined(str)) return null

  return fp.trim(
    str.replace(/\n/g, '<br/>')
  )
}

export const getPhone = (string) => {
  if (!string) return null

  return string.substring(ONLY_PHONE)
}

export const getPhoneFormat = (string) => {
  const hasPlus = fp.includes('+', string)
  const isEleven = fp.size(string) > 11
  const isNumber = fp.toInteger(getPhone(string))
  if (hasPlus && isNumber && isEleven) {
    return string.substring(0, 6) + ' ' +
            string.substring(6, 9) + ' ' +
            string.substring(9, 11) + ' ' +
            string.substring(11)
  }
  return string
}
