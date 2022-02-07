import { Title } from '../Title'
import { ContainerInfoBook, ContentInfo } from './styles'

export const InfoBook = () => {
  return (
    <ContainerInfoBook>
      <div>
        <h2>Título</h2>
        <span>Subtítulo/Author(s)</span>
        <ContentInfo>
          <h3>INFORMAÇÕES</h3>
          <div>
            <tr>
              <th>Páginas</th>
              <td>2</td>
            </tr>
            <tr>
              <th>Editora</th>
              <td>2</td>
            </tr>
            <tr>
              <th>Publicação</th>
              <td>2</td>
            </tr>
            <tr>
              <th>Idioma</th>
              <td>2</td>
            </tr>
            <tr>
              <th>Título Original</th>
              <td>2</td>
            </tr>
            <tr>
              <th>ISBN-10</th>
              <td>2</td>
            </tr>
            <tr>
              <th>ISBN-13</th>
              <td>2</td>
            </tr>
          </div>
        </ContentInfo>
      </div>
    </ContainerInfoBook>
  )
}
