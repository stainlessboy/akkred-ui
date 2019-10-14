import fp from 'lodash/fp'
import {
  compose,
  mapPropsStream,
  createEventHandler,
  pure
} from 'recompose'
import {connect} from 'react-redux'
import {getFormValues} from 'redux-form'
import SearchResults from './Task'
import withHistory from 'helpers/withHistory'
import {splitToArray} from 'helpers/joinSplitValues'
import {getTaskList} from './actions'
import {getRegionsList, getSpecialityList} from 'routes/action-common'
import {getStateData, compareFilterByProps} from 'helpers/get'
import excludeKeys from 'helpers/excludeKeys'

const ONE = 1
const mapStateToProps = (state) => {
  return {
    ...getStateData('professions', 'professions', state, false),
    ...getStateData('task.list', 'result', state, true),
    ...getStateData('common.category', 'category', state, true),
    ...getStateData('regions', 'regions', state, false),
    formValues: getFormValues('SearchResultsForm')(state),
    searchValues: getFormValues('MainSearchForm')(state)
  }
}

const mapDispatchToProps = {
  getTaskList,
  getRegionsList,
  getSpecialityList
}

export default compose(
  withHistory,
  connect(mapStateToProps, mapDispatchToProps),
  mapPropsStream(props$ => {
    props$
      .filter(fp.flow(fp.get('history.location.pathname'), fp.isEqual('/tasks')))
      .distinctUntilChanged((prev, next) => compareFilterByProps(prev, next, 'resultFilter'))
      .subscribe(props => {
        props.getTaskList(props.resultFilter.getParams())
      })

    props$
      .first()
      .subscribe(props => {
        props.getRegionsList('district')
        props.getSpecialityList()
      })

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
        const {resultFilter} = props

        const type = resultFilter.getParam('type') || 'vacancy'
        const experience = resultFilter.getParam('experience') || 'none'
        const text = resultFilter.getParam('text') || ''
        const sphere = splitToArray(resultFilter.getParam('sphere'))
        const employmentType = fp.split('-', resultFilter.getParam('employmentType'))
        const region = fp.toInteger(resultFilter.getParam('region'))
        const initialValues = {
          text,
          type,
          experience,
          sphere,
          employmentType,
          region
        }
        return {
          ...props,
          text,
          type,
          onClear,
          onSearch,
          onFilterChange,
          initialValues
        }
      })
  }),
  excludeKeys([
    'getProfessionsList',
    'getRegionsList',
    'getTaskList',
    'formValues'
  ]),
  pure
)(SearchResults)
