/* eslint-disable func-style */
import React from 'react'
import ResumeCreateContainer from './CompanyContainer'
import Layout from 'components/Layout'
import {

} from './actions'

async function action (props) {
  const {store, isServer, params} = props
  if (isServer) {
    //        Await store.dispatch(getProfessionsList())
    //        Await store.dispatch(getRegionsList())
  }
  return {
    chunks: ['resume-create'],
    title: 'Создание resume',
    component: (
      <Layout {...props} store={store}>
        <ResumeCreateContainer {...params}/>
      </Layout>
    )
  }
}

export default action
