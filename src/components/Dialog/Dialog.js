import React from 'react'
import PropTypes from 'prop-types'
import {compose} from 'recompose'
import injectSheet from 'react-jss'
import classNames from 'classnames'
import Modal from 'antd/lib/modal/Modal'
import MdClose from 'react-icons/lib/md/close'

const enhance = compose(
  injectSheet({
    wrapper: {
      textAlign: 'center',
      '&:before': {
        content: '""',
        display: 'inline-block',
        height: '100%',
        verticalAlign: 'middle',
        width: '0'
      },
      '& .ant-modal': {
        display: 'inline-block',
        fontFamily: 'inherit',
        verticalAlign: 'middle',
        padding: '50px 0',
        top: '0',
        textAlign: 'left'
      }
    },
    modal: {
      '& .ant-modal-close': {
        display: 'none'
      },
      '& .ant-modal-content': {
        borderRadius: 'unset',
        boxShadow: 'unset',
        backgroundColor: 'transparent'
      },
      '& .ant-modal-body': {
        padding: '0'
      }
    },
    closeIcon: {
      cursor: 'pointer',
      position: 'absolute',
      top: '25px',
      right: '25px',
      padding: '3px',
      borderRadius: '50%',
      background: 'transparent',
      transition: 'all 300ms',
      '&:hover': {
        background: '#efefef'
      },
      '& > svg': {
        color: '#7a7a7a',
        fontSize: '22px',
        verticalAlign: 'unset'
      }
    }
  })
)

const Dialog = ({...defaultProps}) => {
  const {
    open,
    handleSubmit,
    handleClose,
    submitText,
    cancelText,
    children,
    classes,
    className
  } = defaultProps
  return (
    <Modal
      {...defaultProps}
      className={classNames(classes.modal, className)}
      visible={open}
      okText={submitText}
      cancelText={cancelText}
      onOk={handleSubmit}
      onCancel={handleClose}
      maskClosable={false}
      footer={null}
      wrapClassName={classes.wrapper}
      zIndex={1000}>
      {children}
      <div className={classNames(classes.closeIcon)} onClick={handleClose}>
        <MdClose/>
      </div>
    </Modal>
  )
}

Dialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func,
  handleClose: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired,
  submitText: PropTypes.string,
  cancelText: PropTypes.string,
  width: PropTypes.any
}

export default enhance(Dialog)
