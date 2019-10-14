import React from 'react'
import injectSheet from 'react-jss'
import {prop} from 'ramda'
import {compose} from 'recompose'
import PropTypes from 'prop-types'
import Dropdown from 'antd/lib/dropdown/dropdown'
import Menu from 'antd/lib/menu/index'
import MdExpandMore from 'react-icons/lib/md/keyboard-arrow-down'
import Link from '../Link'
import ProfilePic from 'components/ProfilePic'
import Translate from '../Translate'
import {
  crossBrowserify,
  fallbacksStyle,
} from 'constants/styles'
import {PROFILE_URL} from 'constants/routes'
import {PRIMARY_COLOR} from '../../constants/design'

const style = {
  settings: {
    fontFamily: 'inherit',
    ...fallbacksStyle('display', 'flex'),
    ...crossBrowserify('alignItems', 'center')
  },
  item: {
    ...fallbacksStyle('display', 'flex'),
    ...crossBrowserify('alignItems', 'center'),
    transition: 'all 500ms',
    whiteSpace: 'nowrap',
    cursor: 'pointer',
    '&:hover $arrow': {
      transform: 'rotate(180deg)'
    }
  },
  icon: {
    fontSize: '20px',
    opacity: '0.5'
  },
  text: {
    marginLeft: '6px',
    marginRight: '3px',
    borderBottom: '1px dashed #000'
  },
  arrow: {
    fontSize: '22px',
    transition: 'all 200ms'
  },
  dropDown2: {
    fontFamily: '\'Montserrat\', sans-serif',
    '& .ant-dropdown-menu-item': {
      width: '272px',
      cursor: 'unset',
      padding: '5px 20px',
      '&:hover': {background: 'none'}
    },
    '& .ant-dropdown-menu-item-active': {backgroundColor: 'none'}
  },
  menuItems: {
    padding: '8px 0',
    borderBottom: 'solid 0.7px #ccd3e28c',
    '& > a': {
      ...fallbacksStyle('display', 'flex'),
      ...crossBrowserify('alignItems', 'center'),
      ...crossBrowserify('justifyContent', 'space-between'),
      padding: '0 7px 0 7px',
      fontWeight: '500',
      lineHeight: '32px',
      color: '#202124',
      '&:hover': {
        color: PRIMARY_COLOR,
      }
    }
  },
  counter: {
    color: '#fff',
    background: '#f46090',
    fontSize: '12px',
    fontWeight: '600',
    borderRadius: '9px',
    padding: '1px 6px',
    lineHeight: 'normal'
  }

}

const enhance = compose(
  injectSheet(style)
)

const DropDownList = ({classes, user, onLogout, ...props}) => {
  const name = prop('fullName', user)
  const isAuthMenu = (
    <Menu className={classes.dropDown2}>
      <Menu.Item>
        <div className={classes.menuItems}>
          <Link to={'/login/client'}>
            <Translate>Мой профиль</Translate>
          </Link>
          <Link to={'login/executor'}>
            <Translate>Сообщения</Translate>
          </Link>
        </div>
      </Menu.Item>
    </Menu>
  )

  return (
    <div className={classes.settings}>
      <Dropdown
        overlay={isAuthMenu}
        placement={'bottomCenter'}>
        <div className={classes.item}>
          <ProfilePic type={'xxs'}/>
          <span className={classes.text}>
            {name}
          </span>
          <MdExpandMore className={classes.arrow} />
        </div>
      </Dropdown>
    </div>
  )
}

DropDownList.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  onLogout: PropTypes.func.isRequired
}

export default enhance(DropDownList)
