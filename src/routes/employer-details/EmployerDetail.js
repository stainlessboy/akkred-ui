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
import {Breadcrumb, Carousel} from 'antd'
import {prop} from 'ramda'
import HtmlContent from '../../components/Utils/HtmlContent'
import Gallery1 from '../news-details/Gallery'
import dateFormat from '../../helpers/dateFormat'

const styles = {
  blueP: {
    width: '100%',
    alignContent: 'center'

  },
  textP: {
    fontSize: '40px',
    textAlign: 'left',
    color: '#fff',
    paddingLeft: '40px',
    opacity: 0.88,
    width: '100%',
    bottom: '0px'
  },
  textP2: {
    fontFamily: '“Futura Md BT”',
    fontWeight: 'bold',
    fontSize: '20px',
    textAlign: 'left',
    color: '#fff',
    paddingTop: '30px',
    paddingLeft: '20px',
    position: 'absolute',
    height: '326px',
    opacity: 0.88,
    width: '100%',
    background: '#142966',
    bottom: '0px'
  },
  LeftSide: {
    width: '100%',
    height: '397px',
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
  textTitleStyle: {
    fontFamily: 'Futura Md BT',
    fontWeight: 'bold',
    fontSize: '30px',
    textAlign: 'left',
    color: '#000',
    margin: '20px 10px'

  },
  textStyle: {
    fontFamily: 'Futura Md BT',
    fontWeight: '500',
    fontSize: '17px',
    textAlign: 'left',
    color: '#000',
    margin: '20px 10px'

  },
  galleryStyle: {
    display: 'flex',
    margin: '20px 10px'
  },
  card: {
    '@media screen and (max-width: 600px)': {
      display: 'none'
    },
    paddingTop: '100px'
  },
  card2: {
    '@media screen and (min-width: 600px)': {
      display: 'none'
    }
  },
  services: {
    fontFamily: 'Geometria',
    background: '#142966',
    color: '#fff',
    fontWeight: 'normal',
    fontSize: '24px',
    borderBottom: '0.5px solid #d1d1d1',
    decoration: 'none',
    textAlign: 'center',
    padding: '10px',
    borderRadius: '4px'
  }

}
const enhance = compose(
  injectSheet(styles)
)
const Company = props => {
  const {classes, rukovodDetail} = props
  const data = prop('data', rukovodDetail)
  console.warn(data,'rukovodDetail')

  return (
    <div>
      <div className={classes.card}>
        <div className={classes.blueP}>

          <div className={classes.textP}>
            <Breadcrumb style={{
              color: '#989aae'
            }}>
              <Breadcrumb.Item >Информация</Breadcrumb.Item>
              <Breadcrumb.Item>
                <a href="" style={{
                  color: '#989aae'
                }}>Все новости</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <a href="" style={{
                  color: '#989aae'
                }}>title</a>
              </Breadcrumb.Item>
            </Breadcrumb></div>

        </div>
        <Row>
          <Col style={{
            padding: '50px 50px 100px 30px'
          }} xs={18}>
            <div className={classes.RightSide}>
              <div className={classes.textTitleStyle}>TiTLE</div>
              <div>
                <div style={{
                  float: 'left',
                  marginTop: '-5px',
                  marginRight: '15px'
                }}>

                </div>

                <div className={classes.textStyle}>
                  {/* <HtmlContent content={_.get(data, 'text')}/> */}

                </div>

              </div>
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
