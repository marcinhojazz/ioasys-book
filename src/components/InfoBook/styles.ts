import styled from 'styled-components'

export const ContainerInfoBook = styled.div`
  display: flex;
`;


export const ContentInfo = styled.div`
  border-collapse: collapse;
  width: 100%;

  tr {
    display: flex;
    justify-content: space-between;
  }
  th,
  td {
    width: 100%;
  }
  th {
    text-align: left;
  }
  td {
    text-align: right;
  }
`;

