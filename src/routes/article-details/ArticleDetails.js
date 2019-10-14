import fpGet from 'lodash/fp/get'
import fpMap from 'lodash/fp/map'
import React from 'react'
import {compose, withState} from 'recompose'
import injectSheet from 'react-jss'
import dateFormat from 'helpers/dateFormat'
import Container from 'components/Container'
import Title from 'components/Title'
import Breadcrumb from 'components/Breadcrumb'
import ArticleCard from 'routes/articles/ArticleCard'
import Col from 'antd/lib/col'
import Row from 'antd/lib/row'
import PropTypes from 'prop-types'
import {DATE_COLOR} from '../../constants/styles'

const styles = {
  wrapper: {
    width: '862px',
    padding: '53px 0 56px 0',
    margin: '0 auto'
  },
  header: {
    textAlign: 'center',
    marginBottom: '23px'
  },
  date: {
    marginTop: '14px',
    color: DATE_COLOR
  },
  content: {
    padding: '0 42px',
    lineHeight: '1.67',
    fontSize: '15px',
    color: '#000',
    '& img': {
      width: '100%',
      margin: '5px 0'
    }
  }
}

const enhance = compose(
  withState('openDialog', 'setOpenDialog', false),
  injectSheet(styles)
)

const ArticleDetails = props => {
  const {
    classes,
    articleList,
    articleDetail: {data, loading}
  } = props
  const title = fpGet('title', data)
  const createdDate = dateFormat(fpGet('createdDate', data))
  const content = fpGet('content', data)
  const list = fpGet('data', articleList)

  return (
    <Container>
      <div className={classes.wrapper}>
        <div className={classes.header}>
          <Breadcrumb/>
          <Title margin={0} text={title}/>
          <div className={classes.date}>Опубликовано {createdDate}</div>
        </div>
        <div className={classes.content}>
          <div
            style={{marginBottom: '30px'}}
            dangerouslySetInnerHTML={{__html: content}}/>
        </div>
        <Title margin={'0 0 22px 0'} text={'Похожие статьи'}/>
        <Row gutter={22}>
          {fpMap(item => (
            <Col span={8}>
              <ArticleCard smooth={true} id={item.id} data={item}/>
            </Col>
          ), list)}
        </Row>
      </div>
    </Container>
  )
}

ArticleDetails.propTypes = {
  classes: PropTypes.object.isRequired,
  articleDetail: PropTypes.object.isRequired,
  articleList: PropTypes.object.isRequired,
  id: PropTypes.number
}

export default enhance(ArticleDetails)
