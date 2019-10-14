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
import {crossBrowserify, fallbacksStyle} from '../../constants/design'

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
      const {dispatch, store, dispatcher, name, last, changeForm} = props
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
          changeForm(`${name}[${last}]`, response.data)
          return response

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
      marginLeft: '5px',
      '& label': {
        whiteSpace: 'nowrap',
        display: 'inline-block',
        background: '#FFFFFF',
        border: '1px solid #011933',
        borderRadius: '6px',
        fontWeight: '500',
        cursor: 'pointer',
        lineHeight: '38px',
        padding: '0 20px'
      },
      '& span': {
        marginLeft: '20px',
        display: 'inline-block',
        color: '#99A2AD',
        lineHeight: '22px',
        maxWidth: 'calc(100% - 230px)'
      }
    },
    wrapped: {
      marginTop: '8px',
      ...fallbacksStyle('display', 'flex')
    }
  })
)
const ImageUploadField = props => {
  const {classes, label = 'Upload', onInputChange} = props
  return (
    <div className={classes.imageWrap}>
      <input className={classes.input} onChange={onInputChange} type="file" id={'fileInput'}/>
      <div className={classes.wrapped}>
        <label htmlFor="fileInput">{'Загрузить фото'}</label>
        <span>Наличие фото помогает исполнителям лучше оценить вашу задачу и сформулировать свое предложение. </span>
      </div>
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
