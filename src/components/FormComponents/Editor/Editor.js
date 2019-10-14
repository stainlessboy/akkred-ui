import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import {
  compose
} from 'recompose'
import injectSheet from 'react-jss'
import classNames from 'classnames'
import {
  Editor,
  EditorState,
  RichUtils,
  getDefaultKeyBinding,
  convertFromHTML,
  ContentState
} from 'draft-js'
import {stateToHTML} from 'draft-js-export-html'
import BlockStyleControls from './BlockStyleControls'
import InlineStyleControls from './InlineStyleControls'
import 'draft-js/dist/Draft.css'
import './Editor.css'
import {BORDER_STYLE} from 'constants/styles'
import Label from '../FieldLabel/FieldLabel2'
import AttachIcon from 'react-icons/lib/md/attach-file'
import FileSimpleUploadField from '../ImageUploadField'
import {Field} from 'redux-form'
import ToolTip from 'components/Tooltip'

const enhance = compose(
  injectSheet({
    wrapper: {
      border: BORDER_STYLE,
      borderRadius: '4px',
      position: 'relative',
      background: '#FCFCFC'
    },
    controls: {
      transition: 'all 300ms',
      borderBottom: BORDER_STYLE,
      opacity: '0',
      height: '0',
      display: 'flex',
      overflow: 'hidden',
      visibility: 'hidden',
      margin: '0',
      padding: '0'
    },
    controlShow: {
      margin: '0 15px',
      height: '45px',
      overflow: 'hidden',
      padding: '12px 10px',
      opacity: '1',
      visibility: 'visible'
    },
    editor: {
      minHeight: '95px',
      transition: 'all 300ms',
      cursor: 'text',
      padding: '10px 15px',
      '& .public-DraftEditorPlaceholder-root': {
        color: '#bfbfbf'
      }
    },
    editAnim: {}
  })
)

class TextEditor extends React.Component {
  constructor (props) {
    super(props)
    this.editor = React.createRef()
    this.state = {editorState: EditorState.createEmpty()}
    this.onChange = this.onChange.bind(this)
    this.focus = this.focus.bind(this)
  }

  componentDidMount () {
    const {input} = this.props
    const value = input.value
    if (value) {
      const state = EditorState.createWithContent(
        ContentState.createFromBlockArray(
          convertFromHTML(input.value)
        )
      )
      this.setState({editorState: state})
    }
  }
  componentDidUpdate (prevProps) {
    const nextProps = this.props
    const prevInputValue = _.get(prevProps, 'input.value')
    const nextInputValue = _.get(nextProps, 'input.value')

    if (nextInputValue !== prevInputValue && !nextInputValue) {
      const state = EditorState.createWithContent(
        ContentState.createFromText('')
      )
      this.setState({editorState: state})
    }
  }

  onChange (state) {
    const {input} = this.props
    const html = stateToHTML(state.getCurrentContent())
    this.setState({editorState: state})
    return input.onChange(html)
  }

  focus () {
    return this.editor.current.focus()
  }
  render () {
    const {
      classes,
      label,
      placeholder,
      button,
      file,
      input,
      hint
    } = this.props

    const {editorState} = this.state

    const handleKeyCommand = (command, state) => {
      const newState = RichUtils.handleKeyCommand(state, command)
      if (newState) {
        this.onChange(newState)
        return true
      }
      return false
    }

    const mapKeyToEditorCommand = (event) => {
      const TAB_CHAR = 9
      const MAX_DEPTH = 4
      if (event.keyCode === TAB_CHAR) {
        const newEditorState = RichUtils.onTab(
          event,
          editorState,
          MAX_DEPTH
        )
        if (newEditorState !== editorState) {
          return this.onChange(newEditorState)
        }
      }
      return getDefaultKeyBinding(event)
    }

    const toggleBlockType = (blockType) => {
      return this.onChange(
        RichUtils.toggleBlockType(
          editorState,
          blockType
        )
      )
    }

    const toggleInlineStyle = (inlineStyle) => {
      return this.onChange(
        RichUtils.toggleInlineStyle(
          editorState,
          inlineStyle
        )
      )
    }

    const getBlockStyle = (block) => {
      switch (block.getType()) {
        case 'blockquote': return 'RichEditor-blockquote'
        default: return null
      }
    }

    const styleMap = {
      CODE: {
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
        fontSize: 16,
        padding: 2
      }
    }

    const contentState = editorState.getCurrentContent()
    const hidePlaceholder = !contentState.hasText() && contentState.getBlockMap().first().getType() !== 'unstyled'
    return (
      <div>
        <Label hint={hint} label={label}/>
        <div className={classes.wrapper}>
          <div className={classNames({
            [classes.controls]: true,
            [classes.controlShow]: true
          })}>
            {button}
            <BlockStyleControls
              editorState={editorState}
              onToggle={toggleBlockType}
            />
            <InlineStyleControls
              editorState={editorState}
              onToggle={toggleInlineStyle}
            />
            {file && (
              <ToolTip position={'bottom'} text={'Загрузить файл'}>
                <Field
                  name={'file'}
                  label={<AttachIcon style={{height: '20px'}}/>}
                  component={FileSimpleUploadField}
                />
              </ToolTip>
            )}
          </div>
          <div className={classNames(classes.editor, {
            'RichEditor-hidePlaceholder': hidePlaceholder
          })} onClick={this.focus}>
            <Editor
              ref={this.editor}
              placeholder={placeholder}
              blockStyleFn={getBlockStyle}
              customStyleMap={styleMap}
              editorState={editorState}
              handleKeyCommand={handleKeyCommand}
              keyBindingFn={mapKeyToEditorCommand}
              onChange={this.onChange}
              onBlur={() => input.onBlur()}
              onFocus={() => input.onFocus()}
              spellCheck={true}
            />
          </div>
        </div>
      </div>
    )
  }
}

TextEditor.propTypes = {
  classes: PropTypes.object.isRequired,
  editorState: PropTypes.instanceOf(EditorState),
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  button: PropTypes.object,
  file: PropTypes.bool,
  input: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
}

export default enhance(TextEditor)
