import {
  compose,
  mapPropsStream,
  pure
} from 'recompose'

import {connect} from 'react-redux'
import StaticPages from './StaticPages'

import setGlobalLoader from 'helpers/setGlobalLoader'
import _ from 'lodash'
import {getData} from '../static-pages/actions'
import fpGet from 'lodash/fp/get'
import {SYSTEM_PAGES} from '../../constants/actionTypes'

const mapStateToProps = (state) => {
  return {
    staticDetail: _.get(state, 'pages')
  }
}

const mapDispatchToProps = {
  getData,
  setGlobalLoader
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  mapPropsStream(props$ => {
    props$
      .distinctUntilChanged(null, fpGet('url'))
      .subscribe(props => props.getData(props.url, SYSTEM_PAGES))
    return props$
  }),
)(StaticPages)
