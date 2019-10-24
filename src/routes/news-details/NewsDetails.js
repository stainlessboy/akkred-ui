import React from 'react'
import {compose} from 'recompose'
import injectSheet from 'react-jss'
import Image from 'images/Slider.jpg'
import ReactBnbGallery from 'react-bnb-gallery'
import Row from 'antd/lib/row'
import _ from 'lodash'
import Gallery from 'react-grid-gallery'
import Col from 'antd/lib/col'
import Link from 'components/Link'

import {path, prop, pathOr} from 'ramda'
import numberFormat from '../../helpers/numberFormat'
import dateFormat from '../../helpers/dateFormat'
// Import Image from '../../images/Slider.jpg'

import Gallery1 from './Gallery'
import {crossBrowserify, fallbacksStyle} from '../../constants/design'
import sprintf from 'sprintf'
import {NEWS_ITEM_URL} from '../../constants/routes'
import {Breadcrumb, Carousel} from 'antd'
import TW from '../../components/TW'
import {getTranslate} from '../../helpers/translate'
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
  textTitleStyle: {
    fontFamily: 'Futura Md BT',
    fontWeight: 'bold',
    fontSize: '30px',
    textAlign: 'left',
    color: '#000',
    margin: '20px 10px'
    // Display: 'block',
    // Overflow: 'hidden',
    // WhiteSpace: 'nowrap',
    // TextOverflow: 'ellipsis'

  },
  textStyle: {
    fontFamily: 'Futura Md BT',
    fontWeight: '500',
    fontSize: '17px',
    textAlign: 'left',
    color: '#000',
    margin: '20px 10px',

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
  const {classes, newsDetail} = props

  const data = prop('data', newsDetail)
  const title = prop('title', data)
  const text = prop('text', data)
  const gallery = prop('gallery', data)
  const createdDate = dateFormat(prop('createdDate', data), true)
  const sliderConfig = {
  }
  // Const img = pathOr(Image, ['gallery', 'file'], data)
  const IMAGES = _.map(gallery, img => {
    return {
      photo: img.file,
      thumbnail: img.file,
      subcaption: 'After Rain (Jeshu John - designerspics.com)',
      caption: 'After Rain (Jeshu John - designerspics.com)'
    }
  })
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
                }}>{title}</a>
              </Breadcrumb.Item>
            </Breadcrumb></div>

        </div>
        <Row>
          <Col style={{
            padding: '50px 50px 100px 30px'
          }} xs={18}>
            <div className={classes.RightSide}>
              <div className={classes.textTitleStyle}>{title}</div>
              <div>
                <div style={{
                  float: 'left',
                  marginTop: '-5px',
                  marginRight: '15px'
                }}>
                  <Carousel autoplay {...sliderConfig} >

                    {_.map(gallery, (item) => {
                      const titleImage = prop('file', item)
                      return (
                        <div>
                          <img src={titleImage} style={{
                            width: '540px',
                            height: '360px'
                          }} alt=""/>

                        </div>
                      )
                    })}
                  </Carousel>
                </div>

                <div className={classes.textStyle}>
                  {text}

                </div>
                {/* <div className={classes.textTitleStyle}> Фотогалерея</div> */}

                {/* <div className={classes.galleryStyle}> */}

                {/* <Gallery1 images={gallery}/> */}
                {/* </div> */}
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

      <div className={classes.card2}>
        <div className={classes.blueP}>
          <img style={{
            height: '326px',
            width: '100%'

          }} src={Image} alt=""/>
          <div className={classes.textP2}> {title}
            <Breadcrumb style={{
              color: '#fff'
            }}>
              <Breadcrumb.Item >Информация</Breadcrumb.Item>
              <Breadcrumb.Item>
                <a href="" style={{
                  color: '#fff'
                }}>Все новости</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <a href="" style={{
                  color: '#fff'
                }}>{title}</a>
              </Breadcrumb.Item>
            </Breadcrumb></div>

        </div>
        <Col xs={24}>

          <div className={classes.RightSide}>
            <div style={{
              margin: '10px'
            }}>{createdDate} // <strong>Новости</strong>    </div>
            <div className={classes.textTitleStyle}>{title}</div>
            <div className={classes.textStyle}>
              {text}
            </div>
            <div>
              <div className={classes.textTitleStyle}> Фотогалерея</div>

              <div className={classes.galleryStyle}>

                <Gallery1 images={gallery}/>
              </div>
            </div>
          </div>
        </Col>

      </div>

    </div>
  )
}

export default enhance(Company)
