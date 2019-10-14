import React from 'react'
import injectSheet from 'react-jss'
import withHistory from 'helpers/withHistory'
import fpMap from 'lodash/fp/map'
import fpGet from 'lodash/fp/get'
import curryRight from 'lodash/curryRight'
import {compose, lifecycle} from 'recompose'
import PropTypes from 'prop-types'
import PaginationAnt from 'antd/lib/pagination/Pagination'
import {WHITE_COLOR, PRIMARY_COLOR} from 'constants/design'

const reff = React.createRef()
const withStyles = {
  showMore: {
    background: WHITE_COLOR,
    borderRadius: '4px',
    fontSize: '13px',
    lineHeight: '42px',
    height: '42px',
    marginTop: '5px',
    textAlign: 'center',
    '& .ant-pagination ': {lineHeight: '42px'},
    '& .ant-pagination-prev': {display: 'none'},
    '& .ant-pagination-next': {display: 'none'},
    '& .ant-pagination-item': {
      minWidth: '42px',
      height: '42px',
      '& span': {
        cursor: 'pointer',
        width: '42px',
        height: '42px',
        fontSize: '15px',
        fontFamily: '\'Montserrat\', sans-serif',
        lineHeight: '42px',
        borderRadius: '50%',
        display: 'inline-block'
      },
      margin: '0',
      border: 'none'
    },
    '& .ant-pagination-item-active': {
      '& span': {
        color: '#fff !important',
        // background: PRIMARY_COLOR
        background: '#3b5da7'
      }
    }
  }
}

const enhance = compose(
  injectSheet(withStyles),
  withHistory,
  lifecycle({
    componentDidMount() {
      const elems = fpGet('current.firstChild.childNodes', reff)
      fpMap(el => {
        el.title = ''
        return null
      }, elems)
    }
  })
)
const onChange = (item, {history, filter}) => {
  const params = filter.getParams({page: item})
  const query = filter.createURL(params)
  return history.push(query)
}

const itemRender = curryRight((current, type, originalElement, classes) => {
  if (type === 'prev') return null
  if (type === 'next') return null
  if (type === 'jump-next') return null
  if (type === 'jump-prev') return null
  if (type === 'page') {
    return <span>
      {current}
    </span>
  }
  return originalElement
})

const Pagination = enhance(props => {
  const {classes, filter} = props
  const itemCount = filter.getCounts()
  const page = filter.getCurrentPage()
  const pageSize = filter.getPageRange()
  return (
    <div className={classes.showMore} ref={reff}>
      <PaginationAnt
        pageSize={pageSize}
        current={page}
        total={itemCount}
        itemRender={itemRender(classes)}
        defaultCurrent={1}
        onChange={(v) => onChange(v, props)}
      />
    </div>
  )
})
Pagination.propTypes = {
  filter: PropTypes.object.isRequired
}

export default Pagination
