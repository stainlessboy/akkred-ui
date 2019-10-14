import loMap from 'lodash/map'
import fpGet from 'lodash/fp/get'
import React from 'react'
import {compose, withState} from 'recompose'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'
import Title from 'components/Title'
import Container from 'components/Container'
import Pagination from 'components/Pagination'
import Breadcrumb from 'components/Breadcrumb'
import ArticleCard from './ArticleCard'
import styles from './styles'
import Col from 'antd/lib/col'
import Row from 'antd/lib/row'
import Image2 from 'images/news2.jpg'
import Image3 from 'images/news3.jpg'
import Image4 from 'images/news4.jpg'

export const data = [
  {
    title: 'Title',
    image: null,
    text: 'Non omnis. Nullam adipisicing. Earum nisi quisque praesent nonummy. Beatae sollicitudin eiusmod impedit laborum est accumsan, proin officiis, facilisi anim.'
  },
  {
    title: 'Необходимые навыки на рабочем месте',
    image: Image2,
    link: true,
    text: 'Lacus earum ullam magnam veniam malesuada risus nullam, sagittis nam, tellus quisquam sequi nostrud ipsam accumsan, unde incididunt? Alias mi.'
  },
  {
    title: 'Title 3',
    text: 'Repellendus molestiae nemo saepe ducimus, ea a ullamco, eros at, imperdiet atque saepe dictumst numquam occaecati, fames potenti facilisi quam.'
  },
  {
    title: 'Необходимые навыки на рабочем месте',
    image: Image4,
    text: 'Faucibus alias odio hic potenti mauris perspiciatis aliqua aut vero recusandae aenean sed, pariatur, nascetur, urna lorem, quos aperiam, dolores.'
  },
  {
    title: 'Title 2',
    image: Image2,
    link: true,
    text: 'Lacus earum ullam magnam veniam malesuada risus nullam, sagittis nam, tellus quisquam sequi nostrud ipsam accumsan, unde incididunt? Alias mi.'
  },
  {
    title: 'Title 3',
    image: Image3,
    text: 'Repellendus molestiae nemo saepe ducimus, ea a ullamco, eros at, imperdiet atque saepe dictumst numquam occaecati, fames potenti facilisi quam.'
  },
  {
    title: 'Title 2',
    image: Image2,
    link: true,
    text: 'Lacus earum ullam magnam veniam malesuada risus nullam, sagittis nam, tellus quisquam sequi nostrud ipsam accumsan, unde incididunt? Alias mi.'
  },
  {
    title: 'Title 4',
    image: Image4,
    text: 'Faucibus alias odio hic potenti mauris perspiciatis aliqua aut vero recusandae aenean sed, pariatur, nascetur, urna lorem, quos aperiam, dolores.'
  },
  {
    title: 'Title',
    image: null,
    text: 'Non omnis. Nullam adipisicing. Earum nisi quisque praesent nonummy. Beatae sollicitudin eiusmod impedit laborum est accumsan, proin officiis, facilisi anim.'
  },
  {
    title: 'Необходимые навыки на рабочем месте',
    image: Image2,
    link: true,
    text: 'Lacus earum ullam magnam veniam malesuada risus nullam, sagittis nam, tellus quisquam sequi nostrud ipsam accumsan, unde incididunt? Alias mi.'
  },
  {
    title: 'Title 3',
    text: 'Repellendus molestiae nemo saepe ducimus, ea a ullamco, eros at, imperdiet atque saepe dictumst numquam occaecati, fames potenti facilisi quam.'
  },
  {
    title: 'Необходимые навыки на рабочем месте',
    image: Image4,
    text: 'Faucibus alias odio hic potenti mauris perspiciatis aliqua aut vero recusandae aenean sed, pariatur, nascetur, urna lorem, quos aperiam, dolores.'
  },
  {
    title: 'Title 2',
    image: Image2,
    link: true,
    text: 'Lacus earum ullam magnam veniam malesuada risus nullam, sagittis nam, tellus quisquam sequi nostrud ipsam accumsan, unde incididunt? Alias mi.'
  },
  {
    title: 'Title 3',
    image: Image3,
    text: 'Repellendus molestiae nemo saepe ducimus, ea a ullamco, eros at, imperdiet atque saepe dictumst numquam occaecati, fames potenti facilisi quam.'
  },
  {
    title: 'Title 2',
    link: true,
    text: 'Lacus earum ullam magnam veniam malesuada risus nullam, sagittis nam, tellus quisquam sequi nostrud ipsam accumsan, unde incididunt? Alias mi.'
  },
  {
    title: 'Title 4',
    image: Image4,
    text: 'Faucibus alias odio hic potenti mauris perspiciatis aliqua aut vero recusandae aenean sed, pariatur, nascetur, urna lorem, quos aperiam, dolores.'
  }
]

const enhance = compose(
  withState('openDialog', 'setOpenDialog', false),
  injectSheet(styles)
)

const Articles = props => {
  const {classes, articleFilter, articleList} = props
  const list = fpGet('data', articleList)
  const loading = fpGet('loading', articleList)
  return (
    <div className={classes.wrapper}>
      <Container>
        <div className={classes.pageTitle}>
          <Breadcrumb/>
          <Title text={'Необходимые навыки на рабочем месте'}/>
        </div>
        <Row gutter={22} style={{marginBottom: '20px'}}>
          {loMap(list, (item) => {
            return (
              <Col key={item.id} span={6}>
                <ArticleCard id={item.id} data={item}/>
              </Col>
            )
          })}
        </Row>
        <Pagination filter={articleFilter}/>
      </Container>
    </div>
  )
}

Articles.propTypes = {
  classes: PropTypes.object.isRequired,
  articleFilter: PropTypes.object.isRequired,
  articleList: PropTypes.object.isRequired
}

export default enhance(Articles)
