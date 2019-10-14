import React from 'react'
import fp from 'lodash/fp'
import {compose, withReducer, withHandlers} from 'recompose'
import {connect} from 'react-redux'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'
import axios from 'helpers/axiosHelper'
import * as PATH from 'constants/api'
import ProfilePic from 'components/ProfilePic'
import {MAIN_COLOR} from 'constants/styles'

const enhance = compose(
  connect(store => ({store})),
  withReducer('state', 'dispatcher', (state, action) => {
    return {...state, ...action}
  }, {
    src: '',
    loading: false,
    error: ''
  }),
  withHandlers({
    onInputChange: props => (ev) => {
      const {dispatch, store, dispatcher} = props
      const axiosData = {getState: () => store, dispatch}

      const file = fp.get('target.files.0', ev)
      const formData = new FormData()
      const types = ['image/png', 'image/jpeg', 'image/gif']

      if (types.every(type => file.type !== type)) {
        dispatcher({error: 'is not a supported format'})
      }

      if (file.size > 150000) {
        dispatcher({error: 'Too large'})
      }
      formData.append('file', file)
      dispatcher({loading: true})
      return axios(axiosData).post(PATH.FILE_UPLOAD, formData)
        .then((response) => {
          dispatcher({loading: false, error: null, src: response.data.file})
          return response
          //    Input.onChange(response.data.id)
          //   SetObj(getImage(classes, response.data.file))
        }).catch((newError) => {
          const errorData = fp.get(['response', 'data'], newError)
          dispatcher({loading: false, error: errorData})
          // SetFileUploadErrors(errorData)
          // SetFileUploadLoading(false)
          // Input.onChange(null)
        })
    }
  }),
  injectSheet({
    input: {
      width: '0.1px',
      height: '0.1px',
      opacity: '0',
      overflow: 'hidden',
      position: 'absolute',
      zIndex: '-1'
    },
    imageWrap: {
      '& label': {
        color: MAIN_COLOR,
        fontWeight: '500',
        textDecoration: 'underline',
        cursor: 'pointer',
        marginTop: '8px'
      }
    }
  })
)
const ImageUploadField = props => {
  const {classes, label = 'choose', state, onInputChange} = props
  return (
    <div className={classes.imageWrap}>
      <div>
      <ProfilePic image={state.src} type={'mini'}/>
      </div>
      <input className={classes.input} onChange={onInputChange} type="file" id={'fileInput'}/>
      <label htmlFor="fileInput">{label}</label>
    </div>
  )
}

ImageUploadField.propTypes = {
  classes: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired

}
export default enhance(ImageUploadField)
