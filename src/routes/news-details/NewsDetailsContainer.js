import {
  compose,
  mapPropsStream
} from 'recompose'

import {connect} from 'react-redux'
import fp from 'lodash/fp'
import NewsDetails from './NewsDetails'
import {newsFetchItem} from './actions'

import setGlobalLoader from 'helpers/setGlobalLoader'
import _ from 'lodash'

const mapStateToProps = (state) => {
  return {
    newsDetail: _.get(state, 'news.item')
  }
}

const mapDispatchToProps = {
  newsFetchItem,
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
        return props.newsFetchItem(props.id)
          .then(() => props.setGlobalLoader(false))
      })

    return props$
  }),
)(NewsDetails)
