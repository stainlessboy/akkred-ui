import React from 'react'
import {compose, mapPropsStream} from 'recompose'
import {connect} from 'react-redux'
import injectSheet from 'react-jss'
import Container from 'components/Container/Container'
import fpGet from 'lodash/fp/get'
import {getData} from './actions'
import Icon from 'antd/lib/icon'
import {SYSTEM_PAGES} from 'constants/actionTypes'

const enhance = compose(
  connect((state) => ({
    data: fpGet(['pages', 'data'], state),
    loading: fpGet(['pages', 'loading'], state),
    lang: fpGet(['lang', 'data'], state) || 'ru'
  }),
  {getData}),
  mapPropsStream(props$ => {
    props$
      .distinctUntilChanged(null, fpGet('url'))
      .subscribe(props => props.getData(props.url, SYSTEM_PAGES))
    return props$
  }),
  injectSheet({
    loader: {
      height: '400px',
      fontSize: '70px',
      textAlign: 'center',
      paddingTop: '100px'
    }
  }),
)

const SystemPages = enhance(({classes, data, pages, lang, loading, ...props}) => {
  const body = fpGet(['translations', lang, 'body'], data)

  return (
    <Container>
      {loading
        ? <div className={classes.loader} ><Icon type="loading"/></div>
        : <div dangerouslySetInnerHTML={{__html: body}}></div>}
    </Container>
  )
})

export default SystemPages
