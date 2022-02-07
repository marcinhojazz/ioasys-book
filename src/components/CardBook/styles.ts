import styled from 'styled-components'

export const Container = styled.div`
  background: #fff;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  display: flex;
  gap: 16px;
  height: 160px;
  max-width: 272px;
  padding: 19px;
  text-align: left;
  width: 272px;

  > div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
  }
  img {
    object-fit: cover;
    width: 81px;
    height: 122px;
  }
  h2 {
    font-size: 14px;
  }
  span {
    font-size: 12px;
    word-break: break-all;
    white-space: nowrap;
    display: flex;
  }
  p {
    border: 1px solid red;
    text-align: left;
    font-size: 12px;
  }

  box-shadow: 4px 4px 6px 0px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease-in-out;

  &:hover {
    box-shadow: 3px 3px 10px 2px rgba(0, 0, 0, 0.75);
    transform: scale(1.05);
    background-color: #fff;
  }
`
