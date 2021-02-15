import styled from '@emotion/styled'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Container = styled.div`
  background-color: white;
  border-radius: 4px;
  padding: 20px;
  height: 600px;
  width: 600px;
  overflow: auto;
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
