/* eslint-disable func-style */
import React from 'react'
import ArticleDetailContainer from './ArticleDetailContainer'
import Layout from 'components/Layout'
import loToInteger from 'lodash/toInteger'

async function action (props) {
  const {store, isServer, params} = props
  return {
    chunks: ['article-details'],
    title: 'Статя',
    component: (
      <Layout {...props} store={store}>
        <ArticleDetailContainer id={loToInteger(params.id)}/>
      </Layout>
    )
  }
}

export default action
