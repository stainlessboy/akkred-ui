import React from 'react'
import {
  compose,
  mapPropsStream,
  withReducer,
  withHandlers
} from 'recompose'
import injectSheet from 'react-jss'
import fp from 'lodash/fp'
import propTypes from 'prop-types'
import classNames from 'classnames'
import Label2 from '../FieldLabel/FieldLabel2'
import Title from 'components/Title'
import Dialog from 'components/Dialog'
import {Button} from 'components/Button'
import TextSimpleField from 'components/FormComponents/TextField/TextSimpleField'
import {MAIN_COLOR} from '../../../constants/styles'
import axios from 'helpers/axiosHelper'
import MdSearch from 'react-icons/lib/md/search'
import CheckboxGroup from '../CheckboxGroup/CheckboxWrap'
import {GREY} from '../../Button'

const handleData = (dispatch, api) => {
  axios({}, true)
    .get(api, {params: {page_size: 1000}})
    .then(response => {
      const data = fp.get('data.results', response)
      const parent = fp.filter(item => !item.parent, data)
      const children = fp.filter(item => item.parent, data)
      const allData = fp.map(item => {
        return {
          ...item,
          children: fp.filter(fp.flow(
            fp.get('parent.id'),
            fp.isEqual(item.id)
          ),
          children)
        }
      }, parent)

      dispatch({data: allData})
      dispatch({loading: false})
      return response
    })
    .catch(er => console.warn(er))
}
const enhance = compose(
  withReducer(
    'state',
    'dispatch',
    (state, action) => ({...state, ...action}),
    {
      'open': false,
      data: [],
      loading: false,
      text: '',
      selected: []
    }
  ),
  mapPropsStream(props$ => {
    props$
      .distinctUntilChanged(null, fp.get('state.open'))
      .filter(fp.get('state.open'))
      .subscribe(({dispatch, api}) => {
        dispatch({loading: true})
        return handleData(dispatch, api)
      })

    props$
      .distinctUntilChanged(null, fp.get('state.text'))
      .filter(fp.get('state.open'))
      .subscribe(({dispatch, input, api}) => {
        dispatch({loading: true})
        return handleData(dispatch, api)
      })
    return props$
  }),
  withHandlers({
    onOpen: props => (open) => {
      props.dispatch({open})
    },
    onChange: props => (values, id) => {
      props.dispatch({
        selected: {
          ...props.state.selected,
          [id]: values
        }})
    },
    onComplete: ({input, state}) => () => {
      let ids = []
      fp.map(item => {
        ids = fp.union(item, ids)
        return item
      }, state.selected)
      input.onChange(ids)
    }
  }),
  injectSheet({
    wrapper: {
      marginBottom: '20px',
      '&:last-child': {
        marginBottom: '0'
      }
    },
    notSelected: {
      color: MAIN_COLOR,
      fontWeight: '500',
      fontSize: '14px',
      marginLeft: '17px',
      lineHeight: 'normal',
      cursor: 'pointer',
      textDecoration: 'underline'
    },
    dialog: {
    },
    content: {
      width: '900px',
      margin: 'auto',
      background: '#f6f7f9',
      padding: '30px 50px 50px'
    },
    iconClass: {
      top: '-47px',
      right: '-120px'
    },
    title: {

    },
    modelField: {
      position: 'relative'
    },
    list: {
      maxHeight: '472px',
      overflow: 'hidden',
      overflowY: 'auto',
      marginTop: '18px'
    },
    actionButtons: {
      marginTop: '30px',
      textAlign: 'right',
      '& > button:first-child': {
        marginRight: '25px',
        padding: '0 61px'
      }
    }
  })
)
const ModelSelectField = props => {
  const {
    onOpen,
    onChange,
    dispatch,
    className,
    classes,
    onComplete,
    required,
    label,
    state: {loading, data, open},
    selectLabel
  } = props

  return (
    <div className={classNames(classes.wrapper, className)}>
      <Label2 label={label} required={required}/>
      <div
        onClick={() => onOpen(true)}
        className={classes.notSelected}>{selectLabel}</div>

      <Dialog
        open={open}
        className={classes.dialog}
        handleClose={() => onOpen(false)}
        iconClass={classes.iconClass}
        width={900}>
        <div className={classes.content}>
          <Title
            fontSize={'20px'}
            margin={'0 0 16px 0'}
            text={'Сфера деятельности'} />

          <TextSimpleField
            prefix={<MdSearch/>}
            onChange={({target}) => dispatch({text: target.value})}
            placeholder={'быстрый поиск'}
          />
          {loading && 'LOADING .....'}
          <div className={classes.list}>
            {fp.map(
              item => {
                return (
                  <div className={classes.modelField}>
                    <CheckboxGroup
                      item={item}
                      onChange={(value) => onChange(value, item.id)}
                    />
                  </div>
                )
              },
              data
            )}
          </div>
          <div className={classes.actionButtons}>
            <Button text={'Отмена'} color={GREY} type="medium"/>
            <Button onClick={onComplete} style={{padding: '0 58px'}} text={'Выбрать'} type="medium"/>
          </div>
        </div>
      </Dialog>
    </div>
  )
}

ModelSelectField.defaultProps = {
  withLabel: false
}
ModelSelectField.propTypes = {
  state: propTypes.shape({
    open: propTypes.bool.isRequired,
    loading: propTypes.bool.isRequired,
    data: propTypes.array.isRequired
  }),
  dispatch: propTypes.func.isRequired,
  onOpen: propTypes.func.isRequired,
  input: propTypes.object.isRequired,
  className: propTypes.string.isRequired,
  api: propTypes.string.isRequired,
  classes: propTypes.object.isRequired,
  required: propTypes.bool,
  label: propTypes.string,
  selectLabel: propTypes.string,
  onComplete: propTypes.func.isRequired,
  onChange: propTypes.func.isRequired
}

export default enhance(ModelSelectField)
