import React from 'react'
import { useHistory } from 'react-router-dom'

import Button from 'components/Button'

import * as Styled from './JoinChatStyles'

function JoinChat () {
  const history = useHistory()
  const [username, setUserName] = React.useState('')
  const handleSubmit = () => {
    const url = `/chat/${username.toLowerCase()}`
    history.push(window.encodeURI(url))
  }

  return (
    <Styled.Container>
      <Styled.Title>Join chat</Styled.Title>
      <Styled.Label>Please enter your username</Styled.Label>
      <Styled.Input type="text" value={username} onChange={e => setUserName(e.target.value)} />
      <Styled.ButtonCtn>
        <Button disabled={!username} onClick={handleSubmit}>Next</Button>
      </Styled.ButtonCtn>
    </Styled.Container>
  )
}

export default JoinChat
