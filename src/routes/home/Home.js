import React from 'react'
import {compose, pure} from 'recompose'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'
import {PRIMARY_COLOR, crossBrowserify, fallbacksStyle} from '../../constants/design'
import PhoneApp from 'images/Slider.jpg'
import News from 'images/tashkent.jpg'
import logo4 from 'images/blogo4.jpg'

import mpng1 from 'images/mpng1.png'
import mpng2 from 'images/mpng2.png'
import mpng3 from 'images/mpng3.png'
import mpng4 from 'images/mpng4.png'
import service1 from 'images/service1.png'
import service2 from 'images/service2.png'
import service3 from 'images/service3.png'
import service4 from 'images/service4.png'
import stat1 from 'images/stat1.png'
import stat2 from 'images/stat2.png'
import stat3 from 'images/stat3.png'
import stat4 from 'images/stat4.png'
import link1 from 'images/link1.png'
import link2 from 'images/link2.png'
import link3 from 'images/link3.jpg'
import link4 from 'images/link4.png'
import link5 from 'images/link5.png'
import link6 from 'images/link6.jpg'
import _ from 'lodash'

import Logo from 'images/OZAS-1.png'
import {Carousel} from 'antd'
import Link from 'components/Link/Link'

import T from 'components/Translate'
import {path, prop} from 'ramda'
import dateFormat from '../../helpers/dateFormat'
import sprintf from 'sprintf'
import {NEWS_ITEM_URL} from '../../constants/routes'
import Image from '../../images/myjob.png'
import {getSliderList} from './actions'

const HIDE = false
const enhance = compose(
  injectSheet({
    wrapper: {},
    slideWrap: {
      background: PRIMARY_COLOR,
      '& > div': {
        ...fallbacksStyle('display', 'flex'),
        ...crossBrowserify('alignItems', 'center'),
        ...crossBrowserify('justifyContent', 'space-between')
      }
    },
    mainText: {
      color: '#fff',
      fontSize: '50px',
      fontWeight: 'bold',
      letterSpacing: '0.02em',
      maxWidth: '480px',
      lineHeight: 'normal',
      marginBottom: '20px',
      '@media only screen and (max-width: 768px)': {
        fontSize: '40px'
      }
    },
    hintText: {
      fontSize: '16px',
      color: '#fff',
      margin: '15px 0 30px'
    },
    common: {
      display: 'inline-block',
      fontSize: '16px',
      lineHeight: '50px',
      padding: '0 25px'
    },
    create: {
      extend: 'common',
      borderRadius: '6px',
      background: '#fff',
      fontWeight: '600',
      color: PRIMARY_COLOR,
      cursor: 'pointer',
      transition: 'all 300ms',
      '&:hover': {
        background: '#f4f4f4'
      },
      '@media only screen and (max-width: 768px)': {
        padding: '0 15px',
        fontSize: '15px'
      }
    },
    masterWrap: {
      marginBottom: '30px',
      ...fallbacksStyle('display', 'flex'),
      ...crossBrowserify('alignItems', 'center'),
      ...crossBrowserify('justifyContent', 'space-between')
    },
    allMasters: {
      textDecorationLine: 'underline',
      color: '#617285',
      fontSize: '16px',
      fontWeight: '500',
      '&:focus': {
        color: '#617285'
      },
      '&:hover': {
        color: '#617285'
      }
    },
    phoneApp: {
      width: '500px',
      height: '340px',
      background: 'url(' + PhoneApp + ')',
      backgroundSize: 'cover',
      position: 'absolute',
      bottom: '-60px',
      right: '0'
    },
    slider: {
      ...crossBrowserify('alignItems', 'center'),
      marginBottom: '80px'
      // BoxShadow: 'inset 0 0 27px 27px blue'
    },
    newsWrapper: {
      paddingLeft: '40px',
      paddingRight: '40px',
      marginBottom: '20px'
    },
    newsWrapper2: {
      paddingLeft: '15px',
      paddingRight: '15px'
    },
    otzivWrapper: {
      paddingLeft: '40px',
      paddingRight: '40px',

      marginTop: '100px',
      marginBottom: '100px'
    },
    partnerWrapper: {
      paddingLeft: '50px',
      paddingRight: '50px',

      marginTop: '100px',
      marginBottom: '100px'
    },
    news: {
      ...fallbacksStyle('display', 'flex'),
      '& div.slick-slide': {
        paddingRight: '20px',
        paddingTop: '20px',
        paddingBottom: '20px'
        // Overflow: 'auto',
        // Clear: 'both'
        // PaddingLeft: '10px'
      }

    },
    news2: {
      paddingTop: '20px',
      paddingBottom: '20px'
    },
    newsImage: {
      width: '100%',
      // Height: '50%'
      height: '215px',
      borderRadius: '20px 20px 0 0'
    },
    newDate: {
      paddingLeft: '15px',
      marginTop: '10px',
      color: '#8287c5',
      fontsize: '15px'

    },
    newDate2: {
      color: '#8b8b8b',
      paddingLeft: '5px',
      fontfamily: 'Futura Md BT',
      fontweight: '500',
      fontsize: '15px'

    },
    newsWrap: {
      width: '20%',
      transition: 'box-shadow 200ms',

      margin: '0 10px',
      borderRadius: '20px',
      background: '#fff',
      boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)',
      '& div.ant-carousel': {
        clear: 'both'
      },
      '&:hover': {
        boxShadow: '0px 14px 30px rgba(0, 0, 0, 0.08)'
      }
    },
    newsWrap2: {
      width: '100%',
      margin: '10px 0px',
      borderRadius: '10px',
      background: '#fff',
      boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)',
      '& div.ant-carousel': {
        clear: 'both'
      }
    },
    newText: {
      padding: '10px',
      paddingRight: '15px',
      paddingLeft: '15px',
      display: 'block',
      textOverflow: 'ellipsis',
      wordWrap: 'inherit',
      overflow: 'hidden',
      height: '7em',
      fontSize: '18px',
      color: '#1e2ab9',
      fontFamily: '"Montserrat-Medium", sans-serif'
    },
    newMore: {
      color: '#1e227e',
      fontSize: '15px',
      fontFamily: 'Montserrat-Medium, sans-serif',
      display: ' block',
      marginLeft: '15px',
      marginBottom: '10px'

    },
    textMain: {

      textAlign: 'left',
      marginTop: '30px',
      color: '#3d3daf',
      fontFamily: '\'Montserrat-SemiBold\', sans-serif',
      fontSize: '30px',
      fontWeight: '500',
      lineHeight: 1.1,
      boxSizing: 'border-box'
    },
    textMainLink: {
      textAlign: 'left',
      marginTop: '30px',
      marginBottom: '30px',
      color: '#3d3daf',
      fontFamily: '"Montserrat-SemiBold", sans-serif',
      fontSize: '30px'
    },
    mediaWrap: {
      width: '25%',
      margin: '0 10px',
      borderRadius: '5px',
      background: '#fff',
      boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)'
    },
    mediaImage: {
      width: '50%',
      // Height: '50%'
      height: '240px'
    },
    otziv: {
      height: '360px',
      boxShadow: '0px 0px 30px rgba(0, 0, 0, 0.16)',
      padding: '60px 20px 20px 20px',
      marginRight: '30px',
      marginLeft: '30px'

    },
    otzivTextMain: {
      fontFamily: 'Futura Md BT',
      fontWeight: 'bold',
      fontSize: '34px',
      textAlign: 'left',
      color: '#414141',
      marginBottom: '30px',
      marginTop: '30px'

    },
    Krugs: {
      ...fallbacksStyle('display', 'flex'),
      ...crossBrowserify('alignItems', 'center'),
      color: '#142966',
      marginTop: '50px',
      paddingLeft: '25px',
      paddingRight: '25px'
    },
    Krugs2: {

      color: '#1e2ab9',
      marginTop: '50px',
      paddingLeft: '25px',
      paddingRight: '25px'
    },
    krug: {
      width: '75px',
      height: '75px',
      MozBorderRadius: '50px',
      WebkitBorderRadius: '50px',
      borderRadius: '50px',
      background: '#0b0c66',
      padding: '13px',
      marginRight: '20px'
    },
    krugText: {
      ...fallbacksStyle('display', 'flex'),
      // ...crossBrowserify('alignItems', 'center'),
      color: '#1e2ab9',
      marginBottom: '20px'
      // PaddingLeft: '45px'
    },
    krugWrapper: {
      ...crossBrowserify('alignItems', 'center'),
      width: '25%'
    },
    krugWrapper2: {
      ...crossBrowserify('alignItems', 'center'),
      width: '100%'
    },
    numbers: {
      fontSize: '49px',
      fontFamily: 'Futura Md BT',
      color: '#3b5da7',
      fontWeight: '500'
    },
    ant_carousel__slick_slide: {
      textAlign: 'center',
      height: '160px',
      lineHeight: '160px',
      // Background: '#364d79',
      background: '#FF0000',
      overflow: 'hidden'
    },
    ant_carousel__slick_slide_h3: {
      color: '#fff'
    },
    slick_slide: {
      marginLeft: '30px',
      marginRight: '30px'
    },

    imageSlider: {
      width: '40%'
    },
    partnersWrap: {
      width: '25%',
      margin: '0 20px',
      background: '#fff'
    },
    partnersImage: {
      width: '100%',
      paddingRight: '20px',
      paddingLeft: '20px'
    },
    serviceWrapper: {
      paddingLeft: '40px',
      paddingRight: '40px',
      marginTop: '30px',
      display: 'flex',
      background: '#f2f4fb'

    },
    serviceWrapper2: {
      marginTop: '30px',
      textAlign: 'center'
    },
    serviceDiv: {
      // Display: 'flex',
      width: '25%',
      height: '250px',
      background: '#0b0c66',
      color: '#fff',
      textAlign: 'center',
      padding: '30px 50px',
      fontFamily: 'Montserrat-Medium, sans-serif',
      fontSize: '19px'
    },
    serviceDiv1: {
      // Display: 'flex',
      color: '#0b0c66',
      fontFamily: 'Montserrat-Medium, sans-serif',
      fontSize: '19px',
      width: '25%',
      height: '250px',
      background: '#FFF',
      textAlign: 'center',
      padding: '30px 50px'

    },
    serviceDiv2: {
      // Display: 'flex',
      // Width: '25%',
      paddingLeft: '30px',
      paddingRight: '30px'
    },
    serviceTitle: {
      // FontSize: '15px',
      // FontFamily: 'Roboto, Arial, sans-serif',
      marginLeft: '15px',
      marginBottom: '15px'
    },
    serviceFoto: {
      width: '100px',
      height: '90px'
    },

    card: {
      '@media screen and (max-width: 600px)': {
        display: 'none',
        overflow: 'hidden',
        background: '#f2f4fb'

      },
      background: '#f2f4fb'
    },
    card2: {
      '@media screen and (min-width: 600px)': {
        display: 'none'
      }
    },
    slideWrapNew: {
      position: 'relative',
      '&::after': {
        display: 'block',
        content: '" "',
        zIndex: '10',
        position: 'absolute',
        bottom: '0',
        height: '370px',
        left: '0',
        right: '0',
        backgroundImage: 'linear-gradient(to top, rgba(5, 5, 60, .9) 0%, rgba(11, 12, 102, 0) 100%)'
      },
      '&::before': {
        display: 'block',
        content: '" "',
        zIndex: '10',
        position: 'absolute',
        top: '0',
        height: '370px',
        left: '0',
        right: '0',
        backgroundImage: 'linear-gradient(to bottom, rgba(5, 5, 60, .9) 0%, rgba(11, 12, 102, 0) 100%)'
      }

    },
    uslugi: {
      width: '20%',
      height: '232px',

      background: '#FFF',
      paddingLeft: '50px',
      paddingRight: '50px',
      paddingTop: '20px',
      paddingBottom: '50px',
      borderRadius: '20px',
      marginLeft: '10px',
      marginRight: '10px',
      boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)',
      transition: 'box-shadow 200ms',

      '&:hover': {
        boxShadow: '0px 14px 30px rgba(0, 0, 0, 0.08)'
      }
    },
    childUslugi: {
      color: '#05053c',
      fontSize: '36px',
      padding: '10px 0',
      textAlign: 'center',
      // FontFamily: ' "Montserrat-SemiBold", sans-serif'
      fontFamily: '\'Montserrat-SemiBold\', sans-serif'
    },
    childUslugiSmall: {
      fontFamily: ' "Montserrat-Regular", sans-serif',
      fontSize: '18px',
      color: '#282828',
      textAlign: 'center'

    },
    linksList: {
      ...fallbacksStyle('display', 'flex'),
      // ...crossBrowserify('alignItems', 'center'),
      marginLeft: '25px',
      marginRight: '25px'

    },
    linkdetail: {
      width: '16.6%',
      height: '250px',
      paddingTop: '15px',
      background: '#FFFF',
      marginLeft: '10px',
      marginRight: '10px',
      borderRadius: '10px',
      textAlign: 'center',
      boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)',
      paddingBottom: '0px',
      paddingLeft: '8px',
      paddingRight: '8px'
    },
    linkLink: {
      color: '#115185',
      fontFamily: 'Montserrat-SemiBold, sans-serif',
      fontSize: '15px',
      marginBottom: '10px'
    },
    linkimage: {
      marginTop: '10px',
      marginBottom: '20px'
    },
    sliderDiv: {
      zIndex: '12',
      position: 'absolute',
      bottom: '100px',
      left: '100px',
      right: '0'

    },
    sliderInText: {
      fontFamily: '"Montserrat-Regular", sans-serif',
      color: '#FFF',
      fontSize: '34px',
      lineHeight: '56px'
    },
    sliderMore: {
      backgroundColor: '#058bbe',
      backgroundImage: 'linear-gradient(-75deg, #1719e0 0%, #3755ff 100%)',
      color: '#FFF',
      fontFamily: '"Montserrat-Regular", sans-serif',
      paddingTop: '15px',
      borderRadius: '5px',
      padding: '10px',
      height: '45px',
      width: '136px',
      textAlign: 'center',
      marginRight: '10px',
      userSelect: 'none',
      fontSze: '14px',
      letterSpacing: '.7px',
      cursor: 'pointer',
      textTransform: 'uppercase'
    },
    sliderDate: {
      fontSize: '18px',
      color: '#ffcc10',
      fontFamily: '"Montserrat-Regular", sans-serif',
      paddingTop: '5px'
    }

  }),
  pure
)
const Home = props => {
  const {
    classes,
    newsList,
    sliderList,
    performerList,
    onToggle
  } = props
  const data = prop('data', newsList)
  const dataSlider = prop('data', sliderList)
  const responsive = {
    xs: 24,
    sm: 24,
    md: 8,
    lg: 8
  }

  const sliderConfig = {
  }
  const sliderConfig2 = {
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: false,
    dots: false

  }
  const sliderConfig3 = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: false

  }

  return (
    <div>
      <div className={classes.card}>

        <Carousel className={classes.slider} autoplay {...sliderConfig} >

          {_.map(dataSlider, (item) => {
            const id = prop('id', item)
            const createdDate = dateFormat(prop('createdDate', item))
            const imageUrl = path(['image', 'file'], item)
            const title = prop('title', item)
            return (
              <div className={classes.slideWrapNew}>
                <img src={imageUrl} style={{
                  width: '100%',
                  height: '1032px'
                }} alt=""/>
                <div className={classes.sliderDiv}>
                  <div className={classes.sliderInText}>
                    {title}
                  </div>
                  <div style={{
                    display: 'flex'
                  }}>
                    <div className={classes.sliderMore}>Батафсил</div>
                    <div className={classes.sliderDate}>{createdDate} </div>
                  </div>
                </div>

              </div>
            )
          })}
        </Carousel>

        <div className={classes.newsWrapper} >
          <div style={{
            ...fallbacksStyle('display', 'flex'),
            ...crossBrowserify('alignItems', 'center')
            // ...crossBrowserify('justifyContent', 'space-between')
          }}>

            <div className={classes.uslugi}>
              <div className={classes.childUslugi}>143</div>
              <div className={classes.childUslugiSmall}>малых промышленных зон</div>
            </div>
            <div className={classes.uslugi}>
              <div className={classes.childUslugi}> 7.8 млрд.$</div>
              <div className={classes.childUslugiSmall}>свободных экономических зон</div>
            </div>
            <div className={classes.uslugi}>
              <div className={classes.childUslugi}>21</div>
              <div className={classes.childUslugiSmall}> свободных экономических зон</div>
            </div>
            <div className={classes.uslugi}>
              <div className={classes.childUslugi}> 7.8 млрд.$</div>
              <div className={classes.childUslugiSmall}> свободных экономических зон</div>
            </div>
            <div className={classes.uslugi}>
              <div className={classes.childUslugi}> 7.8 млрд.$</div>
              <div className={classes.childUslugiSmall}>свободных экономических зон </div>
            </div>
          </div>
          <div>
          </div>

        </div>
        <div className={classes.newsWrapper}>
          <div>
            <div className={classes.Krugs}>

              <div className={classes.krugWrapper}>
                <div className={classes.krugText}>
                  <div className={classes.krug}>

                    <img style={{
                      width: '100%'
                    }} src={stat1} alt=""/>

                  </div>
                  <div className={classes.numbers}>1645</div>
                </div>
                <div>
                  Количество субъектов аккредитации
                </div>

              </div>
              <div className={classes.krugWrapper}>
                <div className={classes.krugText}>
                  <div className={classes.krug}>

                    <img style={{
                      width: '100%'
                    }} src={stat2} alt=""/>

                  </div>
                  <div className={classes.numbers}>461</div>
                </div>
                <div>
                  Рассмотрены материалы аккредитации за
                  2017 год
                </div>

              </div>
              <div className={classes.krugWrapper}>
                <div className={classes.krugText}>
                  <div className={classes.krug}>

                    <img style={{
                      width: '100%'
                    }} src={stat3} alt=""/>

                  </div>
                  <div className={classes.numbers}>123867</div>
                </div>
                <div>
                  Выдано всего протоколов испытаний с
                  совмещенным знаком ILAC MRA
                </div>

              </div>
              <div className={classes.krugWrapper}>
                <div className={classes.krugText}>
                  <div className={classes.krug}>

                    <img style={{
                      width: '100%'
                    }} src={stat4} alt=""/>

                  </div>
                  <div className={classes.numbers}>11510</div>
                </div>

                <div>
                  Выдано сертификатов соответствия с
                  совмещенным знаком IAF MLA
                </div>

              </div>

            </div>

          </div>

        </div>
        <div className={classes.newsWrapper}>
          <div> <div className={classes.textMain}>Новости
          </div>
          <div style={{
            textAlign: 'right'
          }}>
            <Link to={'/news'} style={{
              textDecoration: 'none',
              color: '#0088cc',
              // TextAlign: 'right',
              paddingRight: '20px',
              fontSize: '17px'
            }}><T> Все новости</T></Link>
          </div>
          </div>
          <Carousel className={classes.news} {...sliderConfig2} >
            {_.map(data, (item) => {
              const id = prop('id', item)
              const createdDate = dateFormat(prop('createdDate', item))
              const imageUrl = path(['photo', 'file'], item)
              const title = prop('title', item)
              return (
                <div className={classes.newsWrap}>
                  <img className={classes.newsImage} src={News} alt=""/>
                  <div className={classes.newDate}>{createdDate}
                  </div>
                  <div className={classes.newText}><Link to={sprintf(NEWS_ITEM_URL, id)}>{title}</Link>

                  </div>
                  <div className={classes.newMore}>
                    Подробнее...
                  </div>

                </div>
              )
            })}

          </Carousel>

        </div>

        <div className={classes.textMain} style={{
          paddingLeft: '40px'
        }}>Услуги
        </div>
        <div className={classes.serviceWrapper}>

          <div className={classes.serviceDiv} style={{
            borderRadius: '10px 0 0 10px'
          }} >
            <img className={classes.serviceFoto} src={mpng1} alt=""/>
            <div className={classes.serviceTitle}>Поиск по реестру субъектов аккредитации</div>
          </div>
          <div className={classes.serviceDiv1} >
            <img className={classes.serviceFoto} src={mpng2} alt=""/>
            <div className={classes.serviceTitle}>Обучение оценщиков и технических эскпертов  </div>
          </div>
          <div className={classes.serviceDiv} >
            <img className={classes.serviceFoto} src={mpng3} alt=""/>
            <div className={classes.serviceTitle}>Единый реестр органов по сертификации
            </div>
          </div>
          <div className={classes.serviceDiv1} style={{
            borderRadius: '0 10px 10px 0'
          }}>
            <img className={classes.serviceFoto} src={mpng4} alt=""/>
            <div className={classes.serviceTitle}>Личный кабинет заявителя</div>
          </div>
          <hr/>
        </div>

        <div className={classes.newsWrapper}>
          <div className={classes.textMainLink}>Полезные ссылки
          </div>
          <div>

            <div className={classes.linksList}>

              <div className={classes.linkdetail}>
                <div style={{
                  marginTop: '-5px'
                }} className={classes.linkimage} ><img src={link1} alt=""/></div>
                <div>Национальное агентство проектного управления при Президенте Республики Узбекистан</div>
                <div className={classes.linkLink}>www.namp.uz</div>
              </div>

              <div className={classes.linkdetail}>
                <div className={classes.linkimage}><img src={link2} alt=""/></div>

                <div>Официальный веб-сайт Президента Республики Узбекистан </div>
                <div className={classes.linkLink}>senat.uz</div>
              </div>

              <div className={classes.linkdetail}>

                <div className={classes.linkimage}><img src={link3} alt=""/></div>

                <div>Законодательная палата Олий Мажлиса</div>
                <div className={classes.linkLink}>parliament.gov.uz</div>
              </div>
              <div className={classes.linkdetail}>

                <div className={classes.linkimage}><img src={link4} alt=""/></div>

                <div>Стратегия действий по пяти приоритетным направлениям развития Республики Узбекистан в 2017-2021 годах</div>
                <div className={classes.linkLink}>www.strategy.gov.uz</div>
              </div>
              <div className={classes.linkdetail}>

                <div style={{
                  marginTop: '25px'
                }} className={classes.linkimage}><img src={link5} alt=""/></div>

                <div>Национальная база данных законодательства Республики Узбекистан</div>
                <div className={classes.linkLink}>www.lex.uz</div>
              </div>
              <div className={classes.linkdetail}>

                <div className={classes.linkimage}><img src={link6} alt=""/></div>

                <div>Государственный комитет республики Узбекистан по статистике</div>
                <div className={classes.linkLink}>stat.uz</div>
              </div>
            </div>

          </div>

        </div>

      </div>

      <div className={classes.card2}>
        <Carousel className={classes.slider} autoplay {...sliderConfig} >
          <div>
            <img className={classes.imageSlider} src={PhoneApp} style={{
              width: '100%',
              height: '300px'
            }} alt=""/>
          </div>

          <div>
            <img className={classes.imageSlider} src={PhoneApp} style={{
              width: '100%',
              height: '300px'
            }} alt=""/>
          </div>
          <div>
            <img className={classes.imageSlider} src={PhoneApp} style={{
              width: '100%',
              height: '300px'
            }} alt=""/>
          </div>
        </Carousel>
        <div className={classes.serviceWrapper2}>

          <div className={classes.serviceDiv2} >
            <img className={classes.serviceFoto} src={service1} alt=""/>
            <div className={classes.serviceTitle}>Поиск по реестру субъектов аккредитации</div>
          </div>
          <div className={classes.serviceDiv2} >
            <img className={classes.serviceFoto} src={service2} alt=""/>
            <div className={classes.serviceTitle}>Обучение оценщиков и технических эскпертов  </div>
          </div>
          <div className={classes.serviceDiv2} >
            <img className={classes.serviceFoto} src={service3} alt=""/>
            <div className={classes.serviceTitle}>Единый реестр органов по сертификации и испытательных лабораторий (центров) ЕАЭС</div>
          </div>
          <div className={classes.serviceDiv2}>
            <img className={classes.serviceFoto} src={service4} alt=""/>
            <div className={classes.serviceTitle}>Личный кабинет заявителя</div>
          </div>
          <hr/>
        </div>
        <div className={classes.newsWrapper2}>
          <div> <div className={classes.textMain}>Новости
          </div>
          <div style={{
            textAlign: 'right'
          }}>
            <Link to={'/news'} style={{
              textDecoration: 'none',
              color: '#0088cc',
              // TextAlign: 'right',
              paddingRight: '20px',
              fontSize: '17px'
            }}><T> Все новости</T></Link>
          </div>
          </div>

          <div>
            {_.map(data, (item) => {
              const id = prop('id', item)
              const createdDate = dateFormat(prop('createdDate', item))
              const imageUrl = path(['photo', 'file'], item)
              const title = prop('title', item)
              return (
                <div className={classes.newsWrap2}>
                  <img className={classes.newsImage} src={imageUrl} alt=""/>
                  <div className={classes.newText}><Link to={sprintf(NEWS_ITEM_URL, id)}>{title}</Link>

                  </div>
                  <div className={classes.newDate2}>{createdDate}
                  </div>
                </div>
              )
            })}
          </div>

          <div style={{
            borderBottom: '1px solid #f2f2f2',
            margin: '60px 80px 30px 80px'
          }}></div>

        </div>
        <div className={classes.newsWrapper2}>
          <div> <div className={classes.textMain}>Медиа
          </div>
          <div style={{
            textAlign: 'right'
          }}>
            <Link to={'/news'} style={{
              textDecoration: 'none',
              color: '#0088cc',
              // TextAlign: 'right',
              paddingRight: '20px',
              fontSize: '17px'
            }}><T> Все Медиа</T></Link>
          </div>
          </div>

          {_.map(data, (item) => {
            const id = prop('id', item)
            const createdDate = dateFormat(prop('createdDate', item))
            const imageUrl = path(['photo', 'file'], item)
            const title = prop('title', item)
            return (
              <div className={classes.newsWrap2}>
                <img className={classes.newsImage} src={imageUrl} alt=""/>
                <div className={classes.newText}><Link to={sprintf(NEWS_ITEM_URL, id)}>{title}</Link>

                </div>
                <div className={classes.newDate2}>{createdDate}
                </div>
              </div>
            )
          })}

          {/* </Carousel> */}
          <div style={{
            borderBottom: '1px solid #f2f2f2',
            margin: '60px 80px 30px 80px'
          }}></div>

        </div>
        <div className={classes.newsWrapper2}>
          <div className={classes.textMain}>О компании
          </div>
          <div>
            <div>"Национальный центр аккредитации" — Комитета технического регулирования и метрологии Министерство
              индустрии и инфраструктурного развития Республики Узбекистана (НЦА) является
              органом по аккредитации в области оценки соответствия и осуществляет свою деятельность руководствуясь
              Законом Республики Узбекистана "Об аккредитации в области оценки соответствия".
            </div>
            <div className={classes.Krugs2}>

              <div className={classes.krugWrapper2}>
                <div className={classes.krugText}>
                  <div className={classes.krug}>

                    <img style={{
                      width: '100%'
                    }} src={stat1} alt=""/>

                  </div>
                  <div className={classes.numbers}>1645</div>
                </div>
                <div>
                  Количество субъектов аккредитации
                </div>

              </div>
              <div className={classes.krugWrapper2}>
                <div className={classes.krugText}>
                  <div className={classes.krug}>

                    <img style={{
                      width: '100%'
                    }} src={stat2} alt=""/>

                  </div>
                  <div className={classes.numbers}>461</div>
                </div>
                <div>
                  Рассмотрены материалы аккредитации за
                  2017 год
                </div>

              </div>
              <div className={classes.krugWrapper2}>
                <div className={classes.krugText}>
                  <div className={classes.krug}>

                    <img style={{
                      width: '100%'
                    }} src={stat3} alt=""/>

                  </div>
                  <div className={classes.numbers}>123867</div>
                </div>
                <div>
                  Выдано всего протоколов испытаний с
                  совмещенным знаком ILAC MRA
                </div>

              </div>
              <div className={classes.krugWrapper2}>
                <div className={classes.krugText}>
                  <div className={classes.krug}>

                    <img style={{
                      width: '100%'
                    }} src={stat4} alt=""/>

                  </div>
                  <div className={classes.numbers}>11510</div>
                </div>

                <div>
                  Выдано сертификатов соответствия с
                  совмещенным знаком IAF MLA
                </div>

              </div>

            </div>

          </div>
          <div style={{
            borderBottom: '1px solid #f2f2f2',
            margin: '60px 80px 30px 80px'
          }}></div>

        </div>

      </div>
    </div>
  )
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
  companyTab: PropTypes.shape({
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
  }).isRequired,
  mainTab: PropTypes.shape({
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
  }).isRequired,
  professionsList: PropTypes.object,
  appList: PropTypes.object,
  employerList: PropTypes.object,
  vacancyList: PropTypes.object,
  regionsList: PropTypes.object,
  onSearch: PropTypes.func.isRequired
}

export default enhance(Home)
