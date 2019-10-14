import {
  compose,
  setDisplayName,
  mapPropsStream,
  pure
} from 'recompose'

import {connect} from 'react-redux'
import ArticleDetails from './ArticleDetails'
import {articleItemFetch} from './actions'
import {articleListFetch} from '../articles/actions'
import {getItemStateData, getStateData} from 'helpers/get'
import setGlobalLoader from 'helpers/setGlobalLoader'
import fp from 'lodash/fp'
const mapStateToProps = (state) => {
  return {
    ...getItemStateData('article.item', 'article', state),
    ...getStateData('article.list', 'article', state)
  }
}

const mapDispatchToProps = {
  articleItemFetch,
  articleListFetch,
  setGlobalLoader
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  mapPropsStream(props$ => {

    props$
      .filter(fp.get('id'))
      .distinctUntilChanged(null, fp.get('id'))
      .subscribe(props => {
        props.setGlobalLoader(true)
        props.articleListFetch({pageSize: 3})
        return props.articleItemFetch(props.id)
          .then(() => props.setGlobalLoader(false))
      })

    return props$
  }),
  setDisplayName('ArticleDetailContainer'),
  pure
)(ArticleDetails)

