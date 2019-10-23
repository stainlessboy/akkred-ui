import React from 'react'
import {compose} from 'recompose'
import injectSheet from 'react-jss'
import Image from 'images/Slider.jpg'
import Row from 'antd/lib/row'
import _ from 'lodash'
import Gallery from 'react-grid-gallery'
import Col from 'antd/lib/col'
import Link from 'components/Link'

import {crossBrowserify, fallbacksStyle} from '../../constants/design'
import {CardList, EMPLOYER} from '../../components/Cards'
import {Breadcrumb} from 'antd'

const styles = {
  blueP: {
    width: '100%',
    alignContent: 'center'

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
  LeftSide: {
    width: '100%',
    // Height: '397px',
    borderRadius: '4px',
    background: '#fff',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.16)'

  },
  RightSide: {
    width: '100%',
    // Height: '397px',
    borderRadius: '4px',
    background: '#fff',
    padding: '20px',
    boxShadow: '0px 4px 20px 0px rgba(110, 110, 110, 0.2)',
    marginBottom: '25px'
  },
  liStyle: {
    width: '300px',
    fontFamily: 'Futura Md BT',
    fontWeight: 'normal',
    fontSize: '16px',
    textAlign: 'left',
    color: '#707070',
    borderBottom: '0.5px solid #d1d1d1',
    padding: '10px',
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
const Company = props => {
  const {classes, resultList} = props

  // Const data = prop('data', newsDetail)
  // Const title = prop('title', data)
  // Const text = prop('text', data)
  // Const gallery = prop('gallery', data)
  // Const createdDate = dateFormat(prop('createdDate', data), true)
  // Const img = pathOr(Image, ['gallery', 'file'], data)

  return (
    <div>
      <div className={classes.card}>
        <div className={classes.blueP}>

          <div className={classes.textP}>
            <Breadcrumb style={{
              color: '#989aae'
            }}>
              <Breadcrumb.Item >О нас</Breadcrumb.Item>
              <Breadcrumb.Item>
                <a href="" style={{
                  color: '#989aae'
                }}>Руководство</a>
              </Breadcrumb.Item>
            </Breadcrumb></div>

        </div>
        <div className={classes.textStyle}>
          Руководство
        </div>
        <Row>

          <Col style={{
            padding: '35px 50px 0 60px'

          }} xs={18}>
            <div className={classes.RightSide}>
              <CardList type={EMPLOYER} span={24} data={resultList}/>

            </div>
          </Col>
          <Col style={{
            padding: '50px 50px 100px 0px'
          }} xs={6}>

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
