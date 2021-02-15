import styled from '@emotion/styled'
import colors from 'utils/colors'

export const Container = styled.form`
  border: 1px solid lightgray;
  border-radius: 4px;
  height: 40px;
  padding-left: 1px;
  display: flex;
`

export const Input = styled.input`
  outline: transparent;
  border: 0;
  padding: 0 20px;
  flex: 1;
  font-size: 14px;
`

export const Submit = styled.button`
  border: 0;
  background-color: transparent;
  padding: 0 20px;
  color: ${colors.flushOrange};
  transition: 300ms color;
  outline: transparent;
  cursor: pointer;
  font-size: 14px;

  &:disabled {
    color: lightgray;
    cursor: default;
  }
`
