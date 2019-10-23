// export const API_HOST = 'localhost:8000'
// export const API_HOST = '217.29.126.137:8081'
export const API_HOST = 'test.akkred.uz:8081'
export const API_ROOT = 'api'
export const API_VERSION = 'v1'
export const API_PROTOCOL = 'http'
export const API_URL = `${API_PROTOCOL}://${API_HOST}`

export const CHECK_TOKEN = '/main/check_token/'

const MAIN = 'main'
const BLOG = 'blog'
const EMPLOYER = 'employer'
const APPLICANT = 'applicant'

export const EMPLOYER_REGISTER = `${EMPLOYER}/employer/`
export const APPLICANT_REGISTER = `${APPLICANT}/applicant/`

export const SEARCH_LIST = `${MAIN}/search/`
export const SEARCH_HISTORY_LIST = `${MAIN}/search_history/`

// Export const NEWS_LIST = `/${MAIN}/news/`
export const SPECIALITY_LIST = `/${MAIN}/speciality/`
export const POSITION_LIST = `${MAIN}/position/`
export const REGIONS_LIST = `${MAIN}/region/`
export const TYPE_ORGAN_LIST = `${MAIN}/type-organ/`
export const COUNTRY_FLAG_LIST = `${MAIN}/country/`
export const COMPANY_LIST = `${MAIN}/company/`
export const CURRENCY_LIST = `${MAIN}/currency/`
export const INSTITUTION_LIST = `${MAIN}/institution/`
export const DRIVER_LICENSE_LIST = `${MAIN}/driver_licence/`
export const POSTS_LIST = `${BLOG}/post/`

export const EMPLOYER_LIST = `${EMPLOYER}/employer/`
export const EMPLOYER_ITEM = `${EMPLOYER}/employer/%d`

export const APPLICANT_LIST = `${APPLICANT}/applicant/`
export const APPLICANT_ITEM = `${APPLICANT}/applicant/%d/`
export const APPLICANT_FAV_VACANCY_LIST = `${APPLICANT}/applicant/favorites/`

export const ARTICLE = `${MAIN}/article`
export const ARTICLE_LIST = `${ARTICLE}/`
export const ARTICLE_CREATE = `${ARTICLE}/`
export const ARTICLE_ITEM = `${ARTICLE}/%d/`

export const RESUME = `${APPLICANT}/resume`
export const RESUME_LIST = `${RESUME}/`
export const RESUME_CREATE = `${RESUME}/`
export const RESUME_ITEM = `${RESUME}/%d/`
export const RESUME_UPDATE = `${RESUME}/%d/`
export const RESUME_ITEM_ACTIVATE = `${RESUME}/%d/activate/`
export const RESUME_ITEM_UPDATE_DATE = `${RESUME}/%d/refresh/`
export const RESUME_ITEM_DEACTIVATE = `${RESUME}/%d/deactivate/`
export const RESUME_ACTIVE_LIST = `${RESUME}/active_resumes/`
export const RESUME_ACTIVE_ITEM = `${RESUME_ACTIVE_LIST}%d/`
export const RESUME_ITEM_GUESTS = `${RESUME}/%d/guests/`
export const RESUME_GUESTS = `${RESUME}/guests/`

export const VACANCY = `${EMPLOYER}/vacancy`
export const VACANCY_APPROVED = `${VACANCY}/approved`
export const VACANCY_LIST = `${VACANCY}/approved/`
export const VACANCY_ITEM = `${VACANCY_APPROVED}/%d/`
export const VACANCY_APPEALED_LIST = `${MAIN}/vacancy_appeal/`

export const LOGIN = `${MAIN}/login/`
export const LOGOUT = `${MAIN}/logout/`
export const FILE_UPLOAD = '/main/file/'

const PERFORMER = `${MAIN}/executor`
export const PERFORMER_LIST = `/${PERFORMER}/`
export const PERFORMER_CREATE = `/${PERFORMER}/`
export const PERFORMER_ITEM = `/${PERFORMER}/%d/`

const NEWS = `${MAIN}/news`
export const NEWS_LIST = `/${NEWS}/`
export const NEWS_CREATE = `/${NEWS}/`
export const NEWS_ITEM = `/${NEWS}/%d/`

const CLIENT = `${MAIN}/client`
export const CLIENT_LIST = `/${CLIENT}/`
export const CLIENT_CREATE = `/${CLIENT}/`
export const CLIENT_ITEM = `/${CLIENT}/%d/`

const TASK = `${MAIN}/task`
export const TASK_LIST = `/${TASK}/`
export const TASK_CREATE = `/${TASK}/`
export const TASK_ITEM = `/${TASK}/%d/`

const DOCUMENTS = `${MAIN}/documents`
export const DOCUMENTS_LIST = `/${DOCUMENTS}/`
export const DOCUMENTS_CREATE = `/${DOCUMENTS}/`
export const DOCUMENTS_ITEM = `/${DOCUMENTS}/%d/`

const REESTR = `${MAIN}/registries`
export const REESTR_LIST = `/${REESTR}/`
export const REESTR_ITEM = `/${REESTR}/%d/`

const SLIDER = `${MAIN}/sliders`
export const SLIDER_LIST = `/${SLIDER}/`

const CATEGORY = `${MAIN}/doc-parent`
export const CATEGORY_LIST = `/${CATEGORY}/`
export const CATEGORY_CREATE = `/${CATEGORY}/`
export const CATEGORY_ITEM = `/${CATEGORY}/%d/`

export const SYSTEM_PAGES_ITEM = 'main/static-pages/%s/'

export const FEEDBACK_CREATE = `${MAIN}/feedback/`

const RUKOVODITELI = `${MAIN}/employees`
export const RUKOVODITELI_LIST = `/${RUKOVODITELI}/`
export const RUKOVODITELI_CREATE = `/${RUKOVODITELI}/`
export const RUKOVODITELI_ITEM = `/${RUKOVODITELI}/%d/`
