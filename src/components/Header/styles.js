import {
  WHITE_COLOR,
  crossBrowserify,
  fallbacksStyle
} from 'constants/styles'

const styles = {
  container: {
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    zIndex: '100'
  },
  supportWrap: {
    width: '100%',
    position: 'absolute',
    top: '0',
    '& > div': {
      width: '100%',
      ...fallbacksStyle('display', 'flex'),
      ...crossBrowserify('alignItems', 'center'),
      ...crossBrowserify('justifyContent', 'space-between')

    },
    background: '#F6F8FB',
    color: '#9AA9B8'
  },
  support: {
    lineHeight: '48px',
    fontWeight: '500',

    '& span': {
      display: 'inline-block',
      lineHeight: 'normal',
      marginLeft: '30px',
      '&:first-child': {marginLeft: '0'}
    }
  },

  header: {
    ...fallbacksStyle('display', 'flex'),
    ...crossBrowserify('justifyContent', 'space-between'),
    ...crossBrowserify('alignItems', 'center'),
    background: WHITE_COLOR,
    height: '68px',
    position: 'relative',
    '&:before': {
      background: 'inherit',
      content: '""',
      position: 'absolute',
      top: '0',
      bottom: '0',
      right: '100%',
      width: '100%'
    },
    '&:after': {
      background: 'inherit',
      content: '""',
      position: 'absolute',
      top: '0',
      bottom: '0',
      left: '100%',
      width: '100%'
    }
  }
}

export default styles
