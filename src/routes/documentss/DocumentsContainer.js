import fp from 'lodash/fp'
import {compose, mapPropsStream, createEventHandler} from 'recompose'
import Task from './Documents'
import {getDocumentsList} from './actions'
import {connect} from 'react-redux'

import withHistory from 'helpers/withHistory'
import {splitToArray} from 'helpers/joinSplitValues'
import {getSpecialityList, getRegionsList, getCategoryList} from 'routes/action-common'
import {getStateData, compareFilterByProps} from 'helpers/get'
import _ from 'lodash'

const mapDispatchToProps = {
  getDocumentsList,
  getCategoryList

}

const mapStateToProps = (state) => {
  return {
    ...getStateData('documents.list', 'result', state, true),
    categoryList: _.get(state, 'common.category.data')

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
      .filter(fp.flow(fp.get('history.location.pathname'), fp.isEqual('/documents')))
      .distinctUntilChanged((prev, next) => compareFilterByProps(prev, next, 'resultFilter'))
      .subscribe(props => {
        props.getDocumentsList(props.resultFilter.getParams())
      })

    props$
      .first()
      .subscribe(props => {
        props.getCategoryList()
      })

    const {handler: onClear, stream: onClear$} = createEventHandler()
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
  })
)(Task)
