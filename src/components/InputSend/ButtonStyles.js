import styled from '@emotion/styled'
import colors from 'utils/colors'

export const Button = styled.button`
  background-color: ${colors.flushOrange};
  border: 0;
  font-size: 14px;
  font-weight: bold;
  color: white;
  height: 40px;
  border-radius: 4px;
  padding: 0 20px;
  cursor: pointer;
  outline: transparent;

  &:disabled {
    background-color: gray;
    cursor: default;
  }
`
