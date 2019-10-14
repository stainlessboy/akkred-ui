/* eslint-disable func-style */
import React from 'react'
import ResumeDetailsContainer from './StaticPagesContainer'
import Layout from 'components/Layout'

async function action (props) {
  const {store, isServer, params} = props

  const url = params.url
  return {
    chunks: ['resume-details'],
    title: 'Resume details',
    component: (
      <Layout store={store} {...props}>
        <ResumeDetailsContainer url={url}/>
      </Layout>
    )
  }
}

export default action
