import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  align-items: center;
  img {
    width: 50%;
  }
`;

export const ContentInfoBook = styled.div`
  display: flex;
`;

export const ContentImageBook = styled.img`
  display: flex;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
`;

export const ModalBox = styled.div`
  position: relative;
  width: 769px;
  height: 608px;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: white;
  cursor: auto;

`;
export const ModalClose = styled.button`
cursor: pointer;
  background-color: transparent;
  border: none;
  position: absolute;
  top: 20px;
  right: 20px;
  transition: transform 250ms ease-in-out;
  transform-origin: 50% 50%;
  border-radius: 50%;
`;
