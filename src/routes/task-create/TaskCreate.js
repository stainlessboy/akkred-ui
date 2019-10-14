import React from 'react'
import PropTypes from 'prop-types'
import {compose} from 'recompose'
import injectSheet from 'react-jss'
import {length, map, filter, pipe, propOr, addIndex} from 'ramda'
import Container from 'components/Container'
import {Form, Field} from 'react-final-form'
import TextField from 'components/FormComponents/TextField'
import {Editor} from 'components/FormComponents/Editor'
import SearchFieldConfig from 'components/FormComponents/SearchFieldConfig'
import MonthField from 'components/FormComponents/MonthField'
import MultiImageUploadField from 'components/FormComponents/MultiImageUploadField'
import {Button} from 'components/Button'
import Title from 'components/Title'
import * as API from 'constants/api'
import {fallbacksStyle, crossBrowserify} from '../../constants/design'
import RemoveIcon from 'icons/Remove'
import hexToRgb from '../../helpers/hexToRgb'

const exists = n => n
const styles = {
  createWrap: {
    marginTop: '25px',
    marginBottom: '80px',
    boxShadow: '0px 10px 24px rgba(0, 0, 0, 0.08)',
    borderRadius: '6px',
    width: '767px',
    padding: '44px 40px'
  },
  field: {
    marginTop: '40px'
  },
  category: {
    extend: 'field',
    ...fallbacksStyle('display', 'flex'),
    ...crossBrowserify('alignItems', 'flex-end'),
    ...crossBrowserify('justifyContent', 'space-between')
  },
  address: {
    extend: 'field',
    ...fallbacksStyle('display', 'flex'),
    '& > div:last-child': {
      width: 'calc(70% - 10px)'
    }
//    ...crossBrowserify('alignItems', 'flex-end'),
 //   ...crossBrowserify('justifyContent', 'space-between')
  },
  price: {
    extend: 'field',
    ...fallbacksStyle('display', 'flex'),
    ...crossBrowserify('alignItems', 'center')
  },
  imageWrap: {
    extend: 'field',
    margin: '0 -5px'
  },
  image: {
    position: 'relative',
    width: '76px',
    height: '76px',
    display: 'inline-block',
    margin: '0 5px',
    border: '1px solid #EDEDED',
    padding: '12px 4px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '90% 80%',
    '&:hover $imageRemove': {
      opacity: '1'
    }
  },
  imageRemove: {
    cursor: 'pointer',
    transition: 'all 300ms',
    opacity: '0',
    position: 'absolute',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    background: hexToRgb('#fff', '0.8'),
    ...fallbacksStyle('display', 'flex'),
    ...crossBrowserify('alignItems', 'center'),
    ...crossBrowserify('justifyContent', 'center')
  },
  ofeta: {
    marginTop: '15px',
    color: '#99A2AD'
  }
}
const mapIndexed = addIndex(map)
const enhance = compose(
  injectSheet(styles)
)
const TaskCreate = props => {
  const {
    classes,
    onSubmit,
    initialValues
  } = props
  return (
    <div style={{marginTop: '20px'}}>
      <Container className={classes.wrapper}>
        <Title type={'large'} margin={'0 0 30px'} text={'Создание задачи'}/>
        <div className={classes.createWrap}>
          <Form
            onSubmit={onSubmit}
            initialValues={initialValues}
            render={({handleSubmit, form, submitting, pristine, values, change, ...rest}) => {
              const gallery = propOr([], 'gallery', values)
              const hasImage = pipe(filter(exists), length, Boolean)(gallery)
              return (
                (
                  <form onSubmit={handleSubmit}>
                    <Title type={'medium'} text={'Заполните заявку'}/>

                    <Field
                      name="title"
                      hint={'Это будет заголовком задачи'}
                      component={TextField}
                      label2={'Мне нужно'}
                      placeholder="Чем вам помочь..."
                    />
                    <div className={classes.category}>
                      <Field
                        name="speciality"
                        component={SearchFieldConfig}
                        label2={'Категория'}
                        api={API.SPECIALITY_LIST}
                        margin={'0 20px 0 0'}
                        width={'calc(50% - 10px)'}
                        params={{parents_only: 'true'}}
                      />
                      <Field
                        name="specialityChild"
                        component={SearchFieldConfig}
                        width={'calc(50% - 10px)'}
                        api={API.SPECIALITY_LIST}
                      />
                    </div>
                    <div className={classes.field}>
                      <Field
                        hint={'Опишите как можно подробнее вашу задачу'}
                        name="text"
                        component={Editor}
                        label={'Описание задачи'}
                      />
                    </div>
                    <div className={classes.imageWrap}>
                      {hasImage &&
                      mapIndexed(
                        (item, index) => item && (
                          <div
                            style={{backgroundImage: `url(${item.file})`}}
                            key={item.id}
                            className={classes.image}>
                            <div
                              className={classes.imageRemove}
                              onClick={() => form.change('gallery[' + index + ']')}>
                              <RemoveIcon/>
                            </div>
                          </div>
                        ),
                        gallery,
                      )}
                      <MultiImageUploadField last={length(gallery)} changeForm={form.change} name={'gallery'}/>
                    </div>
                    <div className={classes.field}>
                      <Field
                        name="deadline"
                        width={'calc(50% - 10px)'}
                        component={MonthField}
                        label2={'Дата работы'}
                      />
                    </div>
                    <div className={classes.address}>
                      <Field
                        name="district"
                        component={SearchFieldConfig}
                        width={'calc(30% - 10px)'}
                        margin={'0 20px 0 0'}
                        label2={'Район'}
                        params={{type: 'district'}}
                        api={API.REGIONS_LIST}
                      />
                      <Field
                        name="address"
                        component={TextField}
                        label2={'Адрес работы'}
                      />
                    </div>
                    <div className={classes.price}>
                      <Field
                        name="price"
                        component={TextField}
                        width={'240px'}
                        label2={'Стоимость задачи'}
                        required={true}
                      />
                      <div style={{margin: '38px 0 0 10px'}}>Сум.</div>
                    </div>

                    <div className={classes.field}>
                      <Button
                        submitType={'submit'}
                        fullWidth={true}
                        type={'large'}
                        text={'Опубликовать'}
                        disabled={submitting || pristine}/>
                      <div className={classes.ofeta}>Нажимая кнопку опубликовать, вы соглашаетесь с условиями публичной оферты</div>
                    </div>
                  </form>
                )
              )
            }}
          />
        </div>
      </Container>

    </div>
  )
}

TaskCreate.propTypes = {
  classes: PropTypes.object.isRequired,
  onTabChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  actionName: PropTypes.string,
  userDetail: PropTypes.object.isRequired,
  resumeDetail: PropTypes.object.isRequired
}
export default enhance(TaskCreate)
