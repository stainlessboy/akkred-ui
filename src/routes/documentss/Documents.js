import React from 'react'
import {compose} from 'recompose'
import injectSheet from 'react-jss'
import Link from 'components/Link'
import Image from 'images/Slider.jpg'
import Filter from './Filter'
import {CardList, DOCUMENT} from 'components/Cards'

import {Breadcrumb} from 'antd'
import TW from 'components/TW'
import t, {getTranslate} from 'helpers/translate'

import Row from 'antd/lib/row'

import Col from 'antd/lib/col'
import {path, pathOr, prop} from 'ramda'
import dateFormat from '../../helpers/dateFormat'
import T from '../../components/Navigation'
import {crossBrowserify, fallbacksStyle} from '../../constants/design'
import _ from 'lodash'
import sprintf from 'sprintf'
import {NEWS_ITEM_URL} from '../../constants/routes'
import Task from '../../images/task.png'

const styles = {
  blueP: {
    width: '100%',
    height: '326px',
    alignContent: 'center',
    position: 'relative',
    color: '#fff'

  },
  textP: {
    // FontFamily: '“Futura Md BT”',
    // FontFamily: 'Montserrat',
    fontFamily: 'Geometria',

    fontWeight: 'bold',
    fontSize: '50px',
    textAlign: 'left',
    color: '#fff',
    paddingTop: '100px',
    paddingLeft: '100px',
    position: 'absolute',
    height: '326px',
    opacity: 0.88,
    width: '100%',
    // Background: '#3b5da7',
    // Background: '#213A70',
    background: '#142966',
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

  // Const img = pathOr( ['gallery', '0', 'file'], data)
  const titleParent = path(['0', 'parents', 'title'], data)


  return (
    <div>
      <div className={classes.blueP}>
        <img style={{
          height: '326px',
          width: '100%'
        }} src={Image} alt=""/>
        <div className={classes.textP}>Документы
          <Breadcrumb style={{
            color: '#fff'
          }}>
            <Breadcrumb.Item>Документы</Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="" style={{
                color: '#fff'
              }}>Все документы</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="" style={{
                color: '#fff'
              }}></a>
            </Breadcrumb.Item>
          </Breadcrumb></div>

      </div>
      <Row>
        <Col style={{
          padding: '50px 20px 100px 50px'
        }} xs={6}>
          <div className={classes.LeftSide}>
            <div style={{
              fontFamily: 'Geometria',
              // FontFamily: 'Montserrat',
              // FontFamily: 'Futura Md BT',
              // Background: '#3b5da7',
              // Background: '#213A70',
              background: '#142966',
              color: '#fff',
              fontWeight: 'normal',
              fontSize: '24px',
              borderBottom: '0.5px solid #d1d1d1',
              decoration: 'none',
              textAlign: 'left',
              padding: '10px 10px 10px 22px',
              borderRadius: '4px',
              opacity: 0.78
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

            {/* <div > */}
            {/*  <div style={{ */}
            {/*    ...fallbacksStyle('display', 'flex'), */}
            {/*    ...crossBrowserify('alignItems', 'center'), */}
            {/*    ...crossBrowserify('justifyContent', 'space-between'), */}
            {/*    FontSize: '19px' */}
            {/*  }}> */}
            {/*    <div>Наименование</div> */}
            {/*    <div>Документы</div> */}
            {/*  </div> */}
            {/*  <CardList type={DOCUMENT} data={resultList}/> */}
            {/* </div> */}
            <h1  style={{
              color: '#222',
              // fontSize: '18px',
              font: '25px/24px Roboto,Arial,sans-serif',

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
                borderRadius: '4px',

              }}>
                <td style={{
                  padding: '8px'
                }}>#
                </td>
                <td style={{
                  padding: '8px'
                }}>Наименование
                </td>
                <td style={{
                  padding: '8px'
                }}>Документы
                </td>
              </tr>
              {_.map(data, (item, index) => {
                const id = prop('id', item)
                const title = prop('title', item) || 'Сервис растет, помогите его улучшить для вас'
                const file = path(['file', 'file'], item)
                return (
                  <tr style={{
                    width: '100%',
                    border: '1px solid  #555',
                    fontSize: '16px',
                    // background: '#eff5f7',
                    color: '#555',
                    borderRadius: '4px',

                  }}
                  >
                    <td style={{
                      padding: '8px'
                    }}>{index + 1}</td>
                    <td style={{
                      padding: '8px'
                    }}>{title}</td>
                    <td style={{
                      padding: '8px 10px 8px 8px',
                      textAlign: 'right'
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
        {/* <Col style={{ */}
        {/*  Padding: '50px 50px 100px 0px' */}
        {/* }} xs={6}> */}
        {/*  <div> */}
        {/*    <div style={{ */}
        {/*      FontFamily: 'Geometria', */}
        {/*      // FontFamily: 'Montserrat', */}
        {/*      // FontFamily: 'Futura Md BT', */}
        {/*      Background: '#3b5da7', */}
        {/*      Color: '#fff', */}
        {/*      FontWeight: 'normal', */}
        {/*      FontSize: '24px', */}
        {/*      BorderBottom: '0.5px solid #d1d1d1', */}
        {/*      Decoration: 'none', */}
        {/*      TextAlign: 'center', */}
        {/*      Padding: '10px', */}
        {/*      BorderRadius: '4px', */}
        {/*      Opacity: 0.78 */}
        {/*    }}> */}
        {/*      Сервисы */}
        {/*    </div> */}
        {/*  </div> */}
        {/*  <div className={classes.RightSide}> */}

        {/*    <ul style={{ */}
        {/*      ListStyle: 'none', */}
        {/*      Padding: '10px' */}
        {/*    }}> */}

        {/*      <li */}
        {/*        ClassName={classes.liStyle}> <Link style={{ */}
        {/*          Color: '#707070' */}
        {/*        }} to={'/pages/about'}>О Центре по аккредитации </Link></li> */}

        {/*      <li className={classes.liStyle}> <Link style={{ */}
        {/*        Color: '#707070' */}
        {/*      }} to={'/pages/history'}>История центра  </Link></li> */}
        {/*      <li className={classes.liStyle}> <Link style={{ */}
        {/*        Color: '#707070' */}
        {/*      }} to={'/pages/rights'}>Права и обязанности центра </Link></li> */}
        {/*      <li className={classes.liStyle}> <Link style={{ */}
        {/*        Color: '#707070' */}
        {/*      }} to={'/pages/tasks'}>Приоритетные задачи и направление</Link></li> */}

        {/*      <li className={classes.liStyle}> <Link style={{ */}
        {/*        Color: '#707070' */}
        {/*      }} to={'/rukovod'}>Руководители  </Link></li> */}

        {/*    </ul> */}
        {/*  </div> */}
        {/*  <div style={{ */}
        {/*    FontFamily: 'Geometria', */}
        {/*    // FontFamily: 'Montserrat', */}
        {/*    // FontFamily: 'Futura Md BT', */}
        {/*    Background: '#3b5da7', */}
        {/*    Color: '#fff', */}
        {/*    FontWeight: 'normal', */}
        {/*    FontSize: '24px', */}
        {/*    BorderBottom: '0.5px solid #d1d1d1', */}
        {/*    Decoration: 'none', */}
        {/*    TextAlign: 'center', */}
        {/*    Padding: '10px', */}
        {/*    BorderRadius: '4px', */}
        {/*    Opacity: 0.78 */}
        {/*  }}> */}
        {/*    Контакты */}
        {/*  </div> */}
        {/*  <div className={classes.RightSide}> */}

        {/*     <div>Адрес</div> */}
        {/*     <div>Телефон</div> */}
        {/*     <div>Email</div> */}

        {/*  </div> */}
        {/*  <div style={{ */}
        {/*    FontFamily: 'Geometria', */}
        {/*    // FontFamily: 'Montserrat', */}
        {/*    // FontFamily: 'Futura Md BT', */}
        {/*    Background: '#3b5da7', */}
        {/*    Color: '#fff', */}
        {/*    FontWeight: 'normal', */}
        {/*    FontSize: '24px', */}
        {/*    BorderBottom: '0.5px solid #d1d1d1', */}
        {/*    Decoration: 'none', */}
        {/*    TextAlign: 'center', */}
        {/*    Padding: '10px', */}
        {/*    BorderRadius: '4px', */}
        {/*    Opacity: 0.78 */}
        {/*  }}> */}
        {/*    Ссылки */}
        {/*  </div> */}
        {/*  <div className={classes.RightSide}> */}

        {/*    <div><a href="">first link</a></div> */}
        {/*    <div><a href="">second link</a></div> */}
        {/*    <div><a href="">first link</a></div> */}
        {/*    <div><a href="">first link</a></div> */}
        {/*  </div> */}
        {/* </Col> */}
      </Row>

    </div>
  )
}

export default enhance(Company)
