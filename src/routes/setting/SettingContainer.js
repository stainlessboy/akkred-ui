import {
  compose,
  setDisplayName,
  mapPropsStream,
  createEventHandler,
  pure, withState
} from 'recompose'
import {connect} from 'react-redux'
import fp from 'lodash/fp'
import Setting from './Setting'
import {getItemStateData} from 'helpers/get'
import formValidate from 'helpers/formValidate'
import {clientUpdateAction} from './actions'
import prop from 'ramda/src/prop'

const mapDispatchToProps = {
  formValidate,
  clientUpdateAction
}

const mapStateToProps = (state) => {
  return {
    ...getItemStateData('user', 'user', state)
  }
}

export default compose(
  withState('open', 'setOpen', false),
  connect(mapStateToProps, mapDispatchToProps),
  mapPropsStream(props$ => {
    const {handler: onSubmit, stream: onSubmit$} = createEventHandler()

    onSubmit$
      .withLatestFrom(props$)
      .subscribe(([values, props]) => {
        const id = fp.get('userDetail.data.id', props)
        return props.clientUpdateAction(values, 1)
          .then(() => props.setOpen(false))
          .catch(errr => {
          })
      })

    return props$.combineLatest(props => {
      const {userDetail: {data}} = props
      const initialValues = {
        fullName: prop('fullName', data),
        phoneNumber: prop('phoneNumber', data),
        livingPlace: prop('livingPlace', data),
        email: prop('email', data)
      }
      return {
        ...props,
        initialValues,
        onSubmit

      }
    })
  }),
  setDisplayName('SettingContainer'),
  pure
)(Setting)
