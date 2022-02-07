import { Container } from './styles'
import { ContainerCardBookProps } from './types'


const ContainerCardBook = ({ text }: ContainerCardBookProps) => {
  return (
    <Container>
      {text}
    </Container>
  )
}

export default ContainerCardBook
