import React, {useState} from 'react'
import _ from 'lodash'
import ReactBnbGallery from 'react-bnb-gallery'

const Gallery = props => {
  const {images} = props
  const [open, setOpen] = useState(false)
  const [imageIndex, setImageIndex] = useState(0)

  const onClose = () => setOpen(false)
  const onOpen = (index) => {
    setImageIndex(index)
    setOpen(true)
  }

  const photos = _.map(images, img => {
    return {
      photo: _.get(img, 'file'),
      thumbnail: _.get(img, 'file')
    }
  })

  return (
    <React.Fragment>
      {_.map(images, (item, index) => {
        return (
          <div onClick={() => onOpen(index)} ><img style={{
            width: '100%',
            height: '200px'
          }} src={item.file} alt=""/></div>

        )
      })}
      <ReactBnbGallery
        show={open}
        photos={photos}
        activePhotoIndex={imageIndex}
        onClose={onClose} />
    </React.Fragment>
  )
}

export default Gallery
