import _ from 'lodash'
import React from 'react'
import {compose, withHandlers, withState} from 'recompose'
import injectSheet from 'react-jss'
import {
  crossBrowserify,
  fallbacksStyle
} from 'constants/styles'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import {Checkbox} from 'components/FormComponents'
import CheckboxGr from 'antd/lib/checkbox/Group'
import Collapse from 'antd/lib/collapse/Collapse'
import Panel from 'antd/lib/collapse/CollapsePanel'

const enhance = compose(
  withState(
    'inter',
    'setInter',
    false
  ),
  withState(
    'parentChecked',
    'setParent',
    false
  ),
  withState(
    'childValues',
    'setChild',
    false
  ),
  withHandlers({
    onChildChange: props => (v) => {
      const {setChild, setParent, setInter, onChange, item} = props
      setChild(v)
      if (_.size(v) === _.size(item.children)) {
        onChange(v)
        setParent(true)
        setInter(false)
      } else if (_.isEmpty(v)) {
        setInter(false)
        setParent(false)
        onChange([])
      } else {
        setInter(true)
        setParent(false)
        onChange(v)
      }
    },
    onParentChange: props => (ev) => {
      const children = _.get(props, 'item.children')
      const isTrue = _.get(ev, 'target.checked')

      props.setParent(isTrue)
      if (isTrue) {
        const childIds = _.map(children, child => child.id)
        props.onChange(childIds)
        props.setChild(childIds)
        props.setInter(false)
      } else {
        props.onChange([])
        props.setChild([])
      }
    }
  }),
  injectSheet({
    wrapper: {
      '& .ant-collapse-header': {
        paddingTop: '9px !important',
        paddingBottom: '9px !important',
        background: '#f6f7f9'
      },
      '& .arrow': {
        lineHeight: '40px !important'
      },
      '& .ant-collapse-item': {
        border: 'none !important',
        background: '#f6f7f9 !important'
      },
      '& .ant-collapse-content': {
        background: '#f6f7f9 !important',
        paddingLeft: '60px'
      }
    },
    parent: {
      position: 'absolute',
      top: '9px',
      left: '35px',
      zIndex: '1'

    },
    blockWrapper: {
      display: 'block',
      '& $checkbox': {
        ...fallbacksStyle('display', 'flex'),
        ...crossBrowserify('alignItems', 'center'),
        marginRight: '0 !important',
        marginLeft: '0 !important'
      },
      '& $checkBoxChild': {
        ...fallbacksStyle('display', 'flex'),
        ...crossBrowserify('alignItems', 'center'),
        marginRight: '0 !important',
        marginLeft: '0 !important',
        marginBottom: '16px'
      }
    },
    checkbox: {

    },
    checkBoxChild: {
    }
  })
)

const CheckboxGroup = ({...defaultProps}) => {
  const {
    onParentChange,
    onChildChange,
    childValues,
    classes,
    inter,
    item,
    parentChecked
  } = defaultProps
  const id = _.get(item, 'id')
  return (
    <React.Fragment>
      <div className={classes.parent}>
        <Checkbox
          indeterminate={inter}
          checked={parentChecked}
          onChange={onParentChange}
          label={item.name}
          className={classes.checkbox}
        />
      </div>
      <CheckboxGr
        className={classNames(classes.wrapper, classes.blockWrapper)}
        onChange={onChildChange}
        value={childValues}
      >
        <Collapse bordered={false}>
          <Panel
            key={id}
            header={<span>&nbsp;</span>}
            showArrow={true}>
            {_.map(item.children, child => {
              const childValue = _.get(child, 'id')
              const childLabel = _.get(child, 'name')
              return (
                <Checkbox
                  key={childValue}
                  value={childValue}
                  label={childLabel}
                  className={classes.checkBoxChild}
                />
              )
            })}
          </Panel>
        </Collapse>
      </CheckboxGr>
    </React.Fragment>
  )
}

CheckboxGroup.propTypes = {
  item: PropTypes.array.isRequired,
  type: PropTypes.oneOf(['inline', 'block'])
}

CheckboxGroup.defaultProps = {
  type: 'block'
}

export default enhance(CheckboxGroup)
