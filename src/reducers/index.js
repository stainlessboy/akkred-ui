import {reducer as formReducer} from 'redux-form'
import {routerReducer} from 'redux-first-routing'
import {combineReducers} from 'redux'
import createThunkReducer from 'helpers/createThunkReducer'
import createStandardReducer from 'helpers/createStandardReducer'
import * as actionTypes from 'constants/actionTypes'

const rootReducer = combineReducers({
  form: formReducer,
  router: routerReducer,
  lang: createThunkReducer(actionTypes.LANGUAGE),
  feedback: createStandardReducer(actionTypes.FEEDBACK),
  feedbackCreate: createStandardReducer(actionTypes.FEEDBACK_CREATE),
  regions: createThunkReducer(actionTypes.REGIONS_LIST),
  asyncLoading: createStandardReducer(actionTypes.ASYNC_LOADING),
  login: createThunkReducer(actionTypes.LOGIN),
  pages: createThunkReducer(actionTypes.SYSTEM_PAGES),
  user: createThunkReducer(actionTypes.USER_INFO),
  register: createThunkReducer(actionTypes.REGISTER),
  searchHistory: createThunkReducer(actionTypes.SEARCH_HISTORY),
  searchList: createThunkReducer(actionTypes.SEARCH_LIST),
  common: combineReducers({
    driverLicence: createThunkReducer(actionTypes.DRIVER_LICENSE_LIST),
    currency: createThunkReducer(actionTypes.CURRENCY_LIST),
    newsList: createThunkReducer(actionTypes.NEWS_LIST),
    newsItem: createThunkReducer(actionTypes.NEWS_ITEM),
    category: createThunkReducer(actionTypes.CATEGORY_LIST),
    slider: createThunkReducer(actionTypes.SLIDER_LIST),
    type: createThunkReducer(actionTypes.TYPE_ORGAN_LIST)
  }),
  news: combineReducers({
    list: createThunkReducer(actionTypes.NEWS_LIST),
    item: createThunkReducer(actionTypes.NEWS_ITEM)
  }),
  rukovoditeli: combineReducers({
    list: createThunkReducer(actionTypes.RUKOVODITELI_LIST),
    item: createThunkReducer(actionTypes.RUKOVODITELI_ITEM)
  }),
  documents: combineReducers({
    list: createThunkReducer(actionTypes.DOCUMENTS_LIST),
    item: createThunkReducer(actionTypes.DOCUMENTS_ITEM)
  }),
  reestri: combineReducers({
    list: createThunkReducer(actionTypes.REESTR_LIST),
    item: createThunkReducer(actionTypes.REESTR_ITEM)
  }),
  client: combineReducers({
    list: createThunkReducer(actionTypes.CLIENT_LIST),
    item: createThunkReducer(actionTypes.CLIENT_ITEM)
  }),
  performer: combineReducers({
    list: createThunkReducer(actionTypes.PERFORMER_LIST),
    item: createThunkReducer(actionTypes.PERFORMER_ITEM),
    update: createThunkReducer(actionTypes.PERFORMER_UPDATE)
  }),
  task: combineReducers({
    list: createThunkReducer(actionTypes.TASK_LIST),
    item: createThunkReducer(actionTypes.TASK_ITEM),
    update: createThunkReducer(actionTypes.TASK_UPDATE),
    create: createThunkReducer(actionTypes.TASK_CREATE)
  }),
  vacancy: combineReducers({
    list: createThunkReducer(actionTypes.VACANCY_LIST),
    item: createThunkReducer(actionTypes.VACANCY_ITEM),
    popList: createThunkReducer(actionTypes.VACANCY_POPULAR_LIST),
    appealedList: createThunkReducer(actionTypes.VACANCY_APPEALED_LIST)
  }),
  resume: combineReducers({
    list: createThunkReducer(actionTypes.RESUME_LIST),
    create: createThunkReducer(actionTypes.RESUME_CREATE),
    update: createThunkReducer(actionTypes.RESUME_UPDATE),
    activeList: createThunkReducer(actionTypes.RESUME_ACTIVE_LIST),
    activeItem: createThunkReducer(actionTypes.RESUME_ACTIVE_ITEM),
    item: createThunkReducer(actionTypes.RESUME_ITEM),
    updateDate: createThunkReducer(actionTypes.RESUME_ITEM_UPDATE_DATE),
    activate: createThunkReducer(actionTypes.RESUME_ACTIVATE),
    deactivate: createThunkReducer(actionTypes.RESUME_DEACTIVATE),
    guests: createThunkReducer(actionTypes.RESUME_ITEM_GUESTS)

  })
})

export default rootReducer
