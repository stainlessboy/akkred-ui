import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {compose} from 'recompose'
import injectSheet from 'react-jss'
import Container from 'components/Container'
import Title from 'components/Title'
import Profile from 'components/ProfilePic'
import Location from 'icons/Location'
import Phone from 'icons/PhoneSimple'
import MailIcon from 'icons/MailIcon'
import {fallbacksStyle, PRIMARY_COLOR} from 'constants/design'
import Dialog from 'components/Dialog'
import {prop} from 'ramda'
import TextField from 'components/FormComponents/TextField'
import {Form, Field} from 'react-final-form'
import classNames from 'classnames'

import {Button, WHITE} from 'components/Button'

const styles = {
  wrapper: {
    paddingTop: '50px',
    maxWidth: '870px',
    paddingBottom: '75px',
    minHeight: 'calc(100vh - 364px)'
  },
  cardWrap: {
    position: 'relative',
    boxShadow: '0px 10px 24px rgba(0, 0, 0, 0.08)',
    borderRadius: '6px',
    padding: '40px',
    ...fallbacksStyle('display', 'flex')
  },
  type: {
    fontSize: '16px',
    lineHeight: '24px',
    color: '#99A2AD'
  },
  name: {
    fontSize: '22px',
    lineHeight: '32px',
    fontWeight: '500'
  },
  contacts: {
    fontSize: '16px',
    margin: '10px 0 20px',
    '& span': {
      color: '#011933',
      display: 'inline-block',
      marginRight: '15px',
      paddingRight: '15px',
      borderRight: '1px solid #BCC7D1',
      '&:last-child': {
        borderRight: 'none'
      }
    }
  },
  descr: {
    fontWeight: '300',
    color: '#93A2B3',
    lineHeight: '25px',
    fontSize: '16px'
  },
  editbtn: {
    position: 'absolute',
    right: '40px',
    top: '52px',
    whiteSpace: 'nowrap'
  },
  dialogWrap: {
    padding: '40px 60px',
    background: '#FFFFFF',
    boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.03)',
    borderRadius: '6px'
  },
  dialogTitle: {
    fontWeight: 'bold',
    fontSize: '26px',
    lineHeight: '43px',
    textAlign: 'center',
    color: '#011933',
    marginBottom: '30px'
  },
  field: {
    marginBottom: '30px'
  },
  editPass: {
    maxHeight: '0',
    transition: 'all 500ms',
    overflow: 'hidden'
  },
  editAnim: {
    maxHeight: '300px'
  },
  editBtn: {
    color: PRIMARY_COLOR,
    textAlign: 'right',
    marginTop: '3px',
    marginBottom: '20px',
    textDecorationLine: 'underline',
    cursor: 'pointer'
  }
}

const enhance = compose(
  injectSheet(styles)
)

const Setting = props => {
  const {classes, onSubmit, open, setOpen, userDetail, initialValues, ...rest} = props
  const [editPAssword, setEditPassword] = useState(false)
  const onEditOpen = (ev) => {
    ev.preventDefault()
    return setOpen(true)
  }
  const onEditClose = (ev) => {
    ev.preventDefault()
    return setOpen(false)
  }
  const data = prop('data', userDetail)
  const fullName = prop('fullName', data)
  const email = prop('email', data)
  const phoneNumber = prop('phoneNumber', data)
  return (
    <Container>
      <div className={classes.wrapper}>
        <Title type={'large'} margin={'0 0 30px'} text={'Мой профиль'}/>
        <div className={classes.cardWrap}>
          <Profile/>
          <div style={{marginLeft: '20px'}}>
            <div className={classes.type}>Заказчик</div>
            <div className={classes.name}>{fullName}</div>
            <div className={classes.contacts}>
              <span><Location/>Ташкент</span>
              <span><Phone/>{phoneNumber}</span>
              <span><MailIcon/>{email}</span>
            </div>
            <div className={classes.descr}>Меня зовут Алишер, и я из города Ташкента. Часто нуждаюсь в помощи по починке кондиционеров и холодильников</div>
          </div>
          <Button type={'small'} onClick={onEditOpen} className={classes.editbtn} color={WHITE} text={'Редактировать профиль'}/>
        </div>
      </div>
      <Dialog
        open={open}
        className={classes.dialog}
        handleClose={() => setOpen(false)}
        width={'555px'}>

        <div className={classes.dialogWrap}>
          <div className={classes.dialogTitle}>Редактирование</div>
          <Form
            onSubmit={onSubmit}
            initialValues={initialValues  }
            render={({handleSubmit, form, submitting, pristine, values}) => (
              <form onSubmit={handleSubmit}>
                <div className={classes.field}>
                  <Field
                    name="fullName"
                    component={TextField}
                    label={'Имя'}
                    required={true}
                  />
                </div>
                <div className={classes.field}>
                  <Field
                    name="livingPlace"
                    component={TextField}
                    label={'Город'}
                  />
                </div>
                <div className={classes.field}>
                  <Field
                    name="phoneNumber"
                    component={TextField}
                    label={'Номер телефона'}
                    required={true}
                  />
                </div>
                <div className={classes.field}>
                  <Field
                    name="email"
                    component={TextField}
                    label={'Email'}
                    required={true}
                  />
                </div>

                <div>
                  <div className={classNames({
                    [classes.editPass]: true,
                    [classes.editAnim]: editPAssword
                  })}>
                    <div className={classes.field}>
                      <Field
                        required={true}
                        name="password"
                        component={TextField}
                        label={'Пароль'}
                      />
                    </div>
                    <Field
                      required={true}
                      name="passwordCnf"
                      component={TextField}
                      label={'Повтор пароля'}
                    />
                  </div>
                </div>
                <div onClick={() => setEditPassword(!editPAssword)} className={classes.editBtn}>Изменить пароль</div>

                <div className={classes.buttons}>
                  <Button
                    bordered={true}
                    style={{padding: '0 54px', marginRight: '21px'}}
                    onClick={onEditClose}
                    color={WHITE}
                    type={'large'}
                    text={'Отмена'}/>
                  <Button
                    submitType={'submit'}
                    type={'large'}
                    text={'Сохранить изменения'}
                    disabled={submitting || pristine}/>
                </div>
              </form>
            )}
          />
        </div>
      </Dialog>
    </Container>
  )
}

Setting.propTypes = {
  classes: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  userDetail: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired
}

export default enhance(Setting)
