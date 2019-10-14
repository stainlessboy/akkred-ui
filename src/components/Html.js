import React from 'react'
import PropTypes from 'prop-types'
import serialize from 'serialize-javascript'
import config from '../config'

/* eslint-disable react/no-danger */

const animate = `
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  25% { -webkit-transform: rotate(120deg); }
  50% { -webkit-transform: rotate(270deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg);}
  25% { transform: rotate(120deg);}
  50% { transform: rotate(270deg);}
  100% { transform: rotate(360deg); }
}

@keyframes spin-off {
  from { transform: rotate(0deg);}
  to { transform: rotate(360deg);}
}

@-webkit-keyframes opacityAnim {
  0% { opacity: 0.3; }
  100% { opacity: 1; }
}

@keyframes opacityAnim {
  0% { opacity: 0.3; }
  100% { opacity: 1; }
}

@keyframes rollUpFadeIn {
  from {margin-top: 20px; opacity: 0.2}
  to {margin-top: 0; opacity: 1}
}
@keyframes slideDownFadeIn {
  from {margin-left: -41px; opacity: 0}
  to {margin-left: 0; opacity: 1}
}
@keyframes slideRightFadeIn {
  from {margin-right: -41px; opacity: 0}
  to {margin-right: 0; opacity: 1}
}

`
const Html = props => {
  const {title, description, styles, scripts, app, children, sheets} = props
  return (
    <html className="no-js" lang="en">
      <head>
        <meta charSet="utf-8"/>
        <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
        <title>{title}</title>
        <meta name="description" content={description}/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        {scripts.map(script =>
          <link key={script} rel="preload" href={script} as="script"/>
        )}
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="apple-touch-icon" href="/icon.png"/>
        <link rel="stylesheet" href="/antd.min.css"/>
        <link rel="stylesheet" href="/normalize.css"/>
        <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&amp;subset=cyrillic" rel="stylesheet"/>

        <style dangerouslySetInnerHTML={{__html: animate}}/>
        {styles.map(style =>
          <style
            key={style.id}
            id={style.id}
            dangerouslySetInnerHTML={{__html: style.cssText}}
          />
        )}
        {sheets && <style id="server-react-jss" type="text/css" dangerouslySetInnerHTML={{__html: sheets.toString()}}/>}
        <script dangerouslySetInnerHTML={{__html: `var initialState = ${props.store && JSON.stringify(props.store.getState())}`}}>
        </script>
      </head>
      <body style={{paddingRight: '0 !important'}}>
        <div id="app" dangerouslySetInnerHTML={{__html: children}}/>
        <script
          dangerouslySetInnerHTML={{__html: `window.App=${serialize(app)}`}}
        />
        {scripts.map(script => <script key={script} src={script}/>)}
        {config.analytics.googleTrackingId &&
          <script
            dangerouslySetInnerHTML={{
              __html:
                            'window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;' +
                            `ga('create','${config.analytics.googleTrackingId}','auto');ga('send','pageview')`
            }}
          />
        }
        {config.analytics.googleTrackingId &&
          <script src="https://www.google-analytics.com/analytics.js" async defer/>
        }
      </body>
    </html>
  )
}

Html.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  store: PropTypes.object.isRequired,
  styles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      cssText: PropTypes.string.isRequired
    }).isRequired
  ),
  sheets: PropTypes.any.isRequired,
  scripts: PropTypes.arrayOf(PropTypes.string.isRequired),
  app: PropTypes.object,
  children: PropTypes.string
}

Html.defaultProps = {
  styles: [],
  scripts: []
}

export default Html
