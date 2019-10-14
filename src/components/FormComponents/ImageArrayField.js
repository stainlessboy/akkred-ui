import React from 'react'
import {compose} from 'recompose'
import injectSheet from 'react-jss'
import {Field} from 'react-final-form'
import SearchFieldConfig from './SearchFieldConfig'
import * as API from '../../constants/api'
import ImageUploadField from 'components/FormComponents/ImageUploadField'
import {crossBrowserify, fallbacksStyle, MAIN_COLOR} from '../../constants/styles'
import PropTypes from 'prop-types'
import Row from 'antd/lib/row'
import Col from 'antd/lib/col'
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
    <Row gutter={10}>

      {fields.map((lang, index) => {
        return (
          <Col span={6} key={index} className={classes.lang}>
            <Field
              name={`${lang}.lang`}
              component={ImageUploadField}
              label2={'Язык'}
              type={'text'}
            />
          </Col>
        )
      })}
      <u onClick={handleTouchTap} className={classes.addBtn}>Добавить язык</u>
    </Row>
  )
}

LangArrayField.propTypes = {
  classes: PropTypes.object.isRequired,
  fields: PropTypes.object.isRequired
}
export default enhance(LangArrayField)
