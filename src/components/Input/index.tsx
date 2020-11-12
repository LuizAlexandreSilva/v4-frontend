import React, { InputHTMLAttributes } from 'react'
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
  return (
    <Container style={containerStyle}>
      {Icon && <Icon size={16} />}
      <input {...rest} />
      {buttonText && handleButtonClick && (
        <button type="button" onClick={() => handleButtonClick()}>
          {buttonText}
        </button>
      )}
    </Container>
  )
}

export default Input
