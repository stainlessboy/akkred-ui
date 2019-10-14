import fpGet from 'lodash/get'
import moment from 'moment'
export const momentToString = (momentObj) => moment.isMoment(momentObj) ? momentObj.format('YYYY-MM-DD') : fpGet(null)
export const stringToMoment = (date) => moment(date, 'YYY-MM-DD')
export const stringToMoment2 = (date) => moment(date, 'YYYY-MM-DD')
