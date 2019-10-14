import {
  compose,
  setDisplayName,
  mapPropsStream,
  pure,
  createEventHandler
} from 'recompose'
import {connect} from 'react-redux'
import HomeWrapper from './Home'
import withHistory from 'helpers/withHistory'
import {getStateData} from 'helpers/get'
import excludeKeys from 'helpers/excludeKeys'
import {getNewsList} from 'routes/news/actions'
import {
  // getNewsList,
  getPerformerList,getSliderList
} from 'routes/home/actions'
import queryToParams from '../../helpers/queryToParams'
import {onToggle} from 'components/Feedback/FeedbackDialog'

const mapDispatchToProps = {
  getNewsList,
  getPerformerList,
  getSliderList,
  onToggle
}

const mapStateToProps = (state) => {
  return {
    // ResultList: _.get(state, 'task.list.data'),
    ...getStateData('common.newsList', 'news', state, false),
    ...getStateData('common.slider', 'slider', state, false),
    ...getStateData('performer.list', 'performer', state, false, '8')
  }
}

export default compose(
  withHistory,
  connect(mapStateToProps, mapDispatchToProps),
  mapPropsStream(props$ => {
    props$
      .first()
      .subscribe(props => {
       props.getNewsList()
       props.getSliderList()
   //     props.getPerformerList()
      })

    const {handler: onSearch, stream: onSearch$} = createEventHandler()

    onSearch$
      .withLatestFrom(props$)
      .subscribe(([tab, {history, searchForm}]) => {
        const text = searchForm.search
        const type = searchForm.type
        history.replace({
          pathname: '/results',
          search: queryToParams({type, text})
        })
      })

    return props$.combineLatest(props => {
      return {
        ...props,
        onSearch
      }
    })
  }),
  excludeKeys([
    'getPerformerList',
    'getNewsList'
  ]),
  setDisplayName('HomeContainer'),
  pure
)(HomeWrapper)

