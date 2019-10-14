import {stopSubmit} from 'redux-form'
import _ from 'lodash'
const formValidate = (formName, er) => {
  const error = _.get(er, 'response.data')
  const nonFieldErrors = _.get(er, 'response.data.nonFieldErrors')
  return stopSubmit(formName, {...error, _error: nonFieldErrors})
}

export default formValidate
