import styled from 'styled-components'

export const Container = styled.div`
  background-color: #fff;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid var(--black);
  margin-bottom: 10px;
`

export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;

  > a {
    font-size: 18px;
  }

  > span {
    display: flex;
    align-items: center;

    cursor: pointer;
    color: var(--red);
  }
`

export const Body = styled.div`
  > p {
    margin-bottom: 8px;
  }
`
