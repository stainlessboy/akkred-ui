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

import {crossBrowserify, fallbacksStyle} from '../../constants/design'
import sprintf from 'sprintf'
import {NEWS_ITEM_URL} from '../../constants/routes'
import {Breadcrumb} from 'antd'
import TW from '../../components/TW'
import {getTranslate} from '../../helpers/translate'
const styles = {
  blueP: {
    width: '100%',
    alignContent: 'center',
    paddingBottom: '100px'
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

  },
  textStyle: {
    fontFamily: 'Futura Md BT',
    fontWeight: '500',
    fontSize: '16px',
    textAlign: 'left',
    color: '#000',
    margin: '20px 10px'

  },
  galleryStyle: {
    display: 'flex',
    margin: '20px 10px'
  }

}
const enhance = compose(
  injectSheet(styles)
)
const Company = props => {
  const {classes, reestrDetail} = props
  console.warn(reestrDetail,'reestrDetail')
  const data = prop('data', reestrDetail)
  const title = prop('title', data)
  const number = prop('number', data)
  const fullName = prop('fullName', data)
  const typeOrgan = prop('typeOrgan', data)
  const inn = prop('inn', data)
  const phone = prop('phone', data)
  const address = prop('address', data)
  const region = prop('region', data)
  const designationOfTheFundamentalStandard = prop('designationOfTheFundamentalStandard', data)
  const formOwnership = prop('formOwnership', data)
  const accreditationDate = dateFormat(prop('accreditationDate', data), true)
  const accreditationDuration = dateFormat(prop('accreditationDuration', data), true)
  const statusDate = dateFormat(prop('statusDate', data), true)
  // Const img = pathOr(Image, ['gallery', 'file'], data)
  return (
    <div>
      {/*<div className={classes.blueP}>*/}

      {/*  <div className={classes.textP}>*/}
      {/*    <Breadcrumb style={{*/}
      {/*      color: '#989aae'*/}
      {/*    }}>*/}
      {/*      <Breadcrumb.Item >Информация</Breadcrumb.Item>*/}
      {/*      <Breadcrumb.Item>*/}
      {/*        <a href="" style={{*/}
      {/*          color: '#989aae'*/}
      {/*        }}>Реестры</a>*/}
      {/*      </Breadcrumb.Item>*/}
      {/*      <Breadcrumb.Item>*/}
      {/*        <a href="" style={{*/}
      {/*          color: '#989aae'*/}
      {/*        }}>{title}</a>*/}
      {/*      </Breadcrumb.Item>*/}
      {/*    </Breadcrumb></div>*/}

      {/*</div>*/}
      <div style={{
        padding: '100px 50px 100px 30px',

      }} >

        <div >
          <div style={{
            width: '250px',
            height: '60px',
            borderRadius: '5px',
            background: '#5589ff',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.16)',
            fontWeight: '500',
            fontSize: '18px',
            textAlign: 'center',
            color: '#fff',
            paddingTop: '15px',
            margin: '10px 10px 10px 0px'
          }}><Link style={{
              color: '#fff'
            }} to={'/reestr'}>Назад к списку</Link> </div>

        </div>

        <div style={{
          fontSize: '18px'
        }} className={classes.RightSide}>
          <div><strong>Номер государственного реестра:</strong> {number}</div>
          <div><strong>Наименование юридического лица ООС или МС:</strong> {title}</div>
          <div><strong>Срок действия свидетельства об аккредитации</strong> {accreditationDuration}</div>
          <div><strong>Юридический и фактический адрес:</strong> {address}</div>
          <div><strong>ИНН юридического лица:</strong> {inn}</div>
          <div><strong>Вид ООС или МС:</strong> INN</div>
          <div><strong>Ф.И.О. руководителя:</strong> {fullName}</div>
          <div><strong>Телефон, e-mail:</strong> {phone}</div>
          <div><strong>Регион:</strong> {region}</div>
          <div><strong>Дата аккредитации: </strong> {accreditationDate}</div>
          <div><strong>Обозначение НД регламентирующих требования к оценке и компетентности ООС или МС: </strong> {designationOfTheFundamentalStandard}</div>
          <div><strong>Форма собственности </strong> {formOwnership}</div>
          <div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default enhance(Company)
