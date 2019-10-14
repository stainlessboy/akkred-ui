import _ from 'lodash'
export const joinArray = (array) => {
  return _.join(array, '-')
}

export const splitToArray = (value) => {
  if (!value) return null
  return _.map(_.split(value, '-'), (item) => {
    return _.toNumber(item)
  })
}
