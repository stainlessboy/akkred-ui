import React from 'react'
import PropTypes from 'prop-types'
import {compose} from 'recompose'
import injectSheet from 'react-jss'
import MdFavoriteBorder from 'react-icons/lib/md/favorite-border'
import MdFavorite from 'react-icons/lib/md/favorite'

const enhance = compose(
  injectSheet({
    favBtn: {
      border: '1px #ececec solid',
      borderRadius: '4px',
      color: '#656565',
      cursor: 'pointer',
      display: 'inline-block',
      fontSize: '11px',
      padding: '0 7px',
      lineHeight: '34px',
      verticalAlign: 'top',
      marginLeft: '10px'
    }
  })
)
const iconStyle = {
  width: '20px',
  height: '25px'
}

const FALSE = false
const FavButton = props => {
  const {
    classes
  } = props

  return (
    <div className={classes.favBtn}>
      {FALSE ? <MdFavoriteBorder style={iconStyle}/> : <MdFavorite color={'#cbd0d8'} style={iconStyle}/>}
    </div>
  )
}

FavButton.propTypes = {
  text: PropTypes.node,
  type: PropTypes.string,
  classes: PropTypes.object,
  className: PropTypes.string
}

export default enhance(FavButton)
