import React from 'react'
import Layout from '../../components/Layout'
import NotFound from './NotFound'

const title = 'Page Not Found'

const action = (props) => {
  return {
    chunks: ['not-found'],
    title,
    component: (
      <Layout {...props}>
        <NotFound title={title} />
      </Layout>
    ),
    status: 404
  }
}

export default action
