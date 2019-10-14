/* eslint-disable func-style */
import React from 'react'
import NewsDetailsContainer from './NewsDetailsContainer'
import Layout from 'components/Layout'

import loToInteger from 'lodash/toInteger'

function action(props) {
  const {store, isServer, params} = props
  const id = loToInteger(params.id)
  return {
    title: 'Задания',
    component: (
      <Layout {...props} >
        <NewsDetailsContainer id={id} />
      </Layout>
    )
  }
}

export default action
