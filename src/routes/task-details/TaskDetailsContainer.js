import {
  compose,
  mapPropsStream,
  pure
} from 'recompose'

import {connect} from 'react-redux'
import fp from 'lodash/fp'
import {getItemStateData, getStateData} from 'helpers/get'
import TaskDetails from './TaskDetails'
import {taskFetchItem} from './actions'
import {getTaskList} from 'routes/tasks/actions'

import setGlobalLoader from 'helpers/setGlobalLoader'

const mapStateToProps = (state) => {
  return {
    ...getItemStateData('task.item', 'task', state),
    ...getStateData('task.list', 'task', state, false)
  }
}

const mapDispatchToProps = {
  taskFetchItem,
  getTaskList,
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
        props.getTaskList({page_size: '4'})
        return props.taskFetchItem(props.id)
          .then(() => props.setGlobalLoader(false))
      })

    return props$
  }),
  pure
)(TaskDetails)
