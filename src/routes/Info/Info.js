import React from 'react'
import {compose} from 'recompose'
import injectSheet from 'react-jss'

import Row from 'antd/lib/row'

import Col from 'antd/lib/col'

const styles = {
  blueP: {
    width: '100%',
    height: '326px',
    background: '#3b5da7',
    opacity: 0.78,
    alignContent: 'center'

  },
  textP: {
    fontFamily: '“Futura Md BT”',
    fontWeight: 'bold',
    fontSize: '50px',
    textAlign: 'left',
    color: '#fff',
    paddingTop: '100px',
    paddingLeft: '100px'
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
    height: '397px',
    borderRadius: '4px',
    background: '#fff',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.16)'

  },
  RightSide: {
    width: '100%',
    height: '397px',
    borderRadius: '4px',
    background: '#fff',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.16)'
  },
  liStyle: {
    width: '300px',
    fontFamily: 'Futura Md BT',
    fontWeight: 'normal',
    fontSize: '16px',
    textAlign: 'left',
    color: '#707070',
    borderBottom: '0.5px solid #d1d1d1',
    padding: '10px'

  }

}
const enhance = compose(
  injectSheet(styles)
)
const Info = props => {
  const {classes} = props
  return (
    <div>
      <div className={classes.blueP}>
        <div className={classes.textP}> Компания</div>
      </div>
      <Row>
        <Col style={{
          padding: '50px 20px 100px 50px'
        }} xs={6}>
          <div className={classes.LeftSide}>
            <ul style={{
              listStyle: 'none',
              padding: '10px'
            }}>

              <li className={classes.liStyle}>Компания</li>

              <li className={classes.liStyle} style={{
                background: '#3b5da7',
                color: '#fff',
                fontFamily: 'Helvetica Neue',
                fontWeight: 'normal',
                fontSize: '16px',
                borderRadius: '4px',
                opacity: 0.78

              }}>Анкета для оценки услуг НЦА
              </li>
              <li className={classes.liStyle}>Исполнение Плана совместных мероприятий</li>
              <li className={classes.liStyle}>Общая информация</li>
              <li className={classes.liStyle}>Перечень приостановленных субъектов
                аккредитации
              </li>
              <li className={classes.liStyle}>Рассмотрение жалоб</li>
              <li className={classes.liStyle}>Рассмотрение жалоб</li>
            </ul>
          </div>
        </Col>
        <Col style={{
          padding: '50px 50px 100px 30px'
        }} xs={18}>
          <div className={classes.RightSide}>Panel</div>
        </Col>
      </Row>

    </div>
  )
}

export default enhance(Info)
