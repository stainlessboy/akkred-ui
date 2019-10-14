import React from 'react'
import PropTypes from 'prop-types'
import 'moment/locale/ru'
import 'moment/locale/en-au'
import 'moment/locale/uz-latn'

const ContextType = {
  // Enables critical path CSS rendering
  // https://github.com/kriasoft/isomorphic-style-loader
  insertCss: PropTypes.func.isRequired,
  // Universal HTTP client
  pathname: PropTypes.string.isRequired,
  query: PropTypes.object,
  store: PropTypes.any.isRequired,
  isServer: PropTypes.bool
}

/**
 * The top-level React component setting context (global) variables
 * that can be accessed from all the child components.
 *
 * https://facebook.github.io/react/docs/context.html
 *
 * Usage example:
 *
 *   const context = {
 *     history: createBrowserHistory(),
 *     store: createStore(),
 *   };
 *
 *   ReactDOM.render(
 *     <App context={context}>
 *       <Layout>
 *         <LandingPage />
 *       </Layout>
 *     </App>,
 *     container,
 *   );
 */
class App extends React.PureComponent {
  static propTypes = {
    context: PropTypes.shape(ContextType).isRequired,
    children: PropTypes.element.isRequired
  };

  static childContextTypes = ContextType;

  getChildContext () {
    return this.props.context
  }

  render () {
    // NOTE: If you need to add or modify header, footer etc. of the app,
    // Please do that inside the Layout component.
    return React.Children.only(this.props.children)
  }
}

export default App
