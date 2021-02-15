import React from 'react'
import { useParams } from 'react-router-dom'
import io from 'socket.io-client'

import ChatMessage from 'components/ChatMessage'
import InputButton from 'components/InputButton'
import GifModal from 'components/GifModal'

import { messagesReducer, actions, getTypingText } from './helpers'
import * as Styled from './ChatStyles'

function Chat () {
  const { username } = useParams()
  const [typingText, setTypingText] = React.useState('')
  const [gifModalOpened, setGifModalOpened] = React.useState(false)
  const socket = React.useRef()
  const [messages, dispatch] = React.useReducer(messagesReducer, [])
  const typingTimeout = React.useRef()

  const handleSubmit = (e, message) => {
    socket.current.emit('text-message', message)
  }
  const handleInputChange = (e) => {
    const value = e.target.value
    if (value.indexOf('/gif ') === 0) {
      setGifModalOpened(true)
      return
    }

    socket.current.emit('typing', true)

    clearTimeout(typingTimeout.current)
    typingTimeout.current = setTimeout(() => {
      socket.current.emit('typing', false)
    }, 1000)
  }
  const handleOnMessage = React.useCallback(message => {
    // { type: 'text', username: string, time: Date, text: string }
    // { type: 'image', username: string, time: Date, url: string, alt: string | null }
    dispatch({ type: actions.ADD, payload: message })
  }, [])
  const handleOnTyping = React.useCallback(typers => {
    setTypingText(getTypingText(typers, username))
  }, [username])
  const handleSelectedGif = (gif) => {
    console.log({ gif })
    socket.current.emit('image-message', { url: gif.images.original.url, alt: 'gif' })
    setGifModalOpened(false)
  }

  React.useEffect(() => {
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
      <Styled.MessageList>
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
      <GifModal open={gifModalOpened} onSelectedGif={handleSelectedGif} />
    </Styled.Container>
  )
}

export default Chat
