import React, {useState, useRef, useEffect} from 'react'
import {compose, lifecycle, withHandlers, withState} from 'recompose'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'
import {Menu, Dropdown, Icon} from 'antd'

import classnames from 'classnames'
import Link from '../Link'
import {path, prop} from 'ramda'
import * as API from '../../constants/api'
import PhoneApp from 'images/Slider.jpg'
// Import earth from 'images/earth3.png'
import logo4 from 'images/blogo4.jpg'
import global from 'images/globe-asia-solid.svg'
import T from 'components/Translate'
import TS from 'components/T'
import MobileNav from './MobileNav'
import Logo from 'images/OZAS-1.png'
import {Menu as MenuIcon, X as CloseIcon, LogOut as LogoutIcon} from 'react-feather'

import {
  crossBrowserify,
  fallbacksStyle,
  BLACK_COLOR
} from 'constants/design'
import {connect} from 'react-redux'
import fp from 'lodash/fp'
import withHistory from 'helpers/withHistory'
import {onToggle} from 'components/Feedback/FeedbackDialog'
import {LANGUAGE} from 'constants/actionTypes'
import sprintf from 'sprintf'
import {NEWS_ITEM_URL, SYSTEM_PAGES} from '../../constants/routes'
import {logoutAction} from 'routes/user/actions'
import {setAppLanguageAction} from 'routes/action-common'
import _ from 'lodash'

import dateFormat from '../../helpers/dateFormat'
import News from '../../images/tashkent.jpg'

const onLangSet = lang => {
  return {
    type: LANGUAGE,
    payload: Promise.resolve(lang)
  }
}
const mapStateToProps = state => ({
  isAuth: fp.get('login.data.token', state) || '',
  userData: fp.get('user.data', state) || {},
  authLoading: fp.get('login.loading', state)
})
const {SubMenu} = Menu
const enhance = compose(
  withHistory,
  connect(mapStateToProps, {logoutAction, setAppLanguageAction}),
  withHandlers({
    onLogout: props => () => {
      props.logoutAction()
        .then(() => props.history.replace('/'))
    }
  }),
  injectSheet({
    navWrap: {
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      zIndex: '100',
      background: '#fff'
    },
    navigation: {
      height: '240px',
      color: BLACK_COLOR,
      fontWeight: 'normal',
      background: `url(${logo4}) center no-repeat / cover`
      // Position: 'relative',
      // PaddingTop: '40px'
      // PaddingBottom: '10px',
      // ...fallbacksStyle('display', 'flex'),
      // ...crossBrowserify('justifyContent', 'space-between'),
      // ...crossBrowserify('alignItems', 'center')

    },
    menu1: {
      ...fallbacksStyle('display', 'flex'),
      ...crossBrowserify('justifyContent', 'space-between'),
      // ...crossBrowserify('alignItems', 'center')
      width: '100%',
      paddingBottom: '35px',
      paddingLeft: '80px',
      paddingTop: '50px',
      paddingRight: '15px'
      // Background: `url(${logo4}) center no-repeat / cover`

    },
    menu1card: {
      textAlign: 'center',
      width: '100%',
      paddingBottom: '35px',
      paddingTop: '50px'

    },
    menu2: {
      ...fallbacksStyle('display', 'flex'),
      ...crossBrowserify('justifyContent', 'space-between'),
      ...crossBrowserify('alignItems', 'center'),
      marginBottom: '20px',
      // MarginLeft: '20px',
      paddingBottom: '20px',
      // PaddingLeft: '30px',
      paddingTop: '10px',
      // PaddingRight: '30px',
      // FontFamily: '"Futura Md BT"',
      fontFamily: 'Courier',
      fontWeight: '500',
      // FontSize: '20px',
      color: '#757575'
      // Background: '#757575'
      // Background: `url(${logo4}) center no-repeat / cover`
      // BorderBottom: '2px solid #f2f2f2'
    },
    menu2card: {
      ...crossBrowserify('alignItems', 'center'),
      marginBottom: '20px',
      // MarginLeft: '20px',
      paddingBottom: '20px',
      // PaddingLeft: '30px',
      paddingTop: '10px',
      // PaddingRight: '30px',
      // FontFamily: '"Futura Md BT"',
      fontFamily: 'Courier',
      fontWeight: '500',
      // FontSize: '20px',
      color: '#757575'
      // Background: '#757575'
      // Background: `url(${logo4}) center no-repeat / cover`
      // BorderBottom: '2px solid #f2f2f2'
    },
    menu1List: {
      width: '20%'
    },
    menu1Listcard: {
      width: '100%'
    },
    menu2List: {
      width: '16.66%'

    },
    linkStyle: {
      textDecoration: 'none',
      // Color: '#3a3f75',
      color: '#142966',
      fontSize: '26px',
      fontWeight: '500',
      textAlign: 'center',
      fontFamily: 'PF DinDisplay Pro'

    },
    butt: {

    },
    card: {
      '@media screen and (max-width: 600px)': {
        display: 'none'
      }
    },
    card2: {
      '@media screen and (min-width: 600px)': {
        display: 'none'

      }
    },
    firstB: {
      position: 'absolute',
      background: 'green',
      top: '0',
      left: '0',
      right: '0',
      zIndex: '8'
    },
    firstA: {
      position: 'absolute',
      // Background: '#ff3a67',
      ...fallbacksStyle('display', 'flex'),
      // ...crossBrowserify('justifyContent', 'space-between'),
      height: ' 117px',
      top: '0',
      left: '0',
      color: '#fff',
      right: '0',
      zIndex: '8'
    },
    styledLogo: {
      marginTop: 20,
      marginLeft: 30
    },
    navbarStyled: {
      width: '15%',
      paddingTop: 16,
      paddingBottom: 16,
      marginLeft: 30,
      fontWeight: 700,
      fontSize: '10px'

    },
    menuIconStyled: {
      marginTop: 17,
      marginLeft: '30px'
    },
    menuItems: {
      marginLeft: '30px',
      marginTop: 20,
      cursor: 'pointer',
      fontFamily: '\'Montserrat-Medium\', sans-serif',
      fontSize: '16px'
    },
    menuItemsL: {
      display: 'flex',
      marginTop: 20,
      marginLeft: '30px',
      cursor: 'pointer',
      fontFamily: '"Montserrat-Medium", sans-serif',
      fontSize: '16px',
      marginRight: '10px'
    },
    deleteIcon: {
      '& svg': {display: 'none'},
      '&::before': {
        display: 'none'
      },
      '&::after': {
        display: 'none'
      }

    },
    languageSwitch: {
      fontSize: '15px',
      cursor: 'pointer',
      fontFamily: '"Montserrat-Medium", sans-serif',
      color: '#FFF',
      '&:hover': {
        color: '#0b0c66'
      }

    },
    languageSubSwitch: {
      fontSize: '15px',
      cursor: 'pointer',
      fontFamily: '"Montserrat-Medium", sans-serif',
      color: '#FFF'
      // '&:hover': {
      //   Color: '#0b0c66',
      //   Background: '#FFF'
      //
      // },
    },
    menuAntStyle: {
      background: '#0b0c66'
      // '& div': {display: 'none'},

    }

  }),
)
const body = typeof document === 'object' && document.body
const Navigation = props => {
  const {classes, userData, isAuth, onLogout, onFeedOpen, color, home, categoryList, ...rest} = props
  const [menuIsOpen, setMenuIsOpen] = React.useState(false)
  const categoryListNew = prop('results', categoryList)
  const menu1 = (
    <Menu className={classes.menuAntStyle}>
      <Menu.Item>

        <div className={classes.languageSwitch} ><Link style={{
          color: '#FFF'
        }} to={'/pages/about'}>Об аккредитации </Link>

        </div>
      </Menu.Item>
      <Menu.Item>

        <div className={classes.languageSwitch} >Организационная структура

        </div>
      </Menu.Item>

      <Menu.Item>

        <div className={classes.languageSwitch} ><Link style={{
          color: '#FFF'
        }} to={'/rukovod'}>Руководство</Link>

        </div>
      </Menu.Item>
      <Menu.Item>

        <div className={classes.languageSwitch} >Совет по аккредитации

        </div>
      </Menu.Item>
      <Menu.Item>

        <div className={classes.languageSwitch} ><Link style={{
          color: '#fff'
        }} to={'/pages/tech1'}>Комитеты</Link>

        </div>
      </Menu.Item>
      <Menu.Item>

        <div className={classes.languageSwitch} >Вакансии

        </div>
      </Menu.Item>
      <Menu.Item>

        <div className={classes.languageSwitch} >Противодействие коррупции

        </div>
      </Menu.Item>
      <Menu.Item>

        <div className={classes.languageSwitch} >Знак аккредитации

        </div>
      </Menu.Item>
    </Menu>
  )
  const menu3 = (
    <Menu className={classes.menuAntStyle}>

      {_.map(categoryListNew, (item) => {
        const id = prop('id', item)
        const title = prop('title', item)
        return (
          <Menu.Item>
            <div className={classes.languageSwitch} >
              <Link style={{
                color: '#fff'
              }} to={`/documents?parents=${id}`}>{title}</Link>
            </div>
          </Menu.Item>
        )
      })}
    </Menu>
  )

  const menu = (
    <Menu className={classes.menuAntStyle}>
      <Menu.Item>

        <div className={classes.languageSwitch} onClick={() => rest.setAppLanguageAction('uz')}>Ўзбекча

        </div>
      </Menu.Item>

      <Menu.Item>

        <div className={classes.languageSwitch} onClick={() => rest.setAppLanguageAction('ru')}>Русский

        </div>
      </Menu.Item>

      <Menu.Item>

        <div className={classes.languageSwitch} onClick={() => rest.setAppLanguageAction('en')}>English

        </div>
      </Menu.Item>

    </Menu>
  )

  const menu2 = (
    <Menu className={classes.menuAntStyle}>
      <Menu.Item>

        <div className={classes.languageSwitch} >Виды работ

        </div>
      </Menu.Item>

      <Menu.Item>

        <div className={classes.languageSwitch} >Обучение

        </div>
      </Menu.Item>
      <SubMenu className={classes.deleteIcon} title={
        <div className={classes.languageSwitch} >Услуги
        </div>
      } >
        <Menu className={classes.menuAntStyle}>
          <Menu.Item><div className={classes.languageSubSwitch} > <Link style={{
            color: '#fff'
          }} to={'/pages/service1'}>Органы по сертификации продукции</Link></div></Menu.Item>
          <Menu.Item><div className={classes.languageSubSwitch} > <Link style={{
            color: '#fff'
          }} to={'/pages/service2'}>Органы по сертификации систем менеджмента</Link></div></Menu.Item>
          <Menu.Item><div className={classes.languageSubSwitch} ><Link style={{
            color: '#fff'
          }} to={'/pages/service3'}>Органы по сертификации персонала</Link></div></Menu.Item>
          <Menu.Item><div className={classes.languageSubSwitch} ><Link style={{
            color: '#fff'
          }} to={'/pages/service4'}>Испытательные лаборатории</Link></div></Menu.Item>
          <Menu.Item><div className={classes.languageSubSwitch} ><Link style={{
            color: '#fff'
          }} to={'/pages/service5'}>Инспекционные органы</Link></div></Menu.Item>
          <Menu.Item><div className={classes.languageSubSwitch} ><Link style={{
            color: '#fff'
          }} to={'/pages/service6'}>Провайдеры программ проверки квалификации</Link></div></Menu.Item>
        </Menu>
      </SubMenu>

      <Menu.Item>

        <div className={classes.languageSwitch} >Проверка квалификации

        </div>
      </Menu.Item>
      <Menu.Item>

        <div className={classes.languageSwitch} >Сотрудничество

        </div>
      </Menu.Item>
      <Menu.Item>

        <div className={classes.languageSwitch} >Мероприятия

        </div>
      </Menu.Item>
      <Menu.Item>

        <div className={classes.languageSwitch} >Новости

        </div>
      </Menu.Item>
      <Menu.Item>

        <div className={classes.languageSwitch} >Противодействие коррупции

        </div>
      </Menu.Item>
      <Menu.Item>

        <div className={classes.languageSwitch} >Знак аккредитации

        </div>
      </Menu.Item>
    </Menu>
  )

  const menu4 = (
    <Menu className={classes.menuAntStyle}>
      <Menu.Item>
        <div className={classes.languageSwitch} >Общая информация по процедурам аккредитации
        </div>
      </Menu.Item>
      <Menu.Item>
        <div className={classes.languageSwitch} >Инспекционный контроль
        </div>
      </Menu.Item>
      <Menu.Item>
        <div className={classes.languageSwitch} >Приостановление дейтельности ООС
        </div>
      </Menu.Item>
      <Menu.Item>
        <div className={classes.languageSwitch} >Прекращение деятельности ООС
        </div>
      </Menu.Item>
      <Menu.Item>
        <div className={classes.languageSwitch} ><Link style={{
          color: '#fff'
        }} to={'/reestr'}>Реестр</Link>
        </div>
      </Menu.Item>
    </Menu>
  )
  const menu5 = (
    <Menu className={classes.menuAntStyle}>
      <Menu.Item>
        <div className={classes.languageSwitch} >Для органов по сертификации
        </div>
      </Menu.Item>
      <Menu.Item>
        <div className={classes.languageSwitch} >Для лабораторий
        </div>
      </Menu.Item>
      <Menu.Item>
        <div className={classes.languageSwitch} >Для инспекционных органов
        </div>
      </Menu.Item>
      <Menu.Item>
        <div className={classes.languageSwitch} >Провайдеры проверки квалификации
        </div>
      </Menu.Item>
      <Menu.Item>
        <div className={classes.languageSwitch} >Расчет стоимости работ по аккредитации
        </div>
      </Menu.Item>
      <Menu.Item>
        <div className={classes.languageSwitch} >Электронная подача заявки
        </div>
      </Menu.Item>
    </Menu>
  )
  const menu6 = (
    <Menu className={classes.menuAntStyle}>
      <Menu.Item>
        <div className={classes.languageSwitch} >Контакты
        </div>
      </Menu.Item>
      <Menu.Item>
        <div className={classes.languageSwitch} >Вопрос-ответ
        </div>
      </Menu.Item>
      <Menu.Item>
        <div className={classes.languageSwitch} >Обращения граждан
        </div>
      </Menu.Item>
      <Menu.Item>
        <div className={classes.languageSwitch} >Электронная приемная
        </div>
      </Menu.Item>
      <Menu.Item>
        <div className={classes.languageSwitch} >Оценка удовлетворенности потребителей
        </div>
      </Menu.Item>

    </Menu>
  )

  React.useEffect(() => {
    if (menuIsOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style = null
    }
  }, [menuIsOpen])

  const [navBackground, setNavBackground] = useState(false)
  const navRef = useRef()
  navRef.current = navBackground
  useEffect(() => {
    const handleScroll = () => {
      const show = body.scrollTop > 220
      if (navRef.current !== show) {
        setNavBackground(show)
      }
    }

    body.addEventListener('scroll', handleScroll)
    return () => {
      body.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div>
      <div className={classes.card}>
        <div style={{
          display: 'flex',
          position: 'absolute',
          top: '0',
          left: '0',
          color: '#fff',
          right: '0',
          zIndex: '8',
          height: '70px',
          transition: 'all 400ms',
          ...fallbacksStyle('display', 'flex'),
          ...crossBrowserify('justifyContent', 'space-between'),
          backgroundColor: (navBackground || !home) ? '#0b0c66' : 'transparent'}}>
          <div style={{
            ...fallbacksStyle('display', 'flex')
          }}>
            <div className={classes.styledLogo} >
              <Link to={'/'}>   <img style={{width: '100px'}} src={Logo} alt=""/>
              </Link>
            </div>
            <div className={classes.navbarStyled}>
            Государственный Центр Аккредитации Республики Узбекистан
            </div>

            <div className={classes.menuIconStyled}>
              <MenuIcon color={'#FFF'} size={35} />
            </div>

            <div className={classes.menuItems}>

              <Dropdown overlay={menu1} >
                <div > <TS>about</TS> </div>
              </Dropdown>
            </div>
            <div className={classes.menuItems}>
              <Dropdown overlay={menu2}>
                <div > Деятельность
                </div>
              </Dropdown>
            </div>
            <div className={classes.menuItems}>
              <Dropdown overlay={menu3}>
                <div ><Link style={{
                  color: '#fff'
                }} to={'/documents'}>Документация</Link>
                </div>
              </Dropdown>
            </div>
            <div className={classes.menuItems}>
              <Dropdown overlay={menu4}>
                <div > Информация
                </div>
              </Dropdown>
            </div>
            <div className={classes.menuItems}>

              <Dropdown overlay={menu5}>
                <div > Подача заявки
                </div>
              </Dropdown>
            </div>
            <div className={classes.menuItems}>

              <Dropdown overlay={menu6}>
                <div > Обратная связь
                </div>
              </Dropdown>
            </div>
          </div>

          <div style={{
            marginRight: '60px'

          }}>
            <div className={classes.menuItemsL}>
              <div style={{
                marginRight: '10px'
              }} >
                <img style={{
                  height: '20px',
                  width: '20px'
                }} src={global} alt=""/>
              </div>
              <Dropdown overlay={menu}>
                <div ><TS>language</TS> </div>
              </Dropdown>
            </div>
          </div>

        </div>

      </div>

      <div className={classes.card2}>
        <MobileNav/>

      </div>
    </div>

  )
}
Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
  onLangSet: PropTypes.func
}
export default enhance(Navigation)
