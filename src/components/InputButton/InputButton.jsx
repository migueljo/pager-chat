import React from 'react'
import PropTypes from 'prop-types'

import * as Styled from './InputButtonStyles'

function InputButton ({ onSubmit, onChange, placeholder, buttonText }) {
  const [message, setMessage] = React.useState('')
  const clearInput = () => setMessage('')
  const handleSubmit = (e) => {
    e.preventDefault()
    // Send clearInput to allow external components to clear input box
    onSubmit && onSubmit(e, message, clearInput)
  }
  const handleChange = e => {
    setMessage(e.target.value)
    onChange && onChange(e, clearInput)
  }

  return (
    <Styled.Container onSubmit={handleSubmit}>
      <Styled.Input placeholder={placeholder} value={message} onChange={handleChange} />
      <Styled.Submit type="submit" disabled={!message}>
        {buttonText}
      </Styled.Submit>
    </Styled.Container>
  )
}

InputButton.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  buttonText: PropTypes.string
}

export default InputButton
