import { Container, ButtonStyle } from '../Pagination/styles'

const ButtonNext = () => {
  return (
    <ButtonStyle>
      <span>&gt;</span>
    </ButtonStyle>
  )
}

const ButtonPrev = () => {
  return (
    <ButtonStyle>
      <span>&lt;</span>
    </ButtonStyle>
  )
}

const Pagination = () => {
  return (
    <Container>
      <div>
        <span>Pagina de 1 a 100</span>
        <ButtonPrev />
        <ButtonNext />
      </div>
    </Container>
  )
}

export default Pagination
