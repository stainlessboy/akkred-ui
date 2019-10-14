import fp from 'lodash/fp'
import {compose, mapPropsStream, createEventHandler} from 'recompose'
import Reestr from './Reestr'
import {getReestrList} from './actions'
import {connect} from 'react-redux'

import withHistory from 'helpers/withHistory'
import {splitToArray} from 'helpers/joinSplitValues'
import {getSpecialityList, getRegionsList, getTepOrganList} from 'routes/action-common'
import {getStateData, compareFilterByProps} from 'helpers/get'
import _ from 'lodash'
import {getFormValues} from 'redux-form'

const mapDispatchToProps = {
  getReestrList,
  getRegionsList,
  getTepOrganList

}

const mapStateToProps = (state) => {
  return {
    ...getStateData('reestri.list', 'result', state, true),
    // CategoryList: _.get(state, 'common.category.data')
    ...getStateData('regions', 'regions', state, false),
    ...getStateData('common.type', 'type', state, false),
    formValues: getFormValues('SearchResultsForm')(state),
    searchValues: getFormValues('SearchResultsForm')(state)

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
      .filter(fp.flow(fp.get('history.location.pathname'), fp.isEqual('/reestr')))
      .distinctUntilChanged((prev, next) => compareFilterByProps(prev, next, 'resultFilter'))
      .subscribe(props => {
        props.getReestrList(props.resultFilter.getParams())
      })

    props$
      .first()
      .subscribe(props => {
        props.getRegionsList()
        props.getTepOrganList()
      })

    const {handler: onClear, stream: onClear$} = createEventHandler()
    const {handler: onFilterChange, stream: onFilterChange$} = createEventHandler()
    const {handler: onSearch, stream: onSearch$} = createEventHandler()

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

    onSearch$
      .withLatestFrom(props$)
      .subscribe(([v, {resultFilter, searchValues, pathname, ...props}]) => {
        return props.history.replace({
          pathname,
          search: resultFilter.getStringParams({text: searchValues.search})
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
          initialValues,
          onSearch
        }
      })
    // Return props$.combineLatest(props => {
    //   Return {
    //     ...props
    //   }
    // })
  })
)(Reestr)
