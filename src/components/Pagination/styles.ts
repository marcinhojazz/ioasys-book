import styled from 'styled-components'

export const Container = styled.div`
  padding: 2px;
  display: flex;
  justify-content: flex-end;
  font-size: 12px;
  color: black;
  width: 100%;
  align-items: center;
  padding: 50px;

  > div {
    display: flex;
    align-items: center;
  }
`

export const ButtonStyle = styled.button`
  margin-left: 10px;
  display: flex;
  flex: 1;
  border-radius: 50%;
  border: 1px solid #ccc;
  background: #fff;
  align-items: center;
  justify-content: center;

  span {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
  }
`
