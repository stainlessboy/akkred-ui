import PropTypes from 'prop-types'
import uz from 'helpers/uz.json'
import uz1 from 'helpers/uz1.json'
import {connect} from 'react-redux'
import _ from 'lodash/'
const UZ = 'uz'
const UZ1 = 'uz1'

const Translate = ({children, lang}) => {
  if (!children) return null

  if (_.isEqual(lang, UZ1) && uz1[children]) {
    return uz1[children]
  } else if (_.isEqual(lang, UZ) && uz[children]) {
    return uz[children]
  }

  return children
  //  Return children
}

Translate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired
}

export default connect(state => ({lang: _.get(state, 'lang.data')}))(
  Translate,
)
