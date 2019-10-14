/* eslint-disable func-style */
/* eslint-disable require-await */
import React from 'react'
import SystemPages from './SystemPages'
import {getData} from './actions'
import {SYSTEM_PAGES} from 'constants/actionTypes'

// Import Layout, {menuListFetch} from 'components/Layout/Layout'

const titles = {
  clients: 'Покупателям',
  partners: 'Партнерам',
  contacts: 'Контакты',
  about: 'О нас',
  terms: 'Условия и положения',
  protection: 'Защита проекта',
  'public-offer': 'Публичная оферта',
  faq: 'FAQ'
}

async function action ({axios, store, isServer, params}) {
  if (isServer) {
  //   Await store.dispatch(menuListFetch())
    await store.dispatch(getData(params.url, SYSTEM_PAGES))
  }
  const url = params.url
  return {
    title: titles[url],
    component: (
      <Layout store={store}>
        <SystemPages url={url}/>
      </Layout>
    )
  }
}

export default action
