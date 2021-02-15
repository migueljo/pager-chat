import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Home from 'screens/Home'
import GlobalStyles from './GlobalStyles'

// TODO: Improve code
// TODO: scroll down on each message

function App () {
  return (
    <BrowserRouter>
      <Home />
      <GlobalStyles />
    </BrowserRouter>
  )
}

export default App
