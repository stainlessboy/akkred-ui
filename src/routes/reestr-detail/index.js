/* eslint-disable func-style */
import React from 'react'
import ResumeDetailsContainer from './ReestrDetailsContainer'
import Layout from 'components/Layout'
import loToInteger from 'lodash/toInteger'
import {reestrFetchItem} from './actions'
import {getVacancyList} from 'routes/home/actions'

async function action (props) {
  const {store, isServer, params} = props
  const area = loToInteger(params.area)
  if (isServer) {
    await store.dispatch(reestrFetchItem(area))
  }
  return {
    chunks: ['resume-details'],
    title: 'Resume details',
    component: (
      <Layout store={store} {...props}>
        <ResumeDetailsContainer area={area}/>
      </Layout>
    )
  }
}

export default action
