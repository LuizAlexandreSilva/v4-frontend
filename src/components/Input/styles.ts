import styled from 'styled-components'

export const Container = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 8px;
  width: 100%;
  color: var(--black);
  border: 1px solid #232139;
  display: flex;
  align-items: center;
  position: relative;

  input {
    background: transparent;
    flex: 1;
    border: 0;
    margin-right: 50px;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 10px;
  }

  button {
    height: 100%;
    position: absolute;
    right: 0;
    border-radius: 0 8px 8px 0;
    padding: 0 5px 0 5px;
    margin-left: 15px;
  }
`
