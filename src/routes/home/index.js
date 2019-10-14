/* eslint-disable func-style */
import React from 'react'
import HomeContainer from './HomeContainer'
import Layout from 'components/Layout'
import {
  getProfessionsList
} from './actions'

async function action (props) {
  const {store, isServer} = props
  if (isServer) {
//    await store.dispatch(getProfessionsList())
  }
  return {
    title: 'Главная',
    component: (
      <Layout {...props} home={true}>
        <HomeContainer/>
      </Layout>
    )
  }
}

export default action
