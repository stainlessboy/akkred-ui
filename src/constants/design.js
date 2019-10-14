import hexToRgb from '../helpers/hexToRgb'
import _ from 'lodash'

export const PRIMARY_COLOR = '#6770E6'
export const BLACK_COLOR = '#011933'
export const BACKGROUND_COLOR = '#F7f7f7'
export const ZERO = 0
export const WHITE_COLOR = '#fff'

export const ANCHOR_DISABLED = {
  color: BLACK_COLOR,
  '&:focus': {
    color: 'unset'
  },
  '&:hover': {
    color: 'unset'
  }
}

export const CONTAINER = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 15px'
}

export const fallbacksStyle = (property, value) => {
  return {
    [property]: value,
    fallbacks: [
      {[property]: `-webkit-${value}`},
      {[property]: `-moz-${value}`},
      {[property]: `-ms-${value}`}
    ]
  }
}

export const crossBrowserify = (prefix, value) => {
  const upperPrefix = _.upperFirst(prefix)
  return {
    [prefix]: value,
    [`Webkit${upperPrefix}`]: value,
    [`Moz${upperPrefix}`]: value,
    [`Ms${upperPrefix}`]: value
  }
}


