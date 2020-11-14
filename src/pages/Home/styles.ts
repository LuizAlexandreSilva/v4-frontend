import styled from 'styled-components'

export const Container = styled.div`
  max-width: 960px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  padding: 50px 0 30px 0;

  h1 {
    margin-bottom: 15px;
  }

  h3 {
    margin-bottom: 20px;
  }
`
export const Head = styled.div`
  display: flex;
  justify-content: space-between;

  > button {
    display: flex;
    align-items: center;
    padding: 5px 15px;

    svg {
      margin-right: 8px;
    }
  }
`

export const SearchContainer = styled.div`
  form {
    display: flex;
    align-items: center;

    > input {
      margin-left: 15px;
      margin-right: 5px;
    }

    label {
      width: 100%;
    }
  }
`

export const ToolList = styled.ul`
  margin-top: 10px;
`

export const LoadingContainer = styled.div`
  width: 100%;
  margin: 20px auto;
  text-align: center;
  font-size: 32px;
`
