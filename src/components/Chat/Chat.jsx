import React from 'react'
import { useParams } from 'react-router-dom'
import io from 'socket.io-client'

import ChatMessage from 'components/ChatMessage'
import InputButton from 'components/InputButton'
import GifModal from 'components/GifModal'

import { messagesReducer, actions, getTypingText, shouldScrollDown } from './helpers'
import * as Styled from './ChatStyles'

function Chat () {
  const { username } = useParams()
  const [typingText, setTypingText] = React.useState('')
  const [gifModalOpened, setGifModalOpened] = React.useState(false)
  const [messages, dispatch] = React.useReducer(messagesReducer, [])
  const socket = React.useRef()
  // use to send only one "stop typing" event
  const typingTimeout = React.useRef()
  const messageListCtn = React.useRef()

  // Executed after pressing ESC or click the overlay element, hide modal
  const handleRequestCloseModal = () => setGifModalOpened(false)
  const handleSubmit = (e, message, clearChatMessageInput) => {
    socket.current.emit('text-message', message)
    clearChatMessageInput()
  }
  const handleInputChange = (e, clearChatMessageInput) => {
    const value = e.target.value
    // If value inside input begins with "/gif " show gif modal
    if (value.indexOf('/gif ') === 0) {
      setGifModalOpened(true)
      clearChatMessageInput()
      return
    }

    // emit "typing" event after 1 second
    socket.current.emit('typing', true)

    clearTimeout(typingTimeout.current)

    // emit "stop typing" event after 1 second
    typingTimeout.current = setTimeout(() => {
      socket.current.emit('typing', false)
    }, 1000)
  }
  // executed on each received message
  const handleOnMessage = React.useCallback(message => {
    shouldScrollDown(messageListCtn)
    dispatch({ type: actions.ADD, payload: message })
  }, [])
  const handleOnTyping = React.useCallback(typers => {
    setTypingText(getTypingText(typers, username))
  }, [username])
  const handleSelectedGif = (gif) => {
    socket.current.emit('image-message', { url: gif.images.original.url, alt: gif.title })
    setGifModalOpened(false)
  }

  React.useEffect(() => {
    // Init socket only once
    if (!socket.current) {
      socket.current = io(`https://pager-hiring.herokuapp.com/?username=${username}`)
    }

    socket.current.on('message', handleOnMessage)
    socket.current.on('is-typing', handleOnTyping)

    return () => {
      socket.current.off('message', handleOnMessage)
      socket.current.off('is-typing', handleOnTyping)
    }
  }, [handleOnMessage, username, handleOnTyping])

  return (
    <Styled.Container>
      <Styled.MessageList ref={messageListCtn}>
        {
          messages.map(message => (
            <ChatMessage key={message.time} data={message} />
          ))
        }
      </Styled.MessageList>
      <Styled.InputCtn>
        <InputButton
          onSubmit={handleSubmit}
          onChange={handleInputChange}
          placeholder="Message"
          buttonText="Send"
        />
        {
          typingText && (
            <Styled.TypingText>
              {typingText}
            </Styled.TypingText>
          )
        }
      </Styled.InputCtn>
      <GifModal
        open={gifModalOpened}
        onSelectedGif={handleSelectedGif}
        onRequestClose={handleRequestCloseModal}
      />
    </Styled.Container>
  )
}

export default Chat
