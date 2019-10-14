import React from 'react'
import {compose} from 'recompose'
import injectSheet from 'react-jss'
import {Field} from 'redux-form'
import SearchFieldConfig from './SearchFieldConfig'
import * as API from '../../constants/api'
import {crossBrowserify, fallbacksStyle, MAIN_COLOR} from '../../constants/styles'
import PropTypes from 'prop-types'
const enhance = compose(
  injectSheet({
    flex: {
      ...fallbacksStyle('display', 'flex'),
      ...crossBrowserify('alignItems', 'baseline')
    },
    lang: {
      position: 'relative',
      extend: 'flex',
      '& > div': {
        width: 'calc(50% - 15px)',
        marginBottom: '16px'
      },
      '& > div:first-child': {
        marginRight: '30px'
      }
    },
    addBtn: {
      color: MAIN_COLOR,
      fontWeight: '500',
      display: 'block',
      textAlign: 'center',
      marginTop: '30px'
    }
  })
)

const LangArrayField = (props) => {
  const {classes, fields} = props
  const handleTouchTap = () => {
    return fields.push({})
  }
  return (
    <React.Fragment>
      {fields.map((lang, index) => {
        return (
          <div key={index} className={classes.lang}>
            <Field
              name={`${lang}.lang`}
              component={SearchFieldConfig}
              api={API.REGIONS_LIST}
              label2={'Язык'}
              type={'text'}
            />
            <Field
              name={`${lang}.level`}
              component={SearchFieldConfig}
              label2={'Уровень'}
              api={API.REGIONS_LIST}
            />
          </div>
        )
      })}
      <u onClick={handleTouchTap} className={classes.addBtn}>Добавить язык</u>
    </React.Fragment>
  )
}

LangArrayField.propTypes = {
  classes: PropTypes.object.isRequired,
  fields: PropTypes.object.isRequired
}
export default enhance(LangArrayField)
