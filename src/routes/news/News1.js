import React from 'react'
import {compose} from 'recompose'
import injectSheet from 'react-jss'
import Images from 'images/media.jpg'
import Image from 'images/Slider.jpg'
import {Row, Col} from 'antd'
import propTypes from 'prop-types'
import {fallbacksStyle} from '../../constants/design'

const styles = {
  blueP: {
    width: '100%',
    height: '326px',
    alignContent: 'center',
    position: 'relative'

  },
  textP: {
    fontFamily: '“Futura Md BT”',
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
    background: '#3b5da7',
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

  },
  newsWrapper: {
    ...fallbacksStyle('display', 'flex')
  },
  image: {
    width: '100%',
    height: '289px'
  },
  wrapper: {
    margin: '10px',
    padding: '0',
    textAlign: 'center'

  },
  imageText: {
    position: 'relative',
    width: '275px'
  }

}
const enhance = compose(
  injectSheet(styles)
)
const key = 4
const News = props => {
  const {classes, resultList} = props
  return (
    <div>
      <div className={classes.blueP}>
        <img style={{
          height: '326px',
          width: '100%'
        }} src={Image} alt=""/>
        <div className={classes.textP}> Новости</div>
      </div>
      <Row style={{
        paddingLeft: '100px',
        paddingRight: '100px'
      }} type="flex">

        <Col span={6}>
          <div className={classes.wrapper}>
            <div className={classes.imageText}>
              <img className={classes.image} src={Images} alt=""/>
              <div style={{
                position: 'absolute',
                bottom: '10px',
                width: '261px',
                height: '87px',
                borderRadius: '5px',
                background: '#fff',
                opacity: '0.91',
                margin: '0 10px 0px 8px'
              }}>
                Субъектам аккредитации
                и всем заинтересованным
                лицам
              </div>
            </div>

          </div>
        </Col>
        <Col span={6}>
          <div className={classes.wrapper}>
            <div className={classes.imageText}>
              <img className={classes.image} src={Images} alt=""/>
              <div style={{
                position: 'absolute',
                bottom: '10px',
                width: '261px',
                height: '87px',
                borderRadius: '5px',
                background: '#fff',
                opacity: '0.91',
                margin: '0 10px 0px 8px'
              }}>
                Субъектам аккредитации
                и всем заинтересованным
                лицам
              </div>
            </div>
          </div>
        </Col>
        <Col span={6}>
          <div className={classes.wrapper}>
            <div className={classes.imageText}>
              <img className={classes.image} src={Images} alt=""/>
              <div style={{
                position: 'absolute',
                bottom: '10px',
                width: '261px',
                height: '87px',
                borderRadius: '5px',
                background: '#fff',
                opacity: '0.91',
                margin: '0 10px 0px 8px'
              }}>
                Субъектам аккредитации
                и всем заинтересованным
                лицам
              </div>
            </div>
          </div>
        </Col>
        <Col span={6}>
          <div className={classes.wrapper}>
            <div className={classes.imageText}>
              <img className={classes.image} src={Images} alt=""/>
              <div style={{
                position: 'absolute',
                bottom: '10px',
                width: '261px',
                height: '87px',
                borderRadius: '5px',
                background: '#fff',
                opacity: '0.91',
                margin: '0 10px 0px 8px'
              }}>
                Субъектам аккредитации
                и всем заинтересованным
                лицам
              </div>
            </div>
          </div>
        </Col>
        <Col span={6}>
          <div className={classes.wrapper}>
            <div className={classes.imageText}>
              <img className={classes.image} src={Images} alt=""/>
              <div style={{
                position: 'absolute',
                bottom: '10px',
                width: '261px',
                height: '87px',
                borderRadius: '5px',
                background: '#fff',
                opacity: '0.91',
                margin: '0 10px 0px 8px'
              }}>
                Субъектам аккредитации
                и всем заинтересованным
                лицам
              </div>
            </div>
          </div>
        </Col>
        <Col span={6}>
          <div className={classes.wrapper}>
            <div className={classes.imageText}>
              <img className={classes.image} src={Images} alt=""/>
              <div style={{
                position: 'absolute',
                bottom: '10px',
                width: '261px',
                height: '87px',
                borderRadius: '5px',
                background: '#fff',
                opacity: '0.91',
                margin: '0 10px 0px 8px'
              }}>
                Субъектам аккредитации
                и всем заинтересованным
                лицам
              </div>
            </div>
          </div>
        </Col>
        <Col span={6}>
          <div className={classes.wrapper}>
            <div className={classes.imageText}>
              <img className={classes.image} src={Images} alt=""/>
              <div style={{
                position: 'absolute',
                bottom: '10px',
                width: '261px',
                height: '87px',
                borderRadius: '5px',
                background: '#fff',
                opacity: '0.91',
                margin: '0 10px 0px 8px'
              }}>
                Субъектам аккредитации
                и всем заинтересованным
                лицам
              </div>
            </div>
          </div>
        </Col>
        <Col span={6}>
          <div className={classes.wrapper}>
            <div className={classes.imageText}>
              <img className={classes.image} src={Images} alt=""/>
              <div style={{
                position: 'absolute',
                bottom: '10px',
                width: '261px',
                height: '87px',
                borderRadius: '5px',
                background: '#fff',
                opacity: '0.91',
                margin: '0 10px 0px 8px'
              }}>
                Субъектам аккредитации
                и всем заинтересованным
                лицам
              </div>
            </div>
          </div>
        </Col>
        <Col span={6}>
          <div className={classes.wrapper}>
            <div className={classes.imageText}>
              <img className={classes.image} src={Images} alt=""/>
              <div style={{
                position: 'absolute',
                bottom: '10px',
                width: '261px',
                height: '87px',
                borderRadius: '5px',
                background: '#fff',
                opacity: '0.91',
                margin: '0 10px 0px 8px'
              }}>
                Субъектам аккредитации
                и всем заинтересованным
                лицам
              </div>
            </div>
          </div>
        </Col>
        <Col span={6}>
          <div className={classes.wrapper}>
            <div className={classes.imageText}>
              <img className={classes.image} src={Images} alt=""/>
              <div style={{
                position: 'absolute',
                bottom: '10px',
                width: '261px',
                height: '87px',
                borderRadius: '5px',
                background: '#fff',
                opacity: '0.91',
                margin: '0 10px 0px 8px'
              }}>
                Субъектам аккредитации
                и всем заинтересованным
                лицам
              </div>
            </div>
          </div>
        </Col>
        <Col span={6}>
          <div className={classes.wrapper}>
            <div className={classes.imageText}>
              <img className={classes.image} src={Images} alt=""/>
              <div style={{
                position: 'absolute',
                bottom: '10px',
                width: '261px',
                height: '87px',
                borderRadius: '5px',
                background: '#fff',
                opacity: '0.91',
                margin: '0 10px 0px 8px'
              }}>
                Субъектам аккредитации
                и всем заинтересованным
                лицам
              </div>
            </div>
          </div>
        </Col>
        <Col span={6}>
          <div className={classes.wrapper}>
            <div className={classes.imageText}>
              <img className={classes.image} src={Images} alt=""/>
              <div style={{
                position: 'absolute',
                bottom: '10px',
                width: '261px',
                height: '87px',
                borderRadius: '5px',
                background: '#fff',
                opacity: '0.91',
                margin: '0 10px 0px 8px'
              }}>
                Субъектам аккредитации
                и всем заинтересованным
                лицам
              </div>
            </div>
          </div>
        </Col>
        <Col span={6}>
          <div className={classes.wrapper}>
            <div className={classes.imageText}>
              <img className={classes.image} src={Images} alt=""/>
              <div style={{
                position: 'absolute',
                bottom: '10px',
                width: '261px',
                height: '87px',
                borderRadius: '5px',
                background: '#fff',
                opacity: '0.91',
                margin: '0 10px 0px 8px'
              }}>
                Субъектам аккредитации
                и всем заинтересованным
                лицам
              </div>
            </div>
          </div>
        </Col>
        <Col span={6}>
          <div className={classes.wrapper}>
            <div className={classes.imageText}>
              <img className={classes.image} src={Images} alt=""/>
              <div style={{
                position: 'absolute',
                bottom: '10px',
                width: '261px',
                height: '87px',
                borderRadius: '5px',
                background: '#fff',
                opacity: '0.91',
                margin: '0 10px 0px 8px'
              }}>
                Субъектам аккредитации
                и всем заинтересованным
                лицам
              </div>
            </div>
          </div>
        </Col>
        <Col span={6}>
          <div className={classes.wrapper}>
            <div className={classes.imageText}>
              <img className={classes.image} src={Images} alt=""/>
              <div style={{
                position: 'absolute',
                bottom: '10px',
                width: '261px',
                height: '87px',
                borderRadius: '5px',
                background: '#fff',
                opacity: '0.91',
                margin: '0 10px 0px 8px'
              }}>
                Субъектам аккредитации
                и всем заинтересованным
                лицам
              </div>
            </div>
          </div>
        </Col>
        <Col span={6}>
          <div className={classes.wrapper}>
            <div className={classes.imageText}>
              <img className={classes.image} src={Images} alt=""/>
              <div style={{
                position: 'absolute',
                bottom: '10px',
                width: '261px',
                height: '87px',
                borderRadius: '5px',
                background: '#fff',
                opacity: '0.91',
                margin: '0 10px 0px 8px'
              }}>
                Субъектам аккредитации
                и всем заинтересованным
                лицам
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>

  )
}
News.propTypes = {
  classes: propTypes.object.isRequired,
  resultList: propTypes.object.isRequired,
}

export default enhance(News)
