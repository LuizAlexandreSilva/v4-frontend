import React, { InputHTMLAttributes, useEffect, useRef } from 'react'
import { useField } from '@unform/core'
import { IconBaseProps } from 'react-icons'

import { Container } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  containerStyle?: object
  icon?: React.ComponentType<IconBaseProps>
  buttonText?: string
  handleButtonClick?: Function
}

const Input: React.FC<InputProps> = ({
  name,
  containerStyle = {},
  icon: Icon,
  buttonText,
  handleButtonClick,
  ...rest
}) => {
  const inputRef = useRef(null)
  const { fieldName, defaultValue, registerField, error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    })
  }, [fieldName, registerField])

  return (
    <Container style={containerStyle}>
      {Icon && <Icon size={16} />}
      <input ref={inputRef} defaultValue={defaultValue} {...rest} />
      {error && <small>{error}</small>}
      {buttonText && handleButtonClick && (
        <button type="button" onClick={() => handleButtonClick()}>
          {buttonText}
        </button>
      )}
    </Container>
  )
}

export default Input
