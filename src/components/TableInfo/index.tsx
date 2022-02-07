import { Container, Row, RowContent } from './styles'
import { TableInfoProps } from './types'

const TableInfo = ({ children }: TableInfoProps) => {

  return (
    <Container>
      <div className="subtitle">INFORMAÇÕES</div>

      <RowContent>
        <Row>
          <div>Páginas</div>
          <div>304 Paginas</div>
        </Row>
        <Row>
          <div>Páginas</div>
          <div>304 Paginas</div>
        </Row>
        <Row>
          <div>Páginas</div>
          <div>304 Paginas</div>
        </Row>
        <Row>
          <div>Páginas</div>
          <div>304 Paginas</div>
        </Row>
        <Row>
          <div>Páginas</div>
          <div>304 Paginas</div>
        </Row>
        <Row>
          <div>Páginas</div>
          <div>304 Paginas</div>
        </Row>
        <Row>
          <div>Páginas</div>
          <div>304 Paginas</div>
        </Row>
      </RowContent>
      <div>
        <div>RESENHA DA EDITORA</div>
        <p>
          The subject of “design thinking” is the rage at business schools, throughout corporations, and increasingly in the popular press—due in large part to the work of IDEO, a leading design firm, and its celebrated CEO, Tim Brown, who uses this book to show how the techniques and strategies of design belong at every level of business.
        </p>
      </div>

    </Container>
  )
}

export default TableInfo
