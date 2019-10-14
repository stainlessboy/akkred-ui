import {
  compose,
  mapPropsStream
} from 'recompose'

import {connect} from 'react-redux'
import fp from 'lodash/fp'
import EmployerDetail from './EmployerDetail'
import {rukovodFetchItem} from './actions'

import setGlobalLoader from 'helpers/setGlobalLoader'
import _ from 'lodash'

const mapStateToProps = (state) => {
  return {
    rukovodDetail: _.get(state, 'rukovoditeli.item')
  }
}

const mapDispatchToProps = {
  rukovodFetchItem,
  setGlobalLoader
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  mapPropsStream(props$ => {
    props$
      .filter((props) => fp.get('id', props))
      .distinctUntilChanged(null, fp.get('id'))
      .subscribe(props => {
        props.setGlobalLoader(true)
        return props.rukovodFetchItem(props.id)
          .then(() => props.setGlobalLoader(false))
      })

    return props$
  }),
)(EmployerDetail)
