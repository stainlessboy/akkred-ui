import {
  compose,
  mapPropsStream
} from 'recompose'

import {connect} from 'react-redux'
import NewsDetails from './EmployerDetails'
import {rukovoditeliActiveList} from './actions'

import setGlobalLoader from 'helpers/setGlobalLoader'
import {getStateData} from '../../helpers/get'

const mapDispatchToProps = {
  rukovoditeliActiveList,
  setGlobalLoader
}
const mapStateToProps = (state) => {
  return {
    ...getStateData('rukovoditeli.list', 'result', state, true)

  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  mapPropsStream(props$ => {
    // Props$
    props$
      .first()
      .subscribe(props => props.rukovoditeliActiveList())
    return props$
  }),
)(NewsDetails)
