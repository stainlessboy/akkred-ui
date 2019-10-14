import _ from 'lodash'
import React from 'react'
import {prop, path} from 'ramda'
import {compose, withState} from 'recompose'
import injectSheet from 'react-jss'

import propTypes from 'prop-types'
import {Field} from 'redux-form'
import {RadioGroup, Radio, CheckboxGroup, SliderField} from 'components/FormComponents'
import {BLACK_COLOR} from 'constants/styles'
import Link from '../../components/Link'
import {debounce} from '../../helpers/ramdaDebounce'
import TextField from '../../components/FormComponents/TextField/TextField'

const enhance = compose(
  injectSheet({
    wrapper: {
      position: 'relative'
    },
    field: {
      width: '100%',
      transition: 'box-shadow 200ms',
      borderRadius: '10px',
      color: BLACK_COLOR,
      boxShadow: '0px 10px 24px rgba(0, 0, 0, 0.08)',
      marginBottom: '20px',
      background: '#FFF',

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
      borderBottom: '1px solid #EDEDED',
    },
    value: {
      padding: '20px 30px 15px'
    }
  }),
)
export const STATUS_LIST = [
  {id: 'active', title: 'Действующий'},
  {id: 'inactive', title: 'Прекращен'},
  {id: 'paused', title: 'Приостановлен'},
  {id: 'extended', title: 'Продлен'}
]

const Filter = props => {
  const {classes, regionsList, onClear, typeList, onFilterChange, onSearch} = props
  const regList = prop('data', regionsList)
  const tList = prop('data', typeList)
  const regLoading = prop('loading', regionsList)
  // Const catList = prop('data', categoryList, 'data')
  return (
    <div className={classes.wrapper}>
      <div className={classes.field}>
        <div className={classes.label}>Регион</div>
        <div className={classes.value}>
          <Field
            name={'region'}
            component={CheckboxGroup}
            items={regList}
            onChange={(ev, value) =>
              onFilterChange({value, fieldName: 'region'})
            }
          />
        </div>
      </div>
      <div className={classes.field}>
        <div className={classes.label}>Виды Органов</div>
        <div className={classes.value}>
          <Field
            name={'type_organ'}
            component={CheckboxGroup}
            items={tList}
            onChange={(ev, value) =>
              onFilterChange({value, fieldName: 'type_organ'})
            }
          />
        </div>
      </div>
      <div className={classes.field}>
        <div className={classes.label}>Статус</div>
        <div className={classes.value}>
          <Field
            name={'status'}
            component={CheckboxGroup}
            items={STATUS_LIST}
            onChange={(ev, value) =>
              onFilterChange({value, fieldName: 'status'})
            }
          />
        </div>
      </div>

      {/* <div className={classes.field}> */}
      {/*  <div className={classes.label}>Виды Органов</div> */}
      {/*  <div className={classes.value}> */}
      {/*    <Field */}
      {/*      Name={'type_organ'} */}
      {/*      Component={RadioGroup} */}
      {/*      OnChange={(ev, value) => onFilterChange({value, fieldName: 'type_organ'})}> */}
      {/*      {_.map(tList, item => { */}
      {/*        Return ( */}
      {/*          <Radio */}
      {/*            Key={item.id} */}
      {/*            ClassName={classes.radio} */}
      {/*            Value={item.id} */}
      {/*            Label={item.title} */}
      {/*          /> */}
      {/*        ) */}
      {/*      })} */}
      {/*    </Field> */}
      {/*  </div> */}
      {/* </div> */}
      {/* <div className={classes.field}> */}
      {/*  <div className={classes.label}>Опыт работы</div> */}
      {/*  <div className={classes.value}> */}
      {/*    <Field */}
      {/*      Name={'status'} */}
      {/*      Component={CheckboxGroup} */}
      {/*      Items={_.filter(STATUS_LIST, item => item.id !== 'none')} */}
      {/*    /> */}
      {/*  </div> */}
      {/* </div> */}

      {/* <div className={classes.field}> */}
      {/*  <div className={classes.label}>Цена <span style={{fontSize: '12px', fontWeight: '500'}}>(в сумах)</span></div> */}
      {/*  <div className={classes.value}> */}
      {/*    <Field */}
      {/*      Name="price" */}
      {/*      Component={SliderField} */}
      {/*      OnChange={(ev, {slide}) => { */}
      {/*        OnFilterChange({value: slide, fieldName: 'price'}) */}
      {/*      }} */}
      {/*      Min={1000} */}
      {/*      Max={2000} */}
      {/*      Values={1500} */}
      {/*    /> */}
      {/*  </div> */}
      {/* </div> */}
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
