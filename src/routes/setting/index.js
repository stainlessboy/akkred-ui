/* eslint-disable func-style */
import React from 'react'
import SettingContainer from './SettingContainer'
import Layout from 'components/Layout'

async function action (props) {
  const {store, isServer} = props
  if (isServer) {
    //        Await store.dispatch(getProfessionsList())
    //        Await store.dispatch(getRegionsList())
  }
  return {
    title: 'Главная',
    component: (
      <Layout {...props} store={store}>
        <SettingContainer/>
      </Layout>
    )
  }
}

export default action
