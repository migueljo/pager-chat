import React from 'react'
import { Switch, Route } from 'react-router-dom'

import JoinChat from 'components/JoinChat'
import Chat from 'components/Chat'

import * as Styled from './HomeStyles'

function Home () {
  return (
    <Styled.Container>
      <Styled.Box>
        <Switch>
          <Route path="/chat/:username" exact strict>
            <Chat />
          </Route>
          <Route path="/">
            <JoinChat />
          </Route>
        </Switch>
      </Styled.Box>
    </Styled.Container>
  )
}

export default Home
