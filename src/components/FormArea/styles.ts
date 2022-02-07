import styled from 'styled-components'

export const Wrapper = styled.div`
  background: url('./BackgroundImage.png');
  background-size: cover;
  width: 100vw;
  height: 100vh;
  padding-left: 115px;
  padding-top: 220px;
`

export const Container = styled.div`
  background: transparent;
  height: 324px;
  width: 368px;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  float: left;

  h1 {
    color: #fff;
    font-weight: lighter;
  }

  form > div:nth-child(2) > input {
    width: 50%;
  }

  form {
    position: relative;
  }

  form > button {
    position: absolute;
    right: 10px;
    bottom: 28px;
  }
`
