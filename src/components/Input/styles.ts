import styled from 'styled-components'

export const Container = styled.div`
  height: 60px;
  width: 368px;
  display: flex;
  padding-left: 16px;
  flex-direction: column;
  border-radius: 4px;
  font-size: 12px;
  outline: none;
  margin-bottom: 16px;
  background-color: rgba(1, 1, 1, 0.3);
  label {
    color: #fff;
    margin-top: 6px;
  }
  > input {
    border: none;
    outline: none;
    background-color: transparent !important;
    flex: 1;
    font-size: 16px;
    color: #fff;

    ::placeholder {
      color: #fff;
    }
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
  }
`
