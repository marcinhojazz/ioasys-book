import { Container } from './styles'
import { CardBookProps } from './types'

const CardBook = ({
  imgUrl,
  title,
  onClick,
  authors,
  pageCount,
  publisher,
  published,
}: CardBookProps) => {
  return (
    <Container onClick={onClick}>
      <img src={imgUrl} alt={title} />
      <div>
        <div>
          <h2>{title}</h2>
          {authors?.map((author, index) => (
            <span key={index}>{author}</span>
          ))}
          <div>
            <span>{pageCount} páginas</span>
            <span>{publisher}</span>
            <span>Publicado em {published}</span>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default CardBook
