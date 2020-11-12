import styled from 'styled-components'
import { Form as Unform } from '@unform/web'

export const Form = styled(Unform)`
  display: flex;
  flex-direction: column;

  label {
    margin-top: 20px;
  }

  input {
    padding: 5px;
    margin-top: 4px;
  }

  button {
    width: auto;
    padding: 5px 20px;
    margin-top: 20px;
    align-self: flex-end;
    font-size: 16px;
  }
`

export const Title = styled.h2`
  svg {
    position: relative;
    top: 4px;
    margin-right: 4px;
  }
`
