import styled from 'styled-components'

export const Title = styled.h2`
  margin-bottom: 15px;

  svg {
    position: relative;
    top: 4px;
    margin-right: 4px;
  }
`

export const Footer = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: flex-end;

  button {
    padding: 5px 10px;

    & + button {
      margin-left: 20px;
    }
  }
`

export const Strong = styled.strong`
  font-family: 'Questrial', sans-serif;
`
