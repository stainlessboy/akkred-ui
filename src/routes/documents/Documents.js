import React from 'react'
import {compose} from 'recompose'
import injectSheet from 'react-jss'
import Image from 'images/Slider.jpg'
import Filter from './Filter'

import {Breadcrumb} from 'antd'

import Row from 'antd/lib/row'

import Col from 'antd/lib/col'
import {path, pathOr, prop} from 'ramda'
import _ from 'lodash'

const styles = {
  blueP: {
    width: '100%',
    alignContent: 'center'

  },
  textP: {
    fontSize: '40px',
    textAlign: 'left',
    color: '#fff',
    paddingLeft: '60px',
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
    // FontFamily: 'Montserrat',
    // FontFamily: 'Futura Md BT',
    fontWeight: 'normal',
    fontSize: '20px',
    textAlign: 'left',
    color: '#707070',
    borderBottom: '0.5px solid #d1d1d1',
    padding: '10px',
    decoration: 'none'

  },
  table: {
    width: '100%',
    borderSpacing: '0'
  },
  tr_nth_child_2n: {
    background: '#f0f0f0'
  },
  tr_nth_child_1: {
    background: '#666',
    color: '#fff'
  },
  card: {
    paddingTop: '100px'
  }

}
const enhance = compose(
  injectSheet(styles)
)
const Company = props => {
  const {
    classes,
    initialValues,
    resultList,
    categoryList,
    onClear,
    resultFilter,
    onFilterChange

  } = props
  const data = prop('data', resultList)
  const titleParent = path(['0', 'parents', 'title'], data)

  return (
    <div className={classes.card}>

      <div className={classes.blueP}>

        <div className={classes.textP}>
          <Breadcrumb style={{
            color: '#989aae'
          }}>
            <Breadcrumb.Item >Документы</Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="" style={{
                color: '#989aae'
              }}>Все документы</a>
            </Breadcrumb.Item>
          </Breadcrumb></div>

      </div>
      <Row>
        <Col style={{
          padding: '50px 20px 100px 50px'
        }} xs={6}>
          <div className={classes.LeftSide}>
            <div style={{
              background: '#0b0c66',
              color: '#fff',
              fontSize: '24px',
              borderBottom: '0.5px solid #d1d1d1',
              decoration: 'none',
              textAlign: 'left',
              padding: '10px 10px 10px 22px',
              borderRadius: '10px 10px 0 0 '
            }}>
              Меню
            </div>
            <Filter
              onClear={onClear}
              onFilterChange={onFilterChange}
              initialValues={initialValues}
              categoryList={categoryList}
            />
          </div>
        </Col>
        <Col style={{
          padding: '50px 50px 100px 30px'
        }} xs={18}>
          <div className={classes.RightSide}>

            <h1 style={{
              color: '#222',
              // FontSize: '18px',
              font: '25px/24px Roboto,Arial,sans-serif'

            }}>{titleParent}</h1>
            <table
              style={{
                width: '100%',
                border: '1px solid #555',
                borderRadius: '5px'

              }}>
              <tr style={{
                width: '100%',
                border: '1px solid #555',
                color: '#fff',
                background: '#3b5da7',
                fontSize: '18px',
                fontWeight: 400,
                font: '18px/24px Roboto,Arial,sans-serif',
                borderRadius: '4px'

              }}>
                <td style={{
                  padding: '8px',
                  borderRight: '1px solid white',
                  borderLeft: '1px solid black',
                  borderTop: '1px solid black',
                  textAlign: 'center'

                }}>#
                </td>
                <td style={{
                  padding: '8px',
                  borderRight: '1px solid white',
                  textAlign: 'center'

                }}>Обозначение документа
                </td>
                <td style={{
                  padding: '8px',
                  borderRight: '1px solid white',
                  textAlign: 'center'

                }}>Наименование документа
                </td>
                <td style={{
                  padding: '8px',
                  borderRight: '1px solid white',
                  textAlign: 'center'

                }}>Дата введение
                </td>
                <td style={{
                  padding: '8px',
                  borderRight: '1px solid black',
                  textAlign: 'center'

                }}>Документы
                </td>
              </tr>
              {_.map(data, (item, index) => {
                const id = prop('id', item)
                const title = prop('title', item)
                const file = path(['file', 'file'], item)
                return (
                  <tr style={{
                    width: '100%',
                    border: '1px solid  #555',
                    fontSize: '16px',
                    // Background: '#eff5f7',
                    color: '#555',
                    borderRadius: '8px'

                  }}
                  >
                    <td style={{
                      padding: '8px',
                      width: ''

                    }}>{index + 1}</td>
                    <td style={{
                      paddingRight: '0px',
                      textAlign: 'center',
                      borderRight: '1px solid black',
                      borderLeft: '1px solid black'
                    }}>OZAK.01.01</td>
                    <td style={{
                      padding: '8px',
                      borderRight: '1px solid black',
                      textAlign: 'center'

                    }}>{title}</td>
                    <td style={{
                      padding: '8px',
                      borderRight: '1px solid black',
                      textAlign: 'center'

                    }}>2019-01-01</td>
                    <td style={{
                      padding: '8px 10px 8px 8px',
                      borderRight: '1px solid black',

                      textAlign: 'center'
                    }}><a href={file}>Скачать</a></td>
                  </tr>

                )
              })}
            </table>

            <div style={{
              borderRadius: '4px',
              background: '#d9edf7',
              color: '#3a87ad',
              borderColor: '#d9edf7',
              font: '15px/24px Roboto,Arial,sans-serif',
              padding: '12px',
              border: '1px solid transparent',
              marginTop: '50px'
            }}>
              <p style={{
                font: '15px/24px Roboto,Arial,sans-serif',
                color: '#222',
                fontWeight: 700
              }}>Внимание!</p>Документы, размещенные на сайте Akkred, не могут быть тиражированы и распространены без
              официального
              разрешения Национального центра аккредитации
            </div>
            <div>

            </div>

          </div>
        </Col>

      </Row>

    </div>
  )
}

export default enhance(Company)
