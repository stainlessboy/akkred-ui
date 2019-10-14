/* eslint-disable global-require */
/* eslint-disable capitalized-comments */
/* eslint-disable no-inline-comments */
/* eslint-disable no-undef */

// The top-level (parent) route
import {
  TASK_URL,
  ARTICLES_URL,
  CREATE_URL,
  DETAIL_URL,
  PROFILE_URL,
  NEWS_URL,
  NEWS_ITEM_URL,
  RUKOVODITELI_URL,
  RUKOVODITELI_ITEM,
  REESTR_URL
} from 'constants/routes'

import * as actionTypes from 'constants/actionTypes'

const setLoader = (loading) => ({
  type: actionTypes.ASYNC_LOADING,
  data: '',
  loading: loading
})
const routes = {
  path: '',

  // Keep in mind, routes are evaluated in order
  children: [
    // {
    //   path: '',
    //   action: require('./home').default
    // },
    {
      path: '/',
      children: [
        {
          path: '',
          action: require('./home').default
        },
        {
          path: '/pages/:url',
          action: require('./static-pages/index').default
        }
      ]

    },
    // {
    //   path: '/company',
    //   action: require('./company').default
    // },
    // {
    //   path: '/info',
    //   action: require('./info').default
    // },
    {
      path: NEWS_URL,
      action: require('./news').default
    },
    {
      path: '/documents',
      action: require('./documents').default
    },
    {
      path: RUKOVODITELI_URL,
      action: require('./employer').default
    },
    {
      path: '/rukovod/:id',
      action: require('./employer-details').default
    },
    {
      path: '/reestr',
      action: require('./reestr').default
    },
    {
      path: '/reestr/:area',
      action: require('./reestr-detail').default
    },
    {
      path: '/:url',
      action: require('./system-pages/index').default
    },
    // {
    //   path: REESTR_URL,
    //   children: [
    //     {
    //       path: CREATE_URL,
    //       load: () => import(/* webpackChunkName: 'resume-create' */ './reestr')
    //     },
    //     {
    //       path: DETAIL_URL,
    //       load: () => import(/* webpackChunkName: 'resume-details' */ './reestr-detail')
    //     }
    //   ]
    // },
    {
      path: PROFILE_URL,
      load: () => import(/* webpackChunkName: 'setting' */ './setting')
    },
    // {
    //   path: NEWS_URL,
    //   children: [
    //     {
    //       path: CREATE_URL,
    //       load: () => import(/* webpackChunkName: 'resume-create' */ './task-create')
    //     },
    //     {
    //       path: NEWS_ITEM,
    //       load: () => import(/* webpackChunkName: 'resume-details' */ './news-details')
    //     }
    //   ]
    // },
    {
      path: NEWS_URL,
      children: [
        {
          path: CREATE_URL,
          load: () => import(/* webpackChunkName: 'resume-create' */ './task-create')
        },
        {
          path: DETAIL_URL,
          load: () => import(/* webpackChunkName: 'resume-details' */ './news-details')
        }
      ]
    },
    {
      path: ARTICLES_URL,
      children: [
        {
          path: '',
          load: () => import(/* webpackChunkName: 'articles' */ './articles')
        },
        {
          path: '/:id',
          load: () => import(/* webpackChunkName: 'article-details' */ './article-details')
        }

      ]
    },
    {
      path: '/login',
      children: [
        {
          path: '/client',
          load: () => import(/* webpackChunkName: 'login' */ './login')
        },
        {
          path: '/executor',
          load: () => import(/* webpackChunkName: 'login' */ './login')
        }
      ]
    },
    // Wildcard routes, e.g. { path: '(.*)', ... } (must go last)
    {
      path: '(.*)',
      load: () => import(/* webpackChunkName: 'not-found' */ './not-found')
    }
  ],

  async action ({next, ...props}) {
    // SET ASYNC_LOADER TRUE
    props.store.dispatch(setLoader(true))

    // Execute each child route until one of them return the result
    const route = await next()

    // SET ASYNC_LOADER FALSE
    props.store.dispatch(setLoader(false))

    // Provide default values for title, description etc.
    route.title = `${route.title || 'Untitled Page'} - Test.uz`
    route.description = route.description || ''

    return route
  }
}

// The error page is available by permanent url for development mode
if (__DEV__) {
  routes.children.unshift({
    path: '/error',
    action: require('./error').default
  })
}

export default routes
