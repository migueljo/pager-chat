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

    .react-modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .react-modal-content {
      background-color: white;
      border-radius: 4px;
      padding: 20px;
      height: 500px;
      width: 500px;
      overflow: auto;
      display: flex;
      flex-direction: column;
      outline: transparent;
    }
  `} />
}

export default GlobalStyles
