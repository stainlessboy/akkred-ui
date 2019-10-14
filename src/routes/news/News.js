import React from 'react'
import {compose} from 'recompose'
import {CardList, NEWS} from 'components/Cards'
import injectSheet from 'react-jss'
import Image from 'images/Slider.jpg'
import Row from 'antd/lib/row'
import Col from 'antd/lib/col'
import propTypes from 'prop-types'
import Pagination from 'components/Pagination'
import {fallbacksStyle} from '../../constants/design'
import {Breadcrumb} from 'antd'

const styles = {
  blueP: {
    width: '100%',
    alignContent: 'center',

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
  newsWrapper: {
    ...fallbacksStyle('display', 'flex')
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
    background: '#0b0c66',
    bottom: '0px'
  },
  textMain: {
    marginLeft: '60px',
    textAlign: 'left',
    marginTop: '30px',
    color: '#3d3daf',
    fontFamily: '"Montserrat-SemiBold", sans-serif',
    fontSize: '30px',
  },

}
const enhance = compose(
  injectSheet(styles)
)
const News = props => {
  const {classes, resultList, resultFilter} = props
  return (
    <div >
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
            </Breadcrumb></div>

        </div>
        <div className={classes.textMain}>Новости
        </div>
        <Row>
          <Col xs={18}>
            <div style={{
              borderRadius: '4px',
              paddingBottom: '20px',
              marginLeft: '30px',
              marginRight: '30px'
            }}>

              <CardList type={NEWS} span={6} data={resultList}/>
              <div>
                <Pagination filter={resultFilter}/>
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
              borderRadius: '4px',
              opacity: 0.78
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
              borderRadius: '4px',
              opacity: 0.78
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
          <div className={classes.textP2}> Новости
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
                }}></a>
              </Breadcrumb.Item>
            </Breadcrumb></div>

        </div>
        <Row>
          <Col xs={24}>
            <div style={{
              // Width: '100%',
              // BorderRadius: '4px',
              // Background: '#fff',
              // BoxShadow: '0px 0px 10px rgba(0, 0, 0, 0.16)',
              // Margin: '20px 50px 50px 50px',
              // MarginRight: '50px',
              paddingBottom: '20px',
              // MarginTop: '50px',
              // MarginLeft: '30px',
              // MarginRight: '30px'
            }}>

              <CardList type={NEWS} span={24} data={resultList}/>
              <div className={classes.pagination}>
                <Pagination filter={resultFilter}/>
              </div>
            </div>
          </Col>

        </Row>

      </div>

    </div>

  )
}
News.propTypes = {
  classes: propTypes.object.isRequired,
  resultFilter: propTypes.object.isRequired,
  resultList: propTypes.object.isRequired
}

export default enhance(News)
