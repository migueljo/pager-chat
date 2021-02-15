import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal'

import api from 'api/'

import InputButton from 'components/InputButton'
import Icon from 'components/Icon'

import * as Styled from './GifModalStyles'

Modal.setAppElement('#modals')

function GifModal ({ open, onSelectedGif, onRequestClose }) {
  const [loading, setLoading] = React.useState(false)
  const [gifs, setGifs] = React.useState([])

  const handleSubmit = (e, text) => {
    setLoading(true)
    api.getGifs(text)
      .then(data => {
        setGifs(data.data)
      })
      .catch(console.error)
      .finally(() => setLoading(false))
  }
  const handleGifClick = (gif) => {
    onSelectedGif(gif)
    setGifs([])
  }
  const handleRequestClose = () => {
    setGifs([])
    onRequestClose && onRequestClose()
  }

  return (
    <Modal
      shouldCloseOnOverlayClick
      shouldCloseOnEsc
      isOpen={open}
      onRequestClose={handleRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <InputButton
        buttonText="Search"
        placeholder="Search all the GIFs"
        onSubmit={handleSubmit}
      />
      {
        loading
          ? (
          <Styled.Loader>
            <Icon name="spinner" />
          </Styled.Loader>
            )
          : (
          <Styled.GiftList>
            {gifs.map(gif => {
              return (
                <Styled.GifButton type="button" onClick={() => handleGifClick(gif)} key={gif.id}>
                  <Styled.Gif src={gif.images.downsized_large.url} />
                </Styled.GifButton>
              )
            })}
          </Styled.GiftList>
            )
      }
    </Modal>
  )
}

GifModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onSelectedGif: PropTypes.func.isRequired,
  onRequestClose: PropTypes.func.isRequired
}

export default GifModal
