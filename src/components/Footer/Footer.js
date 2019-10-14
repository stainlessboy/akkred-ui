import React from 'react'
import injectSheet from 'react-jss'
import {compose} from 'recompose'
import {
  BLACK_COLOR,
  crossBrowserify,
  fallbacksStyle, MAIN_COLOR
} from 'constants/styles'
import PropTypes from 'prop-types'
import {Field, reduxForm} from 'redux-form'
import {Button, notification} from 'antd'

const enhance = compose(
  reduxForm({
    form: 'subForm'
  }),
  injectSheet({
    wrapper: {
      background: '#0b0c66',

      // Color: '#222',
      fontfamily: 'Heebo',
      fontweight: '300',
      fontsize: '42px',
      color: '#fff',
      paddingLeft: '80px',
      paddingRight: '80px',
      paddingTop: '60px',
      paddingBottom: '80px',
      height: '150px',
      ...fallbacksStyle('display', 'flex'),
      '@media screen and (max-width: 600px)': {
        display: 'none'
      }
    },
    wrapper2: {
      // Background: '#f6f6f6',
      // Background: '#262626',
      background: '#0b0c66',

      // padding: '0',
      // Color: '#222',
      fontfamily: 'Heebo',
      fontweight: '300',
      fontsize: '32px',
      color: '#fff',
      textAlign: 'center',

      // PaddingLeft: '80px',
      // PaddingRight: '80px',
      // PaddingTop: '80px',
      // Height: '500px',
      '@media screen and (min-width: 600px)': {
        display: 'none'
      }
    },
    // Navigation: {
    //   Margin: '0 -25px',
    //   ...fallbacksStyle('display', 'flex'),
    //   ...crossBrowserify('justifyContent', 'center')
    // },
    menu: {
      width: '50%',
      color: '#fff',
      paddingLeft: '10px',
      paddingRight: '10px',
      fontSize: '15px'

    },
    menu2: {
      width: '100%',
      color: '#fff',
      fontWeight: 'normal',
      fontFamily: '"Futura Md BT"',
      textAlign: 'center',
      // PaddingRight: '10px',
      fontSize: '14px'

    },
    textMenu: {
      // Background: '#262626',
      background: '#142966',

      color: '#fff',
      // Color: '#222',
      fontSize: '30px',
      fontWeight: '700'
    },
    textMenu2: {
      // Background: '#262626',
      background: '#142966',

      color: '#fff',
      // Color: '#222',
      fontSize: '30px',
      fontWeight: '700'
    }

  })
)

const Footer = props => {
  const {classes, handleSubmit, onSubmit} = props
  const openNotificationWithIcon = type => {
    notification[type]({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
    })
  }

  return (
    <div>
      {/* <div style={{ */}
      {/*  Width: '100%', */}
      {/*  Height: '150px', */}
      {/*  // background: '#3b5da7', */}
      {/*  Background: '#142966', */}
      {/*  Filter: 'drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.16))', */}
      {/*  TextAlign: 'center' */}

      {/* }}> */}
      {/*  <div style={{ */}
      {/*    FontFamily: '"Futura Md BT"', */}
      {/*    FontWeight: 'bold', */}
      {/*    FontSize: '28px', */}
      {/*    Color: '#fff', */}
      {/*    MarginBottom: '10px', */}
      {/*    PaddingTop: '10px' */}
      {/*  }}>Подписывайтесь на новости */}
      {/*  </div> */}
      {/*  <div> */}
      {/*    <form style={{ */}
      {/*      ...fallbacksStyle('display', 'flex'), */}
      {/*      Width: '800px', */}
      {/*      TextAlign: 'center', */}
      {/*      PaddingLeft: '400px' */}
      {/*    }} onSubmit={handleSubmit}> */}
      {/*      <div style={{}}> */}
      {/*        <div> */}
      {/*          <Field */}
      {/*            Name="email" */}
      {/*            Component="input" */}
      {/*            Type="email" */}
      {/*            Placeholder="Youremail@address.com" */}
      {/*            Style={{ */}
      {/*              Width: '500px', */}
      {/*              Height: '42px', */}
      {/*              Background: '#fff', */}
      {/*              FontFamily: 'Heebo', */}
      {/*              FontWeight: 'normal', */}
      {/*              FontSize: '18px', */}
      {/*              LineHeight: '37px', */}
      {/*              TextAlign: 'left', */}
      {/*              Color: '#777', */}
      {/*              BorderRadius: '0', */}
      {/*              PaddingLeft: '10px' */}

      {/*            }} */}
      {/*          /> */}
      {/*        </div> */}
      {/*      </div> */}

      {/*      <div> */}
      {/*        <Button style={{ */}
      {/*          Width: '250px', */}
      {/*          Height: '42px', */}
      {/*          Background: 'transparent', */}
      {/*          Color: '#fff', */}
      {/*          FontFamily: '“Futura Md BT”', */}
      {/*          FontWeight: 'bold', */}
      {/*          FontSize: '18px', */}
      {/*          BorderRadius: '0', */}
      {/*          MarginLeft: '10px', */}

      {/*          TextAlign: 'center', */}
      {/*        }} type="submit" onClick={() => openNotificationWithIcon('success')} disabled={onSubmit}> */}
      {/*          Подписаться */}
      {/*        </Button> */}
      {/*      </div> */}

      {/*    </form> */}
      {/*  </div> */}
      {/* </div> */}
      <div className={classes.wrapper}>
        <div className={classes.menu}>
          Ушбу сайтда чоп этилган материаллардан фойдаланилганда www.akkred.uz хаволасини кўрсатиб ўтиш шарт
        </div>
        <div className={classes.menu}>
          © 2019.   Барча хуқуқлар химояланган.
        </div>




      </div>
      <div className={classes.wrapper2}>
        <div className={classes.menu2}>
          <p className={classes.textMenu2}>Информация</p>
          <p>Новости</p>
          <p>Медиа</p>
          <p>Обучение</p>
          <p>Вопросы и ответы</p>
        </div>
        <div className={classes.menu2}>
          <h2 className={classes.textMenu2}>Субъекты аккредитации</h2>
          <p>Приказы по субъектам аккредитации</p>
          <p>Анкета для оценки услуг НЦА</p>
          <p>Исполнение Плана совместных мероприятий</p>
          <p>Общая информация</p>
          <p>Перечень приостановленных субъектов аккредитации</p>
          <p>Рассмотрение жалоб</p>
        </div>
        <div className={classes.menu2}>
          <p className={classes.textMenu2}>Веб сервисы</p>
          <p>Полезная информация</p>
          <p>Поиск по реестру субъектов аккредитации</p>
          <p>E-Cabinet программа для работы с СМ</p>
          <p>Обучение</p>
        </div>
        <div className={classes.menu2}>
          <p className={classes.textMenu2}>Документы</p>
          <p>Процедурные документы</p>
          <p>Личный кабинет для сотрудников НЦА</p>
          <p>Телефонный справочник сотрудников ТОО "НЦА"</p>
          <p>Вопросы и ответы</p>
        </div>
        <div className={classes.menu2}>
          <p className={classes.textMenu2}>Наши контакты</p>
          <p>Телеофон:+99897 1303070</p>
          <p className={classes.textMenu2}>Аддресс</p>
          <p>Республика Казахстан, г. Нур-Султан,
            проспект Мәңгілік Ел 11, здание
            «Эталонный центр»</p>

        </div>

      </div>
    </div>

  )
}

Footer.propTypes = {
  classes: PropTypes.object
}

export default enhance(Footer)
