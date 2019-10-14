import _ from 'lodash'
import React from 'react'
import {prop, path} from 'ramda'
import {compose, withState} from 'recompose'
import injectSheet from 'react-jss'
import propTypes from 'prop-types'

import {BLACK_COLOR} from 'constants/styles'
import Link from '../../components/Link'

const enhance = compose(
  withState('xpand', 'setXpand', false),
  injectSheet({
    wrapper: {
      position: 'relative',
      marginRight: '30px'
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
    },
    liStyle: {
      fontFamily: 'Geometria',
      // FontFamily: 'Montserrat',
      // FontFamily: 'Futura Md BT',
      fontWeight: 'normal',
      fontSize: '20px',
      textAlign: 'left',
      color: '#707070',
      borderBottom: '0.5px solid #d1d1d1',
      padding: '10px',
      decoration: 'none'

    }
  }),
)

const Filter = props => {
  const {classes, categoryList, onFilterChange} = props

  const catList = prop('results', categoryList, 'results')

  return (
    <div className={classes.wrapper}>
      <ul style={{
        listStyle: 'none',
        padding: '10px'
      }}>
        {_.map(catList, item => (
          <li className={classes.liStyle} key={item.id} style={{cursor: 'pointer'}}
            onClick={() => onFilterChange({value: item.id, fieldName: 'parents'})}

          >{item.title}</li>
        ))}
      </ul>

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
