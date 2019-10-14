import React from 'react'
import {compose} from 'recompose'
import injectSheet from 'react-jss'
import Link from 'components/Link'
import Image from 'images/Slider.jpg'
import {Breadcrumb} from 'antd'

import Row from 'antd/lib/row'
import Pagination from 'components/Pagination'

import Col from 'antd/lib/col'
import {path, prop} from 'ramda'
import dateFormat from '../../helpers/dateFormat'
import _ from 'lodash'
import Filter from '../reestr/Filter'
import {Field, reduxForm} from 'redux-form'
import sprintf from 'sprintf'
import {REESTR_ITEM} from '../../constants/routes'
import TextField from '../../components/FormComponents/TextField/TextField'
import {BLACK_COLOR} from '../../constants/styles'
import {crossBrowserify, fallbacksStyle} from '../../constants/design'
import fp from 'lodash/fp'

export const arrayObjToObj = (ARR) => fp.flow(
  fp.map(fp.values),
  fp.fromPairs
)(ARR)
const styles = {
  blueP: {
    width: '100%',
    alignContent: 'center',
  },
  textP: {
    fontSize: '40px',
    textAlign: 'left',
    color: '#fff',
    marginLeft: '60px',
    opacity: 0.88,
    width: '100%',
    bottom: '0px'
  },
  createWrap: {
    marginTop: '25px',
    marginBottom: '80px',
    boxShadow: '0px 10px 24px rgba(0, 0, 0, 0.08)',
    borderRadius: '6px',
    width: '767px',
    padding: '44px 40px'
  },
  LeftSide: {
    width: '100%',
    // Height: '397px',
    borderRadius: '4px',
    background: '#fff',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.16)'

  },
  RightSide: {
    width: '100%',
    borderRadius: '4px',
    background: '#fff',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.16)',
    padding: '20px',
    marginBottom: '20px'
  },
  liStyle: {
    fontFamily: 'Geometria',
    fontWeight: 'normal',
    fontSize: '20px',
    textAlign: 'left',
    color: '#707070',
    borderBottom: '0.5px solid #d1d1d1',
    padding: '10px',
    decoration: 'none'

  },
  field: {
    width: '100%',
    transition: 'box-shadow 200ms',
    borderRadius: '6px',
    color: BLACK_COLOR,
    boxShadow: '0px 10px 24px rgba(0, 0, 0, 0.16)',
    background: '#fff',
    // MarginBottom: '20px',
    // '&:last-child': {
    //   MarginBottom: '0'
    // },
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
  search: {
    // Padding: '20px',
    margin: '50px',
    marginBottom: '0px',
    borderRadius: '10px',

    ...fallbacksStyle('display', 'flex'),
    // ...crossBrowserify('alignItems', 'center'),
    ...crossBrowserify('justifyContent', 'space-between')
  }

}
const enhance = compose(
  reduxForm({
    form: 'SearchResultsForm',
    enableReinitialize: true
  }),
  injectSheet(styles)
)
const url1 = 'about'
const Reestr = props => {
  const {
    classes,
    resultList,
    regionsList,
    resultFilter,
    typeList, onClear,
    onFilterChange,
    initialValues,
    onSearch
  } = props
  const data = prop('data', resultList)

  return (
    <div style={{
      paddingTop: '100px'
    }}>
      <div className={classes.blueP}>

        <div className={classes.textP}>
          <Breadcrumb style={{
            color: '#989aae'
          }}>
            <Breadcrumb.Item >Информация</Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="" style={{
                color: '#989aae'
              }}>Реестры</a>
            </Breadcrumb.Item>
          </Breadcrumb></div>

      </div>

      <div className={classes.search}>
        <div className={classes.field}>
          <div className={classes.label}><strong>Поиск: </strong>
               Номер государственного реестра, Наименование юридического лица ООС или
            МС, НД области аккредитации, Код ТНВЭД, Ключевые слова
          </div>
          <div className={classes.value}>
            <form onSubmit={onSearch}>
              <div>
                <Field
                  name={'search'}
                  component={TextField}
                  placeholder={'Поиск'}
                />
              </div>
            </form>
          </div>
        </div>

      </div>

      <Row>
        <Col style={{
          padding: '50px 20px 100px 50px'
        }} xs={6}>
          <div>
            <Filter
              onClear={onClear}
              onSearch={onSearch}
              onFilterChange={onFilterChange}
              initialValues={initialValues}
              typeList={typeList}
              regionsList={regionsList}
            />
          </div>

        </Col>
        <Col style={{
          padding: '50px 50px 100px 30px'
        }} xs={18}>
          <div className={classes.RightSide}>

            <table
              style={{
                width: '100%'
                // Border: '1px solid #555',
                // BorderRadius: '5px'

              }}>
              <tr style={{
                width: '100%',
                // Border: '1px solid #555',
                // Color: '#fff',
                // Background: '#3b5da7',
                fontSize: '18px',
                fontWeight: 400,
                font: '18px/24px Roboto,Arial,sans-serif'
                // BorderRadius: '4px',

              }}>
                <td style={{
                  padding: '8px'
                }}>Номер государственного реестра
                </td>
                <td style={{
                  padding: '8px'
                }}>Наименование юридического лица ООС или МС
                </td>
                <td style={{
                  padding: '8px'
                }}>Срок действия свидетельства об аккредитации
                </td>
                <td style={{
                  padding: '8px'
                }}>Действительный статус
                </td>

              </tr>
              {_.map(data, (item, index) => {
                const id = prop('id', item)
                const title = prop('title', item) || 'Сервис растет, помогите его улучшить для вас'
                const accreditationDuration = dateFormat(prop('accreditationDuration', item))
                const number = prop('number', item)
                const area = prop('area', item)

                const STATUS_TYPES_LIST = [
                  {id: 'active', name: 'Действующий'},
                  {id: 'inactive', name: 'Прекращен'},
                  {id: 'paused', name: 'Приостановлен'},
                  {id: 'extended', name: 'Продлен'}
                ]
                const STATUS_TYPES = arrayObjToObj(STATUS_TYPES_LIST)

                const status = STATUS_TYPES[_.get(item, 'status')]

                const file = path(['file', 'file'], item)
                return (
                  <tr style={{
                    width: '100%',
                    fontSize: '16px',
                    // Background: '#eff5f7',
                    color: '#555'

                  }}
                  >
                    {/* <Link to={sprintf(NEWS_ITEM_URL, id)}>{title}</Link> */}
                    {/* <Link to={sprintf(NEWS_ITEM_URL, id)}>{title}</Link> */}
                    <td style={{
                      padding: '8px',
                      borderBottom: '0.5px solid #d1d1d1'

                    }}><Link to={sprintf(REESTR_ITEM, fp.toNumber(area))}>{number}</Link></td>
                    <td style={{
                      padding: '8px',
                      borderBottom: '0.5px solid #d1d1d1'

                    }}>{title}</td>
                    <td style={{
                      padding: '8px 10px 8px 8px',
                      borderBottom: '0.5px solid #d1d1d1'

                    }}>{accreditationDuration}</td>
                    <td style={{
                      padding: '8px',
                      borderBottom: '0.5px solid #d1d1d1'

                    }}>{status}</td>
                  </tr>

                )
              })}
            </table>
            <div className={classes.pagination}>
              <Pagination filter={resultFilter}/>
            </div>

          </div>
        </Col>

      </Row>

    </div>
  )
}

export default enhance(Reestr)
