import _ from 'lodash'
import numberWithoutSpaces from 'helpers/numberWithoutSpaces'

export const normalizeNumber = (value) => {
  const numberValue = _.toNumber(numberWithoutSpaces(value))
  if (!value) {
    return value
  } else if (_.isNaN(numberValue)) {
    return ''
  }

  const onlyNums = _.replace(_.replace(value, ',', '.'), / /g, '')
  return onlyNums.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

export const normalizePhone = value => {
  const firstValue = value.substring(0, 1)
  //  Console.warn(value.substring(0, 1))

  /*
     If (onlyNums.length <= 7) {
    return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3)}`
  }
  return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3, 6)}-${onlyNums.slice(6, 10)}`
  */
  if (!value) {
    return value
  }
  if (firstValue !== '+') return '+'
  const numbers = value.substring(1)
  const onlyNums = numbers.replace(/[^\d]/g, '')
  return `+${onlyNums}`
}

