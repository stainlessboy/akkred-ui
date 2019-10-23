import React from 'react'
import {compose} from 'recompose'
import injectSheet from 'react-jss'
import Link from 'components/Link'
import Image from 'images/Slider.jpg'
import {Breadcrumb} from 'antd'
import TW from 'components/TW'
import t, {getTranslate} from 'helpers/translate'

import Row from 'antd/lib/row'

import Col from 'antd/lib/col'
import {prop} from 'ramda'
import dateFormat from '../../helpers/dateFormat'
import T from '../../components/Navigation'
import TS from '../../components/T'

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
    borderRadius: '10px',
    background: '#fff',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.16)'

  },
  RightSide: {
    width: '100%',
    borderRadius: ' 0px 0px 10px 10px',
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
    lineHeight: '1',
    textAlign: 'left',
    color: '#636363',
    borderBottom: '0.5px solid #d1d1d1',
    padding: '7px ',
    decoration: 'none'

  },
  card: {
    paddingTop: '100px'
  },
  textStyle: {
    fontSize: '40px',
    marginLeft: '60px',
    marginTop: '25px'
  }

}
const enhance = compose(
  injectSheet(styles)
)
const url1 = 'about'
const Company = props => {
  const {classes, staticDetail} = props
  const data = prop('data', staticDetail)
  const description = prop('description', data)
  const body = prop('body', data)
  const type = prop('type', data)
  const createdDate = dateFormat(prop('createdDate', data), true)
  return (
    <div>
      <div className={classes.card}>
        <div className={classes.blueP}>

          <div className={classes.textP}>
            <Breadcrumb style={{
              color: '#989aae'
            }}>
              <Breadcrumb.Item >О нас</Breadcrumb.Item>
              <Breadcrumb.Item > <TW>
                {lang => getTranslate(data, lang, 'description')}
              </TW></Breadcrumb.Item>
            </Breadcrumb></div>

        </div>
        <div className={classes.textStyle}>
          <TW>
            {lang => getTranslate(data, lang, 'description')}
          </TW>
        </div>
        <Row>

          <Col style={{
            padding: '35px 20px 100px 50px'

          }} xs={18}>
            <div className={classes.RightSide}>
              <div style={{
                // FontFamily: '\'Montserrat-Regular\', sans-serif',
                fontSize: '17px',
                color: '#030C11',
                width: '100%'
              }}>
                <TW>
                  {lang => getTranslate(data, lang, 'body')}
                </TW>

              </div>

            </div>
          </Col>

          <Col style={{
            padding: '30px 50px 100px 0px'
          }} xs={6}>
            {type === 'about' && (
              <div>
                <div style={{
                  fontFamily: 'Geometria',
                  // FontFamily: 'Montserrat',
                  // FontFamily: 'Futura Md BT',
                  background: '#0b0c66',
                  color: '#fff',
                  fontWeight: 'normal',
                  fontSize: '24px',
                  borderBottom: '0.5px solid #d1d1d1',
                  decoration: 'none',
                  textAlign: 'center',
                  padding: '10px',
                  borderRadius: '4px'
                }}>
                  <TS>about</TS>
                </div>
                <div className={classes.RightSide}>

                  <ul style={{
                    listStyle: 'none',
                    padding: '10px'
                  }}>

                    <li
                      className={classes.liStyle}> <Link style={{
                        color: '#707070'
                      }} to={'/pages/about'}>Об аккредитации </Link></li>

                    <li className={classes.liStyle}> <Link style={{
                      color: '#707070'
                    }} to={'/pages/history'}>Организационная структура  </Link></li>
                    <li className={classes.liStyle}> <Link style={{
                      color: '#707070'
                    }} to={'/pages/rights'}>Руководство </Link></li>
                    <li className={classes.liStyle}> <Link style={{
                      color: '#707070'
                    }} to={'/pages/tasks'}>Совет по аккредитации</Link></li>

                    <li className={classes.liStyle}> <Link style={{
                      color: '#707070'
                    }} to={'/rukovod'}>Комитеты </Link></li>
                    <li className={classes.liStyle}> <Link style={{
                      color: '#707070'
                    }} to={'/rukovod'}>Вакансии </Link></li>
                    <li className={classes.liStyle}> <Link style={{
                      color: '#707070'
                    }} to={'/rukovod'}>Противодействие коррупции </Link></li>
                    <li className={classes.liStyle}> <Link style={{
                      color: '#707070'
                    }} to={'/rukovod'}>Знак аккредитации </Link></li>

                  </ul>
                </div>
              </div>

            )}
            {type === 'action' && (
              <div>
                <div style={{
                  fontFamily: 'Geometria',
                  // FontFamily: 'Montserrat',
                  // FontFamily: 'Futura Md BT',
                  background: '#0b0c66',
                  color: '#fff',
                  fontWeight: 'normal',
                  fontSize: '24px',
                  borderBottom: '0.5px solid #d1d1d1',
                  decoration: 'none',
                  textAlign: 'center',
                  padding: '10px',
                  borderRadius: '4px'
                }}>
                  Деятельность
                </div>
                <div className={classes.RightSide}>

                  <ul style={{
                    listStyle: 'none',
                    padding: '10px'
                  }}>

                    <li
                      className={classes.liStyle}> <Link style={{
                        color: '#707070'
                      }} to={'/pages/about'}>Виды работ </Link></li>

                    <li className={classes.liStyle}> <Link style={{
                      color: '#707070'
                    }} to={'/pages/history'}>Обучение  </Link></li>
                    <li className={classes.liStyle}> <Link style={{
                      color: '#707070'
                    }} to={'/pages/rights'}>Проверка квалификации</Link></li>
                    <li className={classes.liStyle}> <Link style={{
                      color: '#707070'
                    }} to={'/pages/tasks'}>Сотрудничество</Link></li>

                    <li className={classes.liStyle}> <Link style={{
                      color: '#707070'
                    }} to={'/rukovod'}>Мероприятия </Link></li>
                    <li className={classes.liStyle}> <Link style={{
                      color: '#707070'
                    }} to={'/rukovod'}>Новости </Link></li>

                  </ul>
                </div>
              </div>

            )}
            {type === 'documentation' && (
              <div>
                <div style={{
                  fontFamily: 'Geometria',
                  // FontFamily: 'Montserrat',
                  // FontFamily: 'Futura Md BT',
                  background: '#0b0c66',
                  color: '#fff',
                  fontWeight: 'normal',
                  fontSize: '24px',
                  borderBottom: '0.5px solid #d1d1d1',
                  decoration: 'none',
                  textAlign: 'center',
                  padding: '10px',
                  borderRadius: '4px'
                }}>
                  Сервисы
                </div>
                <div className={classes.RightSide}>

                  <ul style={{
                    listStyle: 'none',
                    padding: '10px'
                  }}>

                    <li
                      className={classes.liStyle}> <Link style={{
                        color: '#707070'
                      }} to={'/pages/about'}>Государственные реестры ОOC и МС </Link></li>

                    <li className={classes.liStyle}> <Link style={{
                      color: '#707070'
                    }} to={'/pages/history'}>Реестр оценщиков  </Link></li>
                    <li className={classes.liStyle}> <Link style={{
                      color: '#707070'
                    }} to={'/pages/rights'}>Права и обязанности центра </Link></li>
                    <li className={classes.liStyle}> <Link style={{
                      color: '#707070'
                    }} to={'/pages/tasks'}>Реестр технических экспертов</Link></li>

                    <li className={classes.liStyle}> <Link style={{
                      color: '#707070'
                    }} to={'/rukovod'}>Калькулятор оказываемых услуг </Link></li>

                  </ul>
                </div>
              </div>

            )}
            {type === 'information' && (
              <div>
                <div style={{
                  fontFamily: 'Geometria',
                  // FontFamily: 'Montserrat',
                  // FontFamily: 'Futura Md BT',
                  background: '#0b0c66',
                  color: '#fff',
                  fontWeight: 'normal',
                  fontSize: '24px',
                  borderBottom: '0.5px solid #d1d1d1',
                  decoration: 'none',
                  textAlign: 'center',
                  padding: '10px',
                  borderRadius: '4px'
                }}>
                  Сервисы
                </div>
                <div className={classes.RightSide}>

                  <ul style={{
                    listStyle: 'none',
                    padding: '10px'
                  }}>

                    <li
                      className={classes.liStyle}> <Link style={{
                        color: '#707070'
                      }} to={'/pages/about'}>Государственные реестры ОOC и МС </Link></li>

                    <li className={classes.liStyle}> <Link style={{
                      color: '#707070'
                    }} to={'/pages/history'}>Реестр оценщиков  </Link></li>
                    <li className={classes.liStyle}> <Link style={{
                      color: '#707070'
                    }} to={'/pages/rights'}>Права и обязанности центра </Link></li>
                    <li className={classes.liStyle}> <Link style={{
                      color: '#707070'
                    }} to={'/pages/tasks'}>Реестр технических экспертов</Link></li>

                    <li className={classes.liStyle}> <Link style={{
                      color: '#707070'
                    }} to={'/rukovod'}>Калькулятор оказываемых услуг </Link></li>

                  </ul>
                </div>
              </div>

            )}
            {type === 'apply' && (
              <div>
                <div style={{
                  fontFamily: 'Geometria',
                  // FontFamily: 'Montserrat',
                  // FontFamily: 'Futura Md BT',
                  background: '#0b0c66',
                  color: '#fff',
                  fontWeight: 'normal',
                  fontSize: '24px',
                  borderBottom: '0.5px solid #d1d1d1',
                  decoration: 'none',
                  textAlign: 'center',
                  padding: '10px',
                  borderRadius: '4px'
                }}>
                  Сервисы
                </div>
                <div className={classes.RightSide}>

                  <ul style={{
                    listStyle: 'none',
                    padding: '10px'
                  }}>

                    <li
                      className={classes.liStyle}> <Link style={{
                        color: '#707070'
                      }} to={'/pages/about'}>Государственные реестры ОOC и МС </Link></li>

                    <li className={classes.liStyle}> <Link style={{
                      color: '#707070'
                    }} to={'/pages/history'}>Реестр оценщиков  </Link></li>
                    <li className={classes.liStyle}> <Link style={{
                      color: '#707070'
                    }} to={'/pages/rights'}>Права и обязанности центра </Link></li>
                    <li className={classes.liStyle}> <Link style={{
                      color: '#707070'
                    }} to={'/pages/tasks'}>Реестр технических экспертов</Link></li>

                    <li className={classes.liStyle}> <Link style={{
                      color: '#707070'
                    }} to={'/rukovod'}>Калькулятор оказываемых услуг </Link></li>

                  </ul>
                </div>
              </div>

            )}
            {type === 'contact' && (
              <div>
                <div style={{
                  fontFamily: 'Geometria',
                  // FontFamily: 'Montserrat',
                  // FontFamily: 'Futura Md BT',
                  background: '#0b0c66',
                  color: '#fff',
                  fontWeight: 'normal',
                  fontSize: '24px',
                  borderBottom: '0.5px solid #d1d1d1',
                  decoration: 'none',
                  textAlign: 'center',
                  padding: '10px',
                  borderRadius: '4px'
                }}>
                  Сервисы
                </div>
                <div className={classes.RightSide}>

                  <ul style={{
                    listStyle: 'none',
                    padding: '10px'
                  }}>

                    <li
                      className={classes.liStyle}> <Link style={{
                        color: '#707070'
                      }} to={'/pages/about'}>Государственные реестры ОOC и МС </Link></li>

                    <li className={classes.liStyle}> <Link style={{
                      color: '#707070'
                    }} to={'/pages/history'}>Реестр оценщиков  </Link></li>
                    <li className={classes.liStyle}> <Link style={{
                      color: '#707070'
                    }} to={'/pages/rights'}>Права и обязанности центра </Link></li>
                    <li className={classes.liStyle}> <Link style={{
                      color: '#707070'
                    }} to={'/pages/tasks'}>Реестр технических экспертов</Link></li>

                    <li className={classes.liStyle}> <Link style={{
                      color: '#707070'
                    }} to={'/rukovod'}>Калькулятор оказываемых услуг </Link></li>

                  </ul>
                </div>
              </div>

            )}

            <div style={{
              fontFamily: 'Geometria',
              // FontFamily: 'Montserrat',
              // FontFamily: 'Futura Md BT',
              background: '#0b0c66',
              color: '#fff',
              fontWeight: 'normal',
              fontSize: '24px',
              borderBottom: '0.5px solid #d1d1d1',
              decoration: 'none',
              textAlign: 'center',
              padding: '10px',
              borderRadius: '4px'
            }}>
            Контакты
            </div>
            <div className={classes.RightSide}>

              <div>Адрес</div>
              <div>Телефон</div>
              <div>Email</div>
            </div>
            <div style={{
              fontFamily: 'Geometria',
              // FontFamily: 'Montserrat',
              // FontFamily: 'Futura Md BT',
              background: '#0b0c66',
              color: '#fff',
              fontWeight: 'normal',
              fontSize: '24px',
              borderBottom: '0.5px solid #d1d1d1',
              decoration: 'none',
              textAlign: 'center',
              padding: '10px',
              borderRadius: '4px'
            }}>
            Ссылки
            </div>
            <div className={classes.RightSide}>

              <div><a href="">first link</a></div>
              <div><a href="">second link</a></div>
              <div><a href="">first link</a></div>
              <div><a href="">first link</a></div>
            </div>
          </Col>
        </Row>

      </div>
    </div>
  )
}

export default enhance(Company)
