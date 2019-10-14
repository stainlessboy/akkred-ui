import {createGenerateClassName} from 'react-jss'

export const generateBuildInClassName = createGenerateClassName()

const generateClassName = ({key}, sheets) => {
  return `app-${key}-${sheets.options.index}`
}

export default generateClassName

