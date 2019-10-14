/* eslint-disable func-style */
import React from 'react'
import ResumeDetailsContainer from './TaskDetailsContainer'
import Layout from 'components/Layout'
import loToInteger from 'lodash/toInteger'
import {taskFetchItem} from './actions'
import {getVacancyList} from 'routes/home/actions'

async function action (props) {
  const {store, isServer, params} = props
  const id = loToInteger(params.id)
  if (isServer) {
    await store.dispatch(taskFetchItem(id))
  }
  return {
    chunks: ['resume-details'],
    title: 'Resume details',
    component: (
      <Layout store={store} {...props}>
        <ResumeDetailsContainer id={id}/>
      </Layout>
    )
  }
}

export default action
