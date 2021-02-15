import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal'

import api from 'api/'
import InputButton from 'components/InputButton'

import * as Styled from './GifModalStyles'

Modal.setAppElement('#modals')

function GifModal ({ open, onSelectedGif }) {
  const [gifs, setGifs] = React.useState([])
  const handleSubmit = (e, text) => {
    api.getGifs()
      .then(data => {
        setGifs(data.data)
      })
      .catch(console.error)
  }
  const handleGifClick = (gif) => {
    onSelectedGif(gif)
    setGifs([])
  }

  return (
    <Modal
      shouldCloseOnOverlayClick
      isOpen={open}
      contentElement={(props, contentElement) => <Styled.Container>{contentElement}</Styled.Container>}
      overlayElement={(props, children) => <Styled.Overlay>{children}</Styled.Overlay>}
    >
      <InputButton
        buttonText="Search"
        placeholder="Search all the GIFs"
        onSubmit={handleSubmit}
      />
      <Styled.GiftList>
        {gifs.map(gif => {
          return (
            <Styled.GifButton type="button" onClick={() => handleGifClick(gif)} key={gif.id}>
              <Styled.Gif src={gif.images.downsized_large.url} />
            </Styled.GifButton>
          )
        })}
      </Styled.GiftList>
    </Modal>
  )
}

GifModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onSelectedGif: PropTypes.func.isRequired
}

export default GifModal
