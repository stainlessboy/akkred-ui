import React, {useState} from 'react'
import InjectSheet from 'react-jss'
import classNames from 'classnames'
import {Menu as MenuIcon, X as CloseIcon, LogOut as LogoutIcon} from 'react-feather'
import Link from '../Link'
import TS from 'components/T'
import {Menu, Icon} from 'antd'

const {SubMenu} = Menu
const styles = {
  navWrap: {
    position: 'fixed',
    top: '0',
    width: '100%',
    background: '#142966',
    zIndex: '9999'

  },

  nav: {
    width: '0',
    overflow: 'hidden',
    transition: 'all 200ms',
    background: '#FFF',
    height: '100%',
    position: 'absolute',
    top: '60px',
    zIndex: '9999'
  },
  visible: {
    width: '100%'
  },
  open: {
    width: '100px',
    height: '70px',
    background: '#142966',

    // Background: '#efefef',
    color: '#FFF'
  },
  buttonS: {
    color: '#ffff',
    size: '35px',
    paddingTop: '15px',
    paddingLeft: '5px'
  }

}
const MobileNav = props => {
  const {classes} = props
  const [open, setOpen] = useState(false)
  const handleClick = (e) => {
    console.log('click ', e)
  }

  return (
    <React.Fragment>
      <div className={classes.navWrap}>
        <div className={classes.open} onClick={() => setOpen(!open)}>
          <div className={classes.buttonS}>
            <MenuIcon color={'#FFF'} size={35} />
          </div>
        </div>
      </div>
      <div className={classNames({
        [classes.nav]: true,
        [classes.visible]: open
      })}>

        <Menu
          onClick={handleClick}
          style={{width: '100%'}}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <span>Navigation One</span>
              </span>
            }
          >
            <Menu.ItemGroup key="g1" title="Item 1">
              <Menu.Item key="1">Option 1</Menu.Item>
              <Menu.Item key="2">Option 2</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup key="g2" title="Item 2">
              <Menu.Item key="3">Option 3</Menu.Item>
              <Menu.Item key="4">Option 4</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <span>Navigation Two</span>
              </span>
            }
          >
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu
            key="sub4"
            title={
              <span>
                <span>Navigation Three</span>
              </span>
            }
          >
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </SubMenu>
        </Menu>

      </div>
    </React.Fragment>
  )
}

export default InjectSheet(styles)(MobileNav)
