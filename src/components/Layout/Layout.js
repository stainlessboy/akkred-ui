import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import classNames from 'classnames'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import {compose} from 'recompose'
import s from './Layout.css'
import Header from 'components/Header'
import HeaderSimple from 'components/Header/HeaderSimple'
import Footer from 'components/Footer'
import DataLayout from './DataLayout'
import FeedbackDialog from 'components/Feedback/FeedbackDialog'
import GlobalLoading from '../Utils/GlobalLoading'

const enhance = compose(
  DataLayout,
  withStyles(s),
  injectSheet({
    wrapper: {
      margin: '0',
      padding: '0',
      background: '#f2f4fb',
    },
    simpleWrapper: {
      margin: '0',
      padding: '0',
      background: '#f2f4fb',

    }
  })
)

const Layout = ({classes, children, search, home, pathname, query, simple}) => {
  return (
    <div className={classNames({
      [classes.wrapper]: !simple,
      [classes.simpleWrapper]: simple
    })}>
      {simple && <HeaderSimple query={query}/>}
      {!simple && <Header pathname={{pathname, query}} search={search} home={home}/>}
      {React.cloneElement(children, {pathname, query})}
      <Footer/>
      <GlobalLoading/>
      <FeedbackDialog/>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  search: PropTypes.bool,
  home: PropTypes.bool,
  simple: PropTypes.bool,
  pathname: PropTypes.node.isRequired,
  query: PropTypes.object.isRequired
}

export default enhance(Layout)
