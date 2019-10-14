import React from 'react'
import {
  compose, createEventHandler, mapPropsStream,
  withState
} from 'recompose'
import PropTypes from 'prop-types'
import Navigation from 'components/Navigation'
import RegisterSuccessDialog from 'components/HomePage/Dialogs/RegisterSuccessDialog'
import {compareFilterByProps, getStateData} from '../../helpers/get'
import _ from 'lodash'
import {getCategoryList} from '../../routes/action-common'
import {connect} from 'react-redux'
import fp from "lodash/fp";

const mapDispatchToProps = {
  getCategoryList

}

const mapStateToProps = (state) => {
  return {
    categoryList: _.get(state, 'common.category.data')
  }
}

const enhance = compose(
  withState('successOpen', 'setSuccessOpen', false),
  connect(mapStateToProps, mapDispatchToProps),
  mapPropsStream(props$ => {
    props$
      .first()
      .subscribe(props => {
        props.getCategoryList()
      })
    return props$
  })
)

const Header = props => {
  const {
    classes,
    successOpen,
    home,
    categoryList
  } = props

  return (
    <React.Fragment>
      <Navigation home={home} categoryList={categoryList}/>
      <RegisterSuccessDialog
        open={successOpen}
        handleClose={() => successOpen(false)}
      />
    </React.Fragment>
  )
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
}
export default enhance(Header)
