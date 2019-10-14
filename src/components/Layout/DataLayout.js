import React from 'react'
import fp from 'lodash/fp'
import {getDriverLicenseList, getCurrencyList} from 'routes/action-common'
export default Component => {
  return class DataLayout extends React.Component {
    componentDidMount() {
      const {store: {getState, dispatch}} = this.props
      const state = getState()
      if (!fp.get('common.driverLicence.data', state)) {
//        dispatch(getDriverLicenseList())
      }
      if (!fp.get('common.currency.data', state)) {
  //      dispatch(getCurrencyList())
      }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    render () {
      return <Component {...this.props}/>
    }
  }
}
