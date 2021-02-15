import styled from '@emotion/styled'

export const Container = styled.section`
  padding: 24px 24px 90px;
  height: 600px;
  display: flex;
  flex-direction: column;
  position: relative;
`

export const MessageList = styled.div`
  overflow: auto;
  flex: 1;
  & > div {
    margin-bottom: 24px;
  }
`

export const InputCtn = styled.div`
  position: absolute;
  bottom: 30px;
  left: 24px;
  width: calc(100% - 48px);
  height: 40px;
`

export const TypingText = styled.p`
  position: absolute;
  top: 100%;
  left: 0;
  font-size: 12px;
  color: gray;
  margin: 8px 0 0 0;
`
