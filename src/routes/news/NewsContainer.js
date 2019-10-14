import ResumeCreate from './News'

import fp from 'lodash/fp'
import {
  compose,
  mapPropsStream,
  createEventHandler,
  pure
} from 'recompose'
import {getNewsList} from './actions'
import {connect} from 'react-redux'

import withHistory from 'helpers/withHistory'
import {splitToArray} from 'helpers/joinSplitValues'
import {getStateData, compareFilterByProps} from 'helpers/get'
import _ from 'lodash'

const mapDispatchToProps = {
  getNewsList

}

const mapStateToProps = (state) => {
  return {
    ...getStateData('news.list', 'result', state, true)

  }
}

export default compose(
  withHistory,
  connect(mapStateToProps, mapDispatchToProps),
  mapPropsStream(props$ => {
    // Props$.first()
    //   .subscribe(props => {
    //     Return props.getTaskList()
    //   })
    props$
      .filter(fp.flow(fp.get('history.location.pathname'), fp.isEqual('/news')))
      .distinctUntilChanged((prev, next) => compareFilterByProps(prev, next, 'resultFilter'))
      .subscribe(props => {
        props.getNewsList(props.resultFilter.getParams())
      })
    // Props$
    //   .filter(fp.flow(fp.get('history.location.pathname'), fp.isEqual('/task')))
    //   .distinctUntilChanged((prev, next) => compareFilterByProps(prev, next, 'resultFilter'))
    //   .subscribe(props => {
    //     Props.getNewsList(props.resultFilter.getParams())
    //   })
    const {handler: onClear, stream: onClear$} = createEventHandler()
    const {handler: onSearch, stream: onSearch$} = createEventHandler()
    const {handler: onFilterChange, stream: onFilterChange$} = createEventHandler()

    onFilterChange$
      .withLatestFrom(props$)
      .subscribe(([{value, fieldName}, {resultFilter, pathname, ...props}]) => {
        if (fp.isArray(value)) {
          return props.history.replace({
            pathname,
            search: resultFilter.getStringParams({[fieldName]: fp.join('-', value)})
          })
        }

        return props.history.replace({
          pathname,
          search: resultFilter.getStringParams({[fieldName]: value})
        })
      })
    onClear$
      .withLatestFrom(props$)
      .subscribe(([{fieldName, value}, {resultFilter, pathname, formValues, ...props}]) => {
        const selectedValue = fp.get(fieldName, formValues)
        const isArray = fp.isArray(selectedValue)
        if (isArray) {
          const arr = fp.filter(v => !fp.equals(value)(v))(selectedValue)
          return props.history.replace({
            pathname,
            search: resultFilter.getStringParams({[fieldName]: fp.join('-', arr)})
          })
        }

        return props.history.replace({
          pathname,
          search: resultFilter.getStringParams({[fieldName]: ''})
        })
      })
    props$
      .first()
      .subscribe(props => {
        props.getNewsList()
      })

    return props$
      .combineLatest(props => {
        const initialValues = {}
        return {
          ...props,
          onClear,
          onFilterChange,
          initialValues
        }
      })
  }),
  pure

)(ResumeCreate)
