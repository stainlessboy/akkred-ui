/* eslint-disable func-style */
import React from 'react'
import ArticlesContainer from './ArticlesContainer'
import Layout from 'components/Layout'
import {
  getProfessionsList,
  getRegionsList
} from './actions'

async function action (props) {
  const {store, isServer} = props
  if (isServer) {
    //        Await store.dispatch(getProfessionsList())
    //        Await store.dispatch(getRegionsList())
  }
  return {
    chunks: ['articles'],
    title: 'Главная',
    component: (
      <Layout {...props} store={store}>
        <ArticlesContainer/>
      </Layout>
    )
  }
}

export default action
