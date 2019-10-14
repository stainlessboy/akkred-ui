import _ from 'lodash'
import React from 'react'
import {prop, path} from 'ramda'
import {compose, withState} from 'recompose'
import injectSheet from 'react-jss'
import propTypes from 'prop-types'
import {Field} from 'redux-form'
import {RadioGroup, Radio, CheckboxGroup, SliderField} from 'components/FormComponents'
import {BLACK_COLOR} from 'constants/styles'

const enhance = compose(
  injectSheet({
    wrapper: {
      position: 'relative'
    },
    field: {
      transition: 'box-shadow 200ms',
      borderRadius: '6px',
      color: BLACK_COLOR,
      boxShadow: '0px 10px 24px rgba(0, 0, 0, 0.08)',
      marginBottom: '20px',
      '&:last-child': {
        marginBottom: '0'
      },
      '&:hover': {
        boxShadow: '0px 14px 30px rgba(0, 0, 0, 0.08)'
      }
    },
    label: {
      fontSize: '16px',
      fontWeight: '600',
      lineHeight: '24px',
      padding: '14px 30px 10px',
      borderBottom: '1px solid #EDEDED'
    },
    value: {
      padding: '20px 30px 15px'
    }
  }),
)

const Filter = props => {
  const {classes, regionsList, onClear, categoryList, onFilterChange} = props
  const regList = prop('data', regionsList)
  const regLoading = prop('loading', regionsList)
  const catList = prop('data', categoryList, 'data')
  const catLoading = prop('loading', categoryList)

  return (
    <div className={classes.wrapper}>
      <div className={classes.field}>
        <div className={classes.label}>Категория услуг</div>
        <div className={classes.value}>
          <Field
            name={'speciality'}
            component={CheckboxGroup}
            items={catList}
            onChange={(ev, value) =>
              onFilterChange({value, fieldName: 'speciality'})
            }
          />
        </div>
      </div>

      <div className={classes.field}>
        <div className={classes.label}>Регион</div>
        <div className={classes.value}>
          <Field
            name={'district'}
            component={RadioGroup}
            onChange={(ev, value) => onFilterChange({value, fieldName: 'district'})}>
            {_.map(regList, item => {
              return (
                <Radio
                  key={item.id}
                  className={classes.radio}
                  value={item.id}
                  label={item.name}
                />
              )
            })}
          </Field>
        </div>
      </div>

      <div className={classes.field}>
        <div className={classes.label}>Цена <span style={{fontSize: '12px', fontWeight: '500'}}>(в сумах)</span></div>
        <div className={classes.value}>
          <Field
            name="price"
            component={SliderField}
            onChange={(ev, {slide}) => {
              onFilterChange({value: slide, fieldName: 'price'})
            }}
            min={1000}
            max={2000}
            values={1500}
          />
        </div>
      </div>
    </div>
  )
}

Filter.propTypes = {
  classes: propTypes.object.isRequired,
  initialValues: propTypes.object.isRequired,
  professionsList: propTypes.object.isRequired,
  regionsList: propTypes.object.isRequired,
  xpand: propTypes.bool.isRequired,
  setXpand: propTypes.func.isRequired,
  onFilterChange: propTypes.func.isRequired,
  onClear: propTypes.func.isRequired,
  onSearch: propTypes.func.isRequired
}
export default enhance(Filter)
