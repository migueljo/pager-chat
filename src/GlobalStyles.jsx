import React from 'react'
import { Global, css } from '@emotion/react'

function GlobalStyles () {
  return <Global styles={css`
    * {
      box-sizing: border-box;
    }
    html {
      font-size: 16px;
    }
    body {
      font-family: Arial, Helvetica, sans-serif;
    }
  `} />
}

export default GlobalStyles
