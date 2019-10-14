import React from 'react'
import PropTypes from 'prop-types'
import Row from 'antd/lib/row'
import Col from 'antd/lib/col'
import fp from 'lodash/fp'
import ApplicantCard from './ApplicantCard'
import MasterCard from './MasterCard'
import DocumentCard from './DocumentCard'
import MasterCategoryCard from './MasterCategoryCard'
import TaskCard from './TaskCard'
import NewsCard from './NewsCard'
import EmployerCard from './EmployerCard'
import CreditCard from './CreditCard'
import MoreButton from 'components/MoreButton'
import {APP, MASTER, CATEGORY, CREDIT, NEWS, TASK, EMPLOYER, DOCUMENT} from './index'
import CardLoadingList from './CardLoadingList'

const CardList = props => {
  const {
    type,
    data,
    gutter,
    span,
    marginBottom,
    onMore,
    small,
    filter,
    smooth,
    responsive
  } = props
  const page = filter && filter.getParam('page')
  const hasMore = filter && filter.hasMoreItems()
  const isApp = type === APP
  const isMaster = type === MASTER
  const isCat = type === CATEGORY
  const isCredit = type === CREDIT
  const isNews = type === NEWS
  const isTask = type === TASK
  const isDocument = type === DOCUMENT
  const isEmployer = type === EMPLOYER

  return (
    <React.Fragment>
      {((page && onMore) || !data.loading) && (
        <Row type={'flex'}
          style={{
            padding: '20px'
          }} gutter={gutter}>
          {fp.map((item, index) => {
            const id = fp.get('id', item)
            return (
              <Col {...responsive} key={id} span={span} style={{marginBottom}}>
                {isApp && (
                  <ApplicantCard
                    marginBottom={true}
                    smooth={smooth}
                    small={small}
                    data={item}/>
                )}
                {isDocument && (
                  <DocumentCard
                    marginBottom={true}
                    smooth={smooth}
                    small={small}
                    data={item}/>
                )}
                {isTask && (
                  <TaskCard
                    marginBottom={true}
                    smooth={smooth}
                    small={small}
                    data={item}/>
                )}
                {isCat && (
                  <MasterCategoryCard
                    marginBottom={true}
                    smooth={smooth}
                    small={small}
                    data={item}/>
                )}
                {isCredit && (
                  <CreditCard
                    marginBottom={true}
                    smooth={smooth}
                    small={small}
                    data={item}/>
                )}
                {isNews && (
                  <NewsCard
                    marginBottom={true}
                    smooth={smooth}
                    small={small}
                    data={item}/>
                )}
                {isEmployer && (
                  <EmployerCard
                    marginBottom={true}
                    smooth={smooth}
                    small={small}
                    data={item}/>
                )}
                {isMaster && (
                  <MasterCard
                    smooth={smooth}
                    data={item}/>
                )}
              </Col>
            )
          }, fp.get('data', data))}
        </Row>
      )}
      <CardLoadingList type={type} items={10} loading={data.loading}/>
      {onMore && hasMore && <MoreButton onClick={onMore} text={'Ещё'}/>}
    </React.Fragment>

  )
}

CardList.defaultProps = {
  gutter: 0,
  span: 24,
  smooth: false
}
CardList.propTypes = {
  type: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  filter: PropTypes.object,
  marginBottom: PropTypes.string,
  span: PropTypes.number,
  small: PropTypes.bool,
  page: PropTypes.string,
  gutter: PropTypes.number,
  onMore: PropTypes.func,
  smooth: PropTypes.bool
}

export default CardList
