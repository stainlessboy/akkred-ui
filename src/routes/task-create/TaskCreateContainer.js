import fp from 'lodash/fp'
import {
  pure,
  compose,
  mapPropsStream,
  createEventHandler
} from 'recompose'

import {connect} from 'react-redux'
import withHistory from 'helpers/withHistory'
import {taskFetchItem} from '../task-details/actions'
import {createTaskAction, updateResumeAction} from './actions'
import ResumeCreate from './TaskCreate'
import {getItemStateData} from 'helpers/get'
import {TASK_ITEM} from 'constants/routes'
import sprintf from 'sprintf'
const mapDispatchToProps = {
  resumeFetchItem: taskFetchItem,
  createTaskAction,
  updateResumeAction
}

const mapStateToProps = (state) => {
  return {
    ...getItemStateData('user', 'user', state),
  }
}

export default compose(
  withHistory,
  connect(mapStateToProps, mapDispatchToProps),
  mapPropsStream(props$ => {
    props$
      .first()
      .subscribe(props => {
      })

    const {handler: onTabChange, stream: onTabChange$} = createEventHandler()
    const {handler: onSubmit, stream: onSubmit$} = createEventHandler()

    onTabChange$
      .withLatestFrom(props$)
      .subscribe(([value, {history, tab, pathname, ...p}]) => {
        return history.replace(pathname, {'smooth': true})
      })

    onSubmit$
      .withLatestFrom(props$)
      .subscribe(([formValues, {...props}]) => {
        if (props.id) {
          return props.updateResumeAction(formValues, props.id)
        }
        return props.createTaskAction(formValues)
          .then(({value}) => props.history.push(sprintf(TASK_ITEM, value.id)))
      })

    return props$.combineLatest(props => {
      const {userDetail} = props
      const data = fp.get('data', userDetail)

      const initialValues = {}

      return {
        ...props,
        onTabChange,
        onSubmit,
        initialValues
      }
    })
  }),
  pure
)(ResumeCreate)
