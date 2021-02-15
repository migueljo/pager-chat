import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;

  svg {
    animation: ${rotate} 1000ms linear infinite;
  }
`

export const GiftList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 20px;
`

export const GifButton = styled.button`
  border: 0;
  padding: 0;
  background-color: transparent;
  cursor: pointer;
  outline: transparent;
`

export const Gif = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`
