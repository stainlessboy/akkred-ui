import {compose, mapPropsStream, createEventHandler} from 'recompose'
import {connect} from 'react-redux'
import {loginAction, userInfoFetch, clientRegisteAction} from './actions'
import withHistory from 'helpers/withHistory'
import Login from './Login'
import {getStateData} from 'helpers/get'
export default compose(
  withHistory,
  connect(
    state => ({...getStateData('article.name', 'data', state)}),
    {loginAction, userInfoFetch, clientRegisteAction}
  ),
  mapPropsStream(props$ => {
    const {stream: onLogin$, handler: onLogin} = createEventHandler()
    const {stream: onRegister$, handler: onRegister} = createEventHandler()

    onLogin$
      .withLatestFrom(props$)
      .subscribe(([values, props]) => {
        props.loginAction(values)
          .then(({value}) => props.userInfoFetch(value.token))
          .then(data => props.history.replace('/', {smooth: true}))
      })

    onRegister$
      .withLatestFrom(props$)
      .subscribe(([values, props]) => {
        props.clientRegisteAction(values)
          .then(data => props.history.replace('/', {smooth: true}))
      })

    return props$.combineLatest(props => {
      return {
        ...props,
        onLogin,
        onRegister
      }
    })
  })
)(Login)
