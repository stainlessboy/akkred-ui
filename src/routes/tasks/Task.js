import React from 'react'
import {compose} from 'recompose'
import injectSheet from 'react-jss'
import Container from 'components/Container'

import Filter from './Filter'
import {CardList, TASK} from 'components/Cards'
import Pagination from 'components/Pagination'
import Title from 'components/Title'
import Col from 'antd/lib/col'
import Row from 'antd/lib/row'
import propTypes from 'prop-types'
import {crossBrowserify, fallbacksStyle, ROLL_UP_FADE_IN} from 'constants/styles'
import OrderingFilter from './OrderingFilter'
import TextField from 'components/FormComponents/TextField/TextField'
import {reduxForm, Field} from 'redux-form'
import {debounce} from 'helpers/ramdaDebounce'
const enhance = compose(
  reduxForm({
    form: 'SearchResultsForm',
    enableReinitialize: true
  }),
  injectSheet({
    wrapper: {
      marginBottom: '96px'
    },
    ...ROLL_UP_FADE_IN,
    results: {
      animationName: 'rollUpFadeIn',
      animationDuration: '1s',
      borderRaius: '6px',
      boxShadow: '0px 10px 24px rgba(0, 0, 0, 0.08)'
    },
    resultTitle: {
      fontSize: '22px',
      fontWeight: '600',
      lineHeight: '1.91',
      '& span': {
        color: '#a9aeb9'
      }
    },
    sorting: {
      borderBottom: '1px solid #ECECEC',
      padding: '14px 30px',
      ...fallbacksStyle('display', 'flex'),
      ...crossBrowserify('alignItems', 'center'),
      '& span': {
        fontSize: '14px',
        marginLeft: '30px'
      },
      '& svg': {
        fontSize: '20px',
        color: '#ced3da'
      }
    },
    tasks: {
      padding: '0 30px'
    },
    pagination: {
      padding: '20px 0'
    }
  })
)

const Task = (props) => {
  const {
    classes,
    initialValues,
    regionsList,
    resultFilter,
    resultList,
    professionsList,
    categoryList,
    onClear,
    onSearch,
    onFilterChange
  } = props

  return (
    <div className={classes.wrapper}>
      <Container>
        <Title type={'large'} text={'Все задания'} margin={'0 0 40px'}/>
        <Row type={'flex'} gutter={40}>
          <Col xs={6} className={classes.leftSide}>
            <Filter
              onClear={onClear}
              onFilterChange={onFilterChange}
              initialValues={initialValues}
              categoryList={categoryList}
              regionsList={regionsList}
            />
          </Col>
          <Col xs={18}>
            <div className={classes.results}>
              <div className={classes.sorting}>
                <Field placeholder={'Поиск задач'} onChange={debounce(1000, console.warn)} component={TextField} name={'search'} width={'222px'}/>
                <OrderingFilter
                  name={<u>По дате</u>}
                  value={'date'}
                  filter={resultFilter}
                />
                <OrderingFilter
                  name={<u>По возрастанию цены</u>}
                  value={'salary'}
                  filter={resultFilter}
                />
              </div>

              <div className={classes.tasks}>
                <CardList type={TASK} data={resultList}/>
                <div className={classes.pagination}>
                  <Pagination filter={resultFilter}/>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

Task.propTypes = {
  classes: propTypes.object.isRequired,
  type: propTypes.string.isRequired,
  professionsList: propTypes.object.isRequired,
  regionsList: propTypes.object.isRequired,
  resultList: propTypes.object.isRequired,
  resultFilter: propTypes.object.isRequired,
  initialValues: propTypes.object.isRequired,
  onMore: propTypes.func.isRequired,
  onFilterChange: propTypes.func.isRequired,
  onClear: propTypes.func.isRequired,
  onSearch: propTypes.func.isRequired
}

export default enhance(Task)
