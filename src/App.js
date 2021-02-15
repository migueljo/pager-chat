import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Home from 'screens/Home'
import GlobalStyles from './GlobalStyles'

function App () {
  return (
    <BrowserRouter>
      <Home />
      <GlobalStyles />
    </BrowserRouter>
  )
}

export default App
