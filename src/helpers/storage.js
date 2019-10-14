import {SEARCH_SETTINGS} from 'constants/storage'

export const getStorage = (local) => {
  return local ? localStorage : sessionStorage
}

export const setSearchSettings = (value, local = false) => {
  const storage = getStorage(local)
  storage.setItem(SEARCH_SETTINGS, JSON.stringify(value))
}
export const getSearchSettings = () => {
  const value = localStorage.getItem(SEARCH_SETTINGS) || sessionStorage.getItem(SEARCH_SETTINGS)
  return JSON.parse(value)
}

export const removeToken = () => {
  localStorage.removeItem(SEARCH_SETTINGS)
  sessionStorage.removeItem(SEARCH_SETTINGS)
}
